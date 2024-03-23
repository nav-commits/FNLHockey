import React from 'react';
import '../Results/Results.css';
import teamWhite from '../../../Images/FNLWhiteBackground.png';
import teamBlack from '../../../Images/FNLBlackWhiteBackground.png';

const Results = ({ filterWeek, weekNumber, formattedDate }) => {
    return (
        <div className='match-results-container'>
            {filterWeek.length > 0 ? (
                filterWeek.map((formData, index) => (
                    <div key={index} className='match-result-card'>
                        <h3 className='match-result-heading'>Week {weekNumber}</h3>
                        {formData.seriesWinner.winner.length > 0 ? (
                            <p>FINAL</p>
                        ) : (
                            <p>8:00PM EST</p>
                        )}
                        <p className='match-result-date'>{formattedDate}</p>
                        {Object.keys(formData)
                            .filter(
                                (team) =>
                                    !['_id', 'createdAt', '__v', 'Goalie', 'seriesWinner'].includes(
                                        team
                                    )
                            )
                            .map((team) => (
                                <div key={team}>
                                    {team === 'teamWhite' || team === 'teamBlack' ? (
                                        <div style={{ marginBottom: '40px' }}>
                                            <div className='match-results-team-content'>
                                                <img
                                                    src={
                                                        team === 'teamWhite' ? teamWhite : teamBlack
                                                    }
                                                    alt={`Team ${
                                                        team === 'teamWhite' ? 'White' : 'Black'
                                                    } Logo`}
                                                    style={{ height: '40px', width: '40px' }}
                                                />
                                                <p>
                                                    {team === 'teamWhite'
                                                        ? ' Team White'
                                                        : ' Team Black'}
                                                </p>
                                                {/* Display Wins, Losses, Ties */}
                                            </div>
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    gap: '10px',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                {formData[team].players.map(
                                                    (player, playerIndex) => (
                                                        <div
                                                            key={playerIndex}
                                                            style={{
                                                                display: 'flex',
                                                                gap: '5px',
                                                                backgroundColor: '#f2f2f2',
                                                                padding: '5px',
                                                            }}
                                                        >
                                                            {/* Player display logic */}
                                                            <p style={{ fontSize: '12px' }}>
                                                                {player.name}
                                                            </p>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                            <p>
                                                Record {formData[team].wins}-{formData[team].losses}
                                                -{formData[team].ties}
                                            </p>
                                        </div>
                                    ) : null}
                                </div>
                            ))}
                        {formData.seriesWinner.winner && (
                            <div className='match-results-winner'>
                                Series Winner{' '}
                                <img
                                    src={
                                        formData.seriesWinner.winner === 'white'
                                            ? teamWhite
                                            : teamBlack
                                    }
                                    alt={`Team ${
                                        formData.seriesWinner.winner === 'white' ? 'White' : 'Black'
                                    } Logo`}
                                    style={{ height: '40px', width: '40px' }}
                                />
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <h3 className='match-result-no-results'>No match results</h3>
            )}
        </div>
    );
};

export default Results;
