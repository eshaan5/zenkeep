import React from 'react'
import { Box, TextField, ClickAwayListener } from '@mui/material'
import { styled } from '@mui/material/styles';

import { useState } from 'react';

const Container = styled(Box) `
    display: flex;
    flex-direction: column;
    width: 600px;
    box-shadow: 0px 1px 2px 0px rgb(60 64 67 / 30%), 0px 2px 6px 2px rgb(60 64 67 / 15%);
    padding: 10px 15px;
    border-radius: 8px;
    border-color: #e0e0e0;
    margin: auto;
`

const Form = ({ addNote }) => {

    const [show, setShow] = useState(false);
    const [note, setNote] = useState({
        title: '',
        tagline: '',
        body: '',
        isPinned: false,
        isDeleted: false
    });

  return (
    <ClickAwayListener onClickAway={() => {
        setShow(false)
        if(note !== {})
            addNote(note, setNote);
    }}>
    <Container>
        {show && <>
        <TextField
            placeholder='Title'
            variant='standard'
            InputProps={{ disableUnderline: true }}
            style={{ width: '100%', marginBottom: '10px' }}
            onChange={(e) => setNote({
                ...note,
                title: e.target.value
            })}
            value={note.title}
        />
        <TextField
            placeholder='Tagline'
            variant='standard'
            InputProps={{ disableUnderline: true }}
            style={{ width: '100%', marginBottom: '10px' }}
            onChange={(e) => setNote({
                ...note,
                tagline: e.target.value
            })}
            value={note.tagline}
        /> 
        </> }
        <TextField
            placeholder='Take a note...'
            multiline
            variant='standard'
            InputProps={{ disableUnderline: true }}
            onClick={() => setShow(true)}
            onChange={(e) => setNote({
                ...note,
                body: e.target.value
            })}
            value={note.body}
        />
    </Container>
    </ClickAwayListener>
  )
}

export default Form