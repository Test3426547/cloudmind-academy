// pages/courses/[courseSlug]/index.tsx
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { getCourseBySlug } from '@/lib/api'
import { Course, CourseVideo } from '@/types/course'
import { Loading } from '@/components/ui/course-page/Loading'
import { ErrorMessage } from '@/components/ui/course-page/ErrorMessage'
import { Progress } from "@/components/ui/course-page/progress"

export default function CoursePage() {
  const router = useRouter()
  const { courseSlug } = router.query
  const [course, setCourse] = useState<Course | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [progress, setProgress] = useState(0) // You'll need to implement progress tracking

  useEffect(() => {
    if (router.isReady && courseSlug) {
      const fetchCourse = async () => {
        try {
          const courseData = await getCourseBySlug(courseSlug as string)
          setCourse(courseData)
          // Here you would also fetch the user's progress for this course
          // setProgress(fetchedProgress)
        } catch (err) {
          setError('Failed to load course')
          console.error(err)
        } finally {
          setIsLoading(false)
        }
      }
      fetchCourse()
    }
  }, [router.isReady, courseSlug])

  if (!router.isReady || isLoading) return <Layout><Loading /></Layout>
  if (error) return <Layout><ErrorMessage message={error} /></Layout>
  if (!course) return <Layout><ErrorMessage message="Course not found" /></Layout>

  return (
    <Layout title={course.title}>
      <div className="space-y-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative w-24 h-24">
            <Image src={course.image} alt={course.title} layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{course.title}</h1>
            <p className="text-gray-400">{course.chapters} Chapters</p>
          </div>
        </div>

        <p className="text-gray-300">{course.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {course.technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-[#2D3748] text-xs rounded-full text-emerald-400">
              {tech}
            </span>
          ))}
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Course Progress</h2>
          <Progress value={progress} className="w-full" />
          <p className="text-sm text-gray-400 mt-2">{progress}% Complete</p>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Course Videos</h2>
        <ul className="space-y-4">
          {course.videos.map((video: CourseVideo) => (
            <li key={video.slug} className="bg-[#2D3748] shadow rounded-lg p-4">
              <Link href={`/courses/${course.slug}/${video.slug}`}>
                <div className="hover:text-blue-400 transition-colors">
                  <h3 className="text-xl font-medium">{video.title}</h3>
                  <p className="text-gray-400 mt-1">{video.description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}