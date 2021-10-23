import React from "react";

const Book = (props) => {
  const { book, shelves, moveBook } = props;
  const { imageLinks, title, authors, shelf } = book;
  const imageURL = imageLinks ? imageLinks.thumbnail : "";

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${imageURL})`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            value={shelf ? shelf : "none"}
            onChange={(event) => moveBook(event.target.value, book)}
          >
            <option value="move" disabled>
              Move to...
            </option>
            {Object.entries(shelves).map(([shelfKey, displayName], index) => (
              <option key={index} value={shelfKey}>
                {displayName}
              </option>
            ))}
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      {authors && (
        <div className="book-authors">
          {authors.map((author, index) => (
            <div key={index}>{author}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Book;
