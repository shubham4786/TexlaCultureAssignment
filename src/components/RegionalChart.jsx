import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import Box from "@mui/material/Box";

const RegionalChart = () => {
  const data = [
    { value: 20, label: "North" },
    { value: 5, label: "South" },
    { value: 6, label: "East" },
    { value: 1, label: "West" },
  ];

  const size = {
    width: 350,
    height: 350,
  };
  return (
    <Box sx={{ padding: "10px" }}>
      <h6 style={{ paddingLeft: "20px", color: "#212B36" }}>
        Regional Metrics
      </h6>
      <Box
        sx={{
          border: "1px solid #F4F6F8",
          boxShadow: " 0px 1px 2px 0px #919EAB29",
          borderRadius: "12px",
        }}
      >
        <PieChart
          colors={["#36B37E", "#FF5630", "#FFAB00", "#3366FF"]}
          series={[{ data, innerRadius: 65 }]}
          margin={{ top: 70, bottom: 30, left: 50, right: 50 }}
          slotProps={{
            legend: {
              direction: "row",
              position: { vertical: "top", horizontal: "middle" },
              itemMarkWidth: 10,
              itemMarkHeight: 10,
            },
          }}
          {...size}
        />
      </Box>
    </Box>
  );
};

export default RegionalChart;
