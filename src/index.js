import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import rootReducer from './reducers/index';

const initialState = [
  {
    id: Math.floor((Math.random() * 100) + 1),
    title: 'The Hermit',
    category: 'History',
  },
];

const state = {
  books: initialState,
  filter: 'All',
};
const store = createStore(rootReducer, state);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
