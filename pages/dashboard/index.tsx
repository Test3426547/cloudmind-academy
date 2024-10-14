// pages/dashboard/index.tsx
import { useState, useEffect, useRef } from 'react'
import Layout from '@/components/Layout'
import CourseGrid from '@/components/dashboard/CourseGrid'
import Pagination from '@/components/dashboard/Pagination'
import { getCourses } from '@/lib/api'
import { Course } from '@/types/course'

export default function Dashboard() {
  const [courses, setCourses] = useState<Course[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const cardsPerPage = 8
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setIsLoading(true)
        const fetchedCourses = await getCourses()
        setCourses(fetchedCourses)
      } catch (error) {
        console.error('Error fetching courses:', error)
        setError('Failed to load courses. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }
    fetchCourses()
  }, [])

  const indexOfLastCourse = currentPage * cardsPerPage
  const indexOfFirstCourse = indexOfLastCourse - cardsPerPage
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  if (isLoading) return <Layout>Loading...</Layout>
  if (error) return <Layout>{error}</Layout>

  return (
    <Layout title="Dashboard">
      <div className="space-y-6">
        <CourseGrid courses={currentCourses} cardRefs={cardRefs} />
        <Pagination
          cardsPerPage={cardsPerPage}
          totalCards={courses.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </Layout>
  )
}