import React from 'react';
// import { Link } from 'react-router-dom';
import { Stack, AppBar, Toolbar, Typography } from '@mui/material';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar className="navBar" sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">Add your art</Typography>
        <Typography variant="h6">Find art</Typography>
        <Typography variant="h6">Update your art</Typography>
        <Typography variant="h6">Delete your art</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
