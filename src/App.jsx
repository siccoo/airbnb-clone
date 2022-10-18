import { Box, CssBaseline, Container } from "@mui/material";

// Components
import Header from "./components/Header";
import OptionsTab from "./components/OptionsTab";
import LocationCards from "./components/LocationCards";
import "./App.css";

function App() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Box>
          <Header />
          <OptionsTab />
          <Container maxWidth="xl" sx={{ mb: 3 }}>
            <LocationCards />
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default App;
