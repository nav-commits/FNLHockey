import React from "react";
import MUIButton from "../../Atoms/Button/MUIButton";
import RenderPlayer from "../../Molecules/RenderPlayer/RenderPlayer";
import Category from "../../Molecules/Category/Category";
import TabsContent from "../../Molecules/TabsContent/TabsContent";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { Container, Typography, Box } from "@mui/material";
import { Alert } from "@mui/material";

const PlayerStatusPanel = ({
  players,
  categories,
  handleSubmit,
  handleDrop,
  saveCategories,
  disabled,
  handleDragStart,
  handleTabClick,
  activeLabel,
  filterPlayers,
  categoryIcon,
  hasCategoriesWithPlayers,
  resetFilter,
}) => {
  return (
    <Container>
      {!hasCategoriesWithPlayers() ? (
        <Container maxWidth="sm" sx={{ mt: 5, mb: 5 }}>
          <Alert
            severity="error"
            sx={{
              animation: "bounce 1s infinite",
              "@keyframes bounce": {
                "0%, 100%": { transform: "translateY(0)" },
                "50%": { transform: "translateY(-10px)" },
              },
            }}
          >
            Welcome to the status page, before making teams please drag and drop
            players to a category, then submit.
          </Alert>
        </Container>
      ) : null}

      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Current Roster of FNL Hockey
      </Typography>
      <Typography sx={{ textAlign: "center" }}>
        Total Players: {players.length}
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TabsContent
          activeLabel={activeLabel}
          handleTabClick={handleTabClick}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {filterPlayers.length > 0 &&
          filterPlayers.map((player, idx) => (
            <RenderPlayer
              key={idx}
              player={player}
              handleDragStart={handleDragStart}
            />
          ))}
      </Box>

      <form onSubmit={handleSubmit}>
        <Typography variant="h4" sx={{ textAlign: "center", margin: "30px" }}>
          Status
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {Array.isArray(categories) &&
            categories.map((category, idx) => (
              <Category
                key={idx}
                category={category}
                handleDrop={handleDrop}
                handleDragStart={handleDragStart}
                categoryIcon={categoryIcon}
              />
            ))}
        </Box>

        {hasCategoriesWithPlayers() && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              mt: 5,
            }}
          >
            <MUIButton
              title="Save"
              textColor="black"
              width="205px"
              type="button"
              onClick={saveCategories}
              marginTop="20px"
              icon={<KeyboardArrowRightOutlinedIcon />}
            />
            {!disabled && (
              <MUIButton
                title="Submit"
                icon={<KeyboardArrowRightOutlinedIcon />}
                textColor="black"
                width="150px"
                type="submit"
                marginTop="20px"
              />
            )}

            <MUIButton
              title="Reset"
              textColor="black"
              width="205px"
              type="button"
              onClick={resetFilter}
              marginTop="20px"
              icon={<KeyboardArrowRightOutlinedIcon />}
            />
          </Box>
        )}
      </form>
    </Container>
  );
};

export default PlayerStatusPanel;
