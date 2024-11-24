

// 'use client';

// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

// const products = [
//   { id: 1, name: 'Property evaluation', 
//     description: 'Discover Your Properties True Value with Ease!.', 
//     price: 19.99, image: 'value.jpg' },

//   { id: 2, name: 'Sales and Marketing', 
//     description: 'Looking to boost your business revenue, and reach your target audience?.', 
//     price: 29.99, 
//     image: 'sales.jpg' },

//   { id: 3, name: 'Investment Advisory ', 
//     description: 'Secure Your Financial Future with Expert Investment Advisory!.',
//      price: 39.99, image: 'invest.jpg' },

//   { id: 4, name: 'Property brokerages and Lease to sublet', 
//     description: 'Looking to buy, sell, or lease property with confidence?.', 
//     price: 49.99, image: 'broker.jpg' },

//   { id: 5, name: 'Interior design and Renovation', 
//     description: 'Ready to turn your house into your dream home?.',
//      price: 59.99, image: 'interior.jpg' },

//   { id: 6, name: 'Project and property management', 
//     description: 'Looking for a partner to streamline your property and project needs?.', 
//     price: 69.99, image: 'manage.jpg' },
// ];

// const useCarousel = (totalSlides: number, autoplayInterval = 4000) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);

//   const scrollTo = useCallback((index: number) => {
//     setIsTransitioning(true);
//     setCurrentIndex(index);
//   }, []);

//   const handleTransitionEnd = useCallback(() => {
//     setIsTransitioning(false);
//   }, []);

//   const nextSlide = useCallback(() => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
//   }, [totalSlides]);

//   const prevSlide = useCallback(() => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
//   }, [totalSlides]);

//   useEffect(() => {
//     const autoPlay = () => {
//       nextSlide();
//       timeoutRef.current = setTimeout(autoPlay, autoplayInterval);
//     };

//     timeoutRef.current = setTimeout(autoPlay, autoplayInterval);

//     return () => {
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//       }
//     };
//   }, [nextSlide, autoplayInterval]);

//   return { currentIndex, scrollTo, handleTransitionEnd, nextSlide, prevSlide, isTransitioning };
// };

// export default function ProductCarousel() {
//   const [cardsPerSlide, setCardsPerSlide] = useState(5);
//   const totalSlides = Math.ceil(products.length / cardsPerSlide);
//   const { currentIndex, scrollTo, handleTransitionEnd, nextSlide, prevSlide, isTransitioning } = useCarousel(totalSlides);

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

//   const getProductsForSlide = (slideIndex: number) => {
//     const startIndex = slideIndex * cardsPerSlide;
    
//     const slideProducts = [];

//     for (let i = 0; i < cardsPerSlide; i++) {
//       const productIndex = (startIndex + i) % products.length;
//       slideProducts.push(products[productIndex]);
//     }

//     return slideProducts;
//   };

//   return (
//     <section className="bg-white py-16">
//       <h2 className="text-center text-3xl font-semibold mb-8">Our Products & Services</h2>
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="overflow-hidden">
//           <div 
//             className="flex transition-transform duration-300 ease-in-out" 
//             style={{ 
//               transform: `translateX(-${currentIndex * 100}%)`,
//               width: `${totalSlides * 100}%`
//             }}
//             onTransitionEnd={handleTransitionEnd}
//           >
//             {Array.from({ length: totalSlides }).map((_, slideIndex) => (
//               <div key={slideIndex} className="w-full flex flex-wrap">
//                 {getProductsForSlide(slideIndex).map((product) => (
//                   <div key={product.id} className={`p-2 ${
//                     cardsPerSlide === 5 ? 'w-1/5' : 
//                     cardsPerSlide === 3 ? 'w-1/3' : 
//                     'w-full'
//                   }`}>
//                     <div className="h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow-md">
//                       <div className="p-4 flex-grow">
//                         <Image
//                           src={product.image}
//                           alt={product.name}
//                           width={400}
//                           height={300}
//                           className="w-full h-40 object-cover mb-4 rounded-md"
//                         />
//                         <h3 className="text-lg font-semibold mb-2 text-gray-800">{product.name}</h3>
//                         <p className="text-sm text-gray-600 mb-4 line-clamp-2">
//                           {product.description}
//                         </p>
//                         <Link 
//                           href={`/product/${product.id}`} 
//                           className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
//                         >
//                           Read more...
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>

