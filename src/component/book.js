import React from 'react';
import PropTypes from 'prop-types';


const Book = ({ book, changeBookShelf }) => {
   
    // define url image 
    const imageUrl = book.imageLinks ? book.imageLinks.thumbnail : "";
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + imageUrl + ')' }}></div>
                <div className="book-shelf-changer">
                    <select value={book.shelf} onChange={e => changeBookShelf(book, e.target.value)} > 
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
        </div>
    )
};
export default Book;