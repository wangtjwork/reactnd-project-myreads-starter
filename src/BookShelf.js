import React from 'react';
import Book from './Book'
import PropTypes from 'prop-types';

class BookShelf extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book) => (
              <Book book={book} updateBook={this.props.updateBook} />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
