import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Typography,
} from "@mui/material";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import UI from "./components/UI";
import { Box, Grid } from "@mui/material";
import QueryData from "./components/Main/QueryData";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF0081",
    },
    secondary: {
      main: "#1f2937",
    },
    white: {
      main: "#ffffff",
    },

    btnColor: {
      main: "rgba(252,0,127,0.15)",
    },
  },
});

function App() {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Box sx={{ width: "100%" }}>
          <Grid container rowSpacing={0}>
            <Grid item xs={12}>
              <NavBar />
            </Grid>
            <Grid item xs={2}>
              <SideBar />
            </Grid>
            <Grid item xs={10}>
              <QueryData />
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </CssBaseline>
  );
}

export default App;
