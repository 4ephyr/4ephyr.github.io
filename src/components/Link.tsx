import React from 'react';

interface Props {
  link: string;
  refer: string;
}

function Link(props: Props) {
  return (
      <a href={props.refer} className='px-4 py-2 font-semibold font-sans bg-[#F8F8FF] hover:bg-gray-500 mx-2 transition-all duration-200 ease-in-out rounded-[5px]'>{props.link}</a>
  );
}

export default Link;