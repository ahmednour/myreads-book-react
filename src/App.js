import React from 'react';
import * as BooksAPI from './API/BooksAPI';
import BookShelfes from './component/BookShelfes';
import Book from './component/book';
import './App.css';

class BooksApp extends React.Component {
  constructor() {
    super();
    this.changeBookShelf = this.changeBookShelf.bind(this);
  }
  state = {
    books: [],
    result: []
  };
  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books: books }));
  }
  // change function 
  changeBookShelf(book, value) {
    this.setState({
      books: this.state.books.map(row => {
        if (row.id == book.id) {
          row.shelf = value;
        }
        return row;
      })
    });
  }
  // search function 
  searchPage(word) {
    BooksAPI.search(word).then((books) => {
      this.setState({
        result: books
      })
    })
  }
  render() {
    const { books } = this.state;
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" onChange={(e) => this.searchPage(e.target.value)} />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.result.map(boo => (
                  <li key={boo.id}>
                    <Book book={boo} changeBookShelf={this.changeBookShelf} />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelfes books={books} changeBookShelf={this.changeBookShelf} />
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
