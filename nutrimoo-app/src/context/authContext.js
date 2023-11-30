import React, { createContext, useState, useContext, useEffect } from 'react';
import { UserStorage } from "../storage/storage";


const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  

  const login = async (token) => {
    await  UserStorage.setUser(token);
    setIsAuthenticated(true);
  };

  const logout = async () => {
    await UserStorage.removeUser();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};