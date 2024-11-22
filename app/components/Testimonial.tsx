import React, { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    feedback:
      "This company is reliable and highly recommended for real estate transactions!",
    image: "testimo6.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback: "Their services exceeded my expectations. Highly professional team!",
    image: "testimo2.jpg",
  },
  {
    id: 3,
    name: "Alex Johnson",
    feedback: "A seamless experience from start to finish. Great communication!",
    image: "testimo3.jpg",
  },
  {
    id: 4,
    name: "Emily Carter",
    feedback: "Fantastic experience. They really understand customer needs!",
    image: "testimo4.jpg",
  },
  {
    id: 5,
    name: "Michael Brown",
    feedback: "Reliable and trustworthy. Highly recommend their services!",
    image: "testimo5.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideContainerRef = useRef<HTMLDivElement>(null);
  const visibleCards = 3; // Number of cards to display on larger screens
  const totalCards = testimonialsData.length;

  const scrollToIndex = (index: number) => {
    if (!slideContainerRef.current) return;
    const slideWidth = slideContainerRef.current.offsetWidth / visibleCards;
    slideContainerRef.current.scrollTo({
      left: index * slideWidth,
      behavior: "smooth",
    });
  };

  const handleScroll = (direction: "prev" | "next") => {
    let newIndex = currentIndex;

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : totalCards - visibleCards;
    } else {
      newIndex = currentIndex < totalCards - visibleCards ? currentIndex + 1 : 0;
    }

    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    scrollToIndex(currentIndex);
  }, [currentIndex]);

  return (
    <section className="bg-gray-100 py-16">
      <h2 className="text-center text-3xl font-semibold mb-8">Testimonials</h2>
      <div className="max-w-6xl mx-auto px-4 relative">
        <div
          ref={slideContainerRef}
          className="flex overflow-hidden"
        >
          {testimonialsData.map(({ id, name, feedback, image }) => (
            <div
              key={id}
              className="flex-shrink-0 w-full md:w-1/3 p-4 flex flex-col items-center bg-white rounded-lg shadow-md text-center h-[300px]"
            >
              <Image
                src={image}
                alt={`Portrait of ${name}`}
                width={80}
                height={80}
                className="rounded-full mb-4"
              />
              <p className="italic text-gray-600">&quot;{feedback}&quot;</p>
              <span className="block mt-4 font-semibold">- {name}</span>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => handleScroll("prev")}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-800 p-3 rounded-full shadow-md hover:bg-gray-300"
          aria-label="Previous Slide"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={() => handleScroll("next")}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-800 p-3 rounded-full shadow-md hover:bg-gray-300"
          aria-label="Next Slide"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
