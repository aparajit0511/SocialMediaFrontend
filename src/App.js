import { Paper, Container, Box, CssBaseline, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "background.default",
          padding: 0, // Ensure no padding from the Box component
          margin: 0,
        }}
      >
        <Container
          maxWidth="lg" // Ensure the container takes full width up to a reasonable limit
          sx={{
            padding: 0, // Ensure no padding from the Container component
          }}
        >
          <Grid>
            <Grid item xl={12}>
              <Paper
                elevation={10}
                sx={{
                  width: "100%", // Match the width of the parent container
                  padding: 2, // Add some padding for better appearance
                  fontFamily: "Arial, sans-serif", // Customize the font family
                  fontSize: "1.2rem", // Customize the font size
                  textAlign: "center", // Center the text
                }}
              >
                Social Media App
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
