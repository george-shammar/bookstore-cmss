// create books action

const createBook = (book) => {
    return {
      type: 'allBooks/createBook',
      payload: book
    }
}

// remove books action

const removeBook = (book) => {
    return {
      type: 'allBooks/removeBook',
      payload: book
    }
}