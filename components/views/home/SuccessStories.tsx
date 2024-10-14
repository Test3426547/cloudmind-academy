'use client'

import React from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

interface StoryCardProps {
  title: string
  image: string
  tags: string[]
}

const StoryCard: React.FC<StoryCardProps> = ({ title, image, tags }) => (
  <div className="relative overflow-hidden rounded-lg">
    <Image src={image} alt={title} width={400} height={300} className="w-full h-64 object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <div className="flex flex-wrap gap-2 mb-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <ChevronRight className="text-white w-6 h-6" />
    </div>
  </div>
)

export default function SuccessStories() {
  const stories = [
    {
      title: "Azadi Kenya empowers survivors of human trafficking with CloudMind Academy based learning platform",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["CloudMind Academy LMS", "Not for Profit"]
    },
    {
      title: "A spotlight on Open Education: A nation-wide school without walls",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["CloudMind Academy LMS", "School", "Tamarind Tree"]
    },
    {
      title: "From classroom to online delivery in 8 weeks: How Louisiana teacher training benefits from a CloudMind Academy solution",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Higher Education", "CloudMind Academy LMS", "not for profit", "podcast"]
    }
  ]

  return (
    <div className="bg-blue-900 py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <p className="text-blue-200 text-sm mb-2">Success Stories</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Building better learning experiences with CloudMind Academy
        </h2>
        <p className="text-blue-100 mb-8 max-w-2xl">
          Read inspiring stories on how CloudMind Academy is being used to manage online learning and
          improve student outcomes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <StoryCard key={index} {...story} />
          ))}
        </div>
      </div>
      <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64">
        <svg viewBox="0 0 100 100" className="w-full h-full text-blue-800 fill-current">
          <path d="M50,0 A50,50 0 0 1 100,50 L50,50 Z" />
          <text className="text-white text-[8px]" textAnchor="middle" x="75" y="25" transform="rotate(45 75,25)">
            EMPOWERING EDUCATORS TO IMPROVE OUR WORLD
          </text>
        </svg>
      </div>
    </div>
  )
}