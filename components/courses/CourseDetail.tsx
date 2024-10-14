import { useEffect, useState } from 'react'
import { getCourseBySlug } from '../../lib/api' // Assuming you have an API function to fetch a course by slug

export default function CourseDetail({ slug }) {
  const [course, setCourse] = useState(null)

  useEffect(() => {
    const fetchCourse = async () => {
      const fetchedCourse = await getCourseBySlug(slug)
      setCourse(fetchedCourse)
    }
    if (slug) {
      fetchCourse()
    }
  }, [slug])

  if (!course) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-white mb-4">{course.title}</h2>
      {/* Add more course details here */}
    </div>
  )
}