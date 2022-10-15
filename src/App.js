import "./App.css";
import NavDrawer from "./components/NavDrawer";
import { useEffect, useState } from "react";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import Notes from "./components/notes/Notes";

import { doc, setDoc } from "firebase/firestore";
import db from "./index";

import { v4 as uuidv4 } from "uuid";

const addNote = async (note, setNote) => {
  if(note.title !== '' || note.tagline !== '' || note.body !== '') {
  const newNote = {
    title: note.title,
    tagline: note.tagline,
    body: note.body,
    isPinned: false,
  }
  setNote({title: '', tagline: '', body: '', isPinned: false});
  console.log(newNote);
  const newNoteRef = await setDoc(doc(db, "notes", uuidv4()), newNote);
  }
};

const App = () => {
  const [notes, setNotes] = useState(null);
  const [deletedNotes, setDeletedNotes] = useState([]);
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    firebase
      .firestore()
      .collection("notes")
      .onSnapshot((serverUpdate) => {
        const notesArray = serverUpdate.docs.map((doc) => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        console.log(notesArray);
        setNotes(notesArray);
      }); // whenever the notes collection changes, function inside onSnapshot will be called
  }, []);

  return (
    <div className="App">
      <NavDrawer />
      <Notes notes={notes} setNotes={setNotes} addNote={addNote} />
    </div>
  );
};

export default App;
