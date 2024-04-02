"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import nextConfig from '../../../next.config.mjs'

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

  return (
    <header className='px-5'>
        <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'>
            <Link href="/" className='flex lg:flex-1 pl-10'>
                <Image src={`${nextConfig.basePath}/assets/images/babyshark.jpeg`} alt="logo" width={50} height={50}/>
            </Link>
            
            {/* Hamburger icon (visible on small screens) */}
            <div className="lg:hidden">
            <button className="text-gray-400 hover:text-gray-600 focus:outline-none" onClick={toggleMenu}>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H4C3.44772 8 3 7.55228 3 7C3 6.44772 3.44772 6 4 6ZM4 12H20C20.5523 12 21 12.4477 21 13C21 13.5523 20.5523 14 20 14H4C3.44772 14 3 13.5523 3 13C3 12.4477 3.44772 12 4 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z"
                />
                </svg>
            </button>
            </div>
            {/* Menu (visible on larger screens) */}
            <div className="hidden lg:flex lg:gap-x-12 lg:justify-end">             
                <Link href="/" className="text-m ">Home</Link>
                <Link href="/aboutme" className="text-m">About me</Link>
                <Link href="/contact" className="text-m">Contact</Link>
            </div>
            
            {/* Mobile Navigation */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute inset-x-0 top-20 px-4 py-2`}>
          <ul className="flex flex-col space-y-2">
            <li>
                <Link href="/" className="text-m" onClick={closeMenu}>Home</Link>
            </li>
            <li>
                <Link href="/aboutme" className="text-m" onClick={closeMenu}>About me</Link>
            </li>
            <li>
                <Link href="/contact" className="text-m" onClick={closeMenu}>Contact</Link>
            </li>
          </ul>
        </div>

            
        </nav>
    </header>
   
  )
}

export default Nav