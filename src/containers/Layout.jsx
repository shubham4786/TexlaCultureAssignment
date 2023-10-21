import React from "react";
import NavBar from "../components/NavBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

const Layout = (props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar />
      <Divider
        orientation="vertical"
        sx={{ border: "0.8px dashed #919EAB3D" }}
        flexItem
      />
      {props.children}
    </Box>
  );
};

export default Layout;
