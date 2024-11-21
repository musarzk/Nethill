'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardFooter } from './card';
import Link from 'next/link';

const products = [
  { id: 1, name: 'Property evaluation',
     description: 'Discover Your Properties True Value with Ease!.', 
     price: 19.99, image: '/value.jpg' 
    },
  { id: 2, name: 'Sales and Marketing', 
    description: 'Looking to boost your business revenue, and reach your target audience?.', 
    price: 29.99, 
    image: '/sales.jpg'
   },
  { id: 3, name: 'Investment Advisory ', 
    description: 'Secure Your Financial Future with Expert Investment Advisory!.', 
    price: 39.99, 
    image: '/invest.jpg' 
  },
  { id: 4, name: 'Property brokerages and Lease to sublet', 
    description: 'Looking to buy, sell, or lease property with confidence?.', 
    price: 49.99, image: '/broker.jpg' 
  },
  { id: 5, name: 'Interior design and Renovation', 
    description: 'Ready to turn your house into your dream home?.', 
    price: 59.99, image: '/interior.jpg' 
  },
  { id: 6, name: 'Project and property management', 
    description: 'Looking for a partner to streamline your property and project needs?.', 
    price: 69.99, 
    image: '/manage.jpg' 
  },
];

const useCarousel = (autoplayInterval = 4000) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => emblaApi.scrollNext(), autoplayInterval);
    return () => clearInterval(autoplay);
  }, [emblaApi, autoplayInterval]);

  return { emblaRef, selectedIndex, scrollTo };
};

export default function ProductCarousel() {
  const { emblaRef, selectedIndex, scrollTo } = useCarousel();

  return (
   
<section className="bg-white py-16">
<h2 className="text-center text-3xl font-semibold mb-8">Our Products & Services</h2>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] px-2"
            >
              <Card className="h-full flex flex-col">
                <CardContent className="p-4 flex-grow">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover mb-4 rounded"
                  />
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                    {product.description}
                  </p>
                  <Link href={`/product/${product.id}`} className="text-sm text-blue-600 hover:underline">
                    Read more...
                  </Link>
                </CardContent>
                <CardFooter className="flex justify-between items-center mt-auto">
                  {/* <span className="text-lg font-bold">N{product.price.toFixed(2)}</span> */}
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300 text-white rounded-full p-2 hover:bg-gray-400"
        onClick={() => scrollTo((selectedIndex - 1 + products.length) % products.length)}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 text-white rounded-full p-2 hover:bg-gray-400"
        onClick={() => scrollTo((selectedIndex + 1) % products.length)}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              selectedIndex === index ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
    </section>
  );
}
