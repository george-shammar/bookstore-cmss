import initialState from "../index";
 //reducers

// booksReducer

const booksReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'allBooks/createBook':
        return {
          ...state, 
          allBooks: [...state.allBooks, action.payload]
      };

      case 'allBooks/removeBook':
      return {
        ...state,
        allBooks: state.allBooks.filter(allBooks => {
          return (allBooks.id !== action.payload.id)
          allBooks;
        })
      }

      default:
        return state;
    }
}

export default booksReducer;