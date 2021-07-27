import React from 'react';
import { createBook } from '../actions/index';
import store from '../reducers/index';

class BookForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookId: null,
      title: '',
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = () => {
    const userTitle = document.querySelector('#title').value;
    const userCategory = document.querySelector('#options').value;
    const userBookId = Math.floor((Math.random() * 100) + 1);
    this.setState({
      bookId: userBookId,
      title: userTitle,
      category: userCategory,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleChange();
    const userTitle = document.querySelector('#title').value;
    const userCategory = document.querySelector('#options').value;
    const userBookId = Math.floor((Math.random() * 100) + 1);
    const book = {
      bookId: userBookId,
      title: userTitle,
      category: userCategory,
    };
    store.dispatch(createBook(book));
  };

  render() {
    const { title, category, bookId } = this.state;
    return (

      <div>
        <h1>{bookId}</h1>
        <h1>{title}</h1>
        <h1>{category}</h1>
        <form onSubmit={this.handleSubmit}>
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
            <button type="submit">Submit</button>
          </label>
        </form>
      </div>
    );
  }
}

export default BookForm;
