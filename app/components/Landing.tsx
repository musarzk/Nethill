// "use client";

// import React from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import Link from 'next/link';


// export default function Landingpage() {
//   return (
//     <div className="text-gray-800 font-sans">
      

//       {/* Hero Section */}
//       <section className="relative h-screen bg-cover bg-center flex items-center justify-center bg-[url('/hero-background.jpg')]">
//         <div className="absolute inset-0 bg-black opacity-30"></div>
//         <motion.div
//           className="relative z-10 text-center text-white mt-40"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Nethill Ltd</h1>
//           <p className="text-lg md:text-2xl mb-6">For every transaction, absolute value for your assets is guaranteed.</p>
//           <button className="bg-blue-600 px-4 py-2 rounded-full text-white">Get Started</button>
//         </motion.div>
//       </section>

//       {/* About Section */}
//       <section className=" bg-gray-100 container-full mt-20 py-1 grid md:grid-cols-2 gap-8 px-4">
//         <motion.div
//           className="flex flex-col justify-center"
//           initial={{ opacity: 0, x: -100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.5, duration: 1 }}
//         >
//           <div className="px-10">
//           <h2 className="text-3xl font-semibold mb-4">We rank among the best Globally...</h2>
//           <p>With expertise in product promotion and sales management, we connect you with the best in the market.</p>
//           <button className="mt-4 bg-red-600 px-4 py-2 rounded-full text-white">Connect with Us</button>
//           </div>
//         </motion.div>
//         <motion.div
//           initial={{ x: 100 }}
//           animate={{ x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <Image src="/about.jpg" alt="About Us" layout="responsive" width={400} height={0} className="rounded-lg shadow-lg"/>
//         </motion.div>
//       </section>

//       {/* Products and Services Section */}
//       <section className="bg-white py-16">
//         <h2 className="text-center text-3xl font-semibold mb-8">Our Products & Services</h2>
//         <div className="overflow-hidden">
//           <motion.div
//             className="flex space-x-8"
//             animate={{ x: ["20%", "-100%"] }}
//             transition={{ repeat: Infinity, duration: 6, slide: "linear" }}
//           >
//             <Image src="/service1.jpg" alt="Service 1" width={300} height={200} className="rounded-lg" />
//             <Image src="/service2.jpg" alt="Service 2" width={300} height={200} className="rounded-lg" />
//             <Image src="/service3.jpg" alt="Service 3" width={300} height={200} className="rounded-lg" />
//             <Image src="/service3.jpg" alt="Service 3" width={300} height={200} className="rounded-lg" />
//             <Image src="/service3.jpg" alt="Service 3" width={300} height={200} className="rounded-lg" />
//             <Image src="/service3.jpg" alt="Service 3" width={300} height={200} className="rounded-lg" />
//             <Image src="/service3.jpg" alt="Service 3" width={300} height={200} className="rounded-lg" />
//             <Image src="/service3.jpg" alt="Service 3" width={300} height={200} className="rounded-lg" />
//             <Image src="/service3.jpg" alt="Service 3" width={300} height={200} className="rounded-lg" />
//           </motion.div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="bg-gray-100 py-16">
//         <h2 className="text-center text-3xl font-semibold mb-8">Testimonials</h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
//           {[1, 2, 3].map((item, index) => (
//             <motion.div
//               key={index}
//               className="bg-white p-6 rounded-lg shadow-md"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//             >
//               <p className="italic">"This company is reliable and highly recommended for real estate transactions!"</p>
//               <span className="block mt-2 font-semibold">- Client {item}</span>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="bg-white py-16">
//         <h2 className="text-center text-3xl font-semibold mb-8">Contact Us</h2>
//         <form className="max-w-xl mx-auto bg-gray-100 p-8 rounded-lg shadow-lg space-y-4">
//           <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 border border-gray-300 rounded-lg" />
//           <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 border border-gray-300 rounded-lg" />
//           <textarea name="message" placeholder="Your Message" required className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
//           <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold">Send Message</button>
//         </form>
//       </section>

//       {/* Footer Section */}
//       <footer className="bg-gray-800 text-gray-300 py-8">
     
