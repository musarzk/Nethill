"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface ProductsCarouselProps {
  cards: ProductCardProps[];
  autoPlayInterval?: number;
}



const ProductCard: React.FC<ProductCardProps> = ({ title, description, image, link }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
    <Image
      src={image}
      alt={title}
      width={200}
      height={300}
      className="rounded-t-lg object-cover h-60 w-full"
    />
    <div className="p-4 flex-grow flex flex-col justify-between">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
      <a href={link} className="text-red-500 hover:underline">
        Read more...
      </a>
    </div>
  </div>
);

const ProductsCarousel: React.FC<ProductsCarouselProps> = ({
  cards,
  autoPlayInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Adjust cards per view based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setCardsPerView(1);
      else if (width < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(cards.length / cardsPerView);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlayInterval, totalSlides]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  return (
    <section className="bg-white py-16">
      <h2 className="text-center text-3xl font-semibold mb-8">Our Products & Services</h2>
      <div className="relative overflow-hidden max-w-6xl mx-auto">
        {/* Carousel */}
        <motion.div
          className="flex transition-transform"
          animate={{
            x: `-${(currentIndex * 100) / totalSlides}%`,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            width: `${(cards.length / cardsPerView) * 100}%`,
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="px-2 box-border flex-shrink-0"
              style={{ flex: `0 0 calc(100% / ${cardsPerView})` }}
            >
              <ProductCard {...card} />
            </div>
          ))}
        </motion.div>

        {/* Navigation Arrows */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-lg z-10"
          onClick={handlePrev}
        >
          <AiOutlineArrowLeft size={24} />
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-lg z-10"
          onClick={handleNext}
        >
          <AiOutlineArrowRight size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === i ? "bg-red-500" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsCarousel;
