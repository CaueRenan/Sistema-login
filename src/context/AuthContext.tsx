import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';

type User = {
  username: string;
  password: string;
};

type ObjMessage = {
  description: string;
  color: string;
};

type ObjStates = {
  stateLogin: string;
  stateRegister: string;
};

interface IAuthContextProps {
  user: User | null;
  message: ObjMessage | null;
  componentStates: ObjStates;
  setMessage: Dispatch<SetStateAction<ObjMessage | null>>;
  setComponenteStates: Dispatch<SetStateAction<ObjStates>>;
  register: (username: string, password: string) => void;
  login: (username: string, password: string) => void;
  logout: () => void;
}
interface IAuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as IAuthContextProps);

export function AuthProvider({ children }: IAuthProviderProps): JSX.Element {
  const [user, setUser] = useState<User | null>(null);
  const [message, setMessage] = useState<ObjMessage | null>(null);
  const [componentStates, setComponenteStates] = useState<ObjStates>({
    stateLogin: 'off',
    stateRegister: 'off',
  });

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) setUser(JSON.parse(storedUser as string));
  }, []);

  const register = (username: string, password: string) => {
    const existingUser: User = JSON.parse(localStorage.getItem(username) as string);

    if (username === '' || password === '')
      return setMessage({
        description: 'Nenhum campo pode ficar vazio!',
        color: 'red',
      });

    if (existingUser)
      return setMessage({ description: 'Usuario já existe!', color: 'orange' });

    localStorage.setItem(username, JSON.stringify({ username, password }));
    setMessage({ description: 'Cadastro bem-sucedido! Volte ao login.', color: 'green' });
  };

  const login = (username: string, password: string) => {
    const storeUser = JSON.parse(localStorage.getItem(username) as string);

    if (storeUser && storeUser.password === password) {
      setUser(storeUser);
      localStorage.setItem('user', JSON.stringify(storeUser));

      const treatedName =
        username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();

      setMessage({
        description: `Olá ${treatedName}, seja bem-vindo de volta`,
        color: '',
      });
    }
    if (username === '' || password === '')
      return setMessage({
        description: 'Nenhum campo pode ficar vazio!',
        color: 'red',
      });
    if (!storeUser)
      return setMessage({ description: 'Usuario já existe!', color: 'orange' });

    if (storeUser.password !== password)
      return setMessage({ description: 'Senha invalida!', color: 'red' });
  };

  const logout = () => {
    setUser(null);
    setMessage(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        message,
        componentStates,
        setMessage,
        setComponenteStates,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
