import React from 'react';
import '../PlayerGridItem/PlayerGridItem.css';
import teamWhite from '../../../Images/FNLWhiteBackground.png';
import teamBlack from '../../../Images/FNLBlackWhiteBackground.png';

function PlayerGridItem({ fnlPlayers }) {
    return (
        <div className='player-container'>
            {fnlPlayers.map((player, index) => (
                <div key={index} className='player-content'>
                    {/* <img src={player.img} alt={player.name} className='card-image' /> */}
                    <div style={{ height: '40px', width: '40px', borderRadius: '20px', backgroundColor: 'lightgrey' }} />
                    <h3>
                        {' '}
                        <b>{player.name}</b>
                    </h3>
                    <div
                        style={{
                            display: 'flex',
                            gap: '10px',
                        }}
                    >
                        {player.team.map((team, index) => (
                            <div key={index}>
                                {team === 'white' ? (
                                    <img
                                        src={teamWhite}
                                        alt='Team White Logo'
                                        style={{ height: '40px', width: '40px' }}
                                    />
                                ) : (
                                    <img
                                        src={teamBlack}
                                        alt='Team Black Logo'
                                        style={{ height: '40px', width: '40px' }}
                                    />
                                )}
                            </div>
                        ))}
                        <p className='player-number'># {player.number}</p>
                        <p>{player.position}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PlayerGridItem;
