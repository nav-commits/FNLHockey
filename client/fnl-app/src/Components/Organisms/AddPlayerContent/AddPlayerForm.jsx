import React from "react";
import { Box, Typography } from "@mui/material";
import MUIButton from "../../Atoms/Button/MUIButton";
import Input from "../../Atoms/Input/Input";

function AddPlayerForm({
  addPlayer,
  onInputChange,
  onAddTeam,
  onImageUpload,
  onFormSubmit,
  fields,
}) {
  return (
    <Box
      component="form"
      onSubmit={onFormSubmit}
      sx={{
        display: "flex",
        gap: "20px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        margin: "20px",
        borderRadius: "20px",
        color: "black",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Optional: added for subtle shadow effect
      }}
    >
      <Typography variant="h5" component="h2">
        Add Player
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          border: "1px solid rgb(179, 178, 178)",
          padding: "50px",
          borderRadius: "20px",
        }}
      >
        {fields.map((field) => (
          <Input
            key={field.name}
            name={field.name}
            type={field.type}
            value={addPlayer[field.name]}
            onChange={onInputChange}
            placeholder={field.placeholder}
            variant="outlined"
            fullWidth
          />
        ))}
        {addPlayer.team.map((team, index) => (
          <Input
            key={index}
            name="team"
            value={team}
            onChange={(event) => onInputChange(event, index)}
            placeholder="Team"
            variant="outlined"
            fullWidth
          />
        ))}
        <MUIButton
          color={"black"}
          onClick={onAddTeam}
          variant="contained"
          type="button"
          title={"Add Team"}
          textColor={"white"}
        >
          Add Team
        </MUIButton>
        <Input
          type="file"
          onChange={onImageUpload}
          variant="outlined"
          sx={{ mt: 1, width: "205px" }}
          InputLabelProps={{ shrink: true }}
        />
        <MUIButton
          sx={{
            mt: 1,
            bgcolor: "primary.main",
            "&:hover": { bgcolor: "primary.dark" },
            width: "205px",
          }}
          variant="contained"
          color={"black"}
          type="submit"
          title={"Add Player"}
          textColor={"white"}
        >
          Add Player
        </MUIButton>
      </Box>
    </Box>
  );
}

export default AddPlayerForm;
