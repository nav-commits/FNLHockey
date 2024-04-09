import React, { useEffect } from "react";
import { scheduleFNLHockey } from "../../Utils/Data";
import teamBlackImage from "../../../src/Images/FNLBlackWhiteBackground.png";
import teamWhiteImage from "../../../src/Images/whiteFNLLogo.png";
import { useState } from "react";
import ScheduleGameItems from "../Organisms/ScheduleGameItems/ScheduleGameitems";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import MUIButton from "../Atoms/Button/MUIButton";
import "../../Components/Molecules/Dropdown/Dropdown.css";
import { Box, Typography, Menu, MenuItem } from "@mui/material";

const Schedule = () => {
  const [open, setOpen] = useState(false);
  const [filterSchedule, setFilterSchedule] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");

  const getFormattedDate = (dateString) => {
    const dateObject = new Date(dateString + "T20:30:00");
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = `Friday, ${dateObject.toLocaleDateString(
      "en-US",
      options
    )}`;
    return formattedDate;
  };

  const filterScheduleYear = (year) => {
    setSelectedYear(year); // Update the selected year
    const filteredArray = scheduleFNLHockey.filter((game) => {
      const gameYear = new Date(game.date).getFullYear().toString();
      return gameYear === year;
    });
    setFilterSchedule(filteredArray);
  };

  const onClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    filterScheduleYear("2024");
  }, []);

  const years = ["2024", "2025", "2026", "2027", "2028"];

  const navigate = useNavigate();

  const moveToNextPage = () => {
    navigate("/GoalieSchedule");
  };
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", m: 2 }}>
        <Typography variant="h4" sx={{ p: 1 }}>
          Schedule
        </Typography>
        <MUIButton
          title="Goalie Schedule"
          onClick={moveToNextPage}
          icon={<ArrowForwardIcon />}
          color="white"
          textColor="black"
          type="button"
        />
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
        <Typography>Filter By Year</Typography>
      </Box>
      <Menu  id="simple-menu"
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
        }}>
        {years.map((year) => (
          <MenuItem
            key={year}
         
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

      {filterSchedule.map((game) => (
        <ScheduleGameItems
          key={game.date}
          game={game}
          getFormattedDate={getFormattedDate}
          teamWhiteImage={teamWhiteImage}
          teamBlackImage={teamBlackImage}
        />
      ))}
    </>
  );
};

export default Schedule;
