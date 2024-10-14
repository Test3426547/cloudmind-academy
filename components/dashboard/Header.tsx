import Image from 'next/image'
import { Search } from 'lucide-react'
import { Input } from "@/components/ui/dashboard/input"
import { Button } from "@/components/ui/dashboard/button"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dashboard/dropdown-menu"

export default function Header() {
  return (
    <header className="bg-[#2D3748] shadow-md">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex-1 flex justify-center">
          <div className="relative flex items-center w-[400px]">
            <Input 
              type="text" 
              placeholder="Search for a course" 
              className="pl-10 pr-16 bg-[#3A4659] text-white border-[#4A5568] w-full focus:ring-emerald-500 focus:border-emerald-500" 
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Button 
              size="sm" 
              className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-emerald-500 hover:bg-emerald-600 text-white"
            >
              <Search size={16} />
            </Button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="Profile"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-[#3A4659] border-[#4A5568]">
              <DropdownMenuItem className="text-white hover:bg-[#4A5568]">
                My Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-[#4A5568]">
                My Grades
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-[#4A5568]">
                My Analytics
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-[#4A5568]">
                My Learning Paths
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button 
            variant="outline" 
            className="text-emerald-500 border-emerald-500 hover:bg-emerald-500 hover:text-white"
          >
            Login
          </Button>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
            Register
          </Button>
        </div>
      </div>
    </header>
  )
}