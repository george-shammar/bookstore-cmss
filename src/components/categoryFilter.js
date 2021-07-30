import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const Categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const CategoryFilter = (props) => {
  const { filter, handleFilter } = props;
  const allFilters = ['All', ...Categories];

  return (
    <select placeholder="CATEGORIES" name="filter" value={filter} onChange={handleFilter}>
      {allFilters.map((category) => (
        <option key={uuidv4()} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

CategoryFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export { Categories, CategoryFilter };
