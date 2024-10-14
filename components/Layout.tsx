import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import Sidebar from './dashboard/Sidebar'
import Header from './dashboard/Header'
import ChatbotToggle from './dashboard/ChatbotToggle'
import { ThemedText } from '@/components/dashboard/ThemedText'

interface LayoutProps {
  children: React.ReactNode
  title?: string
}

export default function Layout({ children, title }: LayoutProps) {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(pageRef.current?.children, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.2,
        ease: "power2.out"
      })
    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="flex h-screen bg-[#0E1525] text-white font-inter" ref={pageRef}>
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-[#1C2333]">
        <Header />
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {title && <ThemedText variant="h2" className="text-emerald-500 mb-6">{title}</ThemedText>}
          <div className="bg-[#2D3748] rounded-lg shadow-lg p-6">
            {children}
          </div>
        </div>
      </main>
      <ChatbotToggle />
    </div>
  )
}