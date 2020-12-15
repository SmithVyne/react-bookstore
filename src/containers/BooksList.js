import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { REMOVE_BOOK, CHANGE_FILTER } from '../actions';
import CategoryFilter from '../components/CategoryFilter';
import sortBooksByFilter from '../selectors';

const BooksList = ({ books, REMOVE_BOOK, CHANGE_FILTER }) => {
  const handleRemoveBook = book => REMOVE_BOOK(book);
  const handleFilterChange = value => CHANGE_FILTER(value);

  return (
    <>
      <CategoryFilter filterChange={handleFilterChange} />
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          { books.map(book => (
            <Book book={book} key={book.id} removeBook={handleRemoveBook} />
          ))}
        </tbody>
      </table>
    </>
  );
};

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  REMOVE_BOOK: PropTypes.func.isRequired,
  CHANGE_FILTER: PropTypes.func.isRequired,
};

const mapStateToProps = ({ books, filter }) => {
  if (filter !== 'All') {
    const filteredbooks = sortBooksByFilter(books, filter);
    return { books: filteredbooks };
  }
  return { books };
};

// Exports BooksList
export default connect(
  mapStateToProps,
  { REMOVE_BOOK, CHANGE_FILTER },
)(BooksList);

// export default BooksList;
