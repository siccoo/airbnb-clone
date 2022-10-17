import { Box, CssBaseline } from '@mui/material';
import Header from './components/Header';
import OptionsTab from './components/OptionsTab';
import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh'
        }}
      >
        <Box>
          <Header />
          <OptionsTab />
        </Box>
      </Box>
    </>
  );
}

export default App;
