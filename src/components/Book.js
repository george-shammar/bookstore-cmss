import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Book.css';

const Book = (props) => {
  const { book, handleRemove } = props;

  return (
    <div>
      <p>{book.category}</p>
      <h4 className="fw-bold">{book.title}</h4>
      <div><button className="bg-primary white" type="button" name="button" value={book} onClick={() => handleRemove(book)}>Add Book</button></div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default Book;
