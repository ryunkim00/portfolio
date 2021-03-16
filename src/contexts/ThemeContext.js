import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    isLightTheme: true,
    light: {
      bg: "#fff",
      syntax: "#333",
      primary: "#fcbc66",
      secondary: "#fbeec1",
      tertiary: "#f97b4f",
    },
    dark: {
      bg: "#333",
      syntax: "#fff",
      primary: "#444",
      secondary: "#555",
      tertiary: "#222",
    },
  });

  return (
    <ThemeContext.Provider value={{ ...theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
