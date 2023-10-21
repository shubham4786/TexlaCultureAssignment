import React from "react";
import Box from "@mui/material/Box";

const DashboardBox = () => {
  const boxStyle = {
    paddingLeft: "10px",
    paddingRight: "15px",
    display: "flex",
    flexDirection: "column",
    fontWeight: "600",
  };

  const outerBox = {
    border: "1px solid #F4F6F8",
    padding: "25px",
    display: "flex",
    borderRadius: "12px",
    boxShadow: " 0px 1px 2px 0px #919EAB29",
  };
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <Box sx={{ padding: "10px" }}>
        <h6 style={{ paddingLeft: "20px", color: "#212B36" }}>
          Key Performance Indicator
        </h6>
        <Box sx={outerBox}>
          <Box sx={{ ...boxStyle, borderLeft: "3px solid #091A7A" }}>
            <span style={{ fontSize: "11px", color: "#454F5B" }}>
              Client Retention Rate
            </span>
            <span style={{ color: "#091A7A" }}>55%</span>
          </Box>
          <Box sx={{ ...boxStyle, borderLeft: "3px solid #006C9C" }}>
            <span style={{ fontSize: "11px", color: "#454F5B" }}>
              Client Satisfaction
            </span>
            <span style={{ color: "#006C9C" }}>55%</span>
          </Box>
          <Box sx={{ ...boxStyle, borderLeft: "3px solid #006124" }}>
            <span style={{ fontSize: "11px", color: "#454F5B" }}>
              Client Retention Rate
            </span>
            <span style={{ color: "#006124" }}>55%</span>
          </Box>
        </Box>
      </Box>

      <Box sx={{ padding: "10px" }}>
        <h6 style={{ paddingLeft: "20px", color: "#212B36" }}>
          Companies Status
        </h6>
        <Box sx={outerBox}>
          <Box sx={{ ...boxStyle, borderLeft: "3px solid #091A7A" }}>
            <span style={{ fontSize: "11px", color: "#454F5B" }}>Total</span>
            <span style={{ color: "#091A7A" }}>20</span>
          </Box>
          <Box sx={{ ...boxStyle, borderLeft: "3px solid #006124" }}>
            <span style={{ fontSize: "11px", color: "#454F5B" }}>Active</span>
            <span style={{ color: "#006124" }}>15</span>
          </Box>
          <Box sx={{ ...boxStyle, borderLeft: "3px solid #006C9C" }}>
            <span style={{ fontSize: "11px", color: "#454F5B" }}>New</span>
            <span style={{ color: "#006124" }}>3</span>
          </Box>
        </Box>
      </Box>
      <Box sx={{ padding: "10px" }}>
        <h6 style={{ paddingLeft: "20px", color: "#212B36" }}>
          Active User Base
        </h6>
        <Box sx={{ ...outerBox, flexDirection: "column", padding: "20px" }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginRight: "10px",
              }}
            >
              <Box
                sx={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#1939B7",
                  margin: "3px",
                }}
              ></Box>
              <span
                style={{ fontSize: "10px", fontWeight: "600", margin: "3px" }}
              >
                89% App User
              </span>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#36B37E",
                  margin: "3px",
                }}
              ></Box>
              <span
                style={{ fontSize: "10px", fontWeight: "600", margin: "3px" }}
              >
                11% Web User
              </span>
            </Box>
          </Box>
          <Box sx={{ display: "flex", marginTop: "10px" }}>
            <Box
              sx={{
                width: "178px",
                height: "12px",
                borderRadius: "15px 15px 15px 15px",
                backgroundColor: "#1939B7",
                margin: "3px",
              }}
            ></Box>
            <Box
              sx={{
                width: "22px",
                height: "12px",
                borderRadius: "15px 15px 15px 15px",
                backgroundColor: "#36B37E",
                margin: "3px",
              }}
            ></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardBox;
