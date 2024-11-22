

"use client";

import Link from "next/link";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiOutlineEnvironment, AiOutlineArrowUp } from "react-icons/ai";

export function Footer() {
  return (
    <footer id="footer" className="bg-[#d3ede1] px-6 py-12 rounded-t-3xl relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sections */}
        <div>
          <h2 className="text-2xl font-serif mb-4">Sections</h2>
          <nav className="space-y-2">
            <Link href="/" className="block text-lg hover:opacity-75">Home</Link>
            <Link href="/about" className="block text-lg hover:opacity-75">About</Link>
            <Link href="/services" className="block text-lg hover:opacity-75">Services</Link>
            <Link href="/products" className="block text-lg hover:opacity-75">Products</Link>
            <Link href="/contact" className="block text-lg hover:opacity-75">Contact Us</Link>
          </nav>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-2xl font-serif mb-4">Services</h2>
          <nav className="space-y-2">
            <Link href="/services/real-estate" className="block text-lg hover:opacity-75">Real Estate</Link>
            <Link href="/services/property-management" className="block text-lg hover:opacity-75">Property Management</Link>
            <Link href="/services/sales-marketing" className="block text-lg hover:opacity-75">Sales & Marketing</Link>
            <Link href="/services/interior-design" className="block text-lg hover:opacity-75">Interior Design</Link>
            <Link href="/services/digital" className="block text-lg hover:opacity-75">
              Product Management & Digital Services
            </Link>
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-2xl font-serif mb-4">Contact</h2>
          <div className="flex items-start gap-2">
            <AiOutlineEnvironment className="w-6 h-6 mt-1 flex-shrink-0" />
            <address className="not-italic text-lg">
              Suite 422 Roc Ages Plaza<br />
              Plots 247 Mafemi Crescent,<br />
              Obafemi Way, Utako, Abuja.
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <h1 className="text-3xl font-bold font-['Archivo_Black']">Nethill Ltd</h1>
          <p className="text-sm">Copyright© 2024 All right Reserved</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <Link 
            href="https://facebook.com/nethillproperties" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#4267B2] p-2 rounded-md hover:opacity-90 transition-opacity"
          >
            <AiFillFacebook className="w-5 h-5 text-white" />
          </Link>
          <Link 
            href="https://www.instagram.com/nethillproperties/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-600 p-2 rounded-md hover:opacity-90 transition-opacity"
          >
            <AiFillInstagram className="w-5 h-5 text-white" />
          </Link>
          <Link 
            href="https://www.youtube.com/@RealEstateWithNsa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#FF0000] p-2 rounded-md hover:opacity-90 transition-opacity"
          >
            <AiFillYoutube className="w-5 h-5 text-white" />
          </Link>
        </div>
      </div>
      <AiOutlineArrowUp
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute right-10 bottom-10 text-black text-4xl cursor-pointer animate-bounce"
      />
    </footer>
  );
}