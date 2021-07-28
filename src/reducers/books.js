/* eslint-disable */
// import store from './index';

const initialState = [
    {
      bookId: Math.floor((Math.random() * 100) + 1),
      title: 'The Hermit',
      category: 'History',
    },
    {
      bookId: Math.floor((Math.random() * 100) + 1),
      title: 'Witch of Endol',
      category: 'Horror',
    },
    {
      bookId: Math.floor((Math.random() * 100) + 1),
      title: 'Goals',
      category: 'Learning',
    },
    {
      bookId: Math.floor((Math.random() * 100) + 1),
      title: 'Helena of Avalor',
      category: 'Kids',
    },
    {
      bookId: Math.floor((Math.random() * 100) + 1),
      title: 'Orbit',
      category: 'Sci-Fi',
    },
    {
      bookId: Math.floor((Math.random() * 100) + 1),
      title: 'My Watch',
      category: 'Biography',
    },
  ];

// booksReducer
const booksReducer = (allBooks = initialState, action) => {
  switch (action.type) {
    case 'allBooks/createBook':
      return {
        ...allBooks,
        allBooks: [...allBooks, action.payload],
      };

    // case 'allBooks/removeBook':
    //   return {
    //     ...state,
    //     allBooks: state.allBooks.filter((allBooks) => (allBooks.id !== action.payload.id)),
    //   };
// =======
case 'allBooks/removeBook':
  return [...allBooks, action.payload]
default:
  return allBooks;
// ==========
    // default:
    //   return state;
  }
};
const selectAllBooks = (state) => state.allBooks;
export { booksReducer, selectAllBooks };
