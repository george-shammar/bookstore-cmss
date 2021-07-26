// create books action

const createBook = (book) => ({
  type: 'allBooks/createBook',
  payload: book,
});

// remove books action

const removeBook = (book) => ({
  type: 'allBooks/removeBook',
  payload: book,
});

export { createBook, removeBook };
