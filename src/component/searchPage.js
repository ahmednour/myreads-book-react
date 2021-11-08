import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from '../API/BooksAPI';

import Book from './book';

class SearchPage extends Component {

    state = {
        query: "",
        result: []
    }
    // search function 
    searchPage(query) {
        
        this.setState(() => ({ query }));
        this.fetchMBooks(query);
    }
    fetchMBooks(query) {
      
        if (query.length !== 0) {
            BooksAPI.search(query).then(result => {
                if (result.error) {
                    this.setState({ result: [], error: "Sorry , No Books found" });
                    return;
                } else {
                    this.setState({ result: result });
                }
                result.map(book =>{
                    const bookOS = this.props.books.find(b => b.id === book.id);
                    book.shelf = bookOS ? bookOS.shelf:"none";
                    return book;
                })
                this.setState({ result: result });
            })
        } else {            
            this.setState({ result: [] });
            return;
        }
    }

    render() {
        const { query, result } = this.state;
        const { changeBookShelf, books } = this.props;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    {/* <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button> */}
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={query} onChange={(e) => this.searchPage(e.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            result.map(sboo => {
                                 // const sbooshelf = books.find(b => b.id === sboo.id);                              
                                return(
                                    <li key={sboo.id}>
                                        <Book book={sboo} changeBookShelf={changeBookShelf} shelf={this.props.shelf} />
                                    </li>
                                )
                            })
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchPage;