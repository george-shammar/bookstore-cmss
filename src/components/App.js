import React from 'react';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';

const App = () => {
    return (
        <>
            <BooksList />
            <BooksForm />
        </>
    );
}

export default App;