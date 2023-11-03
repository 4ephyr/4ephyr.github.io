import React from 'react';

interface Props {
  name: string;
}

function Name(props: Props) {
  return (
    <h1 className="text-[4rem] font-semibold text-[#F8F8FF] leading-[5rem]">4ephyr</h1>
  );
}

export default Name;