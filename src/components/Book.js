import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book } = props;
  return (
      <div>
       {book.title}
      </div>
  )

}

Book.propTypes = {
  book: PropTypes.object
};

Book.defaultProps = {
  book: null
};

export default Book;