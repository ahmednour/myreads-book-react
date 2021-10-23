import React from "react";
import { Link } from "react-router-dom";
import BookGrid from "./BookSorts";

const MainPage = (props) => {
  const { shelves, books, moveBook } = props;
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {Object.entries(shelves).map(([name, title], index) => (
            <div className="bookshelf" key={index}>
              <h2 className="bookshelf-title">{title}</h2>
              <div className="bookshelf-books">
                <BookGrid
                  books={books.filter((b) => b.shelf === name)}
                  shelves={shelves}
                  moveBook={moveBook}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