//         <div className="container mx-auto text-center space-y-4">
//           <Image src="/logo.png" alt="Logo" width={70} height={20} className="mx-auto"/>
//           <div className="grid md:grid-cols-3 gap-4 text-sm">
//             <div>
//               <h3 className="text-xl font-semibold mb-2">Sections</h3>
//               <ul>
//                 <li><Link href="/">Home</Link></li>
//                 <li><Link href="/about">About</Link></li>
//                 <li><Link href="/services">Services</Link></li>
//                 <li><Link href="/contact">Contact</Link></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold mb-2">Services</h3>
//               <ul>
//                 <li>Real Estate</li>
//                 <li>Property Management</li>
//                 <li>Sales & Marketing</li>
//               </ul>
//             </div>
//             <div>
//               <h3 className=" text-xl font-semibold mb-2">Contact</h3>
//              <div ><p>Suite 422 Roc Ages Plaza,<br/>
//                 Plots 247 Mafemi Crescent, 
//                 <br/>Abuja, Nigeria</p>
//                 </div> 
//             </div>
//           </div>

//           <p>&copy; 2024 Nethill Ltd. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }


// ===========================================================================

"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ProductCarousel from "./productsandservices";
import HeroSlide from "./Hero";

import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import AboutSection from "./About";
import Testimonials from "./Testimonial";


export default function Landingpage() {

  
  const aboutImageRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  
  const scrollAboutImage = (direction: string) => {
    if (aboutImageRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      aboutImageRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };


 
 

  return (
    <div className="text-gray-800 font-sans relative">
      {/* Hero Section */}
       
      <HeroSlide/>

      {/* About Section */}
      
      {/* <section id="about-section" className="bg-gray-100 container-full mt-20 py-5 px-4 pr-5 grid md:grid-cols-2 gap-8 relative">
        <motion.div
          className="flex flex-col justify-center px-10"
          initial={{ opacity: 1, x: 10 }}
          animate={{ opacity: 1, x: 10 }}
          transition={{ delay: 0, duration: 1 }}
        >
          <div className="px-5">

          <h4 className="text-4xl font-bold mb-4">We rank among the best Globally...</h4>
          <p>With expertise in product promotion and sales management, we connect you with the best in the market.</p>
          <button className="mt-4 bg-red-600 px-4 py-2 rounded-full text-white">Read more...</button>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex items-center justify-center"
        >
          <button onClick={() => scrollAboutImage("left")} className="absolute left-2 md:left-0 z-10 p-2 bg-gray-200 rounded-full shadow-lg">
            <AiOutlineArrowLeft size={24} />
          </button>
          <div ref={aboutImageRef} className="overflow-x-auto no-scrollbar mx-auto">
            <Image src="/about.jpg" alt="About Us" layout="responsive" width={400} height={300} className="rounded-lg shadow-lg mx-auto" />
          </div>
          <button onClick={() => scrollAboutImage("right")} className="absolute right-2 md:right-0 z-10 p-2 bg-gray-200 rounded-full shadow-lg">
            <AiOutlineArrowRight size={24} />
          </button>
        </motion.div>
      </section> */}

      <AboutSection/>

     <ProductCarousel/>

      {/* Testimonials Section */}

      {/* <section className="bg-gray-100 py-16">
        <h2 className="text-center text-3xl font-semibold mb-8">Testimonials</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {[1, 2, 3].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Image
                src={`/avatar${item}.jpg`}
                alt={`Client ${item}`}
                width={80}
                height={80}
                className="rounded-full mx-auto mb-4"
              />
              <p className="italic">"This company is reliable and highly recommended for real estate transactions!"</p>
              <span className="block mt-2 font-semibold">- Client {item}</span>
            </motion.div>
          ))}
        </div>
      </section> */}

<Testimonials/>

      {/* Contact Section */}
      <section id="Contact-us" className="bg-white py-10 md:py-16">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-8">Contact Us</h2>
        <form className="max-w-xl mx-auto bg-gray-100 p-8 rounded-lg shadow-lg space-y-4">
          <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 border border-gray-300 rounded-lg" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 border border-gray-300 rounded-lg" />
          <textarea name="message" placeholder="Your Message" required className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold">Send Message</button>
        </form>
      </section>

      {/* Footer Section */}
      <footer id="footer-section" className="bg-gray-800 text-gray-300 py-8 relative">
        <div className="container mx-auto text-center space-y-4">
          <Image src="/logo.png" alt="Logo" width={70} height={20} className="mx-auto"/>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <h3 className="text-xl font-semibold mb-2">Sections</h3>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Services</h3>
              
                <li>Real Estate</li>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <div><p>Suite 422 Roc Ages Plaza,<br/>
                Plots 247 Mafemi Crescent, 
                <br/>Abuja, Nigeria</p>
              </div> 
            </div>
          </div>
          <p>&copy; 2024 Nethill Ltd. All rights reserved.</p>
        </div>
        <AiOutlineArrowUp
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute right-10 bottom-10 text-white text-4xl cursor-pointer animate-bounce"
        />
      </footer>
    </div>
  );
}


// ----------------------------------------------------------------------------




  