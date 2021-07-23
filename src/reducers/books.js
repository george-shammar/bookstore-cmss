import initialState from "../index";
import { createStore } from 'redux';

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
        })
      }

      default:
        return state;
    }
}

const store = createStore(booksReducer);

export { store, initialState };