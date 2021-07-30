import React from 'react';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import '../stylesheets/App.css';

const App = () => (
  <>
    <div className="container mt-5 border shadow-lg mb-5 bg-body rounded">
      <BooksList />
      <BooksForm />
    </div>
  </>
);

export default App;
