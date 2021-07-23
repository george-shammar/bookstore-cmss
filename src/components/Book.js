import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book } = props;
  return (
    <div>
      {book}
    </div>
  );
};

Book.propTypes = {
  book: PropTypes,
};

Book.defaultProps = {
  book: null,
};

export default Book;
