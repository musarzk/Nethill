"use client";

import { AiOutlinePhone, AiOutlineMail, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';


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
              <div>2348035961225, +2347038342391</div>
            </span>
            <span className="flex items-center space-x-1">
              <AiOutlineMail className="inline-block mr-1" />
              <span>info@nethillreality.com</span>
            </span>
          </div>

          {/* Social Icons - Hidden on small screens */}
          <div className="hidden md:flex flex-row space-x-3">
            <Link href="https://facebook.com/nethillproperties" legacyBehavior>
              <a target="_blank" className="cursor-pointer text-white transition-transform transform hover:scale-110">
                <FaFacebookF size={20} />
              </a>
            </Link>
            <Link href="https://www.instagram.com/nethillproperties/" legacyBehavior>
              <a target="_blank" className="cursor-pointer text-white transition-transform transform hover:scale-110">
                <FaInstagram size={24} />
              </a>
            </Link>
            <Link href="https://www.youtube.com/@RealEstateWithNsa" legacyBehavior>
              <a target="_blank" className="cursor-pointer text-white transition-transform transform hover:scale-110">
                <FaYoutube size={24} />
              </a>
            </Link>
          </div>
        </div>
      </header>

      {/* Navbar */}
      <nav className="bg-white shadow-md p-2 pl-7  pr-10 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0 flex flex-col items-center space-y-1">
          <Link href="/"><Image src="logo.png" alt="Logo" width={130} height={20} className="hidden md:block" />
          <Image src="logo2.png" alt="Mobile Logo" width={150} height={30} className="md:hidden" />
          <div  className="text-center text-gray-800 text-[11px] md:text-[12px]"
      style={{ letterSpacing: "1.1em"  }} >
      REALITY
    </div>
        </Link>
        </div>
        
       

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link href="/" className="hover:border-b-4 border-red-500 focus:border-b-2 focus:text-red-500">HOME</Link></li>
          <li><Link href="/about" className="hover:border-b-4 border-red-500 focus:border-b-2 focus:text-red-500">ABOUT</Link></li>
          <li><Link href="/services" className="hover:border-b-4 border-red-500 focus:border-b-2 focus:text-red-500">SERVICES</Link></li>
          <li><Link href="/gallery" className="hover:border-b-4 border-red-500 focus:border-b-2 focus:text-red-500">GALARY</Link></li>
          <li><Link href="/contact" className="hover:border-b-4 border-red-500 focus:border-b-2 focus:text-red-500">CONTACT US</Link></li>
        </ul>

        {/* Mobile Menu Icon */}
        <button onClick={toggleMenu} className="md:hidden text-2xl focus:outline-none z-50">
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg p-4 space-y-4 z-40">
          <li>
            <Link
              href="/"
              className="block text-center pb-2 border-b-2 border-transparent hover:border-red-500 transition-all duration-300"
              onClick={toggleMenu}>
             HOME
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block text-center pb-2 border-b-2 border-transparent hover:border-red-500 transition-all duration-300"
              onClick={toggleMenu} >
                 ABOUT
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="block text-center pb-2 border-b-2 border-transparent hover:border-red-500 transition-all duration-300"
              onClick={toggleMenu} >
             SERVICES
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className="block text-center pb-2 border-b-2 border-transparent hover:border-red-500 transition-all duration-300"
              onClick={toggleMenu}>
              GALARY
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block text-center pb-2 border-b-2 border-transparent hover:border-red-500 transition-all duration-300"
              onClick={toggleMenu} >
              CONTACT US
            </Link>
          </li>
        </ul>
        )}
      </nav>
    </div>
  );
}
