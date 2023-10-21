import React from "react";
import Box from "@mui/material/Box";
import searchIcon from "../assets/ic_search.png";
import langIcon from "../assets/ic_en.png";
import Badge from "@mui/material/Badge";
import notificationIcon from "../assets/ic_notifications.png";
import groupIcon from "../assets/ic_user_group.png";
import containerIcon from "../assets/container.png";

const NavHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "21px",
        // border: "1px solid black",
        padding: "5px 28px",
      }}
    >
      <Box>
        <img src={searchIcon} alt="" />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "130px",
          height: "28px",
        }}
      >
        <img src={langIcon} width="20px" height="14px" alt="" />

        <Badge badgeContent={4} color="error">
          <img src={notificationIcon} width="17px" height="17px" alt="" />
        </Badge>

        <img src={groupIcon} width="17px" height="17px" alt="" />

        <img src={containerIcon} width="28px" height="28px" alt="" />
      </Box>
    </Box>
  );
};

export default NavHeader;
