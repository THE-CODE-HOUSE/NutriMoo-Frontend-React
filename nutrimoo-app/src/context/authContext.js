//Esse codigo pertence ao contexto de Autenticação
//Ele é utilizado para definir se o usuario está ou não autenticado
import React, { createContext, useState, useContext, useEffect } from 'react';
import { UserStorage } from "../storage/storage";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  //Na linha abaixo é definido o estado de autenticação
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  
//O bloco a seguir quando chamado em outra parte do app o recbe o token do usuario
//guarda-o no Storage e altera o estado para autenticado
  const login = async (token) => {
    await  UserStorage.setUser(token);
    setIsAuthenticated(true);
  };
//No bloco a seguir, quando chamado em outro codigo o storage é limpo e o estado de autenticação é alterado para falso
  const logout = async () => {
    await UserStorage.removeUser();
    setIsAuthenticated(false);
  };
//Essa parte faz com que o app seja emglobado no contexto de autenticação
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};