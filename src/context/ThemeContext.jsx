import { useState, useContext, createContext } from "react";

const ThemeContext = createContext("");

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error(
      "Please call the useTheme hook inside ThemeContextProvider"
    );
  }

  return themeContext;
};
export const ThemeContextProvider = ({ children }) => {
  const [appTheme, setAppTheme] = useState({ theme: "light", isDark: true });

  const toggleTheme = () => {
    setAppTheme({
      theme: appTheme.isDark ? "light" : "dark",
      isDark: !appTheme.isDark,
    });
  };
  return (
    <ThemeContext.Provider value={{ appTheme, setAppTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
