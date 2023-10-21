import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import searchIcon from "../assets/ic_search.png";
import TableData from "./TableData";

const DashBoardTable = () => {
  const currencies = [
    {
      value: "All",
      label: "All",
    },
  ];
  return (
    <Box sx={{ padding: "10px", width: "600px" }}>
      <h6 style={{ paddingLeft: "20px", color: "#212B36" }}>
        Onboarded Companies
      </h6>
      <Divider
        // orientation="vertical"
        sx={{ border: "0.7px dashed #919EAB3D" }}
        flexItem
      />
      <Box
        sx={{
          margin: "20px 0",
          height: "40px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <TextField
          id="outlined-select"
          select
          label="Service type"
          defaultValue="All"
          sx={{ width: "20%" }}
          size="small"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <OutlinedInput
          sx={{ width: "80%", marginLeft: "10px" }}
          placeholder="Search client or invoice number..."
          id="outlined-adornment"
          startAdornment={
            <InputAdornment position="start">
              <img src={searchIcon} alt="" />
            </InputAdornment>
          }
        />
      </Box>

      <TableData />
    </Box>
  );
};

export default DashBoardTable;
