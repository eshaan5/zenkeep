import * as React from 'react';
import { Toolbar, Typography } from '@mui/material/';
import { styled } from '@mui/material/styles';

const Title = styled(Typography) `
    color: #5f6368;
    font-size: 24px;
    margin-left: 25px;
`

const Header = ({ AppBar }) => {
  return (
    <AppBar>
        <Toolbar>
          <img src="https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png" alt="logo" style={{ width: 60, borderRadius: 20 }} />
          <Title>ZenKeep</Title>
        </Toolbar>
      </AppBar>
  )
}

export default Header