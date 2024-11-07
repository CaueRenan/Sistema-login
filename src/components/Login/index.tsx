import React, { useContext, useState } from 'react';
import { Form } from '../Form/Form';
import { AuthContext } from '../../context/AuthContext';
import { IoArrowBackOutline } from 'react-icons/io5';
import { MessageBox } from '../MessageBox';

import './style/index.css';

export function Login(): JSX.Element {
  const { componentStates, message, setMessage, setComponenteStates, login } =
    useContext(AuthContext);

  const [username, setUsename] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <main
        onClick={() => {
          setMessage(null);
          setComponenteStates({
            stateLogin: 'on',
            stateRegister: 'back',
          });
        }}
      >
        {componentStates.stateLogin !== 'on' ? (
          <div className="card_login">
            {componentStates.stateLogin === 'off' ? (
              <h1 className="card_login_button">LOGIN</h1>
            ) : (
              <figure className="card_login_figure">
                <IoArrowBackOutline size={30} />
              </figure>
            )}
          </div>
        ) : (
          <div className="container_login">
            {message && <MessageBox />}

            <h1 className="container_login_tilte">LOGIN</h1>
            <Form
              inputUsernameChange={(e) => setUsename(e.target.value)}
              inputPasswordChange={(e) => setPassword(e.target.value)}
              valueInputUsername={username}
              valueInputPassword={password}
              btnText="ENTRAR"
              onSubmit={() => {
                login(username, password);
                setUsename('');
                setPassword('');
              }}
            />
          </div>
        )}
      </main>
    </>
  );
}
