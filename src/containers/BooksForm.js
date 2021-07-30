import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { createBook } from '../actions/index';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const changeTitle = (e) => {
    const data = e.target.value;
    setTitle(data);
  };

  const changeCategory = (e) => {
    const data = e.target.value;
    setCategory(data);
  };

  const handleSubmit = (e) => {
    const book = {
      id: Math.floor((Math.random() * 100) + 1),
      title,
      category,
    };
    dispatch(createBook(book));
    setTitle('');
    setCategory('');
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="title" value={title} onChange={changeTitle} required />
      <label htmlFor="title">
        Category
        <select name="category" value={category} onChange={changeCategory}>
          {categories.map((category) => (
            <option key={uuidv4()} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <button type="submit" name="button">Submit</button>
    </form>
  );
};

export default BooksForm;
