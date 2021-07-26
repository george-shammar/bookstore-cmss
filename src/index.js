import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { store } from './reducers/books';

const initialState = {
  allBooks: [
    {
      bookId: Math.floor((Math.random() * 100) + 1),
      title: 'The Hermit',
      category: 'History',
    },
    {
      bookId: Math.floor((Math.random() * 100) + 1),
      title: 'Witch of Endol',
      category: 'Horror',
    },
    {
      bookId: Math.floor((Math.random() * 100) + 1),
      title: 'Goals',
      category: 'Learning',
    },
    {
      bookId: Math.floor((Math.random() * 100) + 1),
      title: 'Helena of Avalor',
      category: 'Kids',
    },
    {
      bookId: Math.floor((Math.random() * 100) + 1),
      title: 'Orbit',
      category: 'Sci-Fi',
    },
    {
      bookId: Math.floor((Math.random() * 100) + 1),
      title: 'My Watch',
      category: 'Biography',
    },
  ],
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

export default initialState;
