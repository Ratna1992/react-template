import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          React Template
        </Typography>
        <Button color="inherit" component={RouterLink} to="/">Home</Button>
        <Button color="inherit" component={RouterLink} to="/props">Props</Button>
        <Button color="inherit" component={RouterLink} to="/hooks">Hooks</Button>
        <Button color="inherit" component={RouterLink} to="/forms">Forms</Button>
        <Button color="inherit" component={RouterLink} to="/api">API</Button>
        <Button color="inherit" component={RouterLink} to="/cart">CART</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
