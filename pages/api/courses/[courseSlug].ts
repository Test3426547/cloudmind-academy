import type { NextApiRequest, NextApiResponse } from 'next'
import { Course } from '@/types/course'

export const courses: Course[] = [
  {
    id: "1",
    slug: "build-a-jira-clone",
    title: "Build A Jira Clone",
    description: "In this 16-hour tutorial split in two parts, you will learn how to create an end-to-end fullstack Jira clone with workspaces, projects, tasks, Kanban boards, and more!",
    chapters: 41,
    technologies: ["Tailwind", "React.js", "Next.js", "Hono"],
    image: "/branding.jpg?height=200&width=400",
    year: 2024,
    videos: [
      {
        slug: "introduction",
        title: "Introduction to Jira Clone",
        description: "An overview of what we'll be building in this course.",
        videoId: "vbnfbFxTwAyzCz3y2ftnN8OjxV00pQdabcgTOJqV8JVw"
      },
      // Add more videos here...
    ]
  },
  // Add more courses here...
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { courseSlug } = req.query

  if (typeof courseSlug !== 'string') {
    return res.status(400).json({ message: 'Invalid slug' })
  }

  const course = courses.find(c => c.slug === courseSlug)

  if (course) {
    res.status(200).json(course)
  } else {
    res.status(404).json({ message: 'Course not found' })
  }
}