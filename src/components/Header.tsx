"use client";

import Link from 'next/link'
import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { HiMenuAlt3, HiX } from 'react-icons/hi';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);

  }
  

  return (
   <header className='bg-blue-800 text-white py-5 flex justify-between items-center px-10 relative z-10'>
    <h1 className='text-3xl font-bold'>
        Watch Web
    </h1>
    <nav className='hidden md:flex gap-10 text-white font-bold'>
        <Link href="/" onClick={closeMenu}>Home</Link>
        <Link href="/about" onClick={closeMenu}>About</Link>
        <Link href="/watches" onClick={closeMenu}>Watches</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
        <FaShoppingCart className='text-white text-xl'/>
    </nav>

    <div className='md:hidden flex items-center'>
      <HiMenuAlt3
      className='text-white text-3xl cursor-pointer'
      onClick={toggleMenu}/>
    </div>

    <div className={`${
      isMenuOpen ? 'block' : 'hidden'
    } absolute top-0 left-0 w-full bg-blue-500 p-5 md:hidden z-20 `}>

      <div className='flex justify-end'>
        <HiX className='text-white text-3xl cursor-pointer'
        onClick={toggleMenu}/>

      </div>
      <nav className='hidden md:flex gap-10 text-white font-bold'>
        <Link href="/" onClick={closeMenu}>Home</Link>
        <Link href="/about" onClick={closeMenu}>About</Link>
        <Link href="/watches" onClick={closeMenu}>Watches</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
        <FaShoppingCart className='text-white text-xl'/>
    </nav>


    </div>
   </header>
  )
}

export default Header
