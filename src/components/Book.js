import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Book.css';

const Book = (props) => {
  const { book, handleRemove } = props;

  return (
    <div>
      <p>{book.category}</p>
      <h4 className="fw-bold">{book.title}</h4>
      <div className="blue d-flex">
        <button type="button" className="text">Comments</button>
        <button type="button" className="text" value={book} onClick={() => handleRemove(book)}>Remove</button>
        <button type="button" className="text">Edit</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default Book;
