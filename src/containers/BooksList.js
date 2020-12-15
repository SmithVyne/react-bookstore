import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { REMOVE_BOOK } from '../actions';
import sortBooksByFilter from '../selectors';

const BooksList = ({ books, REMOVE_BOOK }) => {
  const handleRemoveBook = book => REMOVE_BOOK(book);

  return (
    <>
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
  { REMOVE_BOOK },
)(BooksList);

// export default BooksList;
