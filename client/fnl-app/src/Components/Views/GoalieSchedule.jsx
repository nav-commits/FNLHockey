import React, { useEffect, useState } from "react";
import { fnlGoalieSchedule } from "../../Utils/Data";
import GoalieScheduleGameItems from "../../Components/Organisms/GoalieScheduleItems/GoalieScheudleItems"; // Ensure correct import path
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { Box,Typography } from "@mui/material";
import MUIButton from "../Atoms/Button/MUIButton";
import { Menu, MenuItem } from "@mui/material";

const GoalieSchedule = () => {
  const [open, setOpen] = useState(false);
  const [filterSchedule, setFilterSchedule] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");

  const getFormattedDate = (dateString) => {
    const dateObject = new Date(dateString + "T20:30:00");
    const options = { year: "numeric", month: "long", day: "numeric" };
    return `Friday, ${dateObject.toLocaleDateString("en-US", options)}`;
  };

  const filterScheduleYear = (year) => {
    setSelectedYear(year);
    const filteredArray = fnlGoalieSchedule.filter((game) => {
      const gameYear = new Date(game.date).getFullYear().toString();
      return gameYear === year;
    });
    setFilterSchedule(filteredArray);
  };

  const onClick = () => setOpen(!open);

  useEffect(() => {
    filterScheduleYear("2024");
  }, []);

  const years = ["2024", "2025", "2026", "2027", "2028"];
  const navigate = useNavigate();

  const moveToNextPage = () => navigate("/Schedule");

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px",
        }}
      >
        <Typography variant="h4" sx={{ padding: "12px" }}>
          Goalie Schedule
        </Typography>
        <MUIButton
          title="Back"
          onClick={moveToNextPage}
          icon={<ArrowForwardIcon />}
          color="white"
          textColor="black"
          type="button"
        >
          Back
        </MUIButton>
      </Box>

      <Box
        sx={{
          width: 200,
          border: 1,
          borderColor: "#cfcdcd",
          ml: 1,
          mt: 1,
          p: 1,
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <Typography textAlign="center">Filter By Year</Typography>
      </Box>

      <Menu
        id="simple-menu"
        anchorEl={null}
        keepMounted
        open={open}
        onClick={onClick}
        sx={{
          ".MuiPaper-root": {
            border: 1,
            borderColor: "#cfcdcd",
            borderTop: 0,
            maxWidth: 240,
            maxHeight: 200,
            overflowY: "auto",
          },
        }}
      >
        {years.map((year, index) => (
          <MenuItem
            key={index}
            onClick={() => filterScheduleYear(year)}
            sx={{
              backgroundColor:
                year === selectedYear ? "rgb(217, 217, 217)" : "inherit",
              fontWeight: year === selectedYear ? 800 : 400,
         
            }}
          >
            {year}
          </MenuItem>
        ))}
      </Menu>

      <Box>
        {filterSchedule.map((game) => (
          <GoalieScheduleGameItems
            key={game.date}
            game={game}
            getFormattedDate={getFormattedDate}
          />
        ))}
      </Box>
    </>
  );
};

export default GoalieSchedule;
