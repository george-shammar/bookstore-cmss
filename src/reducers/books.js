import { createStore } from 'redux';

const initialState = {
  allBooks: [
    { 
      bookId: Math.floor((Math.random() * 100) + 1),
      title: "The Hermit",
      category: "History"
    }, 
    {
      bookId: Math.floor((Math.random() * 100) + 1),
      title: "Witch of Endol",
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
    },
    {
      bookId: Math.floor((Math.random() * 100) + 1),
      title: "Orbit",
      category: "Sci-Fi"
    },
    {
      bookId: Math.floor((Math.random() * 100) + 1),
      title: "My Watch",
      category: "Biography"
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

export { store };