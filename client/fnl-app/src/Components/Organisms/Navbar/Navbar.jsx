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
import MenuIcon from "@mui/icons-material/Menu"; // For the hamburger menu
import { useAuth0 } from "@auth0/auth0-react";
import myImage from "../../../Images/FNLBlack.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

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
        { path: "/", text: "Home" },
        { path: "/Status", text: "Status" },
        { path: `/Match/${getIDMatchUp()}`, text: "Match" },
        { path: "/Scores", text: "Scores" },
        { path: "/Players", text: "Players" },
        { path: "/Schedule", text: "Schedule" },
      ]
    : [{ path: "/", text: "" }];
  const location = useLocation();
  return (
    <AppBar position="sticky" sx={{ bgcolor: "black", p: 1 }}>
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
                variant="h6"
                sx={{ fontStyle: "italic", color: "white" }}
              >
                FNL
              </Typography>
            </Box>

            <List
              sx={{
                display: "flex",
                flexDirection: "row",
                padding: 0,
                gap: "10px", // Reduce gap between items if needed
              }}
            >
              {navLinks.map(({ path, text }) => (
                <ListItem
                  key={path}
                  component={Link}
                  to={path}
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    borderBottom:
                      location.pathname === path ? "3px solid white" : "none",
                    py: 0.5, // Reduce vertical padding
                    px: 1, // Adjust horizontal padding as needed
                    "&:hover": { backgroundColor: "transparent" },
                    // Further adjustment for the active link to reduce space below
                    marginBottom: location.pathname === path ? "-3px" : 0, // Adjust if active link has too much space below
                    justifyContent: "center",
                  }}
                >
                  <ListItemText primary={text} sx={{ my: 0 }} />{" "}
                  {/* Minimize vertical margin within the item */}
                </ListItem>
              ))}
            </List>
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
          <IconButton
            sx={{ color: "white", ml: "auto" }}
            onClick={toggleSidebar}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={isSidebarOpen} onClose={toggleSidebar}>
            <List sx={{ width: "250px" }}>
              {navLinks.map(({ path, text }) => (
                <ListItem
                  button
                  key={path}
                  component={Link}
                  to={path}
                  onClick={toggleSidebar}
                >
                  <ListItemText primary={text} />
                </ListItem>
              ))}
              <ListItem button onClick={handleAuthAction}>
                <ListItem>
                  {isAuthenticated ? <ExitToAppIcon /> : <AccountCircleIcon />}
                </ListItem>
              </ListItem>
            </List>
          </Drawer>
        </>
      )}
    </AppBar>
  );
}

export default Navbar;
