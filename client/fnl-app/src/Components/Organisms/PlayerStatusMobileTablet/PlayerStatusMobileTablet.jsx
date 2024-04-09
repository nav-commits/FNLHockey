import React from "react";
import MUIButton from "../../Atoms/Button/MUIButton";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import  { Box, Typography, Radio, RadioGroup, FormControlLabel } from "@mui/material";

function PlayerStatusMobileTablet({
  players,
  handleStatusChange,
  handleSubmit,
  handleSave,
  categories,
}) {
  return (
    <Box sx={{ p: 1 }}>
    {players.map((player) => (
      <Box key={player._id} sx={{
        p: 2,
        fontWeight: 'bold',
        borderRadius: '5px',
        backgroundColor: '#f2f2f2',
        mb: 1,
      }}>
        <Typography>{player.name} - {player.position}</Typography>
        <RadioGroup
          name={player.id ? player.id.toString() : ""}
          value={player.status}
          onChange={(e) => handleStatusChange(player._id, e.target.value)}
          sx={{ flexDirection: 'column', mt: 1, gap: '10px' }}
        >
          {["monthToMonth", "weekToWeek", "IR", "fiftyFifty"].map(status => (
            <FormControlLabel
              key={status}
              value={status}
              control={<Radio />}
              label={status}
              sx={{ cursor: 'pointer' }}
            />
          ))}
        </RadioGroup>
      </Box>
    ))}
    <Box sx={{ display: 'flex', gap: '20px', m: 1 }}>
    <MUIButton
        title="Save"
        icon={<KeyboardArrowRightOutlinedIcon />}
        textColor='black'
        width={"180px"}
        onClick={handleSave}
      />

      <MUIButton
        title="Submit"
        icon={<KeyboardArrowRightOutlinedIcon />}
        textColor='black'
        width={"200px"}
        onClick={handleSubmit}
      />
    </Box>
    <Box sx={{
      animation: 'slideUp 0.3s ease-out forwards',
      transform: 'translateY(100%)',
      bgcolor: 'white',
      boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
      p: 2,
      borderTop: '1px solid #ccc',
      borderRadius: '5px',
      overflowY: 'auto',
      maxHeight: '120vh',
      mt: 2,
      '@keyframes slideUp': {
        to: { transform: 'translateY(0)' },
      },
    }}>
      <Typography variant="h6" sx={{ textAlign: 'center' }}>Current Status</Typography>
      {categories.length > 0 && categories.map((cat) => (
        <Box key={cat.id} sx={{ p: '5px', mb: '10px' }}>
          <Typography variant="h6">{cat.name}</Typography>
          {cat.players.map((player) => (
            <Typography key={player._id} sx={{ p: '5px' }}>
              <b>{player.name}</b> - {player.position}
            </Typography>
          ))}
        </Box>
      ))}
    </Box>
  </Box>
  );
}

export default PlayerStatusMobileTablet;


