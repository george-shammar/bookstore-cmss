const createBook = (book) => ({
  type: 'allBooks/createBook',
  payload: book,
});

const removeBook = (book) => ({
  type: 'allBooks/removeBook',
  payload: book,
});

const changeFilter = (filter) => ({
  type: 'allBooks/changeFilter',
  payload: filter,
});

export { createBook, removeBook, changeFilter };
