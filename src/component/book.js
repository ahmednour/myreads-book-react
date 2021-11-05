import React from 'react';


const Book = ({ book, changeBookShelf }) => {
    // define url image 
    const imageUrl = book.imageLinks.thumbnail;
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + imageUrl + ')' }}></div>
                <div className="book-shelf-changer">
                    <select defaultValue={book.shelf} onChange={e => changeBookShelf(book, e.target.value)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">To Kill a Mockingbird</div>
            <div className="book-authors">Harper Lee</div>
        </div>
    )
};
export default Book;