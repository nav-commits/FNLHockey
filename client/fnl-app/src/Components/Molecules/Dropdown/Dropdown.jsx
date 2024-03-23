import React from 'react';
import '../Dropdown/Dropdown.css';

const Dropdown = ({ weeks, onClick, filterByWeek, open, idx }) => {
    return (
        <>
            <div className='weekly-matches-container'>
                <h1 className='weekly-matches-header'>Scores</h1>
                <div onClick={onClick} className='filter-dropdown-button'>
                    <p style={{ textAlign: 'center' }}>
                        Filter by weeks of 2024
                    </p>
                </div>
                {open && (
                    <div className='week-filter-container'>
                        {weeks.map((week, index) => (
                            <div
                                key={index}
                                className='week-item'
                                style={{ backgroundColor: idx === index ? 'rgb(217, 217, 217)' : null }}
                                onClick={() => filterByWeek(index)}
                            >
                                <p className='week-text'>week{week}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default Dropdown;
