import React from "react";
import StyledContainer from "../styles/StyledContainer";
import ShowpostContainer from "../styles/ShowpostContainer";
import { Button, TextField, Paper, Typography } from "@mui/material";

function AddPost() {
  return (
    <StyledContainer>
      <ShowpostContainer title="Add / Update Post">
        AddPost
        <Paper
          elevation={3}
          style={{
            padding: "16px",
            marginTop: "16px",
            backgroundColor: "white",
          }}
        >
          <form>
            <TextField label="Title" fullWidth margin="normal" />
            <TextField
              label="Content"
              fullWidth
              multiline
              rows={4}
              margin="normal"
            />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </form>
        </Paper>
      </ShowpostContainer>
    </StyledContainer>
  );
}

export default AddPost;
