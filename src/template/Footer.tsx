import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <AppBar position="fixed" style={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Typography variant="body1" color="inherit" style={{ flexGrow: 1, textAlign: 'center' }}>
          © 2024 MyApp. All rights reserved.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
