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
  // componentDidMount() {
  //   BooksAPI.getAll().then(books => this.setState({ books: books }));
  // }
  async componentDidMount(){
    const books = await BooksAPI.getAll();
    this.setState({ books: books}); 
  }
  // change shelf function 
  // changeBookShelf(book, shelf) {
  //   book.shelf= shelf;
  //   BooksAPI.getAll().then((books)=>{
  //     this.setState({
  //       books: this.state.books.map(row => {
  //         if (row.id === book.id) {
  //           row.shelf = shelf;
  //           return book;
  //         }
  //         return row;
  //       })
  //     });
  //   })
  //   BooksAPI.update(book, shelf);
  // }
  changeBookShelf(book, shelf) {
    book.shelf= shelf;
    this.setState(previous =>({ books:previous.books.filter(b => b.id !== book.id).concat([book])}));
    BooksAPI.update(book, shelf);
  }
  render() {
    const { books} = this.state;

    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => (
            <BookShelfes books={books} changeBookShelf={this.changeBookShelf} />
          )} />
          <Route exact path="/search" render={() => (
            <SearchPage books={books} changeBookShelf={this.changeBookShelf} />
          )} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
