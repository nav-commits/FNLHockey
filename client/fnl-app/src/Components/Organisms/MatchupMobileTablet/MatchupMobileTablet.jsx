import React from 'react';
import Button from '../../Atoms/Button/Button';
import Input from '../../Atoms/Input/Input';
import useDeviceDetect from '../../../Hooks/DeviceDetect';
import './MatchupMobileTablet.css';

const MatchUpMobileTablet = ({
    statusOfPLayers,
    handleTeamChange,
    saveTeamsToLocalStorage,
    onMobileTabletSave,
    teams,
    handleChange,
    user,
    hasPlayers,
    disabled 
}) => {
    const { isMobile } = useDeviceDetect();
    return (
        <>
            <div>
                {Object.entries(statusOfPLayers).map(([statusKey, statusValue]) => {
                    if (statusValue.players && statusValue.players.length > 0) {
                        return (
                            <div className="status-section" key={statusKey}>
                                <h3>{statusValue.name}</h3>
                                {statusValue.players.map((player) => (
                                    <div key={player._id} className="status-player">
                                        <p>
                                            {player.name && player.name} - {player.position && player.position}
                                        </p>
                                        <div>
                                            <label>
                                                <input
                                                    type='radio'
                                                    value='Team White'
                                                    name={`team-${player._id}`}
                                                    checked={player.team === 'Team White'}
                                                    onChange={(e) =>
                                                        handleTeamChange(player._id, e.target.value)
                                                    }
                                                />
                                                Team White
                                            </label>
                                            <label>
                                                <input
                                                    type='radio'
                                                    value='Team Black'
                                                    name={`team-${player._id}`}
                                                    checked={player.team === 'Team Black'}
                                                    onChange={(e) =>
                                                        handleTeamChange(player._id, e.target.value)
                                                    }
                                                />
                                                Team Black
                                            </label>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}

                <>
                    {isMobile && hasPlayers ? (
                        <div className="actions-container">
                            {' '}
                            <Button
                                title='Save'
                                color='black'
                                textColor='white'
                                width={'200px'}
                                onClick={saveTeamsToLocalStorage}
                            />
                            <Button
                                title='Submit'
                                color='#d9d9d9'
                                width={'200px'}
                                onClick={onMobileTabletSave}
                            />
                        </div>
                    ) : <h3 className="no-results">No results..</h3>}

                    {user.name === 'Navdeep Dhamrait' && hasPlayers ? (
                        <div className="team-stats-section">
                            {/* Series Winner Input */}
                            <Input
                                name='seriesWinner.winner'
                                value={teams.seriesWinner.winner}
                                onChange={handleChange}
                                placeholder='Series Winner'
                            />
                            {/* Team White Stats Inputs */}
                            <p>Team White</p>
                            <div>
                                <label htmlFor=''>white: wins</label>
                                <Input
                                    type='number'
                                    name='teamWhite.wins'
                                    value={teams.teamWhite.wins}
                                    onChange={handleChange}
                                    placeholder='Team White Wins'
                                />
                            </div>

                            <div>
                                <label htmlFor=''>white: losses</label>
                                <Input
                                    type='number'
                                    name='teamWhite.losses'
                                    value={teams.teamWhite.losses}
                                    onChange={handleChange}
                                    placeholder='Team White Losses'
                                />
                            </div>
                            <div>
                                <label htmlFor=''>white: ties</label>
                                <Input
                                    type='number'
                                    name='teamWhite.ties'
                                    value={teams.teamWhite.ties}
                                    onChange={handleChange}
                                    placeholder='Team White Ties'
                                />
                            </div>
                            <br />
                            <br />
                            <p>Team Black</p>

                            <div>
                                {/* Team Black Stats Inputs */}
                                <label htmlFor=''>black: wins</label>
                                <Input
                                    type='number'
                                    name='teamBlack.wins'
                                    value={teams.teamBlack.wins}
                                    onChange={handleChange}
                                    placeholder='Team Black Wins'
                                />
                            </div>

                            <div>
                                <label htmlFor=''>black: losses</label>
                                <Input
                                    type='number'
                                    name='teamBlack.losses'
                                    value={teams.teamBlack.losses}
                                    onChange={handleChange}
                                    placeholder='Team Black Losses'
                                />
                            </div>

                            <div>
                                <label htmlFor=''>black: ties</label>
                                <Input
                                    type='number'
                                    name='teamBlack.ties'
                                    value={teams.teamBlack.ties}
                                    onChange={handleChange}
                                    placeholder='Team Black Ties'
                                />
                            </div>
                        </div>
                    ) : null}
                </>
            </div>
            {Object.entries(teams).length > 0 && (
                <div className='categories-card categories-animation'>
                    <h3 className='categories-card-title'>Team Assignments</h3>
                    {Object.entries(teams).map(([statusKey, { name, players }]) => (
                        <div key={statusKey} style={{ marginBottom: '10px' }}>
                            <h4>{name}</h4>
                            {(players || []).map(player => (
                                <div style={{ padding: '5px' }} key={player._id}>
                                    <p>
                                        {player.name} - {player.position}
                                    </p>
                                    <p>
                                        <b>{player.team}</b>  
                                    </p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}

        </>
    );
};

export default MatchUpMobileTablet;
