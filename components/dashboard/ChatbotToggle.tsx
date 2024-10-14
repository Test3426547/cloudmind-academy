// components/ChatbotToggle.tsx
import { useState } from 'react'
import { Button } from "@/components/ui/chatbot/button"
import { MessageSquare } from 'lucide-react'
import ChatbotComponent from './ChatbotComponent'

export default function ChatbotToggle() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4">
      <Button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="rounded-full w-12 h-12 flex items-center justify-center bg-emerald-500 hover:bg-emerald-600"
      >
        <MessageSquare />
      </Button>
      {isChatOpen && <ChatbotComponent />}
    </div>
  )
}