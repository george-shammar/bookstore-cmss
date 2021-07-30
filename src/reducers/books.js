const initialState = [];

const bookReducer = (state = initialState, action) => {
  let allBooks = [...state];
  switch (action.type) {
    case 'allBooks/createBook':
      allBooks = [...allBooks, action.payload];
      return allBooks;
    case 'allBooks/removeBook':
      allBooks = state.filter((allBooks) => (allBooks.id !== action.payload.id));
      return allBooks;
    default:
      return allBooks;
  }
};

export default bookReducer;
