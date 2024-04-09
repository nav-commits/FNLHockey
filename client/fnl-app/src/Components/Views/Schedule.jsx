import React, { useEffect } from "react";
import { scheduleFNLHockey } from "../../Utils/Data";
import teamBlackImage from "../../../src/Images/FNLBlackWhiteBackground.png";
import teamWhiteImage from "../../../src/Images/whiteFNLLogo.png";
import { useState } from "react";
import ScheduleGameItems from "../Organisms/ScheduleGameItems/ScheduleGameitems";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import MUIButton from "../Atoms/Button/MUIButton";
import '../../Components/Molecules/Dropdown/Dropdown.css';

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
      <div
        style={{ display: "flex", justifyContent: "space-between", margin: "20px" }}
      >
         <h1 style={{ padding: "10px" }}>Schedule</h1>
         <MUIButton
          title="Goalie Schedule"
          onClick={moveToNextPage}
          icon={<ArrowForwardIcon />}
          color="white"
          textColor="black" 
          type="button"
        />
       
      </div>
     
      <div onClick={onClick} className="filter-dropdown-button">
        <p style={{ textAlign: "center" }}>Filter By Year</p>
      </div>
      {open && (
        <div className="week-filter-container">
          {years.map((year, index) => (
            <div
              onClick={() => filterScheduleYear(year)}
              key={index}
              style={{
                backgroundColor:
                  year === selectedYear ? "rgb(217, 217, 217)" : null,
              }}
              className="week-item"
            >
              <p className="week-text">{year}</p>
            </div>
          ))}
        </div>
      )}

      <div>
        {filterSchedule.map((game) => (
          <ScheduleGameItems
            key={game.date}
            game={game}
            getFormattedDate={getFormattedDate}
            teamWhiteImage={teamWhiteImage}
            teamBlackImage={teamBlackImage}
          />
        ))}
      </div>
    </>
  );
};

export default Schedule;
