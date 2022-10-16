import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';

// components
import Header from './Header';

const AppBar = styled(MuiAppBar) `
  z-index: 1201;
  background-color: #fff;
  height: 70px;
  box-shadow: 0 1px 0 0 #dadce0;
`;

const Navbar = () => {

  return (
    <Box sx={{ display: 'flex' }}>
      <Header AppBar={AppBar} />
    </Box>
  );
}

export default Navbar;