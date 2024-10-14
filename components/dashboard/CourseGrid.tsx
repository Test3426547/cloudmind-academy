import React from 'react'
import { Course } from '@/types/course'
import CourseCard from '@/components/dashboard/CourseCard'
import { ThemedText } from '@/components/dashboard/ThemedText'

interface CourseGridProps {
  courses: Course[]
  cardRefs: React.MutableRefObject<(HTMLDivElement | null)[]>
}

const CourseGrid: React.FC<CourseGridProps> = ({ courses, cardRefs }) => {
  return (
    <div className="space-y-6">
      <ThemedText variant="h2" className="text-emerald-500">Featured Courses</ThemedText>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <CourseCard 
            key={course.id} 
            course={course} 
            ref={(el) => (cardRefs.current[index] = el)}
          />
        ))}
      </div>
    </div>
  )
}

export default CourseGrid