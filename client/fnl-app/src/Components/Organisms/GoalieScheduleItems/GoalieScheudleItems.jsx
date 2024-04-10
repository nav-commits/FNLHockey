import React from 'react';
import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

const GoalieScheduleGameItems = ({ game, getFormattedDate }) => {
    return (
        <Box sx={{
            margin: '10px',
            borderBottom: '1px solid #ccc',
            width: '100%',
        }}>
            <Typography 
                id={game.date} 
                sx={{ 
                    textAlign: 'left', 
                    fontSize: '24px', 
                    margin: '10px',
                }}
            >
                {getFormattedDate(game.date)}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Table sx={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    '& thead': {
                        backgroundColor: 'rgba(224, 224, 224, 1)',
                    },
                    '& th, & td': {
                        padding: '15px',
                        textAlign: 'center',
                        border: 0,
                    },
                }}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>Time</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Matchup</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Arena</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>{game.time}</TableCell>
                            <TableCell sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '10px',
                            }}>
                                <Typography>{game.goalies.goalie1}</Typography>
                                <Typography>vs</Typography>
                                <Typography>{game.goalies.goalie2}</Typography>
                            </TableCell>
                            <TableCell>{game.arena}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Box>
        </Box>
    );
};

export default GoalieScheduleGameItems;

