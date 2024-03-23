import React from 'react';
import { tabs } from '../../../Utils/Data';
import './TabsContent.css';

const TabsContent = ({ activeLabel, handleTabClick }) => {
    return (
        <div className='card-container'>
            {tabs.map((tab, i) => (
                <div
                    className='tab-item'
                    style={{ borderBottom: activeLabel === i ? '3px solid black' : null }}
                    onClick={() => handleTabClick(i, tab.label)}
                    key={i}
                >
                    {tab.label}
                </div>
            ))}
        </div>
    );
};

export default TabsContent;
