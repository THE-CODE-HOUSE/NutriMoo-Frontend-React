import React, { createContext, useState, useContext, useEffect } from 'react';
import { UserStorage } from "../storage/storage";
import jwtDecode from 'jwt-decode';
import "core-js/stable/atob";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const token = await UserStorage.getUser();
      if (token.data) {
        try {
            console.log(token.data)
          const decodedToken = jwtDecode(token.data);
          const isTokenExpired = decodedToken.exp * 1000 < Date.now();

          if (!isTokenExpired) {
            setIsAuthenticated(true);
          } else {
            // Token expirado, remover do armazenamento e manter desautenticado
            await UserStorage.removeUser();
          }
        } catch (error) {
          // Erro na decodificação do token (token inválido, etc.)
          await UserStorage.removeUser();
        } 
      }
    };

    checkToken();
  }, []);

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