import React from 'react';

interface Props {
  name: string;
}

function Name(props: Props) {
  return (
    <h1 className="text-[4rem] font-semibold text-primary leading-[5rem]">{props.name}</h1>
  );
}

export default Name;