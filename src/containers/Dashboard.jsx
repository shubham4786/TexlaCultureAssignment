import React, { useState } from "react";
import Box from "@mui/material/Box";
import NavHeader from "../components/NavHeader";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import DashboardBox from "../components/DashboardBox";
import DashBoardTable from "../components/DashBoardTable";
import RegionalChart from "../components/RegionalChart";

const Dashboard = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <NavHeader />

      <h5 style={{ padding: "10px 30px" }}>Client Management</h5>

      <Box sx={{ width: "96%", typography: "body1", padding: "0 15px" }}>
        <TabContext value={value}>
          <Box>
            <TabList
              onChange={handleChange}
              color="#212B36"
              aria-label="lab API tabs example"
            >
              <Tab label="Dashboard" value="1" />
              <Tab label="Clients Details" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <DashboardBox />
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <DashBoardTable />
              <RegionalChart />
            </Box>
          </TabPanel>
          <TabPanel value="2">
            <h3>Clients Details</h3>
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
};

export default Dashboard;
