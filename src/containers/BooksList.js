import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../actions/index';
import Book from '../components/Book';

const BooksList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleRemove = (book) => {
    dispatch(removeBook(book));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Book-Id</th>
          <th>Title</th>
          <th>Category</th>
          <th>Remove Book</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <Book key={book.id} book={book} handleRemove={handleRemove} />
        ))}
      </tbody>
    </table>
  );
};

export default BooksList;
