import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);

  const theme = isLightTheme ? light : dark;

  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Reading List Tracker</h1>
      <p>You have {books.length} book(s) to get through...</p>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
