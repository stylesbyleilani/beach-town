











"use client"

import React, { useState } from 'react'
import { 
  MenuIcon,  
  XIcon 
} from 'lucide-react';
import { IoSearch } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

import Image from 'next/image';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleNavbar = () => {
    setMobileOpen(!mobileOpen)
  }

  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#service", label: "Shop" },
    { href: "/#delivery", label: "Delivery" },
    { href: "/#contact", label: "Contact" },

  ];

  return (
    <nav className='fixed w-full bg-white  top-0 z-50'
>


      <div className="container mx-auto px-4 py-1   flex justify-between items-center">
        <div className="flex items-center gap-2">
            <Image 
            alt='logo'
            src={"/logo.jpg"}
            width={40}
            height={40}
            />
          <span className='text-lg sm:text-xl font-bold text-red-600 tracking-tight'>
            Beach<span className='text-gray-900'>Town</span>
          </span>
        
        </div>

        <ul className='hidden lg:flex space-x-4 xl:space-x-8 font-medium'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                className='text-sm xl:text-base text-neutral-950 hover:text-green-800 transition-colors'
              >
                {link.label}
              </a>
            </li>
          ))}
                   <div className="hidden   lg:block">

        </div>


        </ul>

        <div className="hidden lg:block">
        <div className="icons text-gray-900 text-xl flex items-center gap-3">
                        <IoSearch/>
                        <FaUserAlt/>
                        <FaShoppingCart/>
                        <FaHeart/>
                    </div>

        </div>

        <div className="lg:hidden">
          <button 
            onClick={toggleNavbar} 
            className='text-neutral-800 focus:outline-none'
          >
            {mobileOpen ? (
              <XIcon className='text-red-500 w-6 h-6 sm:w-8 sm:h-8' />
            ) : (
              <MenuIcon className='w-6 h-6 sm:w-8 sm:h-8' />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className='fixed inset-0 bg-[#f1f5f9] z-40 lg:hidden overflow-y-auto'>
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
              <span className='text-xl font-bold text-neutral-900'>Prodmast</span>
              <button onClick={toggleNavbar}>
                <XIcon className='text-gray-900 w-8 h-8' />
              </button>
            </div>

            <ul className='space-y-6 text-center'>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className='text-lg sm:text-xl text-neutral-800 hover:text-blue-600'
                    onClick={toggleNavbar}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 text-center">
              <a 
                href="/login" 
                className='bg-[#142f32] text-white px-6 py-3 rounded-md text-lg'
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}