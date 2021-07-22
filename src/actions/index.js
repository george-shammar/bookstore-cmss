// create books action

const createBook = (book) => {
    return {
      type: 'allBooks/addBook',
      payload: book
    }
  }