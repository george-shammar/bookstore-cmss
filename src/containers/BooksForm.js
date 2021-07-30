import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { createBook } from '../actions/index';

const categories = ['Category', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

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
    <div>
      <h4>Add New Book</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Book Title" value={title} onChange={changeTitle} required />
        <select name="category" value={category} onChange={changeCategory}>
          {categories.map((category) => (
            <option key={uuidv4()} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button className="bg-primary white" type="submit" name="button">Add Book</button>
      </form>
    </div>
  );
};

export default BooksForm;
