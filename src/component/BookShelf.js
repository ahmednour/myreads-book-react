import React from 'react';
import Book from './book';


const BookShelf = ({ books  }) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title"> </h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map(boo => (
                        <li>
                            <Book book={boo}/>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
};
export default BookShelf;