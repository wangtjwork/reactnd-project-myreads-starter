import React from 'react'
import { Route } from 'react-router-dom'
import SearchPage from './SearchPage'
import ShowBooks from './ShowBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books: books
      });
    })
  }

  updateBookshelf = (chosenBook, shelf) => {
    BooksAPI.update(chosenBook, shelf).then(() => {
      this.setState((state) => ({
        books: state.books.map((book) => {
          if (book.id === chosenBook.id) book.shelf = shelf;
          return book;
        })
      }));
    });
  }

  addBook = (chosenBook, shelf) => {
    chosenBook.shelf = shelf;
    this.setState((state) => {
      books: state.books.concat(chosenBook)
    });
    BooksAPI.update(chosenBook, shelf);
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ShowBooks
            books={this.state.books}
            updateBook={this.updateBookshelf}
          />
        )} />
        <Route path="/search" render={() => (
          <SearchPage
            addBook={ this.addBook }
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
