// components/courses/course/CourseChat.tsx

import React, { useState } from 'react'

interface CourseChatProps {
  courseId: string
}

export default function CourseChat({ courseId }: CourseChatProps) {
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement chat submission logic here
    console.log(`Sending message for course ${courseId}: ${message}`)
    setMessage('')
  }

  return (
    <div className="bg-[#2D3748] rounded-xl p-6">
      <h3 className="text-xl font-bold mb-4">Course Chat</h3>
      <div className="h-64 overflow-y-auto mb-4 bg-[#1A202C] p-4 rounded">
        {/* Chat messages would be displayed here */}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="w-full p-2 rounded bg-[#4A5568] text-white"
        />
      </form>
    </div>
  )
}