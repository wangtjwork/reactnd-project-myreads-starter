import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

class ShowBooks extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf books={this.props.books.filter((book) => book.shelf === 'currentlyReading')} shelfName="Currently Reading" />
            <BookShelf books={this.props.books.filter((book) => book.shelf === 'wantToRead')} shelfName="Want to Read" />
            <BookShelf books={this.props.books.filter((book) => book.shelf === 'read')} shelfName="Read" />
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
