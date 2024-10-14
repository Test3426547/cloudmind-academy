// lib/api.ts
import { Course, CourseVideo } from '@/types/course'
import { courses, getCourseBySlug as getCourseBySluqFromAPI } from '@/pages/api/courses/course'

export async function getCourses(): Promise<Course[]> {
  // This function now returns the courses directly from the imported data
  return courses
}

export async function getCourseBySlug(slug: string): Promise<Course> {
  const course = getCourseBySluqFromAPI(slug)
  if (!course) {
    throw new Error('Course not found')
  }
  return course
}

export async function getVideoBySlug(courseSlug: string, videoSlug: string): Promise<CourseVideo> {
  const course = getCourseBySluqFromAPI(courseSlug)
  if (!course) {
    throw new Error('Course not found')
  }
  const video = course.videos.find(v => v.slug === videoSlug)
  if (!video) {
    throw new Error('Video not found')
  }
  return video
}

export async function getRelatedVideos(courseSlug: string, currentVideoSlug: string): Promise<CourseVideo[]> {
  console.log(`Fetching related videos for course: ${courseSlug}, current video: ${currentVideoSlug}`)
  try {
    const course = await getCourseBySlug(courseSlug)
    // Return all videos except the current one
    return course.videos.filter(video => video.slug !== currentVideoSlug)
  } catch (error) {
    console.error('Error in getRelatedVideos:', error)
    throw new Error('Failed to fetch related videos')
  }
}