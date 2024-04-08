import { createContext, useState } from "react";

const SearchBooksContext = createContext();

const SearchBookProvider = ({ children }) => {
  const [book, setBook] = useState("");

  return (
    <SearchBooksContext.Provider value={{ book, setBook }}>
      {children}
    </SearchBooksContext.Provider>
  );
};

export { SearchBooksContext, SearchBookProvider };
