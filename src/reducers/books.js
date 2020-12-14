const initialBooks = [{
  id: Math.random(),
  title: 'Harry Porter',
  category: 'Kids',
},
{
  id: Math.random(),
  title: 'Harry Porter',
  category: 'Kids',
}];

const BooksReducer = (state = initialBooks, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.book];
    case 'REMOVE_BOOK':
      console.log(state);
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
};

export default BooksReducer;
