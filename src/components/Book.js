import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Book.css';

const Book = (props) => {
  const { book, handleRemove } = props;

  return (
    <div className="px-5 ">
      <div className="border py-4 px-3 mb-3">
        <div className="card-title">
          <p className="font s-size">{book.category}</p>
          <h6 className="fw-bold font title">{book.title}</h6>
          <p className="s-size blue">George Shammar</p>
        </div>
        <div className="blue d-flex">
          <button type="button" className="text font s-size">Comments</button>
          <button type="button" className="text font s-size" value={book} onClick={() => handleRemove(book)}>Remove</button>
          <button type="button" className="text font s-size">Edit</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default Book;
