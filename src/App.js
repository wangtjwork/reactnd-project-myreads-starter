import React from 'react'
import { Route } from 'react-router-dom'
import SearchPage from './SearchPage'
import ShowBooks from './ShowBooks'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ShowBooks />
        )} />
        <Route path="/search" render={() => (
          <SearchPage />
        )} />
      </div>
    )
  }
}

export default BooksApp
