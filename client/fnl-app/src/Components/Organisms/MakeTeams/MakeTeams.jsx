import React from 'react';
import Button from '../../Atoms/Button/Button';
import Input from '../../Atoms/Input/Input';
import '../MakeTeams/MakeTeams.css';
import teamWhiteImage from '../../../Images/FNLWhiteBackground.png';
import teamBlackImage from '../../../Images/FNLWhite.jpeg';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

const MakeTeams = ({
    teams,
    teamNameKeys,
    handleDragStart,
    handleDrop,
    onSubmit,
    disabled,
    user,
    handleChange,
    saveTeams,
}) => {
    const { teamWhite, teamBlack } = teams;
    const hasPlayers = teamWhite.players.length > 0 || teamBlack.players.length > 0;
    return (
        <>
            <div className='matchup-content'>
                <h3>
                    Tonights Match up 8:00pm <br />
                    Gore Meadows Arena{' '}
                </h3>
            </div>
            <form onSubmit={onSubmit}>
                <div className='team-background'>
                    {teamNameKeys.map((teamName, index) =>
                        teamName !== 'seriesWinner' ? (
                            <div
                                key={teamName}
                                className={`team-container${index % 2 === 0 ? '' : '-alt'}`}
                                onDrop={(e) => {
                                    e.preventDefault();
                                    const position = e.target.getAttribute('data-position');
                                    handleDrop(e, teamName, position);
                                }}
                                onDragOver={(e) => {
                                    e.preventDefault();
                                }}
                            >
                                <>
                                    {teamName === 'teamWhite' ? (
                                        <>
                                            <img
                                                src={teamWhiteImage}
                                                alt='Team White Logo'
                                                style={{
                                                    height: '100px',
                                                    width: '100px',
                                                }}
                                            />
                                            <p className='center-team'>{teams[teamName].Team}</p>
                                        </>
                                    ) : (
                                        <>
                                            <img
                                                src={teamBlackImage}
                                                alt='Team Black Logo'
                                                style={{
                                                    height: '100px',
                                                    width: '100px',
                                                    backgroundColor: 'black',
                                                }}
                                            />

                                            <p className='center-team'> {teams[teamName].Team}</p>
                                        </>
                                    )}
                                </>
                                <ol>
                                    {teams[teamName].players &&
                                        teams[teamName].players.map((player) => (
                                            <li
                                                data-position='players'
                                                key={player.name}
                                                draggable
                                                onDragStart={(e) => {
                                                    handleDragStart(e, player);
                                                }}
                                            >
                                                {player.position === 'goalie' ? (
                                                    <>goalie: {player.name}</>
                                                ) : (
                                                    player.name
                                                )}
                                            </li>
                                        ))}
                                </ol>
                            </div>
                        ) : null
                    )}
                </div>

                <div className='make-teams-center'>
                    {!disabled && (
                        <Button
                            title='Submit'
                            color='#d9d9d9'
                            width={'150px'}
                            type='submit'
                            marginTop={'20px'}
                        />
                    )}

                    {user.name === 'Navdeep Dhamrait' && hasPlayers ? (
                        <div>
                            {/* Series Winner Input */}
                            <Input
                                name="seriesWinner.winner"
                                value={teams.seriesWinner.winner}
                                onChange={handleChange}
                                placeholder="Series Winner"
                            />
                            {/* Team White Stats Inputs */}
                            <p>Team White</p>
                            <div>
                                <label htmlFor="">white: wins</label>
                                <Input
                                    type="number"
                                    name="teamWhite.wins"
                                    value={teams.teamWhite.wins}
                                    onChange={handleChange}
                                    placeholder="Team White Wins"
                                />

                            </div>

                            <div>

                                <label htmlFor="">white: losses</label>
                                <Input
                                    type="number"
                                    name="teamWhite.losses"
                                    value={teams.teamWhite.losses}
                                    onChange={handleChange}
                                    placeholder="Team White Losses"
                                />

                            </div>
                            <div>
                                <label htmlFor="">white: ties</label>
                                <Input
                                    type="number"
                                    name="teamWhite.ties"
                                    value={teams.teamWhite.ties}
                                    onChange={handleChange}
                                    placeholder="Team White Ties"
                                />

                            </div>
                            <br />
                            <br />
                            <p>Team Black</p>

                            <div>
                                {/* Team Black Stats Inputs */}
                                <label htmlFor="">black: wins</label>
                                <Input
                                    type="number"
                                    name="teamBlack.wins"
                                    value={teams.teamBlack.wins}
                                    onChange={handleChange}
                                    placeholder="Team Black Wins"
                                />

                            </div>

                            <div>
                                <label htmlFor="">black: losses</label>
                                <Input
                                    type="number"
                                    name="teamBlack.losses"
                                    value={teams.teamBlack.losses}
                                    onChange={handleChange}
                                    placeholder="Team Black Losses"
                                />

                            </div>

                            <div>
                                <label htmlFor="">black: ties</label>
                                <Input
                                    type="number"
                                    name="teamBlack.ties"
                                    value={teams.teamBlack.ties}
                                    onChange={handleChange}
                                    placeholder="Team Black Ties"
                                />

                            </div>


                        </div>
                    ) : null}
                </div>
            </form>
            {hasPlayers && (
                <div className='make-teams-center'>
                    <Button
                        marginTop={'20px'}
                        title='Save'
                        color='black'
                        textColor='white'
                        width={'205px'}
                        type={'button'}
                        onClick={saveTeams}
                        icon={<KeyboardArrowRightOutlinedIcon />}
                    />
                </div>
            )}
        </>
    );
};

export default MakeTeams;
