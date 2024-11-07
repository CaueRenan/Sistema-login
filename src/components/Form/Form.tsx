import React, { ChangeEvent, useState } from 'react';
import { BiHide, BiShowAlt } from 'react-icons/bi';
import { FaUserAlt } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import './style/index.css';

interface Props {
  valueInputUsername: string;
  valueInputPassword: string;
  btnText: string;
  inputUsernameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputPasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

export function Form(props: Props): JSX.Element {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <form
        id="form"
        className="container_form"
        onSubmit={(e) => {
          e.preventDefault();
          props.onSubmit();

          setShowPassword(false);
        }}
      >
        <span className="span_name">
          <FaUserAlt />
        </span>
        <input
          type="text"
          onChange={props.inputUsernameChange}
          value={props.valueInputUsername}
          placeholder="Nome"
        />
        <div className="container_password">
          <span className="span_password">
            <RiLockPasswordFill />
          </span>
          <input
            type={showPassword === false ? 'password' : 'text'}
            onChange={props.inputPasswordChange}
            value={props.valueInputPassword}
            placeholder="Senha"
          />

          {showPassword === false ? (
            <figure
              onClick={(e) => {
                e.stopPropagation();
                setShowPassword(!showPassword);
              }}
            >
              <BiShowAlt size={30} />
            </figure>
          ) : (
            <figure
              onClick={(e) => {
                e.stopPropagation();
                setShowPassword(!showPassword);
              }}
            >
              <BiHide size={30} />
            </figure>
          )}
        </div>
        <button type="submit" form="form">
          {props.btnText}
        </button>
      </form>
    </>
  );
}
