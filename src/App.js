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

function App() {
  return (
    <>
      <StyledContainer>
        <ShowPosts />
        <Link to="/addNewPost">
          <Button variant="contained" startIcon={<AddIcon />}>
            Create Post
          </Button>
        </Link>
      </StyledContainer>
    </>
  );
}

export default App;
