'use client';

import React from 'react';
import Link from 'next/link';
import { MdOutlineOpenInNew } from 'react-icons/md';
import { RiMenu3Fill } from "react-icons/ri";
import { usePathname } from 'next/navigation';

const Header = () => {
    const currentPath = usePathname();

  return (
    <header className='flex justify-start items-center px-5 md:px-0 md:justify-center gap-5 py-2 sm:py-4 bg-primary' >
        <nav className='flex items-center gap-6'>
            <button className='sm:hidden'>
                <RiMenu3Fill size={24}/>
            </button>
            <ul className='flex justify-around items-center gap-5'>
                <li className='border-2 rounded px-2.5 py-1'>
                    <Link className='text-lg' href='/'>Knowly</Link>
                </li>
                <li data-active={currentPath === '/'} className='hidden sm:inline data-[active=true]:underline'>
                    <Link href='/' >Página Inicial</Link>
                </li>
                <li data-active={currentPath === '/cursos'} className='hidden sm:inline data-[active=true]:underline  '>
                    <Link href='/cursos'>Cursos</Link>
                </li>
                <li className='hidden sm:flex items-center gap-1 '>
                    <Link href='https://blog.knowly.com' target='_blank'>Blog</Link>
                    <span>
                        <MdOutlineOpenInNew />
                    </span>
                </li>
            </ul>
            <h1 className='sm:hidden'>{currentPath === '/' ? 'Página Inicial' : 'Cursos'}</h1>
        </nav>
    </header>
  );
};

export default Header;