import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import mainContext from "../../../Context/Context";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth0 } from "@auth0/auth0-react";
import myImage from "../../../Images/FNLBlack.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import HomeIcon from "@mui/icons-material/Home"; // Example icon
import StatusIcon from "@mui/icons-material/Assessment"; // Example icon
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer"; // Example icon
import ScoreIcon from "@mui/icons-material/Score"; // Example icon
import GroupIcon from "@mui/icons-material/Group"; // Example icon
import EventIcon from "@mui/icons-material/Event"; // Example icon
import ListItemIcon from "@mui/material/ListItemIcon";

function Navbar() {
  const { getID } = useContext(mainContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const getIDMatchUp = () => getID;
  const handleAuthAction = () => {
    if (isAuthenticated) {
      logout({ returnTo: window.location.origin });
    } else {
      loginWithRedirect();
    }
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navLinks = isAuthenticated
    ? [
        { path: "/", text: "Home", icon: <HomeIcon /> },
        { path: "/Status", text: "Status", icon: <StatusIcon /> },
        {
          path: `/Match/${getIDMatchUp()}`,
          text: "Match",
          icon: <SportsSoccerIcon />,
        },
        { path: "/Scores", text: "Scores", icon: <ScoreIcon /> },
        { path: "/Players", text: "Players", icon: <GroupIcon /> },
        { path: "/Schedule", text: "Schedule", icon: <EventIcon /> },
      ]
    : [{ path: "/", text: "" }];
  const location = useLocation();
  return (
    <AppBar sx={{ bgcolor: "black", p: 0.5 }}>
      {!isMobile && (
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "space-evenly",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <Link to="/">
                <img
                  src={myImage}
                  alt="Logo"
                  style={{ height: "60px", width: "60px" }}
                />
              </Link>
              <Typography
                variant="h4"
                sx={{ fontStyle: "italic", color: "white" }}
              >
                FNL
              </Typography>
            </Box>

            {isAuthenticated && (
              <Tabs
                value={location.pathname}
                textColor="inherit"
                variant="scrollable"
                scrollButtons="auto"
                sx={{
                  ".MuiTab-root": { color: "grey.500" },
                  ".Mui-selected": { color: "grey.100" },
                  ".MuiTabs-indicator": { backgroundColor: "#c0c0c0" },
                  pb: 0,
                }}
              >
                {navLinks.map((link, index) => (
                  <Tab
                    key={index}
                    label={link.text}
                    value={link.path}
                    component={Link}
                    to={link.path}
                    sx={{
                      color: "white",
                      textDecoration: "none",
                      pb: 0,
                      mb: 0,
                    }}
                  />
                ))}
              </Tabs>
            )}

            <IconButton
              onClick={handleAuthAction}
              sx={{ color: "white" }}
              aria-label={isAuthenticated ? "Logout" : "Login"}
            >
              {isAuthenticated ? <ExitToAppIcon /> : <AccountCircleIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      )}

      {isMobile && (
        <>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <Link to="/">
              <img
                src={myImage}
                alt="Logo"
                style={{ height: "60px", width: "60px" }}
              />
            </Link>
            <Typography
              variant="h6"
              sx={{ fontStyle: "italic", color: "white" }}
            >
              FNL
            </Typography>
            <IconButton
              sx={{ color: "white", ml: "auto" }}
              onClick={toggleSidebar}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Drawer anchor="left" open={isSidebarOpen} onClose={toggleSidebar}>
            <List sx={{ width: "250px" }}>
              {navLinks.map(({ path, text, icon }) => (
                <ListItem
                  button
                  key={path}
                  component={Link}
                  to={path}
                  onClick={toggleSidebar}
                  sx={{
                    "& .MuiListItemIcon-root": {
                      minWidth: "auto",
                    },
                    display: "flex",
                    justifyContent: "space-around",
                    gap: "20px",
                    color: "black",
                    alignItems: "center",
                  }}
                >
                  <ListItemIcon sx={{ color: "black" }}>{icon}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
              <Box sx={{ ml: 2, mt: 2 }} onClick={handleAuthAction}>
                {isAuthenticated ? (
                  <Box
                    sx={{ display: "flex", gap: "20px", alignItems: "center" }}
                  >
                    <ExitToAppIcon /> Logout
                  </Box>
                ) : (
                  <Box
                    sx={{ display: "flex", gap: "20px", alignItems: "center" }}
                  >
                    <AccountCircleIcon />
                    Login
                  </Box>
                )}
              </Box>
            </List>
          </Drawer>
        </>
      )}
    </AppBar>
  );
}

export default Navbar;
