import React from 'react';
import { Box, Typography, Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Paper } from '@mui/material';

const ScheduleGameItems = ({ game, getFormattedDate, teamWhiteImage, teamBlackImage }) => {
    return (
        <Box sx={{
            margin: '10px',
            borderBottom: '1px solid #ccc',
            width: '100%',
        }}>
            <Typography variant="h6" sx={{ textAlign: 'left', fontSize: '24px', margin: '10px' }} id={game.date}>
                {getFormattedDate(game.date)}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <TableContainer component={Paper} sx={{ width: '100%' }}>
                    <Table sx={{ width: '100%', borderCollapse: 'collapse', borderTop: '1px solid #ccc' }}>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: 'rgba(224, 224, 224, 1)' }}>
                                {/* Apply textAlign: 'center' to each TableCell in the TableHead */}
                                <TableCell sx={{ textAlign: 'center' }}>Time</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>Matchup</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>Arena</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell sx={{ padding: '15px', textAlign: 'center' }}>{game.time}</TableCell>
                                <TableCell sx={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center', 
                                    gap: '10px', 
                                    padding: '15px', 
                                    textAlign: 'center' 
                                }}>
                                    <Box component="img"
                                        src={game.teams.home === 'Team White' ? teamWhiteImage : teamBlackImage}
                                        alt={`${game.teams.home} Logo`}
                                        sx={{ height: '50px', width: '50px' }}
                                    />
                                    vs
                                    <Box component="img"
                                        src={game.teams.away === 'Team Black' ? teamBlackImage : teamWhiteImage}
                                        alt={`${game.teams.away} Logo`}
                                        sx={{ height: '50px', width: '50px' }}
                                    />
                                </TableCell>
                                <TableCell sx={{ padding: '15px', textAlign: 'center' }}>{game.arena}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
};

export default ScheduleGameItems;
