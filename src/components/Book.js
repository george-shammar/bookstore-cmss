import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Book.css';

const Book = (props) => {
  const { book, handleRemove } = props;

  return (
    <div className="px-5 ">
      <div className="border py-4 px-3 mb-3 card">
        <div className="card-title">
          <p className="font s-size">{book.category}</p>
          <h6 className="fw-bold font title">{book.title}</h6>
          <p className="s-size blue">George Shammar</p>
          <div className="blue d-flex mt-3">
            <button type="button" className="text font s-size">Comments</button>
            <button type="button" className="text font s-size" value={book} onClick={() => handleRemove(book)}>Remove</button>
            <button type="button" className="text font s-size">Edit</button>
          </div>
        </div>
        <div className="completed d-flex mt-2">
          <div className="circle mx-3" />
          <div className="completedInfo">
            <p className="percentage">52%</p>
            <p className="completedText">Completed</p>
          </div>
        </div>
        <div className="line" />
        <div className="right-card">
          <p className="s-size font">CURRENT CHAPTER</p>
          <p className="s-size font">Chapter 2</p>
          <p className="bg-primary mt-3 s-size p-1 white font">UPDATE PROGRESS</p>
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
