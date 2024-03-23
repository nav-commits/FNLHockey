import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import PlayerGridItem from '../../Molecules/PlayerGridItem/PlayerGridItem';
import Button from '../../Atoms/Button/Button';
import '../PlayerListContent/PlayerListContent.css';
import Input from '../../Atoms/Input/Input';
import myImage from '../../../Images/FNLWhiteBackground.png';

const PlayersListContent = () => {
    const [players, setPlayers] = useState([]);
    const [displayedPlayers, setDisplayedPlayers] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { user, getAccessTokenSilently } = useAuth0();
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true); 
            try {
                const token = await getAccessTokenSilently();
                const response = await fetch('https://fnl-web-app-0146083bd90e.herokuapp.com/players/players', {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (!response.ok) {
                    throw new Error(`Network response was not ok, status code: ${response.status}`);
                }

                const responseData = await response.json();
                setPlayers(responseData);
                setDisplayedPlayers(responseData);
            } catch (error) {
                console.error('Error:', error);
            }
            setIsLoading(false); // End loading
        };

        fetchData();
    }, [getAccessTokenSilently]);

    const onClickAddPlayer = () => navigate('/addPlayer');
    const handleChange = (event) => {
        setInputValue(event.target.value);
        const filteredPlayers = players.filter((player) =>
            player.name.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setDisplayedPlayers(filteredPlayers);
    };

    useEffect(() => {
        if (inputValue.length === 0) {
            const somePlayers = players.slice(0, 8);
            setDisplayedPlayers(somePlayers);
        }
    }, [inputValue, players]);

    return (
        <div className='players-container'>
            <div className='button-container'>
                {user.name === 'Navdeep Dhamrait' && (
                    <Button
                        title='Add Player'
                        onClick={onClickAddPlayer}
                        color='#d9d9d9'
                        width={'205px'}
                    />
                )}
            </div>
            <div className='players-page-content'>
                <h1>Players</h1>
                <Input
                    placeholder={'Search players'}
                    onChange={handleChange}
                    value={inputValue}
                    specialClass={'special-input'}
                />
                <h2>Player Spotlight</h2>
            </div>

            {isLoading ? (
                <div className='backdrop'>
                    <div className='spinner-container'>
                        <div className='spinner'>
                            <img
                                src={myImage}
                                alt='Loading...'
                                style={{ height: '90px', width: '90px' }}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <PlayerGridItem fnlPlayers={displayedPlayers} />
            )}
        </div>
    );
};

export default PlayersListContent;
