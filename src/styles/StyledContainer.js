import React from "react";
import { CssBaseline, Paper, Typography } from "@mui/material";

const StyledContainer = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          backgroundColor: "#332f2f",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      >
        <Paper
          elevation={3}
          style={{
            width: "100%",
            boxSizing: "border-box",
            background:
              "linear-gradient(to bottom right,#beef00 , #ff0028, #657a00, #1400c6)",
          }}
        >
          <Typography
            variant="h2"
            fontSize="xl"
            fontFamily={"aesthetic"}
            style={{ textAlign: "center" }}
          >
            Social Media
          </Typography>
        </Paper>
        {children}
      </div>
    </>
  );
};

export default StyledContainer;
