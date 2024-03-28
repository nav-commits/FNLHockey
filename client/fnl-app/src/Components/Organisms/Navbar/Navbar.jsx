import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import mainContext from "../../../Context/Context";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useAuth0 } from "@auth0/auth0-react"; // Ensure this import is added
import "./Navbar.css";
import myImage from "../../../Images/FNLBlack.png";

function Navbar() {
  const { getID } = useContext(mainContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0(); // Use useAuth0 here

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const getIDMatchUp = () => getID;

  const handleAuthAction = () => {
    if (isAuthenticated) {
      logout({ returnTo: window.location.origin });
    } else {
      loginWithRedirect();
    }
  };
  // Only show certain links if authenticated
  const navLinks = isAuthenticated
    ? [
        { path: "/", text: "Home" },
        { path: "/Status", text: "Status" },
        { path: `/Match/${getIDMatchUp()}`, text: "Match" },
        { path: "/Scores", text: "Scores" },
        { path: "/Players", text: "Players" },
      ]
    : [{ path: "/", text: "" }];
  return (
    <nav className="nav--container">
      <div className="logo--container">
        <Link to="/">
          <img
            src={myImage}
            alt="Logo"
            style={{ height: "60px", width: "60px" }}
          />
        </Link>
        <h1 className="FNL-hockey">FNL</h1>
      </div>
      <button onClick={toggleSidebar} className="hamburger-menu">
        ☰
      </button>
      {isSidebarOpen && (
        <>
          <div className="sidebar">
            {navLinks.map(({ path, text }) => (
              <NavLink
                key={path}
                to={path}
                className="link--container"
                activeclassname="active"
              >
                {text}
              </NavLink>
            ))}
            <IconButton
              color="inherit"
              onClick={handleAuthAction}
              aria-label={isAuthenticated ? "Logout" : "Login"}
            >
              {isAuthenticated ? <ExitToAppIcon /> : <AccountCircleIcon />}
            </IconButton>
          </div>
          <div
            className="overlay"
            onClick={toggleSidebar}
            style={{
              position: "fixed",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 100,
            }}
          ></div>
        </>
      )}
      <div className="link-container--container">
        {navLinks.map(({ path, text }) => (
          <NavLink
            key={path}
            to={path}
            className="link--container"
            activeclassname="active"
          >
            {text}
          </NavLink>
        ))}
        <IconButton
          color="inherit"
          onClick={handleAuthAction}
          aria-label={isAuthenticated ? "Logout" : "Login"}
          style={{ marginLeft: "auto" }} // Aligns the icon to the right
        >
          {isAuthenticated ? <ExitToAppIcon /> : <AccountCircleIcon />}
        </IconButton>
      </div>
    </nav>
  );
}

export default Navbar;
