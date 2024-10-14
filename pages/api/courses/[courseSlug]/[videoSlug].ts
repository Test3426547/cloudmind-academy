import type { NextApiRequest, NextApiResponse } from 'next'
import { CourseVideo } from '@/types/course'
import { courses } from '../[courseSlug]'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { courseSlug, videoSlug } = req.query

  if (typeof courseSlug !== 'string' || typeof videoSlug !== 'string') {
    return res.status(400).json({ message: 'Invalid slugs' })
  }

  const course = courses.find(c => c.slug === courseSlug)

  if (!course) {
    return res.status(404).json({ message: 'Course not found' })
  }

  const video = course.videos.find(v => v.slug === videoSlug)

  if (video) {
    res.status(200).json(video)
  } else {
    res.status(404).json({ message: 'Video not found' })
  }
}