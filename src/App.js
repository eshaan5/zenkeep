import "./App.css";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import Notes from "./components/notes/Notes";

import { doc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";
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
  setNote({title: '', tagline: '', body: '', isPinned: false, isDeleted: false});
  await setDoc(doc(db, "notes", uuidv4()), newNote);
  }
};

const updateNotePin = async (id, value) => {
  const noteRef = doc(db, "notes", id);
  await updateDoc(noteRef, { isPinned: !value });
};

async function updateNote(id, note) {
  console.log('updating note')
  const noteRef = doc(db, "notes", id);
  await updateDoc(noteRef, { title: note.title, tagline: note.tagline, body: note.body });
}

const deleteNote = async (id) => {
  const noteRef = doc(db, "notes", id);
  await deleteDoc(noteRef);
};

const App = () => {
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    firebase
      .firestore()
      .collection("notes")
      .onSnapshot((serverUpdate) => {
        let notesArray = serverUpdate.docs.map((doc) => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        notesArray = notesArray.sort((a, b) => Number(b.isPinned) - Number(a.isPinned));
        setNotes(notesArray);
      }); // whenever the notes collection changes, function inside onSnapshot will be called
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Notes notes={notes} addNote={addNote} updateNotePin={updateNotePin} deleteNote={deleteNote} updateNote={updateNote} />
    </div>
  );
};

export default App;
