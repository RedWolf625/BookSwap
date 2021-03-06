import React from "react";
import BookRow from "../BookRow/BookRow";
import "./Library.css";

function Library({ book_arrays, headings, left_start = true, cycle = false }) {
  return (
    <>
      {book_arrays.map((book_array, index) => (
        <div key={index} className="libraryRow">
          <BookRow
            books={book_array}
            heading={headings[index]}
            {...{ left_start }}
          />
        </div>
      ))}
    </>
  );
}

export default Library;
