import PropTypes from 'prop-types';
import { Categories } from '../containers/BooksForm';

const filterCategories = ['All', ...Categories];
const CategoryFilter = ({ filterChange }) => (
  <select onChange={e => filterChange(e.target.value)} className="nav-links">
    <option disabled selected>Categories</option>
    {
      filterCategories.map(category => (<option key={category}>{category}</option>))
    }
  </select>
);

CategoryFilter.propTypes = {
  filterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
