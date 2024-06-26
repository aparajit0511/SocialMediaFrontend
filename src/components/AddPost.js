import React, { useState, useContext } from "react";
import StyledContainer from "../styles/StyledContainer";
import ShowpostContainer from "../styles/ShowpostContainer";
import { Button, TextField, Paper, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate, Link } from "react-router-dom";
import { SocialMediaData } from "../ContextAPI/SocialMediaContext";

function AddPost() {
  const { UpdatedData } = useContext(SocialMediaData);
  console.log("UpdatedData", UpdatedData);
  const [postName, setpostName] = useState("");
  const [description, setdescription] = useState("");

  const navigate = useNavigate();

  const onPostHandler = (event) => {
    console.log("post title ", event.target.value);
    setpostName(event.target.value);
  };

  const onDescriptionHandler = (event) => {
    console.log("description ", event.target.value);
    setdescription(event.target.value);
  };

  const onSumbitHandler = (event) => {
    event.preventDefault();

    const socialMedia = { postName, description };
    fetch("http://localhost:8080/socialmedia", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(socialMedia),
    }).then(() => {
      console.log("New Post added");
    });

    setTimeout(() => {
      navigate(`/`);
    }, 3000);
  };

  return (
    <StyledContainer>
      <ShowpostContainer title="Add / Update Post">
        <Paper
          elevation={3}
          style={{
            padding: "16px",
            marginTop: "16px",
            backgroundColor: "white",
          }}
        >
          <form>
            <TextField
              label="Title"
              fullWidth
              margin="normal"
              onChange={onPostHandler}
            />
            <TextField
              label="Content"
              fullWidth
              multiline
              rows={4}
              margin="normal"
              onChange={onDescriptionHandler}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              startIcon={<SendIcon />}
              onClick={onSumbitHandler}
            >
              Send
            </Button>
            <Link to="/">
              <Button variant="contained" color="secondary">
                Go Back
              </Button>
            </Link>
          </form>
        </Paper>
      </ShowpostContainer>
    </StyledContainer>
  );
}

export default AddPost;
