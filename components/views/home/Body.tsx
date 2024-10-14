'use client'

import React from 'react'
import Image from 'next/image'

export default function Body() {
  return (
    <div className="relative overflow-hidden">
      {/* Orange curved shape */}
      <div className="absolute left-0 top-0 w-1/3 h-full bg-orange-500 rounded-r-full" />
      
      <div className="container mx-auto px-4 py-16 relative">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side - Image */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="CloudMind Academy LMS interface showing mindful course creation"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          
          {/* Right side - Content */}
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-sm text-gray-600 mb-2">What is CloudMind Academy LMS?</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Fully customisable online learning management system
            </h3>
            <p className="text-gray-700 mb-4">
              Teach the way your students learn best with CloudMind Academy LMS: our
              open source learning management system.
            </p>
            <p className="text-gray-700">
              From K - 12 classrooms to multi-campus universities, our LMS
              software offers you the flexibility to grow and adapt your
              organisation's eLearning platform to all your learners' needs, now
              and in the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}