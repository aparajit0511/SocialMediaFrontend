import React, { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import {
  Paper,
  Container,
  Box,
  CssBaseline,
  Grid,
  Typography,
  Input,
  backdropClasses,
  Button,
} from "@mui/material";

function ShowPosts() {
  const [SMdata, setSMdata] = useState("");

  useEffect(() => {
    async function callSMData() {
      const data = await fetch("http://localhost:8080/")
        .then((res) => res.json())
        .catch(console.log("Data aint coming from backend"));

      setSMdata(data);
    }
    callSMData();
  }, []);

  console.log("Show SM data", SMdata);

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
        overflowY: "scroll",
        scrollbarWidth: "none",
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          //   alignItems: "left",
          width: "100%",
          marginTop: "10px",
        }}
      >
        {SMdata &&
          SMdata.map((result, index) => (
            <>
              <Box
                key={result.id}
                width="100%" // Ensure the Box spans the full width of its container
                maxWidth="800px" // Limit the maximum width for better readability
                marginBottom="40px" // Add spacing between posts
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  background:
                    "linear-gradient(to bottom right #51d0de,#bf4aa8,#d9d9d9)",
                }}
              >
                <div>
                  <Paper
                    elevation={10}
                    style={{
                      boxSizing: "border-box", // Ensures padding and margin are included in the element's total width
                      margin: "10px",
                    }}
                  >
                    <Typography
                      variant="h5"
                      fontSize="lg"
                      fontFamily={"aesthetic"}
                      style={{ textAlign: "left", fontWeight: "bold" }}
                    >
                      {result.postName}
                    </Typography>
                  </Paper>
                  <Paper
                    elevation={10}
                    style={{
                      boxSizing: "border-box", // Ensures padding and margin are included in the element's total width
                      margin: "10px",
                    }}
                  >
                    <Typography
                      variant="h5"
                      fontSize="lg"
                      fontFamily={"aesthetic"}
                      style={{ textAlign: "left", fontWeight: "bold" }}
                    >
                      {result.description}
                    </Typography>
                  </Paper>
                  <Button variant="contained" startIcon={<UpdateIcon />}>
                    Update
                  </Button>
                  <Button variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                  </Button>
                </div>
              </Box>
            </>
          ))}
      </div>
    </div>
  );
}

export default ShowPosts;
