const createBook = (book) => ({
  type: 'allBooks/createBook',
  payload: book,
});

const removeBook = (book) => ({
  type: 'allBooks/removeBook',
  payload: book,
});

export { createBook, removeBook };
