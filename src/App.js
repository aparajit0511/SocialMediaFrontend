import React, { useContext, useState } from "react";
import {
  Paper,
  Container,
  Box,
  CssBaseline,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import ShowPosts from "./components/ShowPosts";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import StyledContainer from "./styles/StyledContainer";
import { SocialMediaData } from "./ContextAPI/SocialMediaContext";

function App() {
  const { setUpdatedData } = useContext(SocialMediaData);

  const onClickHandler = () => {
    setUpdatedData("");
  };
  return (
    <>
      <StyledContainer>
        <ShowPosts />
        <Link to="/addNewPost">
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={onClickHandler}
          >
            Create Post
          </Button>
        </Link>
      </StyledContainer>
    </>
  );
}

export default App;
