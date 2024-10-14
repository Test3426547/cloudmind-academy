import React from 'react'

interface DownloadSourceCodeProps {
  courseSlug: string
}

export default function DownloadSourceCode({ courseSlug }: DownloadSourceCodeProps) {
  return (
    <div className="bg-[#2D3748] rounded-xl p-6">
      <h3 className="text-xl font-bold mb-4">Download Source Code</h3>
      <a
        href={`/api/download-source-code/${courseSlug}`}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded block text-center"
        download
      >
        Download ZIP
      </a>
    </div>
  )
}