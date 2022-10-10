import * as React from 'react';
import { Toolbar, Typography, IconButton } from '@mui/material/';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

const Title = styled(Typography) `
    color: #5f6368;
    font-size: 24px;
    margin-left: 25px;
`

const Header = ({ open, handleDrawer, AppBar }) => {
  return (
    <AppBar open={open}>
        <Toolbar>
          <IconButton
            onClick={handleDrawer}
            edge="start"
            sx={{
              marginRight: 4,
            }}
          >
            <MenuIcon />
          </IconButton>
          <img src="https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png" alt="logo" style={{ width: 60, borderRadius: 20 }} />
          <Title>ZenKeep</Title>
        </Toolbar>
      </AppBar>
  )
}

export default Header