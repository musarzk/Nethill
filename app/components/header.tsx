
// import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
// import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
// import Link from 'next/link';
// import Image from 'next/image';

// export default function Header() {
//   return (
//     <div className="fixed top-0 left-0 w-full z-50">
//       {/* Top Header with Contact Info */}
//       <header className="bg-red-600 text-white text-center p-1">
//         <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 md:space-x-6  px-4">
          
//           {/* Contact Information */}
//           <div className="text-base flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 lg:pl-40 leading-tight sm:leading-5">
//             <span className="flex items-center space-x-1">
//               <AiOutlinePhone className="inline-block mr-1" /> 
//               <span>+2348035961225, +2347038342391</span>
//             </span>
//             <span className="flex items-center space-x-1">
//               <AiOutlineMail className="inline-block mr-1" /> 
//               <span>info@nethill.com.ng</span>
//             </span>
//           </div>

//           {/* Social Icons - Hidden on small screens */}
//           <div className="hidden md:flex flex-row space-x-3">
//             <Link href="https://facebook.com" legacyBehavior>
//               <a target="_blank" className="cursor-pointer text-white transition-transform transform hover:scale-110">
//               <FaFacebookF size={20} />
//               </a>
//             </Link>
//             <Link href="https://twitter.com" legacyBehavior>
//               <a target="_blank" className="cursor-pointer text-white transition-transform transform hover:scale-110">
//                 <FaTwitter size={24} />
//               </a>
//             </Link>
//             <Link href="https://instagram.com" legacyBehavior>
//               <a target="_blank" className="cursor-pointer text-white transition-transform transform hover:scale-110">
//                 <FaInstagram size={24} />
//               </a>
//             </Link>
//           </div>
//         </div>
//       </header>

//       {/* Navbar */}
//       <nav className="bg-white shadow-md p-4 flex justify-between items-center">
//         <Image src="/logo.png" alt="Logo" width={120} height={25} />
//         <Image src="/logo.png" alt="Logo" width={120} height={25} />
//         <ul className="hidden md:flex space-x-6">
//           <li><Link href="/" className=' hover:border-b-4 border-red-500 focus:border-b-2'>Home</Link></li>
//           <li><Link href="/about" className=' hover:border-b-4 border-red-500 focus:border-b-2'>About</Link></li>
//           <li><Link href="/services" className=' hover:border-b-4 border-red-500 focus:border-b-2'>Services</Link></li>
//           <li><Link href="/gallery" className=' hover:border-b-4 border-red-500 focus:border-b-2'>Gallery</Link></li>
//           <li><Link href="/contact" className=' hover:border-b-4 border-red-500 focus:border-b-2'>Contact</Link></li>
//         </ul>
//         <button className="md:hidden">☰</button>
//       </nav>
//     </div>
//   );
// }
