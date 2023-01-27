import { createContext, useContext, useState } from "react";
import React from "react";

const Context = createContext();

export const AppContext = ({ children }) => {
  const [logoDark, setLogoDark] = useState(false);
  return (
    <Context.Provider value={{ logoDark, setLogoDark }}>
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => useContext(Context);
