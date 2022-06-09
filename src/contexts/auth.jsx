import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );
  const [token, setToken] = useState(localStorage.getItem("token") ?? "");

  localStorage.setItem("token", token);
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, setToken, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
