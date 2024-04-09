import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const FNLRollCall = ({
    statusOfPlayers,
    handleDragStart,
    getKey,
    validKeys,
}) => {
    return (
        <Box sx={{ textAlign: 'center' }}>
            {
                statusOfPlayers && (
                    (statusOfPlayers.monthToMonth?.players?.length > 0) ||
                    (statusOfPlayers.weekToWeek?.players?.length > 0) ||
                    (statusOfPlayers.IR?.players?.length > 0) ||
                    (statusOfPlayers.fiftyFifty?.players?.length > 0)
                ) ? (
                    <Box>
                        <Typography variant="h4" component="h4">FNL Roll Call</Typography>
                        <Typography variant="h1" component="h2">Players Status</Typography>
                        <Typography variant="h2" component="h3">
                            {new Date(statusOfPlayers.createdAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </Typography>
                    </Box>
                ) : (
                    <Box sx={{mt: 3}}>
                        <Typography variant="h4" component="h4">FNL Roll Call</Typography>
                    </Box>
                )
            }
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '50px',
                justifyContent: 'center',
                flexWrap: 'wrap',
            }}>
                {statusOfPlayers && Object.keys(statusOfPlayers)
                    .filter((key) => getKey(key, validKeys))
                    .map((key) => (
                        <Card sx={{
                            borderRadius: '10px',
                            margin: '10px',
                            padding: '20px',
                            width: '250px',
                            backgroundColor: '#eeeeee',
                        }} key={key}>
                            <CardContent>
                                <Typography sx={{ color: 'black' }} variant="h2" component="h3">
                                    {key}
                                </Typography>
                                {statusOfPlayers[key].players.map((singlePlayer, playerIndex) => (
                                    <Box key={playerIndex} sx={{
                                        backgroundColor: '#d9d9d9',
                                        borderRadius: '5px',
                                        padding: '10px',
                                        margin: '10px 0',
                                        cursor: 'grab',
                                        fontWeight: 'bold',
                                    }}
                                        onDragStart={(e) => {
                                            handleDragStart(e, singlePlayer, key);
                                        }}
                                        draggable
                                    >
                                        {playerIndex + 1}. {singlePlayer.name}
                                    </Box>
                                ))}
                            </CardContent>
                        </Card>
                    ))}
            </Box>
        </Box>
    );
};

export default FNLRollCall;
