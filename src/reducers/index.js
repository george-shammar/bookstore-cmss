/* eslint-disable */
import { createStore, combineReducers } from 'redux';
import { booksReducer } from './books';

const reducers = {
  allBooks: booksReducer,
};

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer);

export default store;
