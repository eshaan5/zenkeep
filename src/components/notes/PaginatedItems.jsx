import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Grid } from "@mui/material";
import Note from "./Note";

function Items({ notes, updateNotePin, deleteNote, currentItems, updateNote }) {
  return (
    <Grid container spacing={3} style={{ marginTop: 48, marginBottom: 70 }}>
      {(notes && currentItems) &&
        currentItems.map((note) => (
          <Grid item key={note.id} md={4} xs={12} sm={6} style={{ margin: "auto" }}>
            <Note note={note} updateNotePin={updateNotePin} deleteNote={deleteNote} updateNote={updateNote} />
          </Grid>
        ))}
      {!notes && <h1>Notes you add appear here!</h1>}
    </Grid>
  );
}

function PaginatedItems({ notes, updateNotePin, deleteNote, itemsPerPage, updateNote }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    notes ? setCurrentItems(notes.slice(itemOffset, endOffset)) : setCurrentItems(null);
    notes ? setPageCount(Math.ceil(notes.length / itemsPerPage)) : setPageCount(0);
  }, [itemOffset, itemsPerPage, notes]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % notes.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items notes={notes} updateNotePin={updateNotePin} deleteNote={deleteNote} currentItems={currentItems} updateNote={updateNote} />
      <ReactPaginate onPageChange={handlePageClick} pageRangeDisplayed={5} pageCount={pageCount} previousLabel="< previous" renderOnZeroPageCount={null} nextLabel="next >"
        marginPagesDisplayed={2}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active" />
    </>
  );
}

export default PaginatedItems;