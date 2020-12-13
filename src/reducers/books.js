const initialBooks = [{
  id: Math.random(),
  title: 'Harry Porter',
  category: 'Kids',
}];

const BooksReducer = (state = initialBooks, action) => {
  const { books } = state;
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...books, action.book];
    case 'REMOVE_BOOK':
      return books.filter(book => book.id !== action.book.id);
    default:
      return state;
  }
};

export default BooksReducer;
