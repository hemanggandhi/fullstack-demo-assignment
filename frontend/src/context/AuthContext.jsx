// src/context/AuthContext.jsx
import { createContext, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ isAuthenticated, username }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
