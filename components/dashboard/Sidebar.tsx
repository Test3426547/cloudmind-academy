import Link from 'next/link'
import { ScrollArea } from "@/components/ui/dashboard/scroll-area"
import { Button } from "@/components/ui/dashboard/button"
import { BookOpen, Beaker, Trophy, Box, Mail, Map, BarChart, FileText, Briefcase, HelpCircle, Home } from 'lucide-react'

const sidebarItems = [
  { name: "Home", icon: Home },
  { name: "Browse", icon: BookOpen },
  { name: "Workshops", icon: BookOpen },
  { name: "Labs", icon: Beaker, locked: true },
  { name: "Leaderboard", icon: Trophy },
  { name: "Sandbox", icon: Box },
  { name: "Newsletter", icon: Mail },
  { name: "Learning Paths", icon: Map },
  { name: "Recommendations", icon: BarChart, locked: true },
  { name: "Analytics", icon: BarChart, locked: true },
  { name: "Exams", icon: FileText },
  { name: "Careers", icon: Briefcase, locked: true },
  { name: "Tutor", icon: HelpCircle }
]

export default function Sidebar() {
  return (
    <aside className="w-[314px] bg-[#2D3748] shadow-md flex flex-col">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-emerald-500">CloudMind Academy</h1>
      </div>
      <ScrollArea className="flex-grow overflow-y-auto" style={{ height: 'calc(100vh - 8rem - 50px)' }}>
        <nav className="mt-2 px-4">
          {sidebarItems.map((item, index) => (
            <Link
              key={index}
              href="#"
              className="flex items-center justify-between py-2 px-4 text-gray-300 hover:bg-[#3A4659] hover:text-emerald-500 mb-2 rounded-xl border-2 border-[#3A4659] font-bold transition-colors duration-200 ease-in-out hover:border-emerald-500"
            >
              <div className="flex items-center">
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </div>
              {item.locked && (
                <span className="px-2 py-1 text-xs bg-[#4A5568] rounded-full">
                  Locked
                </span>
              )}
            </Link>
          ))}
        </nav>
      </ScrollArea>
      <div className="w-full p-4 bg-[#2D3748] border-t border-[#3A4659]">
        <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">Upgrade to Pro</Button>
        <p className="mt-2 text-xs text-gray-400">Unlock all courses, get access to source code, and more.</p>
      </div>
    </aside>
  )
}