import React, { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Dashboard } from './components/Dashboard';

export default function App(): JSX.Element {
  const { user } = useContext(AuthContext);

  return (
    <>
      {!user.username ? (
        <div>
          <Login />
          <Register />
        </div>
      ) : (
        <Dashboard />
      )}
    </>
  );
}
