import React, { useContext, useState } from 'react';
import { Form } from '../Form/Form';
import { AuthContext } from '../../context/AuthContext';
import { IoArrowBackOutline } from 'react-icons/io5';
import { MessageBox } from '../MessageBox';

import './style/index.css';

export function Register(): JSX.Element {
  const { componentStates, message, setMessage, setComponenteStates, register } =
    useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState<string[]>([]);

  const passwordHandling = (password: string) => {
    const arrayError = [];
    setPassword(password);

    if (!/\d/.test(password)) arrayError.push('Pelo menos 1 número');
    if (password.length > 8 || password.length < 4) arrayError.push('4 a 8 caracteres');

    setPasswordCheck(arrayError);
  };

  return (
    <>
      <main
        onClick={() => {
          setMessage(null);
          setComponenteStates({
            stateLogin: 'back',
            stateRegister: 'on',
          });
        }}
      >
        {componentStates.stateRegister !== 'on' ? (
          <div className="card_register">
            {componentStates.stateRegister === 'off' ? (
              <h1 className="card_register_button">REGISTRAR</h1>
            ) : (
              <figure className="card_register_figure">
                <IoArrowBackOutline size={30} />
              </figure>
            )}
          </div>
        ) : (
          <div className="container_register">
            <h1 className="container_register_tilte">REGISTRAR</h1>
            <Form
              inputUsernameChange={(e) => setUsername(e.target.value)}
              inputPasswordChange={(e) => {
                passwordHandling(e.target.value);
              }}
              valueInputUsername={username}
              valueInputPassword={password}
              btnText="REGISTRAR"
              onSubmit={() => {
                if (passwordCheck.length === 0) {
                  register(username, password);
                  setUsername('');
                  setPassword('');
                }
              }}
            />
            {message && <MessageBox />}

            {passwordCheck.length > 0 && (
              <ul className="password_requirements">
                {passwordCheck.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </main>
    </>
  );
}
