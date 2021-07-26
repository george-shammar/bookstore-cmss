import React from 'react';

const BookForm = () => (
  <div>

    <input type="text" placeholder="Title" />
    <label htmlFor="options">
      Category:
      <select id="options">
        <option value="Action">Action</option>
        <option value="Biography">Biography</option>
        <option value="History">History</option>
        <option value="Horror">Horror</option>
        <option value="Kids">Kids</option>
        <option value="Learning">Learning</option>
        <option value="Sci-Fi">Sci-Fi</option>
      </select>
      <button type="submit">Submit</button>
    </label>
  </div>
);

export default BookForm;
