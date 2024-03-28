import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import mainContext from '../../Context/Context';
import { useAuth0 } from '@auth0/auth0-react';
import PlayerStatusPanel from '../Organisms/PlayerStatusPanel/PlayerStatusPanel';
import localForage from 'localforage';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import AssistWalkerIcon from '@mui/icons-material/AssistWalker';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import useDeviceDetect from '../../Hooks/DeviceDetect';
import PlayerStatusMobileTablet from '../Organisms/PlayerStatusMobileTablet/PlayerStatusMobileTablet';

function PlayerStatus() {
    const { players, setPlayers, setGetID } = useContext(mainContext);
    const [disabled, setDisabled] = useState(true);
    const { getAccessTokenSilently } = useAuth0();

    const [categories, setCategories] = useState([
        { id: 'monthToMonth', name: 'monthToMonth', players: [] },
        { id: 'weekToWeek', name: 'weekToWeek', players: [] },
        { id: 'IR', name: 'IR', players: [] },
        { id: 'fiftyFifty', name: 'fiftyFifty', players: [] },
    ]);

    const [activeLabel, setActiveLabel] = useState(0);
    const [filterPlayers, setFilterPlayers] = useState(players);

    useEffect(() => {
        const positions = ['Center', 'Left Wing', 'Right Wing', 'Defense', 'Goalie'];
        const filterPlayersByPosition = (tabName) => {
            return positions.includes(tabName)
                ? players.filter((player) => player.position === tabName)
                : players;
        };

        const currentTabName = positions[activeLabel];
        const filteredPlayers = filterPlayersByPosition(currentTabName);
        setFilterPlayers(filteredPlayers);
    }, [activeLabel, players]); //

    const handleTabClick = (index) => {
        setActiveLabel(index);
    };

    const handleDragStart = (e, player) => {
        e.dataTransfer.setData('player', JSON.stringify(player));
    };
    const handleDrop = (e, category) => {
        e.preventDefault();
        const player = JSON.parse(e.dataTransfer.getData('player'));
        //  remove player form players array
        const updatedPlayers = players.filter((p) => p.username !== player.username);
        const updatedCategories = categories.map((cat) => {
            if (cat.id === category.id) {
                if (!cat.players.some((p) => p.username === player.username)) {
                    return {
                        ...cat,
                        players: [...cat.players, player],
                    };
                }
            } else {
                if (cat.players.some((p) => p.username === player.username)) {
                    return {
                        ...cat,
                        players: cat.players.filter((p) => p.username !== player.username),
                    };
                }
            }
            return cat;
        });

        setPlayers(updatedPlayers);
        setCategories(updatedCategories);
        // Save to local storage
        localForage.setItem('players', updatedPlayers);
        localForage.setItem('categories', updatedCategories);
    };
    const navigate = useNavigate();

    //  create categories object
    const createCategoriesObject = (categories) => {
        return categories.reduce((obj, category) => {
            obj[category.id] = category;
            console.log(category);
            return obj;
        }, {});
    };

    // save to database and navigate to Matchup
    const handleSubmit = async (e) => {
        console.log('submitting');
        e.preventDefault();
        const categoriesObject = createCategoriesObject(categories);
        try {
            const token = await getAccessTokenSilently();
            const response = await fetch('https://fnlhockey.onrender.com/playerStatus/addPlayerStatus', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(categoriesObject),
            });
            const data = await response.json();
            navigate(`/Match/${data._id}`);
            setGetID(data._id);
            localForage.removeItem('players');
            localForage.removeItem('categories');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    //  save categories to local forage
    const saveCategories = () => {
        localForage
            .setItem('categories', JSON.stringify(categories))
            .then(() => {
                console.log('saved', categories);
                setDisabled(false);
            })
            .catch((error) => console.error('Error saving categories:', error));
    };

    useEffect(() => {
        // Fetch players from the API
        const fetchPlayers = async () => {
            try {
                const token = await getAccessTokenSilently();
                const response = await fetch('https://fnlhockey.onrender.com/players/players', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                const data = await response.json();
                setPlayers(data);
                // Save fetched players to local storage for future use
                await localForage.setItem('players', data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        // Load players and categories from IndexedDB
        const loadFromStorage = async () => {
            localForage
                .getItem('categories')
                .then((savedCategories) => {
                    if (savedCategories) {
                        const parsedCategories =
                            typeof savedCategories === 'string'
                                ? JSON.parse(savedCategories)
                                : savedCategories;
                        setCategories(parsedCategories);
                    }
                })
                .catch((error) => console.error('Error retrieving categories:', error));

            const savedPlayers = await localForage.getItem('players');
            if (savedPlayers) {
                setPlayers(savedPlayers);
            } else {
                fetchPlayers();
            }
        };

        loadFromStorage();
    }, [ getAccessTokenSilently, setPlayers, setCategories]);

    const categoryIcon = (category) => {
        switch (category) {
            case 'monthToMonth':
                return <SettingsAccessibilityIcon />;
            case 'weekToWeek':
                return <AccessibilityIcon />;
            case 'IR':
                return <AssistWalkerIcon />;
            case 'fiftyFifty':
                return <TransferWithinAStationIcon />;
            default:
                return <AssistWalkerIcon />;
        }
    };

    const [isAnyStatusSelected, setIsAnyStatusSelected] = useState(false);

    //  mobile and tablet
    const handleStatusChange = (playerId, newStatus) => {
        const updatedPlayers = players.map((player) => {
            if (player._id === playerId) {
                return { ...player, status: newStatus };
            }
            return player;
        });
        setPlayers(updatedPlayers);
        setIsAnyStatusSelected(true);
    };

    //  mobile and tablet
    const handleSave = () => {
        const updatedCategories = categories.map((category) => {
            return {
                ...category,
                players: players.filter((player) => player.status === category.id),
            };
        });
        setCategories(updatedCategories);

        localForage
            .setItem('categories', JSON.stringify(updatedCategories))
            .then(() => {
                console.log('saved', updatedCategories);
                setDisabled(false);
            })
            .catch((error) => console.error('Error saving categories:', error));
    };

    const { isMobile } = useDeviceDetect();
    const hasCategoriesWithPlayers = () => {
        return (
            Array.isArray(categories) &&
            categories.some((category) => category.players && category.players.length > 0)
        );
    };

    const resetFilter = async () => {
        try {
            // Fetch original list of players from the backend
            const token = await getAccessTokenSilently();
            const playersResponse = await fetch('https://fnlhockey.onrender.com/players/players', {
                headers: { Authorization: `Bearer ${token}` },
            });
            const originalPlayers = await playersResponse.json();

            // Reset players to original state
            setPlayers(originalPlayers);
            await localForage.setItem('players', originalPlayers);

            // Reset categories to initial state
            const initialCategories = [
                { id: 'monthToMonth', name: 'monthToMonth', players: [] },
                { id: 'weekToWeek', name: 'weekToWeek', players: [] },
                { id: 'IR', name: 'IR', players: [] },
                { id: 'fiftyFifty', name: 'fiftyFifty', players: [] },
            ];
            setCategories(initialCategories);
            await localForage.setItem('categories', initialCategories);

            console.log('Database reset successfully');
        } catch (error) {
            console.error('Error resetting database:', error);
        }
    };

    return (
        <>
            {!isMobile ? (
                <PlayerStatusPanel
                    players={players}
                    categories={categories}
                    handleSubmit={handleSubmit}
                    saveCategories={saveCategories}
                    disabled={disabled}
                    handleDragStart={handleDragStart}
                    handleDrop={handleDrop}
                    handleTabClick={handleTabClick}
                    activeLabel={activeLabel}
                    filterPlayers={filterPlayers}
                    categoryIcon={categoryIcon}
                    hasCategoriesWithPlayers={hasCategoriesWithPlayers}
                    resetFilter={resetFilter}
                />
            ) : (
                <PlayerStatusMobileTablet
                    players={players}
                    handleStatusChange={handleStatusChange}
                    handleSubmit={handleSubmit}
                    handleSave={handleSave}
                    categories={categories}
                    hasCategoriesWithPlayers={hasCategoriesWithPlayers}
                    disabled={disabled}
                    isAnyStatusSelected={isAnyStatusSelected}
                />
            )}
        </>
    );
}

export default PlayerStatus;
