import { combineReducers } from 'redux';
import bookReducer from './books';

const rootReducer = combineReducers({ books: bookReducer });

export default rootReducer;

// const reducers = {
//   allBooks: booksReducer,
// };

// const rootReducer = combineReducers(reducers);

// const store = createStore(rootReducer);

// export default store;
