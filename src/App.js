import "./App.css";
import NavDrawer from "./components/NavDrawer";
import { useEffect, useState } from "react";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import Notes from "./components/notes/Notes";

import DataProvider from "./context/DataProvider";

const App = () => {
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
  const [selectedNote, setSelectedNote] = useState(null);
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    firebase
      .firestore()
      .collection("notes")
      .onSnapshot(serverUpdate => {
        const notesArray = serverUpdate.docs.map(doc => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        console.log(notesArray);
        setNotes(notesArray)
      }); // whenever the notes collection changes, function inside onSnapshot will be called
  }, []);

  return (
    <div className="App">
      <DataProvider>
      <NavDrawer />
      <Notes notes={notes} />
      </DataProvider>
    </div>
  );
}

export default App;
