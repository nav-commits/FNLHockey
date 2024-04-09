import React from 'react';
import { Box, Typography } from '@mui/material';

const Dropdown = ({ weeks, onClick, filterByWeek, open, idx }) => {
    return (
        <Box sx={{ position: 'relative' }}>
            <Typography
                variant="h5"
                sx={{
                    textAlign: 'left',
                    mb: 2.5, // 20px
                    ml: 6.25, // 50px
                }}
            >
                Scores
            </Typography>
            <Box
                onClick={onClick}
                sx={{
                    width: 200,
                    border: '1px solid #cfcdcd',
                    ml: 1.25, // 10px
                    mt: 1.25, // 10px
                    cursor: 'pointer',
                    textAlign: 'center',
                    p: 1, // padding
                }}
            >
                <Typography>
                    Filter by weeks of 2024
                </Typography>
            </Box>
            {open && (
                <Box
                    sx={{
                        width: 215,
                        position: 'absolute',
                        border: '1px solid #cfcdcd',
                        borderTop: 'none',
                        zIndex: 1,
                        ml: 1.25, // 10px
                        backgroundColor: '#fff',
                        maxHeight: 200, // adjust based on preference
                        overflowY: 'auto',
                    }}
                >
                    {weeks.map((week, index) => (
                        <Box
                            key={index}
                            sx={{
                                padding: '2px',
                                backgroundColor: idx === index ? 'rgb(217, 217, 217)' : 'inherit',
                                '&:hover': {
                                    backgroundColor: 'action.hover',
                                },
                            }}
                            onClick={() => filterByWeek(index)}
                        >
                            <Typography
                                sx={{
                                    cursor: 'pointer',
                                    ml: 6.25, // 50px
                                    fontWeight: 'bold',
                                }}
                            >
                                Week {week}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default Dropdown;
