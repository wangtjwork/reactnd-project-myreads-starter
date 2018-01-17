import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

class ShowBooks extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf books={ this.props.books.filter((book) => book.shelf === 'currentlyReading') } shelfName="Currently Reading" updateBook={ this.props.updateBook }/>
            <BookShelf books={ this.props.books.filter((book) => book.shelf === 'wantToRead') } shelfName="Want to Read" updateBook={ this.props.updateBook }/>
            <BookShelf books={ this.props.books.filter((book) => book.shelf === 'read') } shelfName="Read" updateBook={ this.props.updateBook }/>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default ShowBooks
