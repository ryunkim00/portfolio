import React, { createContext, useState } from "react";

export const NavContext = createContext();

const NavContextProvider = ({ children }) => {
  const [navVisible, setNavVisible] = useState(false);

  return (
    <NavContext.Provider value={{ navVisible, setNavVisible }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavContextProvider;
