import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CREATE_BOOK } from '../actions';

export const Categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BooksForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      title: '',
      category: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = node => {
    if (node.nodeName === 'INPUT') {
      this.setState({ title: node.value });
    } else if (node.nodeName === 'SELECT') {
      this.setState({ category: node.value });
    }
  }

  handleSubmit = () => {
    const { CREATE_BOOK } = this.props;
    const book = { ...this.state, id: Math.random() };
    CREATE_BOOK(book);
    this.setState({ title: '', category: '' });
  }

  render() {
    const { title } = this.state;
    return (
      <form>
        <input type="text" onChange={e => this.handleChange(e.target)} value={title} />
        <select onChange={e => this.handleChange(e.target)}>
          <option disabled selected>Categories</option>
          {
            Categories.map(category => (<option key={category}>{category}</option>))
          }
        </select>
        <button type="button" onClick={this.handleSubmit}>Create a Book</button>
      </form>
    );
  }
}

BooksForm.propTypes = {
  CREATE_BOOK: PropTypes.func.isRequired,
};

export default connect(
  null,
  { CREATE_BOOK },
)(BooksForm);
