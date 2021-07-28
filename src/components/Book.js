import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { initialState } from '../reducers/books';

const selectAllBooks = () => initialState.allBooks;

const Book = (props) => {
  const { book, handleRemoveBook } = props;

  const allBooks = useSelector(selectAllBooks);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th />
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {allBooks.map((book) => (
            <tr key={book.bookId}>
              <td>{book.bookId}</td>
              <td>{book.title}</td>
              <td>{book.category}</td>
              <td><button type="submit">Remove Book</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes,
};

Book.defaultProps = {
  book: null,
};

export default Book;
