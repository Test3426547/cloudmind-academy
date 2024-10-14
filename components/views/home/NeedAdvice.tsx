'use client'

import React from 'react'
import { Button } from "@/components/ui/need-advice/button"
import { ChevronRight } from 'lucide-react'

export default function NeedAdvice() {
  return (
    <div className="bg-orange-50 py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Need advice?
          </h2>
          <p className="text-gray-600 mb-8">
            Not sure which CloudMind Academy setup is right for you? Answer a few quick
            questions to find out which method is best suited to your needs.
          </p>
          <Button variant="outline" className="bg-white text-blue-900 border-blue-900 hover:bg-blue-900 hover:text-white transition-colors duration-300">
            See my options
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-300 rounded-full transform translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-orange-500 rounded-full transform translate-x-1/2 translate-y-1/2"></div>
    </div>
  )
}