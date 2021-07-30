const filterReducer = (state = 'All', action) => {
  let filtered = state;
  switch (action.type) {
    case 'allBooks/changeFilter':
      filtered = action.payload;
      return filtered;
    default:
      return filtered;
  }
};

export default filterReducer;
