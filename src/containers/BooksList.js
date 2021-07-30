import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, changeFilter } from '../actions/index';
import { CategoryFilter } from '../components/categoryFilter';
import Book from '../components/Book';

const BooksList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const filtered = books.filter((book) => book.category === filter || filter === 'All');

  const handleFilter = (e) => {
    const data = e.target.value;
    dispatch(changeFilter(data));
  };

  const handleRemove = (book) => {
    dispatch(removeBook(book));
  };

  return (
    <>
    <CategoryFilter filter={filter} handleFilter={handleFilter} />,
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
        {filtered.map((book) => (
          <Book key={book.id} book={book} handleRemove={handleRemove} />
        ))}
      </tbody>
    </table>
    </>
  );
};

export default BooksList;
