import React from 'react';
import Book from './book';
import PropTypes from 'prop-types';


const BookShelf = ({ books , title , changeBookShelf  }) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title"> {title} </h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map(boo => (
                        <li key={boo.id}>
                            <Book book={boo} changeBookShelf={changeBookShelf} />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
};

BookShelf.prototype = {
    books:PropTypes.array.isRequired,
    changeBookShelf:PropTypes.func.isRequired
};
export default BookShelf;