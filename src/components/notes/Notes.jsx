import React from 'react'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles';

import Form from './Form';

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
  }));

const Notes = ({ notes, setNotes, addNote }) => {
  return (
    <Box sx={{ display: 'flex' }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Form notes={notes} setNotes={setNotes} addNote={addNote} />
        </Box>
    </Box>
  )
}

export default Notes