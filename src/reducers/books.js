//reducers

//initial state
const initialState = {
    allBooks: []
};

// booksReducer

const booksReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'allBooks/createBook':
        return {
          ...state, 
          allBooks: [...state.allBooks, action.payload]
      };

      

      default:
        return state;
    }
}