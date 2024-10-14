"use client"

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CourseGrid from './CourseGrid'
import Pagination from './Pagination'
import { getCourses } from '../../lib/api'
import { ThemedText } from '@/components/courses/ThemedText'

export default function CoursesPage() {
  const [courses, setCourses] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const cardsPerPage = 8
  const cardRefs = useRef([])
  const pageRef = useRef(null)

  useEffect(() => {
    const fetchCourses = async () => {
      const fetchedCourses = await getCourses()
      setCourses(fetchedCourses)
    }
    fetchCourses()
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.from(pageRef.current.children, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.2,
        ease: "power2.out"
      })

      cardRefs.current.forEach((card, index) => {
        gsap.fromTo(card, 
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.5, 
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              toggleActions: "play none none reverse"
            },
            delay: index * 0.1
          }
        )
      })
    }, pageRef)

    return () => ctx.revert()
  }, [currentPage])

  const indexOfLastCourse = currentPage * cardsPerPage
  const indexOfFirstCourse = indexOfLastCourse - cardsPerPage
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div ref={pageRef} className="bg-[#1C2333] min-h-screen p-6 space-y-6">
      <ThemedText variant="h2" className="text-emerald-500">Featured Courses</ThemedText>
      <div className="bg-[#2D3748] rounded-lg shadow-lg p-6">
        <CourseGrid courses={currentCourses} cardRefs={cardRefs} />
        <div className="mt-6">
          <Pagination 
            currentPage={currentPage} 
            totalPages={Math.ceil(courses.length / cardsPerPage)} 
            paginate={paginate} 
          />
        </div>
      </div>
    </div>
  )
}