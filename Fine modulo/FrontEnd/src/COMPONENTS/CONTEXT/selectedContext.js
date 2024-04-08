import { createContext, useState } from "react";

export const SelectedContext = createContext();

export const SelectedProvider = ({ children }) => {
  const [selected, setSelected] = useState("");

  return (
    <SelectedContext.Provider value={{ setSelected, selected }}>
      {children}
    </SelectedContext.Provider>
  );
};
