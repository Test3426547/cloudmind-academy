import React from 'react'
import { Course, CourseVideo } from '@/types/course'
import { VideoPlayer } from './VideoPlayer'
import CourseInfo from './CourseInfo'
import CourseChat from './CourseChat'

interface CourseContentProps {
  course: Course
  currentVideo: CourseVideo | null
}

export default function CourseContent({ course, currentVideo }: CourseContentProps) {
  return (
    <div className="space-y-6">
      {currentVideo ? (
        <VideoPlayer
          videoId={currentVideo.videoId}
          title={currentVideo.title}
        />
      ) : (
        <div className="bg-[#2D3748] rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Welcome to {course.title}</h2>
          <p>Select a video to start learning.</p>
        </div>
      )}
      <CourseInfo
        title={course.title}
        description={course.description}
        chapters={course.chapters}
        technologies={course.technologies}
      />
      <CourseChat courseId={course.id} />
    </div>
  )
}