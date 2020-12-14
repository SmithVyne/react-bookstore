import PropTypes from 'prop-types';
import { Categories } from '../containers/BooksForm';

const CategoryFilter = ({ filterChange }) => (
  <select onChange={e => filterChange(e.target.value)}>
    <option disabled selected>Filter Categories</option>
    <option value="">All</option>
    {
      Categories.map(category => (<option key={category}>{category}</option>))
    }
  </select>
);

CategoryFilter.propTypes = {
  filterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
