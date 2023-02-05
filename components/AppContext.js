import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import React from "react";

const Context = createContext();

export const AppContext = ({ children }) => {
  const [logoDark, setLogoDark] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setNavOpen(false);
  }, [router]);

  return (
    <Context.Provider value={{ logoDark, setLogoDark, navOpen, setNavOpen }}>
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => useContext(Context);
