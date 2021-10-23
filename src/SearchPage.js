import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BookGrid from "./BookSorts";

class SearchPage extends Component {
  state = { query: "", matches: [] };

  updateShelfForMovedBook = (matches, movedBook) =>
    matches.map(
      (book) => (book.id === movedBook.id ? movedBook : book)
    );

  updateShelfForMatches = (matches, books) => {
    const bookIds = books.map((b) => b.id);
    return matches.map(
      (book) =>
        bookIds.includes(book.id)
          ? books.filter((b) => book.id === b.id)[0]
          : book
    );
  };

  updateQuery = (query) => {
    const queryStr = query.trim();
    this.setState(() => ({ query: queryStr }));
    try {
      BooksAPI.search(queryStr).then((matches) => {
        if (Array.isArray(matches)) {
          this.setState(() => ({
            matches: this.updateShelfForMatches(matches, this.props.books),
          }));
        }
      });
    } catch (err) {
      this.setState(() => ({ matches: [] }));
    }
  };

  moveBookInSearchPage = (newShelf, bookToMove) => {
    const movedBook = this.props.moveBook(newShelf, bookToMove);
    this.setState((prevState) => ({
      matches: this.updateShelfForMovedBook(prevState.matches, movedBook),
    }));
  };

  resetState = () =>
    this.setState({
      query: "",
      matches: [],
    });

  render() {
    const { shelves } = this.props;
    const { query, matches } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search" onClick={this.resetState}>
              Close
            </button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {Array.isArray(matches) && (
            <BookGrid
              books={matches}
              shelves={shelves}
              moveBook={this.moveBookInSearchPage}
            />
          )}
        </div>
      </div>
    );
  }
}
export default SearchPage;
