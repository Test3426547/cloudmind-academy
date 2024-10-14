'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/features/button"
import { ChevronRight } from 'lucide-react'

const features = [
  "Help all students flourish with different activities and task formats to accommodate learning preferences",
  "Keep learners on track with automated email and mobile alerts for upcoming deadlines and course requirements",
  "Access your LMS online, offline, and on the go from any browser or device with the CloudMind Academy App",
  "Measure and manage student progress with learning analytics and custom reports"
]

export default function Features() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Left side - Tablet mockup */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <div className="relative w-full max-w-md mx-auto">
            <Image
              src="/placeholder.svg?height=600&width=450"
              alt="CloudMind Academy LMS interface showing a Feline Welfare course"
              width={450}
              height={600}
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>

        {/* Right side - Features content */}
        <div className="lg:w-1/2 lg:pl-12">
          <h2 className="text-sm text-gray-600 mb-2">Key features</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Teach better, stress less
          </h3>
          <p className="text-gray-700 mb-8">
            Improve your teaching and student outcomes with our feature-rich
            LMS platform that saves you time and provides more active
            learning experiences for your students.
          </p>
          <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <ChevronRight className="h-6 w-6 text-orange-500 mr-2 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
          <Button className="bg-white text-blue-900 border border-blue-900 hover:bg-blue-900 hover:text-white transition-colors duration-300">
            Discover more features
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}