import React from "react";
import { Box, Typography } from "@mui/material";
import teamWhite from "../../../Images/FNLWhiteBackground.png";
import teamBlack from "../../../Images/FNLBlackWhiteBackground.png";

function PlayerGridItem({ fnlPlayers }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        paddingTop: "24px",
        justifyContent: "center",
      }}
    >
      {fnlPlayers.map((player, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
            alignItems: "center",
            borderBottom: "1px solid #e0e0e0",
            mb: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              mb: 1,
            }}
          >
            {/* Placeholder for the player image */}
            <Box
              sx={{
                height: "40px",
                width: "40px",
                borderRadius: "20px",
                backgroundColor: "lightgrey",
              }}
            />
          </Box>
          <Typography
            variant="h6"
            component="h3"
            sx={{ fontWeight: "bold", mt: 1 }}
          >
            {player.name}
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            {player.team.map((team, index) => (
              <Box key={index} sx={{}}>
                <img
                  src={team === "white" ? teamWhite : teamBlack}
                  alt={`Team ${
                    team.charAt(0).toUpperCase() + team.slice(1)
                  } Logo`}
                  style={{
                    height: "auto",
                    width: "50px",
                  }}
                />
              </Box>
            ))}
            <Typography
              sx={{
                borderRight: "solid 1px #e0e0e0",
                borderLeft: "solid 1px #e0e0e0",
                padding: "0 8px", // From .player-number
              }}
            >
              # {player.number}
            </Typography>
            <Typography>{player.position}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default PlayerGridItem;
