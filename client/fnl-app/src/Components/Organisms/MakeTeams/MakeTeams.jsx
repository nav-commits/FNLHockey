import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  Paper,
} from "@mui/material";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import teamWhiteImage from "../../../Images/FNLWhiteBackground.png";
import teamBlackImage from "../../../Images/FNLWhite.jpeg";
import MUIButton from "../.././Atoms/Button/MUIButton";
import Input from "../../Atoms/Input/Input";
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
  const hasPlayers =
    teamWhite.players.length > 0 || teamBlack.players.length > 0;

  return (
    <Box>
      <Typography variant="h5" textAlign="center" sx={{ mt: 5 }}>
        Tonight's Matchup 8:00pm
        <br />
        Gore Meadows Arena
      </Typography>
      <Box component="form" onSubmit={onSubmit} noValidate autoComplete="off">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            flexWrap: "wrap",
            "& .team-container": {
              mt: 4,
              p: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "300px",
              borderRadius: "10px",
              border: 1,
              borderColor: "grey.500",
              boxShadow: 3,
            },
          }}
        >
          {teamNameKeys.map(
            (teamName, index) =>
              teamName !== "seriesWinner" && (
                <Paper
                  key={teamName}
                  className="team-container"
                  sx={{
                    bgcolor: index % 2 === 0 ? "background.paper" : "black",
                    color: index % 2 === 0 ? "black" : "common.white",
                  }}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    const position = e.target.getAttribute("data-position");
                    handleDrop(e, teamName, position);
                  }}
                >
                  <Box
                    component="img"
                    sx={{ width: 100, height: 100, mb: 2 }}
                    src={
                      teamName === "teamWhite" ? teamWhiteImage : teamBlackImage
                    }
                    alt={`${
                      teamName === "teamWhite" ? "Team White" : "Team Black"
                    } Logo`}
                  />
                  <Typography variant="h6" textAlign="center">
                    {teams[teamName].Team}
                  </Typography>
                  <List dense>
                    {teams[teamName].players.map((player, idx) => (
                      <ListItem
                        key={idx}
                        sx={{ draggable: true }}
                        onDragStart={(e) => handleDragStart(e, player)}
                      >
                        <Typography variant="body2">
                          {player.position === "goalie"
                            ? `Goalie: ${player.name}`
                            : player.name}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              )
          )}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          {user.name === "Navdeep Dhamrait" && hasPlayers ? (
            <Box
              sx={{
                mt: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Series Winner Input */}
              <Typography variant="h6" sx={{ mb: 2 }}>
                Series Winner
              </Typography>
              <Input
                name="seriesWinner.winner"
                value={teams.seriesWinner.winner}
                onChange={handleChange}
                placeholder="Series Winner"
                sx={{ mb: 3, width: "250px" }}
              />
              {/* Team White Stats Inputs */}
              <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                Team White
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Box sx={{ display: "flex", mb: 1, alignItems: "center" }}>
                  <Typography sx={{ width: "100px" }}>Wins:</Typography>
                  <Input
                    type="number"
                    name="teamWhite.wins"
                    value={teams.teamWhite.wins}
                    onChange={handleChange}
                    placeholder="Wins"
                    sx={{ ml: 1, width: "150px" }}
                  />
                </Box>
                <Box sx={{ display: "flex", mb: 1, alignItems: "center" }}>
                  <Typography sx={{ width: "100px" }}>Losses:</Typography>
                  <Input
                    type="number"
                    name="teamWhite.losses"
                    value={teams.teamWhite.losses}
                    onChange={handleChange}
                    sx={{ ml: 1, width: "150px" }}
                  />
                </Box>
                <Box sx={{ display: "flex", mb: 3, alignItems: "center" }}>
                  <Typography sx={{ width: "100px" }}>Ties:</Typography>
                  <Input
                    type="number"
                    name="teamWhite.ties"
                    value={teams.teamWhite.ties}
                    onChange={handleChange}
                    placeholder="Ties"
                    sx={{ ml: 1, width: "150px" }}
                  />
                </Box>
              </Box>
              {/* Team Black Stats Inputs */}
              <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                Team Black
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Box sx={{ display: "flex", mb: 1, alignItems: "center" }}>
                  <Typography sx={{ width: "100px" }}>Wins:</Typography>
                  <Input
                    type="number"
                    name="teamBlack.wins"
                    value={teams.teamBlack.wins}
                    onChange={handleChange}
                    placeholder="Wins"
                    sx={{ ml: 1, width: "150px" }}
                  />
                </Box>
                <Box sx={{ display: "flex", mb: 1, alignItems: "center" }}>
                  <Typography sx={{ width: "100px" }}>Losses:</Typography>
                  <Input
                    type="number"
                    name="teamBlack.losses"
                    value={teams.teamBlack.losses}
                    onChange={handleChange}
                    placeholder="Losses"
                    sx={{ ml: 1, width: "150px" }}
                  />
                </Box>
                <Box sx={{ display: "flex", mb: 3, alignItems: "center" }}>
                  <Typography sx={{ width: "100px" }}>Ties:</Typography>
                  <Input
                    type="number"
                    name="teamBlack.ties"
                    value={teams.teamBlack.ties}
                    onChange={handleChange}
                    placeholder="Ties"
                    sx={{ ml: 1, width: "150px" }}
                  />
                </Box>
              </Box>
            </Box>
          ) : null}
        </Box>

        {hasPlayers && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 5,
            }}
          >
            <MUIButton
              marginTop={"20px"}
              title="Save"
              color="black"
              textColor="white"
              width={"205px"}
              type={"button"}
              onClick={saveTeams}
              icon={<KeyboardArrowRightOutlinedIcon />}
            />
            {disabled && (
              <MUIButton
                title="Submit"
                color="black"
                textColor="white"
                width={"150px"}
                type="submit"
                marginTop={"20px"}
                icon={<KeyboardArrowRightOutlinedIcon />}
              />
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default MakeTeams;
