import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import teamWhite from "../../../Images/FNLWhiteBackground.png";
import teamBlack from "../../../Images/FNLBlackWhiteBackground.png";
import { useTheme } from "@mui/material/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Results = ({ filterWeek, weekNumber, formattedDate }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        "& > :not(style)": { m: 1 },
      }}
    >
      {filterWeek.length > 0 ? (
        filterWeek.map((formData, index) => (
          <Card
            key={index}
            sx={{
              minWidth: 280,
              margin: theme.spacing(2.5),
              borderColor: "#e0e0e0",
              borderWidth: "1px",
              borderStyle: "solid",
              borderRadius: 2,
              padding: theme.spacing(2.5),
              backgroundColor: "white",
              color: "black",
            }}
          >
            <CardContent>
              <Typography sx={{ marginBottom: theme.spacing(2) }} variant="h5">
                Week {weekNumber}
              </Typography>
              <Typography variant="body1">
                {formData.seriesWinner.winner.length > 0
                  ? "FINAL"
                  : "8:00PM EST"}
              </Typography>
              <Typography
                sx={{ marginBottom: theme.spacing(2) }}
                variant="body2"
              >
                {formattedDate}
              </Typography>
              {Object.keys(formData)
                .filter(
                  (team) =>
                    ![
                      "_id",
                      "createdAt",
                      "__v",
                      "Goalie",
                      "seriesWinner",
                    ].includes(team)
                )
                .map((team) =>
                  team === "teamWhite" || team === "teamBlack" ? (
                    <Box key={team} sx={{ marginBottom: theme.spacing(5) }}>
                      <Box
                        sx={{
                          display: "flex",
                          gap: theme.spacing(1.25),
                          alignItems: "center",
                          marginBottom: theme.spacing(2.5),
                        }}
                      >
                        <img
                          src={team === "teamWhite" ? teamWhite : teamBlack}
                          alt={`Team ${
                            team === "teamWhite" ? "White" : "Black"
                          } Logo`}
                          style={{ height: "40px", width: "40px" }}
                        />
                        <Typography variant="body1">
                          {team === "teamWhite" ? " Team White" : " Team Black"}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          gap: theme.spacing(1.25),
                          alignItems: "center",
                          mb: 2,
                          maxWidth: "100%",
                          overflowX: "auto",
                          overflowY: "hidden",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {formData[team].players.map((player, playerIndex) => (
                          <Box
                            key={playerIndex}
                            sx={{
                              display: "flex",
                              gap: theme.spacing(0.625),
                              backgroundColor: "#f2f2f2",
                              padding: theme.spacing(0.625),
                              alignItems: "center",
                            }}
                          >
                            <AccountCircleIcon />
                            <Typography variant="caption">
                              {player.name}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                      <Typography variant="body1">
                        Record {formData[team].wins}-{formData[team].losses}-
                        {formData[team].ties}
                      </Typography>
                    </Box>
                  ) : null
                )}
              {formData.seriesWinner.winner && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: theme.spacing(1.25),
                  }}
                >
                  Series Winner
                  <img
                    src={
                      formData.seriesWinner.winner === "white"
                        ? teamWhite
                        : teamBlack
                    }
                    alt={`Team ${
                      formData.seriesWinner.winner === "white"
                        ? "White"
                        : "Black"
                    } Logo`}
                    style={{ height: "40px", width: "40px" }}
                  />
                </Box>
              )}
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography variant="h6" color="textSecondary">
          No match results
        </Typography>
      )}
    </Box>
  );
};

export default Results;
