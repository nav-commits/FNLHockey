import React from 'react';
import { useContext, useEffect, useState } from 'react';
import mainContext from '../../Context/Context';
import { useAuth0 } from '@auth0/auth0-react';
import Results from '../Molecules/Results/Results';
import Dropdown from '../Molecules/Dropdown/Dropdown';
import { monthNames } from '../../Utils/Data';
import myImage from '../../Images/FNLWhiteBackground.png';
import '../../Components/Molecules/Results/Results.css';

const MatchResults = () => {
    const { matchupResults, setMatchResults } = useContext(mainContext);
    const { getAccessTokenSilently } = useAuth0();
    const [open, setOpen] = React.useState(false);
    const [filterWeek, setFilterWeek] = React.useState([]);
    const [weekNumber, setWeekNumber] = React.useState(0);
    const [idx, setIdx] = React.useState(0);
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
                setWeekNumber((prevWeekNumber) => (prevWeekNumber ? prevWeekNumber + 1 : 1)); 
            } catch (error) {
                console.error('Error:', error);
            }
            setIsLoading(false); 
        };
        fetchData();
    }, [ getAccessTokenSilently, setMatchResults]);

    const filterByWeek = React.useCallback((index) => {
        if (index >= 0 && index < matchupResults.length) {
            setFilterWeek([matchupResults[index]]);
            setWeekNumber(index + 1); 
        } else {
            setFilterWeek([]);
        }
        setIdx(index);
    }, [matchupResults, setFilterWeek, setWeekNumber, setIdx]);
    React.useEffect(() => {
        if (filterWeek.length === 0 && matchupResults.length > 0 && weekNumber) {
            filterByWeek(matchupResults.length - 1); 
        }
    }, [filterWeek, matchupResults, weekNumber, filterByWeek]);

    let date = new Date(matchupResults[weekNumber - 1]?.createdAt);
    let formattedDate = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

    const onClick = () => {
        setOpen(!open);
    };

    const weeks = matchupResults.map((_, index) => {
        return index + 1;
    });

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ position: 'relative' }}>
                <Dropdown
                    weeks={weeks}
                    onClick={onClick}
                    filterByWeek={filterByWeek}
                    open={open}
                    idx={idx}
                />
                {isLoading ? (
                    <div className='backdrop'>
                        <div className='spinner-container'>
                            <div className='spinner'>
                                <img
                                    src={myImage}
                                    alt='Loading...'
                                    style={{ height: '80px', width: '80px' }}
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    <Results
                        filterWeek={filterWeek}
                        weekNumber={weekNumber}
                        formattedDate={formattedDate}
                    />
                )}
            </div>
        </div>
    );
};

export default MatchResults;
