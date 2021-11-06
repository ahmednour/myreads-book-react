import React, { Component } from "react";
import PropTypes from 'prop-types';
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
        const queryTrim = query.trim();
        this.setState(() => ({ query: queryTrim }));
        this.fetchMBooks(query);
    }
    fetchMBooks(query) {
        if (query.length !== 0) {
            BooksAPI.search(query).then((result) => {

                if (result.error) {
                    this.setState({ result: [] });
                } else {
                    this.setState({ result: result });
                }

            })
        } else {
            this.setState({ result: [] });
        }
    }

    render() {
        const {  query , result} = this.state;
        const {changeBookShelf} = this.state;
        return(
            <div className="search-books">
            <div className="search-books-bar">
            <Link to="/search" className="close-search">Close</Link>
              {/* <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button> */}
              <div className="search-books-input-wrapper">                
                <input type="text" placeholder="Search by title or author" value={query} onChange={(e) => this.searchPage(e.target.value)} />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {result.map(boo => (
                  <li key={boo.id}>
                    <Book book={boo} changeBookShelf={changeBookShelf} shelf="currentlyReading" />
                  </li>
                 ))
                }
              </ol>
            </div>
          </div> 
        )
    }
}

export default SearchPage;