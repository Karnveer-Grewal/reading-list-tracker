import { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const booksObj = [
    { title: 'Name of The Wind', author: 'Patrick Rothfuss', id: 1 },
    { title: 'The Final Empire', author: 'Brandon Sanderson', id: 2 },
  ];

  const [books, setBooks] = useState(booksObj);

  const addBook = (title, author, id) => {
    console.log('added');
    setBooks((prevBooks) => [...prevBooks, { title, author, id }]);
  };

  const removeBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
