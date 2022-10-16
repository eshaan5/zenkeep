import React from 'react'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles';

import Form from './Form';

import PaginatedItems from './PaginatedItems';

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
  }));

const Notes = ({ notes, addNote, updateNotePin, deleteNote, updateNote }) => {
  return (
    <Box sx={{ display: 'flex' }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Form addNote={addNote} />
        <PaginatedItems notes={notes} updateNotePin={updateNotePin} deleteNote={deleteNote} itemsPerPage={6} updateNote={updateNote} />
        </Box>
    </Box>
  )
}

export default Notes