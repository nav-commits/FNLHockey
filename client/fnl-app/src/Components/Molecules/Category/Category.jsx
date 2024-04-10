import React from 'react';
import { Box, Typography } from '@mui/material';
import RenderPlayer from '../../Molecules/RenderPlayer/RenderPlayer';

const Category = ({ category, handleDrop, handleDragStart, categoryIcon }) => {
    return (
        <Box
            sx={{
                border: '2px solid #000',
                borderRadius: '15px',
                backgroundColor: '#f9f9f9',
                margin: '10px',
                padding: '20px',
            }}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, category)}
        >
            <Typography
                variant="h6" 
            >
                {category.name} {categoryIcon(category.name)}
            </Typography>
            <Box
                component="ol"
                sx={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                }}
            >
                {category.players.map((player, idx) => (
                    <Typography variant='body1' key={idx}>
                        <RenderPlayer player={player} handleDragStart={handleDragStart} />
                    </Typography>
                ))}
            </Box>
        </Box>
    );
};

export default Category;
