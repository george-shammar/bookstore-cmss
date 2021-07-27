import React from 'react';
import {createBook, removeBook} from '../actions/index';

class BookForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (userTitle, userCategory) => {
    userTitle = document.querySelector('#title').value;
    userCategory = document.querySelector('#options').value;
    this.setState({
      title: userTitle,
      next: userCategory,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    store.dispatch(createBook);
  }

  render() {
    return (
  
  <div>
    <input type="text" id="title" placeholder="Title" />
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
      <button type="submit" onSubmit={handleSubmit}>Submit</button>
    </label>
  </div>
    )
  }
};

export default BookForm;
