import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getCourseBySlug } from '@/lib/api'
import { Course, CourseVideo } from '@/types/course'
import { Loading } from '@/components/ui/course-page/Loading'
import { ErrorMessage } from '@/components/ui/course-page/ErrorMessage'
import { VideoPlayer } from '@/components/courses/course/VideoPlayer'

export default function CourseVideoPage() {
  const router = useRouter()
  const { courseSlug, videoSlug } = router.query
  const [course, setCourse] = useState<Course | null>(null)
  const [video, setVideo] = useState<CourseVideo | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (router.isReady && courseSlug && videoSlug) {
      const fetchCourseAndVideo = async () => {
        try {
          const courseData = await getCourseBySlug(courseSlug as string)
          setCourse(courseData)
          const videoData = courseData.videos.find((v: CourseVideo) => v.slug === videoSlug)
          if (videoData) {
            setVideo(videoData)
          } else {
            setError('Video not found')
          }
        } catch (err) {
          setError('Failed to load course and video')
          console.error(err)
        } finally {
          setIsLoading(false)
        }
      }
      fetchCourseAndVideo()
    }
  }, [router.isReady, courseSlug, videoSlug])

  if (!router.isReady || isLoading) return <Loading />
  if (error) return <ErrorMessage message={error} />
  if (!course || !video) return <ErrorMessage message="Course or video not found" />

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <h2 className="text-2xl font-semibold mb-4">{video.title}</h2>
      <VideoPlayer videoId={video.videoId} title={video.title} />
      <p className="mt-4 text-gray-600">{video.description}</p>
    </div>
  )
}