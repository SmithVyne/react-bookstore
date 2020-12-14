export const CREATE_BOOK = book => ({
  type: 'CREATE_BOOK',
  book,
});

export const REMOVE_BOOK = ({ id }) => ({
  type: 'REMOVE_BOOK',
  id,
});

export const CHANGE_FILTER = filter => ({
  type: 'CHANGE_FILTER',
  filter,
});
