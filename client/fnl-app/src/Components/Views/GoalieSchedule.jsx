import React, { useEffect } from 'react';
import { fnlGoalieSchedule } from '../../Utils/Data';
import { useState } from 'react';
import GoalieScheduleGameItems from '../Organisms/GoalieScheduleItems/GoalieScheudleItems';

const GoalieSchedule = () => {
    const [open, setOpen] = useState(false);
    const [filterSchedule, setFilterSchedule] = useState([]);
    const [selectedYear, setSelectedYear] = useState('');

    const getFormattedDate = (dateString) => {
        const dateObject = new Date(dateString + 'T20:30:00');
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = `Friday, ${dateObject.toLocaleDateString('en-US', options)}`;
        return formattedDate;
    };

    const filterScheduleYear = (year) => {
        setSelectedYear(year); 
        const filteredArray = fnlGoalieSchedule.filter((game) => {
            const gameYear = new Date(game.date).getFullYear().toString();
            return gameYear === year;
        });
        setFilterSchedule(filteredArray);
    };

    const onClick = () => {
        setOpen(!open);
    };

    useEffect(() => {
        filterScheduleYear('2024');
    }, []);

    const years = ['2024', '2025', '2026', '2027', '2028'];
    return (
        <>
            <h1 style={{ padding: '12px' }}>Goalie Schedule</h1>
            <div onClick={onClick} className='filter-dropdown-button'>
                <p style={{ textAlign: 'center' }}>Filter By Year</p>
            </div>
            {open && (
                <div className='week-filter-container'>
                    {years.map((year, index) => (
                        <div
                            onClick={() => filterScheduleYear(year)}
                            key={index}
                            style={{
                                backgroundColor:
                                    year === selectedYear ? 'rgb(217, 217, 217)' : null,
                            }}
                            className='week-item'
                        >
                            <p className='week-text'>{year}</p>
                        </div>
                    ))}
                </div>
            )}

            <div >
                {filterSchedule.map((game) => (
                    <GoalieScheduleGameItems
                        key={game.date}
                        game={game}
                        getFormattedDate={getFormattedDate}
                    />
                ))}
            </div> 
        </>
    );
};

export default GoalieSchedule;
