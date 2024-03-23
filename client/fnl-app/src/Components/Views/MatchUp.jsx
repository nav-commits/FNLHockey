import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../Atoms/Button/Button';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import FNLRollCall from '../Organisms/FNLRollCall/FNLRollCall';
import MakeTeams from '../Organisms/MakeTeams/MakeTeams';
import localforage from 'localforage';
import useDeviceDetect from '../../Hooks/DeviceDetect';
import MatchUpMobileTablet from '../Organisms/MatchupMobileTablet/MatchupMobileTablet';

const MatchUp = () => {
    const { user, logout, getAccessTokenSilently } = useAuth0();
    const { id } = useParams();
    const navigate = useNavigate();
    const [statusOfPLayers, setStatusOfPLayers] = useState({});
    const [isDeleted, setIsDeleted] = useState(false);

    const [disabled, setDisabled] = useState(true);
    const [teams, setTeams] = useState({
        teamWhite: {
            Team: 'White',
            players: [],
            wins: 0,
            losses: 0,
            ties: 0,
        },
        teamBlack: {
            Team: 'Black',
            players: [],
            wins: 0,
            losses: 0,
            ties: 0,
        },
        seriesWinner: {
            winner: '',
        },
    });

    const teamNameKeys = Object.keys(teams);
    const validKeys = ['monthToMonth', 'weekToWeek', 'IR', 'fiftyFifty'];
    const getKey = (key, validKeys) => {
        if (validKeys.includes(key)) {
            return key;
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!isDeleted) {
                    const token = await getAccessTokenSilently();
                    const response = await fetch(`https://fnl-web-app-0146083bd90e.herokuapp.com/playerStatus/status/${id}`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    const data = await response.json();
                    setStatusOfPLayers(data);
                    let localForageData = await localforage.setItem(`statusOfPlayers_${id}`, data);
                    setStatusOfPLayers(localForageData);
                } else {
                    setIsDeleted(false);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchData();
    }, [id, getAccessTokenSilently, isDeleted]);

    const handleDragStart = (e, player, status) => {
        e.dataTransfer.setData('player', JSON.stringify(player));
        e.dataTransfer.setData('status', status);
    };

    const removePlayer = async (player, status) => {
        if (status && statusOfPLayers[status] && statusOfPLayers[status].players) {
            setStatusOfPLayers((prevStatus) => {
                const updatedPlayers = prevStatus[status].players.filter(
                    (p) => p.username !== player.username
                );
                const updatedStatus = {
                    ...prevStatus,
                    [status]: { ...prevStatus[status], players: updatedPlayers },
                };
                return updatedStatus;
            });
        }
    };

    const handleDrop = (e, newTeam) => {
        e.preventDefault();
        const playerData = e.dataTransfer.getData('player');
        const statusType = e.dataTransfer.getData('status');

        if (!playerData || !statusType) {
            console.log('Drop: playerData or oldTeam is not longer there');
            return;
        }
        const player = JSON.parse(playerData);
        removePlayer(player, statusType);
        if (!player) return;
        setTeams((prevTeams) => {
            const newTeams = { ...prevTeams };

            // Remove player from their old team and position
            Object.keys(newTeams).forEach((team) => {
                if (team !== 'seriesWinner' && newTeams[team].players) {
                    newTeams[team].players = newTeams[team].players.filter(
                        (p) => p.username !== player.username
                    );
                }
            });

            const newTeamData = { ...newTeams[newTeam] };
            newTeamData.players = [...newTeamData.players, player];
            newTeams[newTeam] = newTeamData;
            return newTeams;
        });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        const [team, field] = name.split('.'); // Split the name to get team and field

        if (team === 'seriesWinner') {
            setTeams((prevTeams) => ({
                ...prevTeams,
                seriesWinner: { winner: value },
            }));
        } else {
            setTeams((prevTeams) => ({
                ...prevTeams,
                [team]: {
                    ...prevTeams[team],
                    [field]: Number(value) || value, // Ensure numbers are used for wins, losses, ties
                },
            }));
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = await getAccessTokenSilently();
            const response = await fetch('https://fnl-web-app-0146083bd90e.herokuapp.com/games/Game', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(teams),
            });
            const data = await response.json();
            console.log('Success:', data);
            await localforage.removeItem('teams');
            navigate('/Scores');
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const deletePlayerStatus = async (id) => {
        try {
            const token = await getAccessTokenSilently();
            const response = await fetch(`https://fnl-web-app-0146083bd90e.herokuapp.com/playerStatus/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await response.json();
            console.log('deleted:', data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const saveTeams = async () => {
        if (!isDeleted) {
            await deletePlayerStatus(id);
            setIsDeleted(true); // Set isDeleted to true after deletion
        } else {
            setIsDeleted(false);
        }

        // Your saveTeams logic goes here
        localforage
            .setItem('teams', teams)
            .then(() => {
                console.log('saved', teams);
                setDisabled(false);
            })
            .catch(console.error);
    };

    useEffect(() => {
        localforage
            .getItem('teams')
            .then((savedTeams) => {
                if (savedTeams) {
                    setTeams(savedTeams);
                }
            })
            .catch(console.error);
    }, []);

    const { isMobile } = useDeviceDetect();

    const handleTeamChange = (playerId, teamName) => {
        let updatedStatusOfPLayers = { ...statusOfPLayers };
        let foundPlayer = null;

        // First, find the player and update their team assignment
        Object.entries(updatedStatusOfPLayers).forEach(([statusKey, category]) => {
            const playerIndex = (category.players || []).findIndex(
                (player) => player._id === playerId
            );
            if (playerIndex !== -1) {
                foundPlayer = { ...category.players[playerIndex], team: teamName };
                // Update the player's team in the statusOfPLayers structure
                updatedStatusOfPLayers[statusKey].players[playerIndex] = foundPlayer;
            }
        });

        if (foundPlayer) {
            // Preserving the rest of the team state while updating players
            const newTeams = {
                teamWhite: {
                    ...teams.teamWhite,
                    players:
                        teamName === 'Team White'
                            ? [
                                  ...teams.teamWhite.players.filter(
                                      (player) => player._id !== playerId
                                  ),
                                  foundPlayer,
                              ]
                            : [
                                  ...teams.teamWhite.players.filter(
                                      (player) => player._id !== playerId
                                  ),
                              ],
                },
                teamBlack: {
                    ...teams.teamBlack,
                    players:
                        teamName === 'Team Black'
                            ? [
                                  ...teams.teamBlack.players.filter(
                                      (player) => player._id !== playerId
                                  ),
                                  foundPlayer,
                              ]
                            : [
                                  ...teams.teamBlack.players.filter(
                                      (player) => player._id !== playerId
                                  ),
                              ],
                },
                seriesWinner: { ...teams.seriesWinner },
            };
            setTeams(newTeams);
        }
    };

    const saveTeamsToLocalStorage = () => {
        localforage.setItem('teams', teams).then(() => {
            console.log('saved', teams);
        });
        console.log('teams saved to local storage', teams);
    };

    const onMobileTabletSave = async (e) => {
        e.preventDefault();
        try {
            const token = await getAccessTokenSilently();
            const response = await fetch('https://fnl-web-app-0146083bd90e.herokuapp.com/games/Game', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(teams),
            });
            const data = await response.json();
            console.log('Success:', data);
            await localforage.removeItem('teams');
            navigate('/Scores');
        } catch (error) {
            console.error('Error:', error);
        }

        try {
            const token = await getAccessTokenSilently();
            const response = await fetch(`https://fnl-web-app-0146083bd90e.herokuapp.com/playerStatus/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await response.json();
            console.log('deleted:', data);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const { teamWhite, teamBlack } = teams;
    const hasPlayers = teamWhite.players.length > 0 || teamBlack.players.length > 0;
    return (
        <>
            {!isMobile ? (
                <>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            margin: '20px',
                        }}
                    >
                        <Button
                            title='Logout'
                            color='#d9d9d9'
                            width={'200px'}
                            onClick={() => logout()}
                        />
                    </div>

                    <>
                        {' '}
                        <FNLRollCall
                            statusOfPlayers={statusOfPLayers}
                            handleDragStart={handleDragStart}
                            getKey={getKey}
                            validKeys={validKeys}
                        />
                        <MakeTeams
                            teams={teams}
                            teamNameKeys={teamNameKeys}
                            handleDragStart={handleDragStart}
                            handleDrop={handleDrop}
                            onSubmit={onSubmit}
                            disabled={disabled}
                            id={id}
                            user={user}
                            handleChange={handleChange}
                            saveTeams={saveTeams}
                        />
                    </>
                </>
            ) : (
                <MatchUpMobileTablet
                    statusOfPLayers={statusOfPLayers}
                    handleTeamChange={handleTeamChange}
                    saveTeamsToLocalStorage={saveTeamsToLocalStorage}
                    onMobileTabletSave={onMobileTabletSave}
                    teams={teams}
                    handleChange={handleChange}
                    user={user}
                        hasPlayers={hasPlayers}
                        disabled={disabled}
                />
            )}
        </>
    );
};

export default MatchUp;
