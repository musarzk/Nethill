'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardFooter } from './card';
import Link from 'next/link';

const products = [
  { id: 1, name: 'Service 1', description: 'Detailed description for Service 1.', price: 19.99, image: '/service1.jpg' },
  { id: 2, name: 'Service 2', description: 'Detailed description for Service 2.', price: 29.99, image: '/service2.jpg' },
  { id: 3, name: 'Service 3', description: 'Detailed description for Service 3.', price: 39.99, image: '/service3.jpg' },
  { id: 4, name: 'Service 4', description: 'Detailed description for Service 4.', price: 49.99, image: '/service4.jpg' },
  { id: 5, name: 'Service 5', description: 'Detailed description for Service 5.', price: 59.99, image: '/service5.jpg' },
  { id: 6, name: 'Service 6', description: 'Detailed description for Service 6.', price: 69.99, image: '/service6.jpg' },
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
                  <span className="text-lg font-bold">N{product.price.toFixed(2)}</span>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700"
        onClick={() => scrollTo((selectedIndex - 1 + products.length) % products.length)}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700"
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
