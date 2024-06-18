import React, { useState, useEffect } from "react";
import {
  Paper,
  Container,
  Box,
  CssBaseline,
  Grid,
  Typography,
  Input,
} from "@mui/material";

function ShowPosts() {
  //   const [first, setfirst] = useState(second);
  return (
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
        // marginLeft: "120px",
        // marginRight: "120px",
        padding: "20px",
        // border: "12px solid pink",
      }}
    >
      <Typography
        level="h3"
        variant="h4"
        fontFamily={"aesthetic"}
        style={{ fontWeight: "bold" }}
      >
        Show Posts
      </Typography>
      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          marginTop: "10px",
        }}
      >
        <Input size="lg" variant="solid" />
      </div> */}
    </div>
  );
}

export default ShowPosts;
