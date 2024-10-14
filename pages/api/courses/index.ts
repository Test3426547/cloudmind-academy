// pages/api/courses/index.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { courses } from './course'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Return courses without the videos array to keep the initial load light
    const coursesWithoutVideos = courses.map(({ videos, ...course }) => course);
    res.status(200).json(coursesWithoutVideos)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}