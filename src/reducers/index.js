import { combineReducers } from 'redux';
import bookReducer from './books';

const reducers = {
  books: bookReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
