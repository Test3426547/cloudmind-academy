'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/header/button"

export default function Header() {
  return (
    <header className="w-full bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-orange-500 text-sm mb-2">Solutions / CMA LMS</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight mb-4">
              The best LMS for<br />personalised<br />learning
            </h1>
          </div>
          <div className="md:text-right">
            <p className="text-gray-600 mb-4 max-w-md">
              Create engaging eLearning experiences with our customisable learning management system.
            </p>
            <Button className="bg-white text-blue-900 border border-blue-900 hover:bg-blue-900 hover:text-white transition-colors duration-300">
              Get CloudMind Academy
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <nav className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-between py-4 text-sm">
            <li><Link href="/features" className="text-gray-600 hover:text-blue-900">Key features</Link></li>
            <li><Link href="/integrations" className="text-gray-600 hover:text-blue-900">Certified integrations</Link></li>
            <li><Link href="/success-stories" className="text-gray-600 hover:text-blue-900">Success stories</Link></li>
            <li><Link href="/app" className="text-gray-600 hover:text-blue-900">CMA App</Link></li>
            <li><Link href="/get-started" className="text-gray-600 hover:text-blue-900">Get CloudMind Academy</Link></li>
            <li><Link href="/partners" className="text-gray-600 hover:text-blue-900">Find a CMA partner</Link></li>
            <li><Link href="/contact" className="text-gray-600 hover:text-blue-900">Need advice?</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}