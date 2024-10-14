'use client'

import React from 'react'
import { Network, Lock, FolderOpen } from 'lucide-react'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="bg-orange-500 rounded-full w-12 h-12 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
)

export default function FeatureCards() {
  const features = [
    {
      icon: <Network className="text-white" size={24} />,
      title: "Easy integration",
      description: "Connect CloudMind Academy LMS with video conferencing, student information systems, plagiarism detection, and other LMS integrations."
    },
    {
      icon: <Lock className="text-white" size={24} />,
      title: "Secure and scalable",
      description: "Effortlessly scale your CloudMind Academy site, protect student privacy, achieve compliance, and control your infrastructure and data with world-leading privacy and security features in CloudMind Academy LMS."
    },
    {
      icon: <FolderOpen className="text-white" size={24} />,
      title: "Accessible for all",
      description: "CloudMind Academy LMS helps you accommodate all learners with a more inclusive platform interface, integrated content accessibility checkers, text-to-speech tools, and more."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  )
}