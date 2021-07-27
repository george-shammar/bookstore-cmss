import React from 'react';

class BookForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = () => {
    const userTitle = document.querySelector('#title').value;
    const userCategory = document.querySelector('#options').value;
    this.setState({
      title: userTitle,
      next: userCategory,
    });
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
      <button type="submit">Submit</button>
    </label>
  </div>
    )
  }
};

export default BookForm;
