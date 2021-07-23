// import { initialState } from "../index";
import { createStore } from 'redux';

const initialState = {
    filter: 'George',
    allBooks: [
      { 
        bookId: Math.floor((Math.random() * 100) + 1),
        title: "The Hermit",
        category: "History"
      }, 
      {
        bookId: Math.floor((Math.random() * 100) + 1),
        title: "Queen of Endol",
        category: "Horror"
      },
      {
        bookId: Math.floor((Math.random() * 100) + 1),
        title: "Goals",
        category: "Learning"
      },
      {
        bookId: Math.floor((Math.random() * 100) + 1),
        title: "Helena of Avalor",
        category: "Kids"
      }
    ]
  };
  

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