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
      console.log(books);
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ShowBooks
            books={this.state.books}
          />
        )} />
        <Route path="/search" render={() => (
          <SearchPage />
        )} />
      </div>
    )
  }
}

export default BooksApp
