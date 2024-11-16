"use client";

import { AiOutlinePhone, AiOutlineMail, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Home from '../page';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Top Header with Contact Info */}
      <header className="bg-red-600 text-white text-center p-1">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 md:space-x-6 px-4">
          {/* Contact Information */}
          <div className="text-base flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 lg:pl-40 leading-tight sm:leading-5">
            <span className="flex items-center space-x-1">
              <AiOutlinePhone className="inline-block mr-1" size={20}  />
              <span>+2348035961225, +2347038342391</span>
            </span>
            <span className="flex items-center space-x-1">
              <AiOutlineMail className="inline-block mr-1" />
              <span>info@nethill.com.ng</span>
            </span>
          </div>

          {/* Social Icons - Hidden on small screens */}
          <div className="hidden md:flex flex-row space-x-3">
            <Link href="https://facebook.com" legacyBehavior>
              <a target="_blank" className="cursor-pointer text-white transition-transform transform hover:scale-110">
                <FaFacebookF size={20} />
              </a>
            </Link>
            <Link href="https://twitter.com" legacyBehavior>
              <a target="_blank" className="cursor-pointer text-white transition-transform transform hover:scale-110">
                <FaInstagram size={24} />
              </a>
            </Link>
            <Link href="https://instagram.com" legacyBehavior>
              <a target="_blank" className="cursor-pointer text-white transition-transform transform hover:scale-110">
                <FaYoutube size={24} />
              </a>
            </Link>
          </div>
        </div>
      </header>

      {/* Navbar */}
      <nav className="bg-white shadow-md p-4  pr-10 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/"><Image src="/logo.png" alt="Logo" width={120} height={25} className="hidden md:block" />
          <Image src="/logo2.png" alt="Mobile Logo" width={120} height={25} className="md:hidden" />
        </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link href="/" className=" hover:border-b-4 border-red-500 focus:border-b-2">Home</Link></li>
          <li><Link href="/about" className="hover:border-b-4 border-red-500 focus:border-b-2">About</Link></li>
          <li><Link href="/services" className="hover:border-b-4 border-red-500 focus:border-b-2">Services</Link></li>
          <li><Link href="/gallery" className="hover:border-b-4 border-red-500 focus:border-b-2">Gallery</Link></li>
          <li><Link href="/contact" className="hover:border-b-4 border-red-500 focus:border-b-2">Contact</Link></li>
        </ul>

        {/* Mobile Menu Icon */}
        <button onClick={toggleMenu} className="md:hidden text-2xl focus:outline-none z-50">
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg p-4 space-y-4 z-40">
            <li ><Link href="/" className="block text-center hover:border-b-4 border-red-500 Hover:mb-0 focus:border-b-2" onClick={toggleMenu}>Home</Link></li>
            <li><Link href="/about" className="block text-center hover:border-b-4 border-red-500 focus:border-b-2" onClick={toggleMenu}>About</Link></li>
            <li><Link href="/services" className="block text-center hover:border-b-4 border-red-500 focus:border-b-2" onClick={toggleMenu}>Services</Link></li>
            <li><Link href="/gallery" className="block text-center hover:border-b-4 border-red-500 focus:border-b-2" onClick={toggleMenu}>Gallery</Link></li>
            <li><Link href="/contact" className="block text-center hover:border-b-4 border-red-500 focus:border-b-2" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        )}
      </nav>
    </div>
  );
}