//         <button
//           className="absolute top-1/2 -left-4 sm:left-0 transform -translate-y-1/2 bg-gray-300 text-white rounded-full p-2 hover:bg-gray-400 transition-colors duration-200"
//           onClick={prevSlide}
//           disabled={isTransitioning}
//           aria-label="Previous slide"
//         >
//           <AiOutlineLeft className="w-6 h-6" />
//         </button>
//         <button
//           className="absolute top-1/2 -right-4 sm:right-0 transform -translate-y-1/2 bg-gray-300 text-white rounded-full p-2 hover:bg-gray-400 transition-colors duration-200"
//           onClick={nextSlide}
//           disabled={isTransitioning}
//           aria-label="Next slide"
//         >
//           <AiOutlineRight className="w-6 h-6" />
//         </button>

//         <div className="flex justify-center mt-4 space-x-2">
//           {Array.from({ length: totalSlides }).map((_, index) => (
//             <button
//               key={index}
//               className={`w-3 h-3 rounded-full transition-colors duration-200 ${
//                 currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
//               }`}
//               onClick={() => scrollTo(index)}
//               disabled={isTransitioning}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// -------------------------------------------------------------

'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const originalProducts = [
  { id: 1, name: 'Property evaluation',
     description: 'Discover Your Properties True Value with Ease!.',
    price: 19.99, image: 'value.jpg' },

  { id: 2, name: 'Sales and Marketing', 
    description: 'Looking to boost your business revenue, and reach your target audience?.', 
    price: 29.99, image: 'sales.jpg' },

  { id: 3, name: 'Investment Advisory ', 
    description: 'Secure Your Financial Future with Expert Investment Advisory!.', 
    price: 39.99, image: 'invest.jpg' },

  { id: 4, name: 'Property brokerages and Lease to sublet', 
    description: 'Looking to buy, sell, or lease property with confidence?.', 
    price: 49.99, image: 'broker.jpg' },

  { id: 5, name: 'Interior design and Renovation', 
    description: 'Ready to turn your house into your dream home?.', 
    price: 59.99, image: 'interior.jpg' },

  { id: 6, name: 'Project and property management', 
    description: 'Looking for a partner to streamline your property and project needs?.', 
    price: 69.99, image: 'manage.jpg' },
];

const products = [...originalProducts, ...originalProducts.slice(0, 5)];

export default function ProductCarousel() {
  const [cardsPerSlide, setCardsPerSlide] = useState(5);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const totalSlides = products.length - cardsPerSlide + 1;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerSlide(5);
      } else if (window.innerWidth >= 768) {
        setCardsPerSlide(3);
      } else {
        setCardsPerSlide(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= totalSlides ? 0 : nextIndex;
    });
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      return nextIndex < 0 ? totalSlides - 1 : nextIndex;
    });
  }, [totalSlides]);

  const handleTransitionEnd = useCallback(() => {
    setIsTransitioning(false);
    if (currentIndex === totalSlides - 1) {
      setCurrentIndex(0);
    }
  }, [currentIndex, totalSlides]);

  useEffect(() => {
    const autoPlay = () => {
      nextSlide();
      timeoutRef.current = setTimeout(autoPlay, 4000);
    };

    timeoutRef.current = setTimeout(autoPlay, 4000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [nextSlide]);

  return (
    <section className="bg-white py-16">
      <h2 className="text-center text-3xl font-semibold mb-8">Our Products & Services</h2>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out" 
            style={{ 
              transform: `translateX(-${currentIndex * (100 / cardsPerSlide)}%)`,
              width: `${(products.length / cardsPerSlide) * 100}%`
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {products.map((product, index) => (
              <div 
                key={`${product.id}-${index}`} 
                className={`p-2 ${
                  cardsPerSlide === 5 ? 'w-1/5' : 
                  cardsPerSlide === 3 ? 'w-1/3' : 
                  'w-full'
                }`}
              >
                <div className="h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow-md">
                  <div className="p-4 flex-grow">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-40 object-cover mb-4 rounded-md"
                    />
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <Link 
                      href={`/product/${product.id}`} 
                      className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                    >
                      Read more...
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="absolute top-1/2 -left-4 sm:left-0 transform -translate-y-1/2 bg-gray-300 text-white rounded-full p-2 hover:bg-gray-400 transition-colors duration-200"
          onClick={prevSlide}
          disabled={isTransitioning}
          aria-label="Previous slide"
        >
          <AiOutlineLeft className="w-6 h-6" />
        </button>
        <button
          className="absolute top-1/2 -right-4 sm:right-0 transform -translate-y-1/2 bg-gray-300 text-white rounded-full p-2 hover:bg-gray-400 transition-colors duration-200"
          onClick={nextSlide}
          disabled={isTransitioning}
          aria-label="Next slide"
        >
          <AiOutlineRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}