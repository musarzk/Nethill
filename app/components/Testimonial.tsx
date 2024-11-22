// import React, { useState, useRef } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import Image from "next/image";

// const testimonialsData = [
//   {
//     id: 1,
//     name: "John Doe",
//     feedback:
//       "This company is reliable and highly recommended for real estate transactions!",
//     image: "/testimo6.jpg",
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     feedback: "Their services exceeded my expectations. Highly professional team!",
//     image: "/testimo2.jpg",
//   },
//   {
//     id: 3,
//     name: "Alex Johnson",
//     feedback: "A seamless experience from start to finish. Great communication!",
//     image: "/testimo3.jpg",
//   },
// ];

// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const slideContainerRef = useRef<HTMLDivElement>(null);

//   const handleScroll = (direction: "prev" | "next") => {
//     if (!slideContainerRef.current) return;
//     const slideWidth = slideContainerRef.current.offsetWidth;
//     let newIndex = currentIndex;

//     if (direction === "prev") {
//       newIndex = currentIndex > 0 ? currentIndex - 1 : testimonialsData.length - 1;
//     } else {
//       newIndex = currentIndex < testimonialsData.length - 1 ? currentIndex + 1 : 0;
//     }

//     setCurrentIndex(newIndex);
//     slideContainerRef.current.scrollTo({
//       left: newIndex * slideWidth,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section className="bg-gray-100 py-16">
//       <h2 className="text-center text-3xl font-semibold mb-8">Testimonials</h2>
//       <div className="max-w-6xl mx-auto px-4 relative">
//         <div
//           ref={slideContainerRef}
//           className="relative flex overflow-x-hidden scroll-snap-x snap-mandatory"
//           style={{ scrollBehavior: "smooth" }}
//         >
//           {testimonialsData.map(({ id, name, feedback, image }) => (
//             <div
//               key={id}
//               className="min-w-full flex flex-col items-center bg-white rounded-lg shadow-md text-center h-[300px] mx-2 snap-center"
//             >
//               <Image
//                 src={image}
//                 alt={`Portrait of ${name}`}
//                 width={80}
//                 height={80}
//                 className="rounded-full mb-4"
//               />
//               <p className="italic text-gray-600">"{feedback}"</p>
//               <span className="block mt-4 font-semibold">- {name}</span>
//             </div>
//           ))}
//         </div>

//         {/* Navigation Arrows */}
//         <button
//           onClick={() => handleScroll("prev")}
//           className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 bg-gray-200 text-white p-3 rounded-full shadow-md hover:bg-gray-100"
//           aria-label="Previous Slide"
//         >
//           <FaChevronLeft size={24} />
//         </button>
//         <button
//           onClick={() => handleScroll("next")}
//           className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 bg-gray-200 text-white p-3 rounded-full shadow-md hover:bg-gray-100"
//           aria-label="Next Slide"
//         >
//           <FaChevronRight size={24} />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

'use client'

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"


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
  {
    id: 4,
    name: "Emily Davis",
    feedback: "Fantastic service with a professional touch!",
    image: "/testimo4.jpg",
  },
  {
    id: 5,
    name: "Michael Brown",
    feedback: "Highly reliable and efficient team!",
    image: "/testimo5.jpg",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsPerView(1)
      else if (window.innerWidth < 1024) setCardsPerView(2)
      else setCardsPerView(3)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, testimonialsData.length - cardsPerView)
    )
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0))
  }

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-semibold mb-8">Testimonials</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`,
              }}
            >
              {testimonialsData.map(({ id, name, feedback, image }) => (
                <div
                  key={id}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-2"
                >
                  <div className="bg-white rounded-lg shadow-md flex flex-col items-center text-center h-full justify-between p-6">
                    <Image
                      src={image}
                      alt={`Portrait of ${name}`}
                      width={80}
                      height={80}
                      className="rounded-full mb-4"
                    />
                    <p className="italic text-gray-600 mb-4">"{feedback}"</p>
                    <span className="font-semibold">- {name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-6 gap-4">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="p-2 rounded-full bg-white border border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous testimonial"
            >
              <BiChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= testimonialsData.length - cardsPerView}
              className="p-2 rounded-full bg-white border border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next testimonial"
            >
              <BiChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}