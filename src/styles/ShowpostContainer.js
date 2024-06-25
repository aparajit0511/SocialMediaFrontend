import React from "react";
import { CssBaseline, Paper, Typography } from "@mui/material";

function ShowpostContainer({ title, children }) {
  return (
    <>
      {" "}
      <CssBaseline />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          background:
            "linear-gradient(to bottom right, #a0d2eb, #e5eaf5, #d0bdf4, #8458B3, #a28089)",
          width: "90%",
          height: "80%",
          margin: "20px",
          padding: "20px",
          overflowY: "scroll",
          scrollbarWidth: "none",
        }}
      >
        {title && (
          <Typography
            level="h3"
            variant="h4"
            fontFamily={"aesthetic"}
            style={{ fontWeight: "bold" }}
          >
            {title}
          </Typography>
        )}
        {children}
      </div>
    </>
  );
}

export default ShowpostContainer;
