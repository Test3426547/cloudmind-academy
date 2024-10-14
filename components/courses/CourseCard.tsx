import React, { forwardRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter } from "@/components/ui/dashboard/card"
import { Course } from '@/types/course'

interface CourseCardProps {
  course: Course
}

const CourseCard = forwardRef<HTMLDivElement, CourseCardProps>(({ course }, ref) => {
  return (
    <Card className="bg-[#1C2333] border-[#2D3748] overflow-hidden" ref={ref}>
      <Link href={`/courses/${course.slug}`}>
        <div className="relative h-48 w-full">
          <Image src={course.image} alt={course.title} layout="fill" objectFit="cover" />
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-2">
            <div className="flex space-x-1">
              {course.technologies.map((tech, i) => (
                <span key={i} className="px-2 py-1 bg-[#2D3748] text-xs rounded-full text-emerald-400">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-2 text-white">{course.title}</h3>
          <p className="text-gray-400 text-sm line-clamp-2">{course.description}</p>
        </CardContent>
        <CardFooter className="bg-emerald-500 px-4 py-2">
          <span className="text-sm text-white">{course.chapters} Chapters</span>
        </CardFooter>
      </Link>
    </Card>
  )
})

CourseCard.displayName = 'CourseCard'

export default CourseCard