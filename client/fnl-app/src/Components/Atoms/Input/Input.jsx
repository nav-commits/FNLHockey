import React from "react";
import TextField from "@mui/material/TextField";

function Input({
  value,
  onChange,
  placeholder,
  onFocus,
  type,
  name,
  specialClass,
}) {

  const isSpecialInput = specialClass === "special-input";

  let sxStyles = {
    width: 300,
    margin: "8px 0",
    ".MuiInputBase-input": {
      padding: "12px 20px",
      borderRadius: "10px",
      backgroundColor: "#fff",
      color: "black",

      "&:focus": {
        borderColor: "#555",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
      },
    },
  };

  if (isSpecialInput) {
    sxStyles = {
      ...sxStyles,
      ".MuiInputBase-input::placeholder": {
        color: "black",
        fontWeight: "bold",
        fontSize: "18px",
      },
    };
  }

  return (
    <TextField
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onFocus={onFocus}
      variant="outlined"
      sx={sxStyles}
     
    />
  );
}

export default Input;
