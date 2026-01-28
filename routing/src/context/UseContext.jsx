import { createContext, useState } from "react";

export const UseContext = createContext();

const UseProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme((prev) => !prev);
  };

  const login = (userData) => {
    console.log("User logged in:", userData);
  };

  return (
    <UseContext.Provider
      value={{
        theme,
        toggleTheme,
        login
      }}
    >
      {children}
    </UseContext.Provider>
  );
};

export default UseProvider;
