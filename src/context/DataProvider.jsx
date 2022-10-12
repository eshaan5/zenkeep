import { createContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {

    const [notes, setNotes] = useState([]);
    const [deletedNotes, setDeletedNotes] = useState([]);

    return (
        <DataContext.Provider value={{
            notes,
            setNotes,
            deletedNotes,
            setDeletedNotes
        }}>
        {children}
        </DataContext.Provider>
    );
    }

export default DataProvider;