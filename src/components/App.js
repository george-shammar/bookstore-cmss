import React from 'react';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import '../stylesheets/App.css';

const App = () => (
  <>
    <div className="header">
      <h1>Bookstore CMS</h1>
      <p>BOOKS</p>
      <p>CATEGORIES</p>
      <div className="user"><i className="fas fa-user" /></div>
    </div>
    <BooksForm />
    <BooksList />
  </>
);

export default App;
