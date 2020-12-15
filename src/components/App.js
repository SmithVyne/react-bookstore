import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import CategoryFilter from './CategoryFilter';
import { CHANGE_FILTER } from '../actions';
import '../styles/App.css';

const App = ({ CHANGE_FILTER }) => {
  const handleFilterChange = value => CHANGE_FILTER(value);
  return (
    <>
      <nav>
        <h1 id="logo">Bookstore CMS</h1>
        <a href="/" className="nav-links">BOOKS</a>
        <CategoryFilter filterChange={handleFilterChange} />
        <i id="user-icon" className="fas fa-user" />
      </nav>
      <main>
        <BooksList />
        <BooksForm />
      </main>
    </>
  );
};

App.propTypes = {
  CHANGE_FILTER: PropTypes.func.isRequired,
};

export default connect(
  null,
  { CHANGE_FILTER },
)(App);
