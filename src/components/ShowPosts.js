import React, { useState, useEffect, useContext } from "react";
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
import ShowpostContainer from "../styles/ShowpostContainer";
import { Link } from "react-router-dom";
import { SocialMediaData } from "../ContextAPI/SocialMediaContext";

function ShowPosts() {
  const [SMdata, setSMdata] = useState("");

  const { setUpdatedData } = useContext(SocialMediaData);

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

  const onUpdateHandler = (item) => {
    console.log("On update click", item);
    setUpdatedData(item);
  };

  return (
    <ShowpostContainer title="Show Posts">
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
                key={index}
                width="100%" // Ensure the Box spans the full width of its container
                maxWidth="800px" // Limit the maximum width for better readability
                marginBottom="40px" // Add spacing between posts
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  background: "#044a48",
                  // "linear-gradient(to bottom right #51d0de,#bf4aa8,#d9d9d9)",
                }}
                sx={{
                  padding: "16px",
                  marginTop: "16px",
                  background:
                    "linear-gradient(to bottom right, #51d0de, #bf4aa8, #d9d9d9)",
                  borderRadius: "8px",
                }}
              >
                <div>
                  <Paper
                    elevation={3}
                    style={{ padding: "16px", marginTop: "16px" }}
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
                    elevation={3}
                    style={{ padding: "16px", marginTop: "16px" }}
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
                  <div>
                    <Link to="/addNewPost">
                      <Button
                        variant="contained"
                        startIcon={<UpdateIcon />}
                        onClick={() => onUpdateHandler(result)}
                      >
                        Update
                      </Button>
                    </Link>

                    <Button variant="outlined" startIcon={<DeleteIcon />}>
                      Delete
                    </Button>
                  </div>
                </div>
              </Box>
            </>
          ))}
      </div>
    </ShowpostContainer>
  );
}

export default ShowPosts;
