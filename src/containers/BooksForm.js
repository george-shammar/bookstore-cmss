import React from 'react';

const BookForm = () => {
    return (
      <div>
        <input type="text" placeholder="Title"></input>
          <label>Category:</label>
            <select>
              <option value="Action">Action</option>
              <option value="Biography">Biography</option>
              <option value="History">History</option>
              <option value="Horror">Horror</option>
              <option value="Kids">Kids</option>
              <option value="Learning">Learning</option>
              <option value="Sci-Fi">Sci-Fi</option>
            </select>
        <button>Submit</button>
      </div>
    )
}

export default BookForm;