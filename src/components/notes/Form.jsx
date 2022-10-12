import React from 'react'
import { Box, TextField, ClickAwayListener } from '@mui/material'
import { styled } from '@mui/material/styles';

import { useState, useContext } from 'react';

import { DataContext } from '../../context/DataProvider';

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

const Form = () => {

    const [show, setShow] = useState(false);

    const { notes, setNotes } = useContext(DataContext);

  return (
    <ClickAwayListener onClickAway={() => setShow(false)}>
    <Container>
        {show && <>
        <TextField
            placeholder='Title'
            variant='standard'
            InputProps={{ disableUnderline: true }}
            style={{ width: '100%', marginBottom: '10px' }}
        />
        <TextField
            placeholder='Tagline'
            variant='standard'
            InputProps={{ disableUnderline: true }}
            style={{ width: '100%', marginBottom: '10px' }}
        /> 
        </> }
        <TextField
            placeholder='Take a note...'
            multiline
            variant='standard'
            InputProps={{ disableUnderline: true }}
            onClick={() => setShow(true)}
        />
    </Container>
    </ClickAwayListener>
  )
}

export default Form