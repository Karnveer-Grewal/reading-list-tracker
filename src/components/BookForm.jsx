import { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

const BookForm = () => {
  const { dispatch, books } = useContext(BookContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const theme = isLightTheme ? light : dark;

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = books.length + 1;
    dispatch({
      type: 'ADD_BOOK',
      book: {
        title,
        author,
        id,
      },
    });
    setTitle('');
    setAuthor('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='book-form'
      style={{ background: theme.bg }}
    >
      <h3 style={{ color: theme.syntax }}>Add Book</h3>
      <input
        required
        type='text'
        placeholder='Book Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />

      <input
        required
        type='text'
        placeholder='Book Author'
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <br />
      <button
        className='submit-button'
        style={{ background: theme.ui, color: theme.syntax }}
      >
        Submit
      </button>
    </form>
  );
};

export default BookForm;
