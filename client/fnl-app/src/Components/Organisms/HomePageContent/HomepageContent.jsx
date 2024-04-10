import React from "react";
import { Box, Typography, List, ListItem, Container } from "@mui/material";
import goalieImage from "../../../Images/goalie.jpg";
import goreMeadowsImage from "../../../Images/gore-meadows-skating-rink.jpg";
import { stories } from "../../../Utils/Data";

function HomePageContent() {
  return (
    <Container
      sx={{
        bgcolor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 4, // padding
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          mb: 4, // margin bottom
        }}
      >
        <Typography variant="h3" sx={{ mb: 2, mt: 8 }}>
          Welcome to the FNL Hockey League!
        </Typography>
        <Typography>
          Your Friday Night Destination for Thrilling Ball Hockey in Brampton!
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          mb: 2,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 400,
            borderRadius: 1,
            overflow: "hidden",
          }}
        >
          <img
            src={goalieImage}
            alt="Goalie in action"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            maxWidth: 400,
            p: 1,
            color: "grey",
            fontSize: 14,
            lineHeight: 1.4,
          }}
        >
          <Typography variant="h5" sx={{ color: "black", ml: 2, mb: 2 }}>
            Top Stories
          </Typography>
          <List sx={{ listStyleType: "none", p: 0 }}>
            {stories.map((story, index) => (
              <ListItem
                key={index}
                sx={{
                  color: "grey",
                  pb: 0.5,
                  pt: 0.5,
                  borderBottom: 1,
                  borderColor: "lightgrey",
                }}
              >
                {story}
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 400,
            borderRadius: 1,
            overflow: "hidden",
          }}
        >
          <img
            src={goreMeadowsImage}
            alt="Gore Meadows Skating Rink"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            maxWidth: 400,
            p: 1,
            color: "grey",
            fontSize: 14,
            lineHeight: 1.4,
          }}
        >
          <Typography>
            Experience the Excitement of Ball Hockey Every Friday! Welcome to
            the official online hub of the FNL Hockey League, Brampton's premier
            destination for ball hockey enthusiasts. Set in the heart of our
            community at the Gore Meadows Recreation Center, our league brings
            the fast-paced, exhilarating sport of ball hockey to life every
            Friday night.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default HomePageContent;
