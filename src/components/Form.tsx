import React, { ChangeEvent } from 'react';

interface Props {
  valueInputUsername: string;
  valueInputPassword: string;
  btnText: string;
  inputUsernameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputPasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

export function Form(props: Props): JSX.Element {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.onSubmit();
        }}
      >
        <input type="text" onChange={props.inputUsernameChange} />
        <input type="text" onChange={props.inputPasswordChange} />
        <button type="submit">{props.btnText}</button>
      </form>
    </>
  );
}
