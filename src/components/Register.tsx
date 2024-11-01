import React, { useContext, useState } from 'react';
import { Form } from './Form';
import { AuthContext } from '../context/AuthContext';

export function Register(): JSX.Element {
  const { register } = useContext(AuthContext);

  const [username, setUsename] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <h1>register</h1>
      <Form
        inputUsernameChange={(e) => setUsename(e.target.value)}
        inputPasswordChange={(e) => setPassword(e.target.value)}
        valueInputUsername={username}
        valueInputPassword={password}
        btnText="Registrar"
        onSubmit={() => {
          console.log(username, password);
          register(username, password);
        }}
      />
    </>
  );
}
