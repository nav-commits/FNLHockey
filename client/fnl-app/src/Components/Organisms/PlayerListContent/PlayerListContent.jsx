import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import PlayerGridItem from "../../Molecules/PlayerGridItem/PlayerGridItem";
import Input from "../../Atoms/Input/Input";
import MUIButton from "../../Atoms/Button/MUIButton";
import Spinner from "../../Atoms/Spinner/Spinner";
import { Box, Typography } from "@mui/material";

const PlayersListContent = () => {
  const [players, setPlayers] = useState([]);
  const [displayedPlayers, setDisplayedPlayers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { user, getAccessTokenSilently } = useAuth0();
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const token = await getAccessTokenSilently();
        const response = await fetch(
          "https://fnlhockey.onrender.com/players/players",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (!response.ok) {
          throw new Error(
            `Network response was not ok, status code: ${response.status}`
          );
        }

        const responseData = await response.json();
        setPlayers(responseData);
        setDisplayedPlayers(responseData);
      } catch (error) {
        console.error("Error:", error);
      }
      setIsLoading(false); // End loading
    };

    fetchData();
  }, [getAccessTokenSilently]);

  const onClickAddPlayer = () => navigate("/addPlayer");
  const handleChange = (event) => {
    setInputValue(event.target.value);
    const filteredPlayers = players.filter((player) =>
      player.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setDisplayedPlayers(filteredPlayers);
  };

  useEffect(() => {
    if (inputValue.length === 0) {
      const somePlayers = players.slice(0, 8);
      setDisplayedPlayers(somePlayers);
    }
  }, [inputValue, players]);

  return (
    <Box
      sx={{
        marginBottom: "70px",
        ".button-container": {
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          marginRight: "80px",
          marginTop: "90px",
        },
        ".players-page-content": {
          padding: "10px",
          margin: "10px",
        },
      }}
    >
      <Box className="button-container">
        {user.name === "Navdeep Dhamrait" && (
          <MUIButton
            title="Add Player"
            onClick={onClickAddPlayer}
            color="#d9d9d9"
            width={"205px"}
          />
        )}
      </Box>
      <Box className="players-page-content">
        <Typography sx={{ mb: 2 }} variant="h5">
          Players
        </Typography>
        <Input
          placeholder={"Search players"}
          onChange={handleChange}
          value={inputValue}
          specialClass={"special-input"}
        />
        <Typography sx={{ m: 2 }} variant="h5">
          Player Spotlight
        </Typography>
      </Box>

      {isLoading ? (
        <Spinner />
      ) : (
        <PlayerGridItem fnlPlayers={displayedPlayers} />
      )}
    </Box>
  );
};

export default PlayersListContent;
