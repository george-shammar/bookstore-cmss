import React from 'react';
import { useSelector } from 'react-redux';
import { initialState } from '../reducers/books';

const selectAllBooks = (state) => initialState.allBooks[0];

const BooksList = () => {
  const allBooks = useSelector(selectAllBooks);
  console.log(allBooks);
  return (
    <div></div>
  );



    // return (
    //   <div>
    //     <table>
    //       <tr>
    //         <th>Book Id</th>
    //         <th>Title</th>
    //         <th>Category</th>
    //       </tr>
    //       <tr>
    //         <td></td>
    //         <td></td>
    //         <td></td>
    //       </tr>
    //       <tr>
    //         <td></td>
    //         <td></td>
    //         <td></td>
    //       </tr>
    //     </table> 
    //   </div>
    // )
}

export default BooksList;