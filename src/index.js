import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import rootReducer from './reducers/index';

const BOOKS = [
  {
    id: Math.floor((Math.random() * 100) + 1),
    title: 'The Hermit',
    category: 'History',
  },
  {
    id: Math.floor((Math.random() * 100) + 1),
    title: 'Queen of Volantis',
    category: 'Horror',
  },
  {
    id: Math.floor((Math.random() * 100) + 1),
    title: 'Chase',
    category: 'Biography',
  },
  {
    id: Math.floor((Math.random() * 100) + 1),
    title: 'Battle of Mozanga',
    category: 'Action',
  },
  {
    id: Math.floor((Math.random() * 100) + 1),
    title: 'Helena of Avalor',
    category: 'Kids',
  },
  {
    id: Math.floor((Math.random() * 100) + 1),
    title: 'Saturn',
    category: 'Sci-Fi',
  },
];

const store = createStore(rootReducer, { books: BOOKS });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
