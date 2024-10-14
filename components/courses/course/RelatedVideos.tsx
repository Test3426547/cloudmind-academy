import React from 'react'
import Link from 'next/link'
import { CourseVideo } from '@/types/course'

interface RelatedVideosProps {
  videos: CourseVideo[]
}

export default function RelatedVideos({ videos }: RelatedVideosProps) {
  return (
    <div className="bg-[#2D3748] rounded-xl p-6">
      <h3 className="text-xl font-bold mb-4">Related Videos</h3>
      <ul className="space-y-4">
        {videos.map((video) => (
          <li key={video.slug}>
            <Link href={`/courses/${video.courseSlug}/${video.slug}`} passHref>
              <div className="block hover:bg-[#4A5568] p-2 rounded cursor-pointer">
                <h4 className="font-semibold">{video.title}</h4>
                <p className="text-sm text-gray-400">{video.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}