import { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

const BookDetails = (props) => {
  const { title, author, id } = props;
  const { removeBook } = useContext(BookContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <li style={{ background: theme.ui }}>
      <h3>{title}</h3>
      <p>{author}</p>
      <button
        className='delete-button'
        style={{ background: theme.bg, color: theme.syntax }}
        onClick={() => removeBook(id)}
      >
        Remove Book
      </button>
    </li>
  );
};

export default BookDetails;
