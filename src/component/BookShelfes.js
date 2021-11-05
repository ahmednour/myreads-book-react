import React from 'react';
import BookShelf from './BookShelf';



const BookShelfes = ({books,changeBookShelf}) => {

    // define bookShelfes title 
    const currentlyReading = books.filter( book => book.shelf === "currentlyReading");
    const wantToRead = books.filter( book => book.shelf === "wantToRead");
    const read = books.filter( book => book.shelf === "read");

     return(
        <>
            <BookShelf title="Currently Reading" books={currentlyReading} changeBookShelf={changeBookShelf}  />
            <BookShelf title="Want To Read" books={wantToRead} changeBookShelf={changeBookShelf}  />
            <BookShelf title="Read" books={read} changeBookShelf={changeBookShelf} />
        </>
     )
};

export default BookShelfes;