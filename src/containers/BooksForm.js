const Categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => (
  <form>
    <input type="text" />
    <select>
      {
          Categories.map(category => (<option key={category}>{category}</option>))
        }
    </select>
    <button type="submit">Create a Book</button>
  </form>
);

export default BooksForm;
