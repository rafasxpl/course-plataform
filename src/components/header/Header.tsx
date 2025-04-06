'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { MdOutlineOpenInNew } from 'react-icons/md';
import { RiMenu3Fill } from "react-icons/ri";
import { usePathname } from 'next/navigation';

const Header = () => {
    const [title, setTitle] = useState('Knowly - Página Inicial');
    const [menuOpen, setMenuOpen] = useState(false);
    const currentPath = usePathname();

    useEffect(() => {
        setTitle(document.title);
        setMenuOpen(false);
    }, [currentPath]);

  return (
        <header className='flex justify-start items-center px-5 md:px-0 md:justify-center gap-5 py-2 sm:py-4 bg-primary' >
            <nav className='flex items-center gap-6'>
                <button
                    className='sm:hidden button'
                    onClick={() => {setMenuOpen(!menuOpen);}}
                >
                    <RiMenu3Fill size={24}/>
                </button>
                <ul className='flex justify-around items-center gap-5' tabIndex={menuOpen ? -1 : undefined }>
                    <li className='border-2 rounded px-2.5 py-1' onClick={() => setMenuOpen(false)}>
                        <Link className='text-lg' href='/'>Knowly</Link>
                    </li>
                    <li data-active={currentPath === '/'} className='hidden sm:inline data-[active=true]:underline' >
                        <Link href='/' >Página Inicial</Link>
                    </li>
                    <li data-active={currentPath === '/cursos'} className='hidden sm:inline data-[active=true]:underline' >
                        <Link href='/cursos'>Cursos</Link>
                    </li>
                    <li className='hidden sm:flex items-center gap-1 '>
                        <Link href='https://blog.knowly.com' target='_blank'>Blog</Link>
                        <span>
                            <MdOutlineOpenInNew />
                        </span>
                    </li>
                </ul>
                <div
                    data-open={menuOpen}
                    tabIndex={menuOpen ? undefined : -1 }
                    className={
                        `fixed top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-background transition-transform data-[open=false]:-translate-x-full sm:hidden`
                    }
                    onClick={() => {setMenuOpen(!menuOpen);}}
                >
                    <ul
                        className={`flex flex-col gap-5 w-60 h-full px-6 py-5 bg-background`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <li data-active={currentPath === '/'} className='data-[active=true]:border-b-2 border-white'>
                            <Link href='/' >Página Inicial</Link>
                        </li>
                        <li data-active={currentPath === '/cursos'} className='data-[active=true]:border-b-2 border-white'>
                            <Link href='/cursos'>Cursos</Link>
                        </li>
                        <li className='flex items-center gap-1 '>
                            <Link href='https://blog.knowly.com' target='_blank'>Blog</Link>
                            <span>
                                <MdOutlineOpenInNew />
                            </span>
                        </li>
                    </ul>
                </div>
                <h1 className='sm:hidden'>{title}</h1>
            </nav>
        </header>
  );
};

export default Header;