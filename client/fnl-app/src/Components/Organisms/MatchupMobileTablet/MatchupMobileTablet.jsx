import React from "react";
import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import useDeviceDetect from "../../../Hooks/DeviceDetect";
import MUIButton from "../../Atoms/Button/MUIButton";
import Input from "../../Atoms/Input/Input";

const MatchUpMobileTablet = ({
  statusOfPLayers,
  handleTeamChange,
  saveTeamsToLocalStorage,
  onMobileTabletSave,
  teams,
  handleChange,
  user,
  hasPlayers,
}) => {
  const { isMobile } = useDeviceDetect();

  return (
    <Box>
      {Object.entries(statusOfPLayers).map(([statusKey, statusValue]) => {
        if (statusValue.players && statusValue.players.length > 0) {
          return (
            <Box
              key={statusKey}
              sx={{
                p: 2,
                "& .status-player": { mt: 1, p: 2, backgroundColor: "#eee" },
              }}
            >
              <Typography variant="h6">{statusValue.name}</Typography>
              {statusValue.players.map((player) => (
                <Box key={player._id} className="status-player">
                  <Typography>
                    {player.name} - {player.position}
                  </Typography>
                  <RadioGroup
                    row
                    name={`team-${player._id}`}
                    value={player.team}
                    onChange={(e) =>
                      handleTeamChange(player._id, e.target.value)
                    }
                  >
                    <FormControlLabel
                      value="Team White"
                      control={<Radio />}
                      label="Team White"
                    />
                    <FormControlLabel
                      value="Team Black"
                      control={<Radio />}
                      label="Team Black"
                    />
                  </RadioGroup>
                </Box>
              ))}
            </Box>
          );
        } else {
          return null;
        }
      })}

      {isMobile && hasPlayers ? (
        <Box sx={{ display: "flex", gap: 2, m: 1, justifyContent: "center" }}>
          <MUIButton
            title="Save"
            color="black"
            textColor="white"
            width={"200px"}
            onClick={saveTeamsToLocalStorage}
          />
          <MUIButton
            title="Submit"
            color="#d9d9d9"
            width={"200px"}
            onClick={onMobileTabletSave}
          />
        </Box>
      ) : (
        <Typography variant="h6" textAlign="center" sx={{ mt: 2 }}>
          No results..
        </Typography>
      )}

      {user.name === "Navdeep Dhamrait" && hasPlayers ? (
        <Box sx={{ p: 2 }}>
          <Typography variant="h6">Series Winner</Typography>
          <Input
            name="seriesWinner.winner"
            value={teams.seriesWinner.winner}
            onChange={handleChange}
            placeholder="Series Winner"
          />
          <Typography sx={{ mt: 2 }}>Team White</Typography>
          <Box sx={{ mt: 1 }}>
            <Typography>white: wins</Typography>
            <Input
              type="number"
              name="teamWhite.wins"
              value={teams.teamWhite.wins}
              onChange={handleChange}
              placeholder="Team White Wins"
            />
          </Box>
          <Box sx={{ mt: 1 }}>
            <Typography>white: losses</Typography>
            <Input
              type="number"
              name="teamWhite.losses"
              value={teams.teamWhite.losses}
              onChange={handleChange}
              placeholder="Team White Losses"
            />
          </Box>
          <Box sx={{ mt: 1 }}>
            <Typography>white: ties</Typography>
            <Input
              type="number"
              name="teamWhite.ties"
              value={teams.teamWhite.ties}
              onChange={handleChange}
              placeholder="Team White Ties"
            />
          </Box>
          <Typography sx={{ mt: 4 }}>Team Black</Typography>
          <Box sx={{ mt: 1 }}>
            <Typography>black: wins</Typography>
            <Input
              type="number"
              name="teamBlack.wins"
              value={teams.teamBlack.wins}
              onChange={handleChange}
              placeholder="Team Black Wins"
            />
          </Box>
          <Box sx={{ mt: 1 }}>
            <Typography>black: losses</Typography>
            <Input
              type="number"
              name="teamBlack.losses"
              value={teams.teamBlack.losses}
              onChange={handleChange}
              placeholder="Team Black Losses"
            />
          </Box>
          <Box sx={{ mt: 1 }}>
            <Typography>black: ties</Typography>
            <Input
              type="number"
              name="teamBlack.ties"
              value={teams.teamBlack.ties}
              onChange={handleChange}
              placeholder="Team Black Ties"
            />
          </Box>
        </Box>
      ) : null}

      {Object.entries(teams).length > 0 && (
        <Box sx={{ p: 1, mt: 2 }}>
          <Typography variant="h6">Team Assignments</Typography>
          {Object.entries(teams).map(
            (
              [statusKey, { name, players = [] }] // Ensure players defaults to an empty array
            ) => (
              <Box key={statusKey} sx={{ mb: 1 }}>
                <Typography variant="subtitle1">{name}</Typography>
                {players.map((player) => (
                  <Box key={player._id} sx={{ p: 0.5 }}>
                    <Typography>
                      {player.name} - {player.position}
                    </Typography>
                    <Typography>
                      <b>{player.team}</b>
                    </Typography>
                  </Box>
                ))}
              </Box>
            )
          )}
        </Box>
      )}
    </Box>
  );
};

export default MatchUpMobileTablet;
