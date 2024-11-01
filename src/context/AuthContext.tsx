import React, { ReactNode, createContext, useEffect, useState } from 'react';

type user = {
  username: string;
  password: string;
};

interface IAuthContextProps {
  user: user;
  register: (username: string, password: string) => void;
  login: (username: string, password: string) => void;
  logout: () => void;
}
interface IAuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as IAuthContextProps);

export function AuthProvider({ children }: IAuthProviderProps): JSX.Element {
  const [user, setUser] = useState({} as user);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) setUser(JSON.parse(storedUser as string));
  }, []);

  const register = (username: string, password: string) => {
    const existingUser = localStorage.getItem(username);
    if (existingUser) {
      alert('Usuario já existe!');
      return false;
    }
    localStorage.setItem(username, JSON.stringify({ username, password }));
    alert('Cadastro bem-sucedido!');
    return true;
  };

  const login = (username: string, password: string) => {
    const storeUser = JSON.parse(localStorage.getItem(username) as string);

    if (storeUser && storeUser.password === password) {
      setUser(storeUser);
      localStorage.setItem('user', JSON.stringify(storeUser));
      alert('Você está logado!');
      return true;
    } else if (!storeUser) {
      alert('Usuário invalido');
      return;
    } else if (storeUser.password !== password) {
      alert('Senha invalida');
      return;
    }
  };

  const logout = () => {
    setUser({} as user);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
