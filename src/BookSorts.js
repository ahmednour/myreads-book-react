import React from "react";
import Book from "./Book";

const BookGrid = (props) => {
  const { books, shelves, moveBook } = props;
  return (
    <ol className="books-grid">
      {books.map((book) => (
        <li key={book.id}>
          <Book book={book} shelves={shelves} moveBook={moveBook} />
        </li>
      ))}
    </ol>
  );
};

export default BookGrid;
