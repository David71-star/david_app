import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);
  const toggleDarkMode = () => setIsDarkModeActive(!isDarkModeActive);
  return (
    <ThemeContext.Provider value={{ isDarkModeActive, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
