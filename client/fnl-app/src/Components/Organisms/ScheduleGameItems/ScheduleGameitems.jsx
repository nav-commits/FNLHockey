import React from 'react';
import './ScheduleGameItems.css'; 

const ScheduleGameItems = ({ game, getFormattedDate, teamWhiteImage, teamBlackImage }) => {
    return (
        <div className="game-item-container">
            <h3 id={game.date} className="game-date">
                {getFormattedDate(game.date)}
            </h3>
            <div className="game-details-container">
                <table className="game-table">
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Matchup</th>
                            <th>Arena</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{game.time}</td>
                            <td className="matchup-container">
                                <img
                                    src={game.teams.home === 'Team White' ? teamWhiteImage : teamBlackImage}
                                    alt={`${game.teams.home} Logo`}
                                    className="team-logo"
                                />
                                <span>vs</span>
                                <img
                                    src={game.teams.away === 'Team Black' ? teamBlackImage : teamWhiteImage}
                                    alt={`${game.teams.away} Logo`}
                                    className="team-logo"
                                />
                            </td>
                            <td>{game.arena}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ScheduleGameItems;
