import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './style/index.css';

export function Dashboard(): JSX.Element {
  const { logout, message, setMessage } = useContext(AuthContext);

  return (
    <div className="container_dashboard">
      {message && <h1 className="welcome">{message.description}</h1>}
      <button
        onClick={() => {
          setMessage(null);
          logout();
        }}
      >
        LOGOUT
      </button>
    </div>
  );
}
