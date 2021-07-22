import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './redux/store';

//initial state
const initialState = {
  allBooks: [
    { 
      bookId: Math.floor((Math.random() * 100) + 1),
      title: "The Hermit",
      category: "History"
    }, 
    {
      bookId: Math.floor((Math.random() * 100) + 1),
      title: "Queen of Endol",
      category: "Horror"
    },
    {
      bookId: Math.floor((Math.random() * 100) + 1),
      title: "Goals",
      category: "Learning"
    },
    {
      bookId: Math.floor((Math.random() * 100) + 1),
      title: "Helena of Avalor",
      category: "Kids"
    }
  ]
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

const selectAllBooks = (state) => state.allBooks;

export { initialState, selectAllBooks };
