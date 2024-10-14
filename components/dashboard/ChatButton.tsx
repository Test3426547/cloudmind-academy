import { Button } from "@/components/ui/dashboard/button"
import { MessageSquare } from 'lucide-react'

export default function ChatButton({ onClick }) {
  return (
    <Button
      onClick={onClick}
      className="rounded-full w-12 h-12 flex items-center justify-center bg-emerald-500 hover:bg-emerald-600"
    >
      <MessageSquare />
    </Button>
  )
}