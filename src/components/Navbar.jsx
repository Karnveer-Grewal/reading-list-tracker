import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  console.log(books);

  const theme = isLightTheme ? light : dark;

  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Reading List Tracker</h1>
      <p>You have {books.length} to get through...</p>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
