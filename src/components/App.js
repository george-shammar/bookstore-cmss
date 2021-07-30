import React from 'react';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import '../stylesheets/App.css';

const App = () => (
  <>
    <div className="container mt-5 border">
      <div className="header border py-2 px-5">
        <div className="left-header">
          <h1>Bookstore CMS</h1>
          <p>BOOKS</p>
          <p>CATEGORIES</p>
        </div>
        <div className="user"><i className="fas fa-user" /></div>
      </div>
      <BooksForm />
      <BooksList />
    </div>
  </>
);

export default App;
