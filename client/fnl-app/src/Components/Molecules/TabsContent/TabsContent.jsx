import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { tabs } from '../../../Utils/Data';

const TabsContent = ({ activeLabel, handleTabClick }) => {
    return (
        <Box sx={{
            backgroundColor: '#fff',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            transition: 'box-shadow 0.3s ease-in-out',
            padding: '20px',
            margin: '20px',
            color: 'black',
            display: 'flex',
            flexDirection: 'row',
            gap: '30px',
        }}>
            {tabs.map((tab, i) => (
                <Typography
                    key={i}
                    sx={{
                        cursor: 'pointer',
                        borderBottom: activeLabel === i ? '3px solid black' : 'none'
                    }}
                    onClick={() => handleTabClick(i, tab.label)}
                >
                    {tab.label}
                </Typography>
            ))}
        </Box>
    );
};

export default TabsContent;
