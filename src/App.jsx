import { Box, CssBaseline, Container } from "@mui/material";

// Components
import Header from "./components/Header";
import OptionsTab from "./components/OptionsTab";
import LocationCards from "./components/LocationCards";
import Footer from "./components/Footer";
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
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            height: 100,
            overflowY: 'scroll',
          }}
        >
          <Container maxWidth="xl" sx={{ mb: 3 }}>
            <LocationCards />
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
              }}
            >
            </Box>
          </Container>
        </Box>
        <Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default App;
