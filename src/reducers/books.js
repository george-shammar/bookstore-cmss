const bookReducer = (state = [], action) => {
  let newState = [...state];
  let index = 0;
  switch (action.type) {
    case 'allBooks/createBook':
      newState = [...newState, action.payload];
      return newState;
    case 'allBooks/removeBook':
      index = newState.findIndex((item) => item.id === action.payload.id);
      newState.splice(index, 1);
      return newState;
    default:
      return newState;
  }
};

export default bookReducer;

// const initialState = [
//     {
//       bookId: Math.floor((Math.random() * 100) + 1),
//       title: 'The Hermit',
//       category: 'History',
//     },
//     {
//       bookId: Math.floor((Math.random() * 100) + 1),
//       title: 'Witch of Endol',
//       category: 'Horror',
//     },
//     {
//       bookId: Math.floor((Math.random() * 100) + 1),
//       title: 'Goals',
//       category: 'Learning',
//     },
//     {
//       bookId: Math.floor((Math.random() * 100) + 1),
//       title: 'Helena of Avalor',
//       category: 'Kids',
//     },
//     {
//       bookId: Math.floor((Math.random() * 100) + 1),
//       title: 'Orbit',
//       category: 'Sci-Fi',
//     },
//     {
//       bookId: Math.floor((Math.random() * 100) + 1),
//       title: 'My Watch',
//       category: 'Biography',
//     },
//   ];

// booksReducer
// const booksReducer = (allBooks = initialState, action) => {
//   switch (action.type) {
//     case 'allBooks/createBook':
//       return {
//         ...allBooks,
//         allBooks: [...allBooks, action.payload],
//       };

// case 'allBooks/removeBook':
//   return {
//     ...state,
//     allBooks: state.allBooks.filter((allBooks) => (allBooks.id !== action.payload.id)),
//   };
// =======
// case 'allBooks/removeBook':
//   return [...allBooks, action.payload]
// default:
//   return allBooks;
//   }
// };
// const selectAllBooks = (state) => state.allBooks;
// export { booksReducer, selectAllBooks };
