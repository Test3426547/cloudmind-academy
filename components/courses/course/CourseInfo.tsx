// components/courses/course/CourseInfo.tsx

import React from 'react'
import { Progress } from "@/components/ui/course-page/progress"

interface CourseInfoProps {
  title: string
  description: string
  chapters: number
  technologies: string[]
  progress: number
}

export default function CourseInfo({ title, description, chapters, technologies, progress }: CourseInfoProps) {
  return (
    <div className="bg-[#2D3748] rounded-xl p-6 space-y-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>{description}</p>
      <p>{chapters} Chapters</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-[#4A5568] px-2 py-1 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Course Progress</h3>
        <Progress value={progress} className="w-full" />
        <p className="text-sm mt-1">{progress}% Complete</p>
      </div>
    </div>
  )
}