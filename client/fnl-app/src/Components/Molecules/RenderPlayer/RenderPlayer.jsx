import React from "react";
import { Box, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const RenderPlayer = ({ player, handleDragStart }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "20px",
        backgroundColor: "#f2f2f2",
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
        cursor: "grab",
        alignItems: "center",
      }}
      draggable
      onDragStart={(e) => handleDragStart(e, player)}
    >
      <AccountCircleIcon />

      <Box>
        <Typography variant="body1" component="span">
          {player.name}
        </Typography>
        <Typography variant="body2" component="div">
          {player.position}
        </Typography>
      </Box>
    </Box>
  );
};

export default RenderPlayer;
