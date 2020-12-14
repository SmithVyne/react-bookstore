import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = ({ books }) => (
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
        <Book book={book} key={book.id} />
      ))}
    </tbody>
  </table>
);

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  const { books } = state;
  return { books };
};

// Exports BooksList
export default connect(
  mapStateToProps,
)(BooksList);

// export default BooksList;
