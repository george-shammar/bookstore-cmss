import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
// import { initialState } from '../reducers/books';
// import store from '../reducers/index';
import { selectAllBooks } from '../reducers/books';

// const selectAllBooks = () => initialState.allBooks;

const Book = (props) => {
  const { handleRemove } = props;

  const allBooks = useSelector(selectAllBooks);

  return (
    <div>
      <table>
        <tbody>
          {allBooks.map((book) => (
            <tr key={book.id}>
              <td>{book.bookId}</td>
              <td>{book.title}</td>
              <td>{book.category}</td>
              <td><button type="submit" onClick={handleRemove}>Remove Book</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Book.propTypes = {
  handleRemove: PropTypes.func,
};

Book.defaultProps = {
  handleRemove: null,
};

export default Book;
