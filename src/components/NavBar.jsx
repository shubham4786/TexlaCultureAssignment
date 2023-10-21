import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import dashboardIcon from "../assets/icon_dashboard.png";
import bankIcon from "../assets/icon_bank.png";
import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate, useLocation } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeButton, setActiveButton] = useState("");

  useEffect(() => {
    const currentPath = location.pathname;

    switch (currentPath) {
      case "/":
        setActiveButton("home");
        break;
      case "/companies":
        setActiveButton("companies");
        break;
      case "/support":
        setActiveButton("support");
        break;
      case "/user_admins":
        setActiveButton("user_admins");
        break;

      default:
        setActiveButton("");
        break;
    }
  }, [location]);

  const logoStyle = {
    fontFamily: "Lexend",
    fontWeight: "600",
    fontSize: "23.40px",
    lineHeight: "29px",
    padding: "3.3px",
  };

  const BtnOuter = {
    borderRadius: "7px",
    width: "217px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const BtnInner = {
    paddingLeft: "8px",
    fontFamily: "Public Sans",
    fontWeight: "700",
    fontSize: "9.67px",
    lineHeight: "15px",
    color: "#637381",
  };

  return (
    <Box sx={{ width: "246px", minHeight: "100vh", padding: "10px" }}>
      <Box sx={{ textAlign: "center", marginTop: "34px", color: "#1939B7" }}>
        <span style={{ ...logoStyle, border: "2.35px solid" }}>TEXLA</span>
        <span style={logoStyle}>CULTURE</span>
      </Box>

      <Box
        sx={{
          marginTop: "54px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            padding: "15px 0px 7px 14px",
            borderRadius: "7px",
            width: "205px",
          }}
        >
          <span
            style={{
              fontWeight: "700",
              fontSize: "9.67px",
              lineHeight: "15px",
              color: "#637381",
            }}
          >
            GENERAL
          </span>
        </Box>
        <Button
          className={` ${activeButton === "home" ? "activeListItem" : ""}`}
          sx={BtnOuter}
          onClick={() => navigate("/")}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={dashboardIcon} alt="" />
            <span style={BtnInner}>Dashboard</span>
          </Box>
          <ExpandMoreIcon />
        </Button>
        <Button
          sx={BtnOuter}
          className={` ${activeButton === "companies" ? "activeListItem" : ""}`}
          onClick={() => navigate("/companies")}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={bankIcon} alt="" />
            <span style={BtnInner}>Companies</span>
          </Box>
          <NavigateNextIcon />
        </Button>
        <Button
          sx={BtnOuter}
          className={` ${activeButton === "support" ? "activeListItem" : ""}`}
          onClick={() => navigate("/support")}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={bankIcon} alt="" />
            <span style={BtnInner}>Support & Tickets</span>
          </Box>
          <NavigateNextIcon />
        </Button>
        <Button
          sx={BtnOuter}
          className={` ${
            activeButton === "user_admins" ? "activeListItem" : ""
          }`}
          onClick={() => navigate("/user_admins")}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={bankIcon} alt="" />
            <span style={BtnInner}>User Admins</span>
          </Box>
          <NavigateNextIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default NavBar;
