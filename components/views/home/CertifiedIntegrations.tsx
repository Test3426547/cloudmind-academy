'use client'

import React from 'react'
import { Button } from "@/components/ui/certified-integrations/button"
import { ChevronRight } from 'lucide-react'

export default function CertifiedIntegrations() {
  return (
    <div className="bg-blue-900 rounded-lg overflow-hidden relative">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <p className="text-blue-200 text-sm mb-2">Certified Integrations</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Expand Functionality with CloudMind Academy Certified Integrations
        </h2>
        <p className="text-blue-100 mb-8 max-w-2xl">
          Increase what your CloudMind Academy platform can do with reliable Certified
          Integrations tailored to your institution's needs.
        </p>
        <Button variant="secondary" className="bg-white text-blue-900 hover:bg-blue-100">
          Explore Certified Integrations
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500 rounded-full transform translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-orange-500 rounded-full transform translate-x-1/2 translate-y-1/2"></div>
    </div>
  )
}