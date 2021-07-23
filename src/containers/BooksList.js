import React from 'react';
import { useSelector } from 'react-redux';
import { initialState } from '../reducers/books';

const selectAllBooks = (state) => initialState.allBooks[0];

const BooksList = () => {
  const allBooks = useSelector(selectAllBooks);
  
    return (
      <div>
        <table>
          <thead>
          <tr>
            <th>Book Id</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{allBooks.bookId}</td>
            <td>{allBooks.title}</td>
            <td>{allBooks.category}</td>
          </tr>
          </tbody>
        </table> 
      </div>
    )
}

export default BooksList;