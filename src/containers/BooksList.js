import React from 'react';
import { removeBook } from '../actions/index';
import store from '../reducers/index';
import Book from '../components/Book';

const BooksList = () => {
  const handleRemoveBook = (book) => {
    store.dispatch(removeBook(book));
  };

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
            <td><Book handleRemove={handleRemoveBook} /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// BooksList.propTypes = {
//   books: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

export default BooksList;
