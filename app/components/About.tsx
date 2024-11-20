'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './button'

interface SlideData {
  image: string
  title: string
  description: string
}

const slideData: SlideData[] = [
  {
    image: '/about1.jpg',
    title: 'We rank among the best Globally...',
    description: 'With expertise in the area of business such as sales of all kind properties, sales of investment in real-estate, Sales of household security door handle and more….',
  },
  {
    image: '/landcracker.jpg',
    title: 'Innovation at its core',
    description: 'Our cutting-edge solutions drive growth and efficiency for businesses worldwide.',
  },
  {
    image: '/landb.jpg',
    title: 'Customer-centric approach',
    description: 'We prioritize your needs and deliver tailored solutions to ensure your success.',
  },
]

export default function AboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const scrollAboutImage = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentSlide((prev) => (prev === 0 ? slideData.length - 1 : prev - 1))
    } else {
      setCurrentSlide((prev) => (prev === slideData.length - 1 ? 0 : prev + 1))
    }
  }

  return (
    <section>
    {/* <h2 className="text-center text-3xl font-semibold mt-20 mb-8 text-4lg">About Us</h2> */}
    <div id="about-section" className="bg-gray-100 container-full mt-10 py-5 px-4 pr-5 grid md:grid-cols-2 gap-8 relative">
      <motion.div
        className="flex flex-col justify-center px-10"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0, duration: 1 }}
      >
        
        <div className="px-5">
          <h4 className="text-4xl font-bold mb-4">{slideData[currentSlide].title}</h4>
          <p className="text-lg" >{slideData[currentSlide].description}</p>
          <Button className="mt-4 bg-red-600 text-white hover:bg-red-700">Read more...</Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="relative flex items-center justify-center"
      >
        <Button
          variant="outline"
          size="icon"
          onClick={() => scrollAboutImage('left')}
          className="absolute left-2 md:left-0 z-10 rounded-full shadow-lg"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="overflow-hidden mx-auto">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={slideData[currentSlide].image}
              alt="About Us"
              width={600}
              height={500}
              className="rounded-lg shadow-lg mx-auto"
            />
          </motion.div>
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={() => scrollAboutImage('right')}
          className="absolute right-2 md:right-0 z-10 rounded-full shadow-lg"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </motion.div>
    </div>
    </section>
  )
}