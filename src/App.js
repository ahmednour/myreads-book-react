import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import MainPage from "./MainPage";
import SearchPage from "./SearchPage";
import "./App.css";

class BooksApp extends Component {
  state = {
    books: [],
  };

  shelves = {
    currentlyReading: "Currently Reading",
    wantToRead: "Want to read",
    read: "Read",
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({ books }));
    });
  }

  moveBook = (newShelf, bookToMove) => {
    const movedBook = { ...bookToMove, shelf: newShelf };
    this.setState((prevState) => {
      const otherBooks = prevState.books.filter(
        (book) => book.id !== bookToMove.id
      );
      const newBooks = [...otherBooks, movedBook];
      return { books: newBooks };
    });
    BooksAPI.update(movedBook, newShelf);
    return movedBook;
  };

  render() {
    return (
      <div className="app">
        <Route
          path="/search"
          render={() => (
            <SearchPage
              shelves={this.shelves}
              books={this.state.books}
              moveBook={this.moveBook}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <MainPage
              shelves={this.shelves}
              books={this.state.books}
              moveBook={this.moveBook}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
