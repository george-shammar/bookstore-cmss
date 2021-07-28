import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { initialState } from '../reducers/books';
import { removeBook } from '../actions/index';
import store from '../reducers/index';

const selectAllBooks = () => initialState.allBooks;

const BooksList = () => {
  const handleRemoveBook = (book) => {
    store.dispatch(removeBook(book));
  };

  const allBooks = useSelector(selectAllBooks);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Book Id</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Books handleRemove={handleRemoveBook} /></td>
          </tr>
          {/* {allBooks.map((book) => (
            <tr key={book.bookId}>
              <td>{book.bookId}</td>
              <td>{book.title}</td>
              <td>{book.category}</td>
              <td onSubmit={handleRemoveBook(book.bookId)}><button type="submit">Remove Book</button></td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BooksList;
