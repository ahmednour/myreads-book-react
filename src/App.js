import React from 'react';
import SearchPage from './component/searchPage';
import BookShelfes from './component/BookShelfes';
import * as BooksAPI from './API/BooksAPI';
import './App.css';
import { Route, Switch } from 'react-router';

class BooksApp extends React.Component {
  constructor() {
    super();
    this.changeBookShelf = this.changeBookShelf.bind(this);
  }
  state = {
    books: [] 

  };
  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books: books }));
  }
  // change shelf function 
  changeBookShelf(book, shelf) {
    BooksAPI.update(book, shelf)
    this.setState({
      books: this.state.books.map(row => {
        if (row.id === book.id) {
          row.shelf = shelf;
        }
        return row;
      })
    });
  }

  render() {
    const { books , book } = this.state;

    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => (
            <BookShelfes books={books} changeBookShelf={this.changeBookShelf} />
          )} />
          <Route exact path="/search" render={() => (
            <SearchPage result={books} changeBookShelf={this.changeBookShelf} />
          )} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
