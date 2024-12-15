
// 'use client';

// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

// const products = [
//   { id: 1, name: 'Property evaluation', description: 'Discover Your Properties True Value with Ease!.', price: 19.99, image: '/value.jpg' },
//   { id: 2, name: 'Sales and Marketing', description: 'Looking to boost your business revenue, and reach your target audience?.', price: 29.99, image: '/sales.jpg' },
//   { id: 3, name: 'Investment Advisory ', description: 'Secure Your Financial Future with Expert Investment Advisory!.', price: 39.99, image: '/invest.jpg' },
//   { id: 4, name: 'Property brokerages and Lease to sublet', description: 'Looking to buy, sell, or lease property with confidence?.', price: 49.99, image: '/broker.jpg' },
//   { id: 5, name: 'Interior design and Renovation', description: 'Ready to turn your house into your dream home?.', price: 59.99, image: '/interior.jpg' },
//   { id: 6, name: 'Project and property management', description: 'Looking for a partner to streamline your property and project needs?.', price: 69.99, image: '/manage.jpg' },
// ];

// export default function ProductCarousel() {
//   const [cardsPerSlide, setCardsPerSlide] = useState(5);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) {
//         setCardsPerSlide(5);
//       } else if (window.innerWidth >= 768) {
//         setCardsPerSlide(3);
//       } else {
//         setCardsPerSlide(1);
//       }
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const nextSlide = useCallback(() => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
//   }, []);

//   const prevSlide = useCallback(() => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
//   }, []);

//   useEffect(() => {
//     if (!isPaused) {
//       intervalRef.current = setInterval(nextSlide, 5000); // Change slide every 5 seconds
//     }
//     return () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//       }
//     };
//   }, [nextSlide, isPaused]);

//   const handleMouseEnter = useCallback(() => {
//     setIsPaused(true);
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//     }
//   }, []);

//   const handleMouseLeave = useCallback(() => {
//     setIsPaused(false);
//     intervalRef.current = setInterval(nextSlide, 5000);
//   }, [nextSlide]);

//   const visibleProducts = [...products.slice(currentIndex), ...products.slice(0, currentIndex)].slice(0, cardsPerSlide);

//   return (
//     <section className="bg-white py-16">
//       <h2 className="text-center text-3xl font-semibold mb-8">Our Products & Services</h2>
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
//         <div 
//           className="flex transition-transform duration-1000 ease-in-out"
//           style={{
//             transform: `translateX(0%)`,
//           }}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           {visibleProducts.map((product, index) => (
//             <div 
//               key={`${product.id}-${index}`} 
//               className={`p-2 ${
//                 cardsPerSlide === 5 ? 'w-1/5' : 
//                 cardsPerSlide === 3 ? 'w-1/3' : 
//                 'w-full'
//               }`}
//             >
//               <div className="h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow-md">
//                 <div className="p-4 flex-grow">
//                   <Image
//                     src={product.image}
//                     alt={product.name}
//                     width={400}
//                     height={300}
//                     className="w-full h-40 object-cover mb-4 rounded-md"
//                   />
//                   <h3 className="text-lg font-semibold mb-2 text-gray-800">{product.name}</h3>
//                   <p className="text-sm text-gray-600 mb-4 line-clamp-2">
//                     {product.description}
//                   </p>
//                   <Link 
//                     href={`/product/${product.id}`} 
//                     className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
//                   >
//                     Read more...
//                   </Link>
//                 </div>
//                 <div className="p-4 bg-gray-50 border-t border-gray-200 mt-auto">
//                   <p className="text-lg font-bold text-gray-800">N{product.price.toFixed(2)}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button
//           className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 text-gray-800 rounded-full p-2 shadow-md hover:bg-white transition-colors duration-200"
//           onClick={prevSlide}
//           aria-label="Previous slide"
//         >
//           <AiOutlineLeft className="w-6 h-6" />
//         </button>
//         <button
//           className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 text-gray-800 rounded-full p-2 shadow-md hover:bg-white transition-colors duration-200"
//           onClick={nextSlide}
//           aria-label="Next slide"
//         >
//           <AiOutlineRight className="w-6 h-6" />
//         </button>
//       </div>
//     </section>
//   );
// }


// ................WORKING CODE..........................

import React, { useEffect, useState } from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai'; // Alternative to lucide-react
import Link from 'next/link';

// Hero Data
const heroData = [
  {
    id: 1,
    type: 'image',
    src: 'hero-background01.jpg',
    title: 'Welcome to Nethill Ltd',
    register: 'RC no: 168235',
    subtitle: 'The Most Reliable Real-estate firm, Sales and More...',
  },
  {
    id: 2,
    type: 'video',
    src: 'https://youtu.be/7UMQE_9lc9E', // YouTube video URL
    title: 'Experience Excellence',
    subtitle: 'We redefine success with every deal.',
  },
  {
    id: 3,
    type: 'image',
    src: 'hero-background3.jpg',
    title: 'Your Trusted Partner',
    subtitle: 'Empowering your journey towards greatness.',
  },
  {
    id: 4,
    type: 'video',
    src: 'https://youtu.be/UpBmpJiMZIc', // YouTube video ID
    title: 'Innovative Solutions',
    subtitle: 'We create a future of endless possibilities',
  },
  {
    id: 5,
    type: 'image',
    src: 'hero-background1.jpg',
    title: 'Connect with professionals',
    subtitle: 'With high integrity and values for your needs.',
  },
];

const YouTubeBackground = ({ videoId }: { videoId: string }) => (
  <div className="absolute inset-0 w-full h-full overflow-hidden">
    <iframe
      className="absolute w-[150%] h-[150%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&playlist=${videoId}&playsinline=1`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      style={{
        pointerEvents: 'none',
        border: 'none',
      }}
    />
  </div>
);

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroData.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const getVideoId = (url: string) => {
    if (!url.includes('/') && !url.includes('youtu')) return url;

    const regex = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\s]+)/;
    const match = url.match(regex);
    return match ? match[1] : '';
  };

  return (
    <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Slides */}
      {heroData.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {slide.type === 'image' ? (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.src})` }}
            />
          ) : (
            <YouTubeBackground videoId={getVideoId(slide.src)} />
          )}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-20 text-center text-white px-4 md:px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {heroData[currentSlide]?.title}
        </h1>
        <div className="text-lg md:text-xl">{heroData[currentSlide]?.register}</div>
        <p className="text-lg md:text-2xl mb-6">
          {heroData[currentSlide]?.subtitle}
        </p>
        <Link href="#Contact-us">
          <button className="bg-blue-600 px-6 py-3 rounded-full text-white font-semibold hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </Link>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {heroData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow Down Icon */}
      <div
        className="absolute right-10 bottom-10 z-20 animate-bounce cursor-pointer"
        onClick={() =>
          document.getElementById('footer')?.scrollIntoView({
            behavior: 'smooth',
          })
        }
      >
        <AiOutlineArrowDown className="text-white w-8 h-8" />
      </div>
    </section>
  );
}


