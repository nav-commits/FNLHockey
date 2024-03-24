import React from "react";
import Button from "../../Atoms/Button/Button";
import "./PlayerStatusMobileTablet.css";

function PlayerStatusMobileTablet({
  players,
  handleStatusChange,
  handleSubmit,
  handleSave,
  categories,

}) {
  return (
    <div>
      {players.map((player) => (
        <div key={player._id} className="player-status-card">
          <div>
            {player.name} - {player.position}
            <div className="status-options">
              {["monthToMonth", "weekToWeek", "IR", "fiftyFifty"].map(
                (status) => (
                  <label key={status} className="status-label">
                    <input
                      type="radio"
                      value={status}
                      name={player.id ? player.id.toString() : ""}
                      checked={player.status === status}
                      onChange={(e) =>
                        handleStatusChange(player._id, e.target.value)
                      }
                    />
                    {status}
                  </label>
                )
              )}
            </div>
          </div>
        </div>
      ))}
      <div className="actions-container">
        <Button
          title="Save"
          color="black"
          textColor="white"
          width={"180px"}
          onClick={handleSave}
        />

        <Button
          title="Submit"
          color="#d9d9d9"
          width={"200px"}
          onClick={handleSubmit}
        />
      </div>
      <div className="categories-card categories-animation">
        <h3 className="categories-card-title">Current Status</h3>
        {categories.length > 0 &&
          categories.map((cat) => (
            <div style={{ padding: "5px", marginBottom: "10px" }} key={cat.id}>
              <h4>{cat.name}</h4>
              {cat.players.map((player) => (
                <div style={{ padding: "5px" }} key={player._id}>
                  <p>
                    <b>{player.name}</b> - {player.position}
                  </p>
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}

export default PlayerStatusMobileTablet;
