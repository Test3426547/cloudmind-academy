import Link from 'next/link'
import CourseCard from './CourseCard'

export default function CourseGrid({ courses, cardRefs }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {courses.map((course, index) => (
        <Link key={index} href={`/courses/${course.slug}`}>
          <CourseCard course={course} ref={el => cardRefs.current[index] = el} />
        </Link>
      ))}
    </div>
  )
}