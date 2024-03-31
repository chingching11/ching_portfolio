"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className='px-5'>
        <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'>
            <Link href="/" className='flex lg:flex-1 pl-10'>
                <Image src="/assets/images/babyshark.jpeg" alt="logo" width={50} height={50}/>
            </Link>
            <div className="hidden lg:flex lg:gap-x-12 lg:justify-end">             
                <Link href="/" className="text-m ">Home</Link>
                <Link href="/aboutme" className="text-m">About me</Link>
                <Link href="/contact" className="text-m">Contact</Link>
            </div>
            
            {/* Mobile Navigation */}
            <div className='sm:flex hidden'>

            </div>
        </nav>
    </header>
   
  )
}

export default Nav