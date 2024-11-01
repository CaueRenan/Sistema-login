import React, { useContext, useState } from 'react';
import { Form } from './Form';
import { AuthContext } from '../context/AuthContext';

export function Login(): JSX.Element {
  const { login } = useContext(AuthContext);

  const [username, setUsename] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <h1>login</h1>
      <Form
        inputUsernameChange={(e) => setUsename(e.target.value)}
        inputPasswordChange={(e) => setPassword(e.target.value)}
        valueInputUsername={username}
        valueInputPassword={password}
        btnText="Login"
        onSubmit={() => login(username, password)}
      />
    </>
  );
}
