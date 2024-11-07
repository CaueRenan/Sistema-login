import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './style/index.css';

export function MessageBox(): JSX.Element {
  const { message } = useContext(AuthContext);

  return (
    <>
      {!message ? (
        ''
      ) : (
        <article className={`popup ${message.color}`}>{message.description}</article>
      )}
    </>
  );
}
