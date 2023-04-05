import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;

  const booksList = books.map((book) => (
    <BookDetails {...book} uiTheme={theme.ui} key={book.id} />
  ));

  return books.length ? (
    <div
      className='book-list'
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <ul>{booksList}</ul>
    </div>
  ) : (
    <div
      className='empty-books'
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <h3>No books in tracker. </h3>

      <p>Add more books to keep track of what you still need to read.</p>
    </div>
  );
};

export default BookList;
