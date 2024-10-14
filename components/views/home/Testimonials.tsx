'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  quote: string
  author: string
  role: string
  image: string
  logo: string
}

const testimonials: Testimonial[] = [
  {
    quote: "CloudMind Academy helps us host content that would otherwise be inaccessible to those without the privilege of expensive knowledge. By building free content, we can continue bridging the gap.",
    author: "Shilpa Prasad",
    role: "Co-team leader",
    image: "/placeholder.svg?height=400&width=600",
    logo: "/placeholder.svg?height=50&width=50"
  },
  // Add more testimonials here
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <p className="text-blue-600 text-sm mb-2">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          What our customers say
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Hear from teachers, instructors, and leaders in education about how CloudMind Academy empowers them to provide quality online learning experiences.
        </p>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <Image
                src={testimonials[currentTestimonial].image}
                alt="Students"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <blockquote className="text-xl text-blue-900 mb-4">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold">{testimonials[currentTestimonial].author}</p>
                  <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                </div>
                <Image
                  src={testimonials[currentTestimonial].logo}
                  alt="Company logo"
                  width={50}
                  height={50}
                  className="ml-4"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end p-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-200 text-blue-900 hover:bg-blue-900 hover:text-white transition-colors mr-2"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-200 text-blue-900 hover:bg-blue-900 hover:text-white transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}