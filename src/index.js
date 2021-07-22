import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

//initial state
const Id = () => {
  return Math.floor((Math.random() * 100) + 1);
}

const initialState = {
  allBooks: [
    { 
      bookId: Id,
      title: "The Hermit",
      category: "History"
    }, 
    {
      bookId: Id,
      title: "Queen of Endol",
      category: "Horror"
    },
    {
      bookId: Id,
      title: "Goals",
      category: "Learning"
    },
    {
      bookId: Id,
      title: "Helena of Avalor",
      category: "Kids"
    }
  ]
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
