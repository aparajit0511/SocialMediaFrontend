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

function App() {
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
          // margin: "0.5px",
          // padding: "0.3px",
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
            boxSizing: "border-box", // Ensures padding and margin are included in the element's total width
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
          {/* Add additional content here */}
        </Paper>
        <ShowPosts />
        <Link to="/addNewPost">
          <Button variant="contained" startIcon={<AddIcon />}>
            Create Post
          </Button>
        </Link>
      </div>
    </>
  );
}

export default App;
