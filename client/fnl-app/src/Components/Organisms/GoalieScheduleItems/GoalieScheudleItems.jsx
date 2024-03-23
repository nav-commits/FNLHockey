import React from 'react';
import './GoalieScheudleItems'

const GoalieScheduleGameItems = ({ game, getFormattedDate }) => {
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
                                {game.goalies.goalie1}
                                <span>vs</span>
                                {game.goalies.goalie2}
                            </td>
                            <td>{game.arena}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GoalieScheduleGameItems;
