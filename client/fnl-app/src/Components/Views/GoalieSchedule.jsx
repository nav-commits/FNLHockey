import React, { useEffect, useState } from "react";
import { fnlGoalieSchedule } from "../../Utils/Data";
import GoalieScheduleGameItems from "../../Components/Organisms/GoalieScheduleItems/GoalieScheudleItems"; // Ensure correct import path
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { Box,Typography } from "@mui/material";
import MUIButton from "../Atoms/Button/MUIButton";

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

          m: 2, 
          mt: 12
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
      <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          width: 200,
          border: 1,
          borderColor: "#cfcdcd",
          ml: 1,
          mt: 1,
          p: 1,
          cursor: "pointer",
          textAlign: "center",
        }}
        onClick={onClick}
      >
        <Typography>Filter by year</Typography>
      </Box>
      {open && (
        <Box
          sx={{
            width: 216,
            position: "absolute",
            border: "1px solid #cfcdcd",
            borderTop: "none",
            zIndex: 1,
            ml: 1.00,
            backgroundColor: "#fff",
            maxHeight: 200,
            overflowY: "auto",
          }}
        >
          {years.map((year) => (
            <Box
              key={year}
              onClick={() => filterScheduleYear(year)}
              sx={{
                p: 1.5,
                backgroundColor: selectedYear === year ? "rgb(217, 217, 217)" : "inherit",
                "&:hover": {
                  backgroundColor: "action.hover",
                },
                cursor: "pointer",
                textAlign: "center",
              }}
            >
              <Typography>{year}</Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>

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
