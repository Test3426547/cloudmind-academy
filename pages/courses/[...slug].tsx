import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { getCourseBySlug, getVideoBySlug } from '@/lib/api'
import { Course, CourseVideo } from '@/types/course'
import { Loading } from '@/components/ui/course-page/Loading'
import { ErrorMessage } from '@/components/ui/course-page/ErrorMessage'
import CourseContent from '@/components/courses/course/CourseContent'
import DownloadSourceCode from '@/components/courses/course/DownloadSourceCode'
import RelatedVideos from '@/components/courses/course/RelatedVideos'

const ReadToStart = ({ course }: { course: Course }) => (
  <div className="bg-[#2D3748] rounded-xl p-6 text-center">
    <h2 className="text-2xl font-bold mb-4">Ready to Start Learning?</h2>
    <p className="mb-6">Begin your journey through {course.title} now!</p>
    <Link href={`/courses/${course.slug}/${course.videos[0].slug}`} passHref>
      <span className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer">
        Start First Lesson
      </span>
    </Link>
  </div>
)

export default function CoursePage() {
  const router = useRouter()
  const { slug } = router.query
  const [course, setCourse] = useState<Course | null>(null)
  const [currentVideo, setCurrentVideo] = useState<CourseVideo | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (router.isReady && Array.isArray(slug)) {
      const fetchData = async () => {
        try {
          const courseData = await getCourseBySlug(slug[0])
          setCourse(courseData)
          if (slug.length > 1) {
            const videoData = await getVideoBySlug(slug[0], slug[1])
            setCurrentVideo(videoData)
          }
        } catch (err) {
          setError('Failed to load course data')
          console.error(err)
        } finally {
          setIsLoading(false)
        }
      }
      fetchData()
    }
  }, [router.isReady, slug])

  if (!router.isReady || isLoading) return <Layout><Loading /></Layout>
  if (error) return <Layout><ErrorMessage message={error} /></Layout>
  if (!course) return <Layout><ErrorMessage message="Course not found" /></Layout>

  const breadcrumbs = [
    { name: 'Courses', href: '/courses' },
    { name: course.title, href: `/courses/${course.slug}` },
  ]

  if (currentVideo) {
    breadcrumbs.push({ name: currentVideo.title, href: `/courses/${course.slug}/${currentVideo.slug}` })
  }

  const renderBreadcrumbs = () => (
    <nav className="text-sm font-medium text-gray-500 mb-4">
      <ol className="list-none p-0 inline-flex">
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center">
            {index > 0 && <span className="mx-2">/</span>}
            <Link href={crumb.href} passHref>
              <span className="hover:text-gray-700 cursor-pointer">{crumb.name}</span>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )

  return (
    <Layout>
      {renderBreadcrumbs()}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <CourseContent 
            course={course} 
            currentVideo={currentVideo} 
          />
        </div>
        <div className="space-y-6">
          <ReadToStart course={course} />
          <DownloadSourceCode courseSlug={course.slug} />
          <RelatedVideos videos={course.videos.filter(v => v.slug !== currentVideo?.slug)} />
        </div>
      </div>
    </Layout>
  )
}