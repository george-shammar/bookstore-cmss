import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { v4 as uuidv4 } from 'uuid';
import App from './components/App';
import rootReducer from './reducers/index';

const BOOKS = [
  {
    id: uuidv4(),
    title: 'The Hermit',
    category: 'History',
  },
  {
    id: uuidv4(),
    title: 'Queen of Volantis',
    category: 'Horror',
  },
  {
    id: uuidv4(),
    title: 'Chase',
    category: 'Biography',
  },
  {
    id: uuidv4(),
    title: 'Battle of Mozanga',
    category: 'Action',
  },
  {
    id: uuidv4(),
    title: 'Helena of Avalor',
    category: 'Kids',
  },
  {
    id: uuidv4(),
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
