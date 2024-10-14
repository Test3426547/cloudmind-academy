"use client"

import { useRef, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const MuxPlayer = dynamic(() => import('@mux/mux-player-react'), { ssr: false })

interface VideoPlayerProps {
  videoId: string
  title: string
  streamType?: 'on-demand' | 'live'
}

export function VideoPlayer({ videoId, title, streamType = 'on-demand' }: VideoPlayerProps) {
  const videoRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    import('gsap').then((gsapModule) => {
      const gsap = gsapModule.default;
      if (videoRef.current) {
        gsap.fromTo(
          videoRef.current,
          { opacity: 0, y: 20 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            ease: "power3.out",
            onComplete: () => setIsLoading(false)
          }
        )
      }
    })

    return () => {
      import('gsap').then((gsapModule) => {
        const gsap = gsapModule.default;
        if (videoRef.current) {
          gsap.set(videoRef.current, { clearProps: "all" })
        }
      })
    }
  }, [videoId])

  const handleError = (e: Error) => {
    console.error("Video playback error:", e)
    setError(e.message)
  }

  if (error) return <div className="text-red-500 rounded-xl bg-red-100 p-4">Error loading video: {error}</div>

  return (
    <div ref={videoRef} className="aspect-w-16 aspect-h-9 mb-4 opacity-0 rounded-xl overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-xl">
          <div className="text-white">Loading video player...</div>
        </div>
      )}
      <MuxPlayer
        streamType={streamType}
        playbackId={videoId}
        metadata={{ video_id: videoId, video_title: title }}
        onError={handleError}
        onLoadedData={() => setIsLoading(false)}
        className="rounded-xl"
      />
    </div>
  )
}