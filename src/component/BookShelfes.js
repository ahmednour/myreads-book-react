import React from 'react';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';


const BookShelfes = ({ books, changeBookShelf }) => {

    // define bookShelfes title 
    const currentlyReading = books.filter(book => book.shelf === "currentlyReading");
    const wantToRead = books.filter(book => book.shelf === "wantToRead");
    const read = books.filter(book => book.shelf === "read");

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf title="Currently Reading" books={currentlyReading} changeBookShelf={changeBookShelf} />
                    <BookShelf title="Want To Read" books={wantToRead} changeBookShelf={changeBookShelf} />
                    <BookShelf title="Read" books={read} changeBookShelf={changeBookShelf} />
                </div>
            </div>
            <div className="open-search">
                <Link to="/search" >Add a book</Link>
                {/* <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button> */}
            </div>
        </div>
    )
};

export default BookShelfes;