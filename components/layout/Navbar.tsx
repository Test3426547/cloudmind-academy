'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/navbar/button"

export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="bg-gray-900 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <p>Life on the edge: Networking challenges of AI deployments</p>
          <Link href="/blog/ai-networking-challenges" className="hover:underline">
            Read more
          </Link>
        </div>
      </div>
      <div className="bg-gray-100 py-4 px-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold">
              <span className="sr-only">Tailscale</span>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M12 2L2 12l10 10 10-10L12 2zm0 15.5L4.5 12 12 4.5 19.5 12 12 17.5z" />
              </svg>
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/product" className="text-gray-700 hover:text-gray-900">Product</Link>
              <Link href="/solutions" className="text-gray-700 hover:text-gray-900">Solutions</Link>
              <Link href="/enterprise" className="text-gray-700 hover:text-gray-900">Enterprise</Link>
              <Link href="/customers" className="text-gray-700 hover:text-gray-900">Customers</Link>
              <Link href="/docs" className="text-gray-700 hover:text-gray-900">Docs</Link>
              <Link href="/blog" className="text-gray-700 hover:text-gray-900">Blog</Link>
              <Link href="/pricing" className="text-gray-700 hover:text-gray-900">Pricing</Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/download" className="text-gray-700 hover:text-gray-900">Download</Link>
            <Link href="/login" className="text-gray-700 hover:text-gray-900">Log in</Link>
            <Button className="bg-gray-900 text-white hover:bg-gray-800">Get started</Button>
          </div>
          <button className="md:hidden text-gray-700 hover:text-gray-900">
            <span className="sr-only">Open menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}