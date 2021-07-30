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
  {
    id: Math.floor((Math.random() * 100) + 1),
    title: 'The Wizard of Oz',
    category: 'Horror',
  },
  {
    id: Math.floor((Math.random() * 100) + 1),
    title: 'The Hermit',
    category: 'History',
  },
  {
    id: Math.floor((Math.random() * 100) + 1),
    title: 'Elena of Avalor',
    category: 'Kids',
  },
  {
    id: Math.floor((Math.random() * 100) + 1),
    title: 'My Watch',
    category: 'Biography',
  },
  {
    id: Math.floor((Math.random() * 100) + 1),
    title: 'The Expatriate',
    category: 'Action',
  },
  {
    id: Math.floor((Math.random() * 100) + 1),
    title: 'The Odin Project',
    category: 'Learning',
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
