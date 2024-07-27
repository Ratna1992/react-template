import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import TemplateRoutes from './routing/TemplateRoutes';
import Header from './template/Header';
import Footer from './template/Footer';
const App: React.FC = () => {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <Box component="main" style={{ paddingLeft: '30px' }}>
        <TemplateRoutes />
      </Box>
      <Footer />
    </Router>
  );
};

export default App;
