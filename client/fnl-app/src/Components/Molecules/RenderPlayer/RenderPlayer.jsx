import React from 'react';
import { Box, Typography } from '@mui/material';

const RenderPlayer = ({ player, handleDragStart }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                gap: '20px',
                backgroundColor: '#f2f2f2',
                padding: '10px',
                margin: '10px',
                borderRadius: '5px',
                cursor: 'grab',
                alignItems: 'center',
            }}
            draggable
            onDragStart={(e) => handleDragStart(e, player)}
        >
            <Box
                sx={{
                    height: '30px',
                    width: '30px',
                    borderRadius: '20px',
                    backgroundColor: 'lightgrey',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {/* Placeholder for the player image. If you're using an <img>, you can include it here with the sx prop for styling. */}
            </Box>
            <Box>
                <Typography variant="body1" component="span">
                    {player.name}
                </Typography>
                <Typography variant="body2" component="div">
                    {player.position}
                </Typography>
            </Box>
        </Box>
    );
};

export default RenderPlayer;
