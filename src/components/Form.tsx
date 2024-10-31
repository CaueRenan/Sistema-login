import React from 'react';

interface Props {
  btnText: string;
}

export function Form(props: Props): JSX.Element {
  return (
    <>
      <form>
        <input type="text" />
        <input type="text" />
        <button type="submit">{props.btnText}</button>
      </form>
    </>
  );
}
