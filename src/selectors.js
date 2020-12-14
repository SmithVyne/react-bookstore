const sortBooksByFilter = (books, filter) => books.filter(book => book.category === filter);

export default sortBooksByFilter;
