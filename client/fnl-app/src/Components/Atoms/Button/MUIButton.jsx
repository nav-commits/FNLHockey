import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function MUIButton({
  title,
  onClick,
  type = "button",
  color,
  marginTop,
  width,
  disabled,
  marginLeft,
  textColor,
  icon,
}) {
  const defaultColor = color || "primary";
  const defaultTextColor = textColor || "black";
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      type={type}
      sx={{
        backgroundColor: disabled ? "grey" : defaultColor,
        margin: marginTop,
        width: width,
        marginLeft: marginLeft,
        color: defaultTextColor,
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
        transition: "background-color 0.3s ease, transform 0.3s ease",
        "& .icon-button": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      {icon && title ? (
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {React.cloneElement(icon, { size: "small" })} {title}
        </Box>
      ) : (
        title
      )}
    </Button>
  );
}

export default MUIButton;
