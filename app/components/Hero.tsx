// 'use client';

// import React, { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { AiOutlineArrowDown } from 'react-icons/ai';

// const heroData = [
//   {
//     id: 1,
//     type: 'image',
//     src: '/hero-background1.jpg',
//     title: 'Welcome to Nethill Ltd',
//     subtitle: 'For every transaction, absolute value for your assets is guaranteed.',
//   },
//   {
//     id: 2,
//     type: 'video',
//     src: 'https://youtu.be/UpBmpJiMZIc',
//     title: 'Experience Excellence',
//     subtitle: 'We redefine success with every deal.',
//   },
//   {
//     id: 3,
//     type: 'image',
//     src: '/hero-background3.jpg',
//     title: 'Your Trusted Partner',
//     subtitle: 'Empowering your journey towards greatness.',
//   },
//   {
//     id: 4,
//     type: 'video',
//     src: '/hero-background4.mp4',
//     title: 'Innovative Solutions',
//     subtitle: 'Let’s create a future of endless possibilities.',
//   },
//   {
//     id: 5,
//     type: 'video',
//     src: '/hero-background5.mp4',
//     title: 'Reliable Investment partner',
//     subtitle: 'We make your Investment dreams a reality',
//   },
// ];

// export default function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroData.length);
//     }, 8000); // Auto-slide every 8 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
//       {/* Background Slides */}
//       <AnimatePresence>
//         {heroData.map((slide, index) =>
//           index === currentSlide ? (
//             <motion.div
//               key={slide.id}
//               className="absolute inset-0 w-full h-full"
//               initial={{ opacity: 0, scale: 1.2 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 1.2 }}
//               transition={{ duration: 1 }}
//             >
//               {slide.type === 'image' ? (
//                 <div
//                   className="absolute inset-0 bg-cover bg-center"
//                   style={{ backgroundImage: `url(${slide.src})` }}
//                 />
//               ) : (
//                 <video
//                   className="absolute inset-0 w-full h-full object-cover"
//                   src={slide.src}
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                 />
//               )}
//               <div className="absolute inset-0 bg-black opacity-30" />
//             </motion.div>
//           ) : null
//         )}
//       </AnimatePresence>

//       {/* Hero Content */}
//       <motion.div
//         className="relative z-10 text-center text-white px-4 md:px-8"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <h1 className="text-4xl md:text-6xl font-bold mb-4">
//           {heroData[currentSlide]?.title}
//         </h1>
//         <p className="text-lg md:text-2xl mb-6">{heroData[currentSlide]?.subtitle}</p>
//         <button className="bg-blue-600 px-4 py-2 rounded-full text-white">
//           Get Started
//         </button>
//       </motion.div>

//       {/* Arrow Down Icon */}
//       <AiOutlineArrowDown
//         onClick={() =>
//           document.getElementById('footer-section')?.scrollIntoView({ behavior: 'smooth' })
//         }
//         className="absolute right-10 bottom-10 text-white text-4xl cursor-pointer animate-bounce"
//       />
//     </section>
//   );
// }


// ................WORKING CODE..........................

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import { register } from 'module';

const heroData = [
  {
    id: 1,
    type: 'image',
    src: '/hero-background01.jpg',
    title: 'Welcome to Nethill Ltd',
    register: 'RC no: 168235',
    subtitle: 'The Most Reliable Real-estate firm, Sales and More...',
  },
  {
    id: 2,
    type: 'video',
    src: 'https://youtu.be/KjtKxORRP4w', // YouTube video ID
    title: 'Experience Excellence',
    subtitle: 'We redefine success with every deal.',
  },
  {
    id: 3,
    type: 'image',
    src: '/hero-background3.jpg',
    title: 'Your Trusted Partner',
    subtitle: 'Empowering your journey towards greatness.',
  },
  {
    id: 4,
    type: 'video',
    src: 'UpBmpJiMZIc', // YouTube video ID
    title: 'Innovative Solutions',
    subtitle: 'We create a future of endless possibilities',
  },
  {
    id: 5,
    type: 'image',
    src: '/hero-background1.jpg',
    title: 'Connect with professionals ',
    subtitle: 'With high integrity and values for your needs.',
  },
  {
    id: 6,
    type: 'video',
    src: 'UpBmpJiMZIc', // YouTube video ID
    title: 'Reliable Investment partner',
    subtitle: 'We make your Investment dreams a reality',
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
    // If it's already an ID, return it
    if (!url.includes('/') && !url.includes('youtu')) return url;
    
    // Extract ID from YouTube URL
    const regex = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\s]+)/;
    const match = url.match(regex);
    return match ? match[1] : '';
  };

  return (
    <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Slides */}
      <AnimatePresence>
        {heroData.map((slide, index) =>
          index === currentSlide ? (
            <motion.div
              key={slide.id}
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 1 }}
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
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center text-white px-4 md:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {heroData[currentSlide]?.title}
        </h1>
        
        <p className="text-lg md:text-2xl mb-6">{heroData[currentSlide]?.subtitle}</p>
        <Link href="#Contact-us">
        <motion.button 
          className="bg-blue-600 px-6 py-3 rounded-full text-white font-semibold hover:bg-blue-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
          </Link>
      </motion.div>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-20">
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
      <motion.div
        className="absolute right-10 bottom-10 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown
          onClick={() =>
            document.getElementById('footer-section')?.scrollIntoView({ behavior: 'smooth' })
          }
          className="text-white w-8 h-8 cursor-pointer"
        />
      </motion.div>
    </section>
  );
}

