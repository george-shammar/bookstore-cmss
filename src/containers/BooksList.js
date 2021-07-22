import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllBooks } from '../index';

const BooksList = () => {
    return (
      <div>
        <table>
          <tr>
            <th>Book Id</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table> 
      </div>
    )
}

export default BooksList;