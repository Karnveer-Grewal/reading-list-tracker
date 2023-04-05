import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import BookContextProvider from './contexts/BookContext';
import './index.css';

function App() {
  return (
    <div className='App'>
      <ThemeContextProvider>
        <BookContextProvider>
          <Navbar />
          <BookList />
        </BookContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
