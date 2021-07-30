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
      <div className="header border py-2 px-5 mb-5">
        <div className="left-header">
          <h1 className="blue">Bookstore CMS</h1>
          <p className="mt-3">BOOKS</p>
          <CategoryFilter className="mt-3" filter={filter} handleFilter={handleFilter} />
        </div>
        <div className="blue"><i className="fas fa-user" /></div>
      </div>
      <div>
        {filtered.map((book) => (
          <Book key={book.id} book={book} handleRemove={handleRemove} />
        ))}
      </div>
    </>
  );
};

export default BooksList;
