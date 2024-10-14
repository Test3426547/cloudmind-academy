'use client'

import React from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

interface EducationCardProps {
  title: string
  description: string
  imageSrc: string
}

const EducationCard: React.FC<EducationCardProps> = ({ title, description, imageSrc }) => (
  <div className="relative overflow-hidden rounded-lg shadow-lg">
    <Image
      src={imageSrc}
      alt={title}
      width={400}
      height={300}
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white mb-4">{description}</p>
      <ChevronRight className="text-white w-6 h-6" />
    </div>
  </div>
)

export default function CustomizationOptions() {
  const educationOptions = [
    {
      title: "CloudMind Academy for K-12",
      description: "Create highly engaging and secure online learning spaces to nurture young minds.",
      imageSrc: "/placeholder.svg?height=300&width=400"
    },
    {
      title: "CloudMind Academy for Higher Education",
      description: "Get a custom LMS platform for your university, college, academy, or institute.",
      imageSrc: "/placeholder.svg?height=300&width=400"
    },
    {
      title: "CloudMind Academy for Vocational Training",
      description: "Bring your vocational courses online with CloudMind Academy LMS.",
      imageSrc: "/placeholder.svg?height=300&width=400"
    }
  ]

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <p className="text-orange-500 text-sm mb-2">One LMS. Endless possibilities.</p>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Customise CloudMind Academy LMS for your classroom
        </h2>
        <p className="text-gray-600 mb-8">
          Learn more about our learning management system's features and how they can
          enhance your classes and learner outcomes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationOptions.map((option, index) => (
            <EducationCard
              key={index}
              title={option.title}
              description={option.description}
              imageSrc={option.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  )
}