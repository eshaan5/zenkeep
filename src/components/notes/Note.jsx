import { Card, CardActions, CardContent, Typography, Box, Modal, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { useState } from "react";

import { DeleteOutlineOutlined, PushPinOutlined } from "@mui/icons-material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const StyledCard = styled(Card)`
  width: 240px;
  margin: 8px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  text-align: left;
  cursor: pointer;
`;

const Note = ({ note, updateNotePin, deleteNote, updateNote }) => {
  const [open, setOpen] = useState(false);
  const [noteHere, setNoteHere] = useState(note)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <StyledCard>
        <CardContent onClick={handleOpen}>
          <Typography variant="h5">{note.title}</Typography>
          <Typography variant="h6">{note.tagline}</Typography>
          <Typography>{note.body}</Typography>
        </CardContent>
        <CardActions>
          <DeleteOutlineOutlined
            fontSize="small"
            style={{ marginLeft: "auto", cursor: "pointer" }}
            onClick={() => {
              deleteNote(note.id);
            }}
          />
          <PushPinOutlined
            fontSize="small"
            className={note.isPinned ? "toggle" : ""}
            onClick={() => {
              updateNotePin(note.id, note.isPinned);
            }}
            style={{ cursor: "pointer" }}
          />
        </CardActions>
      </StyledCard>

      <Modal open={open} onClose={() => {
        updateNote(note.id, noteHere);
        handleClose();
      }} 
      aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <TextField
            placeholder="Title"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            style={{ width: "100%", marginBottom: "10px" }}
            onChange={(e) =>
              setNoteHere({
                ...noteHere,
                title: e.target.value,
              })
            }
            value={noteHere.title}
          />
          <TextField
            placeholder="Tagline"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            style={{ width: "100%", marginBottom: "10px" }}
            onChange={(e) =>
              setNoteHere({
                ...noteHere,
                tagline: e.target.value,
              })
            }
            value={noteHere.tagline}
          />
          <TextField
            placeholder="Take a note..."
            multiline
            variant="standard"
            InputProps={{ disableUnderline: true }}
            onChange={(e) =>
              setNoteHere({
                ...noteHere,
                body: e.target.value,
              })
            }
            value={noteHere.body}
          />
        </Box>
        {/* <Button variant="contained">Save</Button> */}
      </Modal>
    </>
  );
};

export default Note;
