import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export function Dashboard(): JSX.Element {
  const { logout } = useContext(AuthContext);

  return (
    <>
      <h1>Obrigado pelo acesso</h1>
      <button onClick={() => logout()}>LOGOUT</button>
    </>
  );
}
