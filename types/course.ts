export interface Course {
  id: string
  slug: string
  title: string
  description: string
  chapters: number
  technologies: string[]
  image: string
  year: number
  videos: CourseVideo[]
}

export interface CourseVideo {
  slug: string
  title: string
  description: string
  videoId: string
}

export interface RelatedVideo {
  id: string
  title: string
  url: string
}