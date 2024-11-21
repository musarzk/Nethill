
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

// Testimonials Data
const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    feedback: "This company is reliable and highly recommended for real estate transactions!",
    image: "/testimo6.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback: "Their services exceeded my expectations. Highly professional team!",
    image: "/testimo2.jpg",
  },
  {
    id: 3,
    name: "Alex Johnson",
    feedback: "A seamless experience from start to finish. Great communication!",
    image: "/testimo3.jpg",
  },
];

// Custom Arrows Outside the Slider
interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 bg-gray-200 text-white p-3 rounded-full shadow-md hover:bg-gray-100 z-10"
    onClick={onClick}
    aria-label="Previous Slide"
  >
    <FaChevronLeft size={24} />
  </button>
);

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 bg-gray-200 text-white p-3 rounded-full shadow-md hover:bg-gray-100 z-10"
    onClick={onClick}
    aria-label="Next Slide"
  >
    <FaChevronRight size={24} />
  </button>
);

const Testimonials = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-100 py-16">
      <h2 className="text-center text-3xl font-semibold mb-8">Testimonials</h2>
      <div className="max-w-6xl mx-auto px-4 relative">
        <Slider {...sliderSettings}>
          {testimonialsData.map(({ id, name, feedback, image }) => (
            <motion.div
              key={id}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center h-[300px] w-[350px] mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Image
                src={image}
                alt={`Portrait of ${name}`}
                width={80}
                height={80}
                className="rounded-full mb-4"
              />
              <p className="italic text-gray-600 flex-grow">"{feedback}"</p>
              <span className="block mt-4 font-semibold">- {name}</span>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;

