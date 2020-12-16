import PropTypes from 'prop-types';
import '../styles/BooksList.css';

const Book = ({ book, removeBook }) => {
  const { title, category } = book;
  return (
    <div className="book-panel">
      <div>
        <span>{category}</span>
        <h2>{title}</h2>
        <span className="author">John Doe</span>
        <div className="book-buttons">
          <button type="button">Comments</button>
          <button className="remove-btn" type="button" onClick={() => removeBook(book)}>Remove Book</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="middle">
        <div className="oval"><div>.</div></div>
        <div className="oval-aside">
          <span className="percentage">75%</span>
          <span className="completed">Completed</span>
        </div>
      </div>
      <div className="right">
        <span className="right-title">CURRENT CHAPTER</span>
        <span className="chapter-btn">Chapter 12</span>
        <button type="button" className="update-btn">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
