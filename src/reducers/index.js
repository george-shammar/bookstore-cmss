import { combineReducers } from 'redux';
import bookReducer from './books';
import filterReducer from './filter';

const reducers = {
  books: bookReducer,
  filter: filterReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
