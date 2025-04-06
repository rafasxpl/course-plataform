'use client';

import React from 'react';
import Link from 'next/link';
import { MdOutlineOpenInNew } from 'react-icons/md';
import { usePathname } from 'next/navigation';

const Header = () => {
    const currentPath = usePathname();
    console.log(currentPath);

  return (
    <header className='flex justify-center items-center py-4 bg-primary' >
        <nav>
            <ul className='flex gap-2'>
                <li data-active={currentPath === '/'} className='data-[active=true]:underline'>
                    <Link href='/' >Página Inicial</Link>
                </li>
                <li data-active={currentPath === '/cursos'} className='data-[active=true]:underline'>
                    <Link href='/cursos'>Cursos</Link>
                </li>
                <li className='flex items-center gap-1'>
                    <Link href='https://blog.knowly.com' target='_blank'>Blog</Link>
                    <span>
                        <MdOutlineOpenInNew />
                    </span>
                </li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;