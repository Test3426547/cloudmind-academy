// pages/api/courses/course.ts
import { courses } from './[courseSlug]'

export { courses }

export const getCourseBySlug = (slug: string) => courses.find(c => c.slug === slug)
export const getAllCourseSlugs = () => courses.map(course => course.slug)