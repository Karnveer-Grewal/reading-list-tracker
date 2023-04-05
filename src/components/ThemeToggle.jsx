import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { toggleTheme, isLightTheme, light, dark } = useContext(ThemeContext);

  const theme = isLightTheme ? light : dark;

  return (
    <button
      className='theme-button'
      onClick={toggleTheme}
      style={{ color: theme.syntax, background: theme.bg }}
    >
      {isLightTheme ? 'Toggle Dark Mode' : 'Toggle Light Mode'}
    </button>
  );
};

export default ThemeToggle;
