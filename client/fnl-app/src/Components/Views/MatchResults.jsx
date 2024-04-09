import React, { useContext, useEffect, useState, useCallback } from 'react';
import mainContext from '../../Context/Context';
import { useAuth0 } from '@auth0/auth0-react';
import Results from '../Molecules/Results/Results';
import Dropdown from '../Molecules/Dropdown/Dropdown';
import { monthNames } from '../../Utils/Data';
import Spinner from '../Atoms/Spinner/Spinner'; // Ensure this path is correct
import Box from '@mui/material/Box';

const MatchResults = () => {
    const { matchupResults, setMatchResults } = useContext(mainContext);
    const { getAccessTokenSilently } = useAuth0();
    const [open, setOpen] = useState(false);
    const [filterWeek, setFilterWeek] = useState([]);
    const [weekNumber, setWeekNumber] = useState(0);
    const [idx, setIdx] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const token = await getAccessTokenSilently();
                const response = await fetch('https://fnlhockey.onrender.com/games/Games', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const responseData = await response.json();
                setMatchResults(responseData);
                setWeekNumber(prevWeekNumber => prevWeekNumber ? prevWeekNumber + 1 : 1);
            } catch (error) {
                console.error('Error:', error);
            }
            setIsLoading(false);
        };
        fetchData();
    }, [getAccessTokenSilently, setMatchResults]);

    const filterByWeek = useCallback((index) => {
        setFilterWeek(index >= 0 && index < matchupResults.length ? [matchupResults[index]] : []);
        setWeekNumber(index + 1);
        setIdx(index);
    }, [matchupResults]);

    useEffect(() => {
        if (filterWeek.length === 0 && matchupResults.length > 0 && weekNumber) {
            filterByWeek(matchupResults.length - 1);
        }
    }, [filterWeek, matchupResults, weekNumber, filterByWeek]);

    const date = new Date(matchupResults[weekNumber - 1]?.createdAt);
    const formattedDate = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

    const onClick = () => setOpen(!open);

    const weeks = matchupResults.map((_, index) => index + 1);

    return (
        <Box sx={{ padding: '20px' }}>
            <Box sx={{ position: 'relative' }}>
                <Dropdown
                    weeks={weeks}
                    onClick={onClick}
                    filterByWeek={filterByWeek}
                    open={open}
                    idx={idx}
                />
                {isLoading ? (
                    <Spinner />
                ) : (
                    <Results
                        filterWeek={filterWeek}
                        weekNumber={weekNumber}
                        formattedDate={formattedDate}
                    />
                )}
            </Box>
        </Box>
    );
};

export default MatchResults;

