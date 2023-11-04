import React from 'react'
import Link from '../components/Link.tsx';

interface Props {
    children?: React.ReactElement;
}

function Header(props: Props) {
return (
    <div className='py-6 sm:px-8 px-4'>
        <div className='flex sm:justify-between justify-end'>
            <div className="hidden lg:flex gap-2 p-5 pt-0"><div className="h-4 w-4 bg-gray-500 rounded-full"></div><div className="h-4 w-4 bg-gray-500 rounded-full"></div></div>
            {props.children}
        </div>
    </div>
);
}

export default Header;