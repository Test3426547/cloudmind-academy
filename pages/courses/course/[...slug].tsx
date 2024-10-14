// pages/courses/course/[...slug].tsx
import { useRouter } from 'next/router'
import CourseContent from '@/components/courses/course/CourseContent'

export default function CoursePage() {
  const router = useRouter()
  const { slug } = router.query

  if (router.isReady && (!slug || typeof slug !== 'string')) {
    return <div>Invalid course slug</div>
  }

  if (!router.isReady) {
    return <div>Loading...</div>
  }

  return <CourseContent slug={slug as string} />
}