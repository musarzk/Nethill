'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

interface SlideData {
  image: string
  title: string
  description: string
}

const slideData: SlideData[] = [
  {
    image: 'about1.jpg',
    title: 'We rank among the best Globally...',
    description: 'With expertise in the area of business such as sales of all kind properties, sales of investment in real-estate, Sales of household security door handle and more….',
  },
  {
    image: 'landcracker.jpg',
    title: 'Integrity and transparency',
    description: 'Our vision is to operate with integrity and transparency, Customer-centric, maximizing revenue opportunities both ways, Building Strong Partnerships and staying ahead of market trends and also deploying technological advancements including Data-driven for decisions.',
  },
  {
    image: 'landb.jpg',
    title: 'Our Mission',
    description: ' Is to be the most leading solution provider in real-estate and sales as a whole.',
  },
  {
    image: 'comandres.jpg',
    title: 'Our value',
    description: ' •	Excellence: we place excellent priorities on our customer service by meeting our customer expectations with our unique solutions Professional • Team: We deploy the best working team who understand work ethics in managing customer requests effectively and efficiently with the aim of meeting clients exact needs.',
  },
]

export default function AboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const scrollAboutImage = useCallback((direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentSlide((prev) => (prev === 0 ? slideData.length - 1 : prev - 1))
    } else {
      setCurrentSlide((prev) => (prev === slideData.length - 1 ? 0 : prev + 1))
    }
  }, [])

  return (
    <section>
      <div id="about-section" className="bg-gray-100 container-full mt-10 py-5 px-4 pr-5 grid md:grid-cols-2 gap-8 relative">
        <div className="flex flex-col justify-center px-10 transition-opacity duration-500 ease-in-out opacity-100">
          <div className="px-5">
            <h4 className="text-4xl font-bold mb-4">{slideData[currentSlide].title}</h4>
            <p className="text-lg">{slideData[currentSlide].description}</p>
            <button className="mt-4 bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded transition-colors duration-300">
              Read more...
            </button>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <button
            onClick={() => scrollAboutImage('left')}
            className="absolute left-2 md:left-0 z-10 bg-white rounded-full shadow-lg p-2 transition-transform duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <AiOutlineLeft className="h-4 w-4" />
          </button>
          <div className="overflow-hidden mx-auto">
            <div className="transition-opacity duration-500 ease-in-out opacity-100">
              <Image
                src={slideData[currentSlide].image}
                alt={slideData[currentSlide].title}
                width={600}
                height={500}
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
          </div>
          <button
            onClick={() => scrollAboutImage('right')}
            className="absolute right-2 md:right-0 z-10 bg-white rounded-full shadow-lg p-2 transition-transform duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <AiOutlineRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}