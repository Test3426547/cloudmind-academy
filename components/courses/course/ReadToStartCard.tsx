import React from 'react'
import Link from 'next/link'
import { Course } from '@/types/course'

interface ReadToStartProps {
  course: Course
}

export default function ReadToStart({ course }: ReadToStartProps) {
  return (
    <div className="bg-[#2D3748] rounded-xl p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Ready to Start Learning?</h2>
      <p className="mb-6">Begin your journey through {course.title} now!</p>
      <Link href={`/courses/${course.slug}/${course.videos[0].slug}`}>
        <a className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Start First Lesson
        </a>
      </Link>
    </div>
  )
}