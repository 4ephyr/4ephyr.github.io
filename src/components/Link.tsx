import React from 'react';

interface Props {
  link: string;
  refer: string;
  target?: string;
  children?: React.ReactElement;
}

function Link(props: Props) {
  return (
      <a href={props.refer} className='px-4 py-2 flex items-center gap-2 font-semibold font-sans bg-primary hover:bg-gray-500 mx-2 transition-all duration-200 ease-in-out rounded-[5px]' target={props.target}>{props.link}{props.children}</a>
  );
}

export default Link;