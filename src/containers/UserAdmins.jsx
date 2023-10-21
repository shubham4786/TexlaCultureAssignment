import React from "react";
import Box from "@mui/material/Box";
import NavHeader from "../components/NavHeader";

const UserAdmins = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <NavHeader />

      <h3 style={{ padding: "10px 30px" }}>User Admins</h3>
    </Box>
  );
};

export default UserAdmins;
