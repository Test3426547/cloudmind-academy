import { Button } from "@/components/ui/dashboard/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Pagination({ currentPage, totalPages, paginate }) {
  return (
    <div className="flex justify-center mt-8 space-x-2">
      <Button 
        onClick={() => paginate(currentPage - 1)} 
        disabled={currentPage === 1}
        className="bg-emerald-500 hover:bg-emerald-600"
      >
        <ChevronLeft size={16} />
      </Button>
      {[...Array(totalPages)].map((_, i) => (
        <Button 
          key={i} 
          onClick={() => paginate(i + 1)}
          className={`${currentPage === i + 1 ? 'bg-emerald-600' : 'bg-emerald-500 hover:bg-emerald-600'}`}
        >
          {i + 1}
        </Button>
      ))}
      <Button 
        onClick={() => paginate(currentPage + 1)} 
        disabled={currentPage === totalPages}
        className="bg-emerald-500 hover:bg-emerald-600"
      >
        <ChevronRight size={16} />
      </Button>
    </div>
  )
}