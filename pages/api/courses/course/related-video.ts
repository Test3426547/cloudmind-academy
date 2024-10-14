// pages/api/related-videos.ts
import { NextApiRequest, NextApiResponse } from 'next'

export interface RelatedVideo {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
}

const relatedVideos: RelatedVideo[] = [
  { id: 1, title: "React Hooks Deep Dive", thumbnail: "/thumbnails/react-hooks.webp", duration: "1:15:30" },
  { id: 2, title: "Next.js Server Components", thumbnail: "/thumbnails/nextjs-server.webp", duration: "45:20" },
  { id: 3, title: "Tailwind CSS Masterclass", thumbnail: "/thumbnails/tailwind-css.webp", duration: "2:30:00" },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(relatedVideos)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}