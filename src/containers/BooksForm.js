import React from 'react';
import { createBook } from '../actions/index';
import store from '../reducers/index';

class BookForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allBooks: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = () => {
    const userTitle = document.querySelector('#title').value;
    const userCategory = document.querySelector('#options').value;
    const UserBookId = Math.floor((Math.random() * 100) + 1);
    const userBook = {
      title: userTitle,
      category: userCategory,
      bookId: UserBookId,
    };
    this.setState({
      ...this.state, /* eslint-disable-line react/no-access-state-in-setstate */
      allBooks: [userBook],
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleChange();
    const userTitle = document.querySelector('#title').value;
    const userCategory = document.querySelector('#options').value;
    const UserBookId = Math.floor((Math.random() * 100) + 1);
    const userBook = {
      bookId: UserBookId,
      title: userTitle,
      category: userCategory,
    };
    store.dispatch(createBook(userBook));
    console.log(store.getState());
  };

  render() {
    return (
      <div>
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
