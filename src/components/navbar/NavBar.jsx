import React from 'react';
import { AppBar, IconButton, Toolbar, Typography, ListItemIcon } from '@mui/material';
import DehazeRoundedIcon from '@mui/icons-material/DehazeRounded';

const NavBar = () => {
    return (
       <AppBar position="static">
       <Toolbar>
       <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
             <DehazeRoundedIcon/>
          </IconButton>
        <Typography>
            Image Finder
        </Typography>
       </Toolbar>
       </AppBar>
    );
}

export default NavBar;
