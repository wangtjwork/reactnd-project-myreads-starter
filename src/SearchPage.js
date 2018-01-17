import React from 'react';
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchPage extends React.Component {
  state = {
    query: '',
    matchedBooks: []
  }

  queryChange = (query) => {
    this.setState({
      query: query.trim()
    });
    // lead to matchedBooks change
    if (this.state.query) {
      BooksAPI.search(this.state.query).then((books) => {
        console.log(books);
        this.setState({
          matchedBooks: books
        });
      });
    } else {
      this.setState({
        matchedBooks: []
      })
    }
  }

  addBook = (chosenBook, shelf) => {
    this.setState((state) => ({
      matchedBooks: state.matchedBooks.map((book) => {
        if (book.id === chosenBook.id) {
          book.shelf = shelf;
        }
        return book;
      })
    }));
    this.props.addBook(chosenBook, shelf);
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" onChange={(event) => this.queryChange(event.target.value)}/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.matchedBooks.map((book) => (
              <Book book={book} updateBook={this.addBook} />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage
