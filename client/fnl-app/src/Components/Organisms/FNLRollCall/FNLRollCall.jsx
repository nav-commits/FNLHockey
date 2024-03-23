import React from 'react';
import './FNLRollCall.css';

const FNLRollCall = ({
    statusOfPlayers,
    handleDragStart,
    getKey,
    validKeys,
}) => {

    return (
        <div className="roll-call-container">
            {
                statusOfPlayers && (
                    (statusOfPlayers.monthToMonth?.players?.length > 0) ||
                    (statusOfPlayers.weekToWeek?.players?.length > 0) ||
                    (statusOfPlayers.IR?.players?.length > 0) ||
                    (statusOfPlayers.fiftyFifty?.players?.length > 0)
                ) ? (
                    <div className='roll-call-content'>
                        <h1>FNL Roll Call</h1>
                        <h1>Players Status</h1>
                        <h2>
                            {new Date(statusOfPlayers.createdAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </h2>
                    </div>
                ) : (
                    <div className='roll-call-content'>
                        <h1>FNL Roll Call</h1>
                    </div>
                )
            }
            <div className="status-container">
                <div className="status-display">
                    {statusOfPlayers && Object.keys(statusOfPlayers)
                        .filter((key) => getKey(key, validKeys))
                        .map((key) => (
                            <div className="status-card" key={key}>
                                <h2 className="status-title">{key}</h2>
                                {statusOfPlayers[key].players.map((singlePlayer, playerIndex) => (
                                    <div key={playerIndex}>
                                        <p
                                            onDragStart={(e) => {
                                                handleDragStart(e, singlePlayer, key);
                                            }}
                                            draggable
                                            className="player-info"
                                        >
                                            {playerIndex + 1}. {singlePlayer.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ))}
                </div>
            </div>

        </div>
    );
};

export default FNLRollCall;