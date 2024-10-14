'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react'

const footerLinks = [
  {
    title: "Solutions",
    links: [
      { name: "CloudMind Academy LMS", href: "/lms" },
      { name: "Certified Integrations", href: "/integrations" },
      { name: "Become a Certified Integration Partner", href: "/become-partner" },
      { name: "CloudMind Academy App", href: "/app" },
      { name: "CloudMind Academy Workplace", href: "/workplace" },
      { name: "CloudMindCloud", href: "/cloud" },
    ]
  },
  {
    title: "Services",
    links: [
      { name: "Certified Partners & Service Providers", href: "/partners" },
      { name: "Find your Partner", href: "/find-partner" },
      { name: "Become a CloudMind Academy Partner", href: "/become-partner" },
      { name: "Hosting", href: "/hosting" },
      { name: "Customisation & Development", href: "/development" },
      { name: "Learning Design", href: "/learning-design" },
      { name: "Support & Training", href: "/support" },
    ]
  },
  {
    title: "Customers",
    links: [
      { name: "K-12", href: "/k12" },
      { name: "Higher Education", href: "/higher-education" },
      { name: "Vocational Training", href: "/vocational" },
      { name: "Workplace Learning", href: "/workplace" },
      { name: "Government", href: "/government" },
      { name: "Healthcare", href: "/healthcare" },
      { name: "IT & Technology", href: "/it-tech" },
    ]
  },
  {
    title: "About Us",
    links: [
      { name: "About Us", href: "/about" },
      { name: "The CloudMind Academy Story", href: "/story" },
      { name: "Open Source", href: "/open-source" },
      { name: "CloudMind Academy's AI Principles", href: "/ai-principles" },
      { name: "Official Certified B Corporation", href: "/b-corp" },
      { name: "Events", href: "/events" },
      { name: "Careers", href: "/careers" },
      { name: "Awards", href: "/awards" },
    ]
  },
]

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com" },
  { icon: Linkedin, href: "https://linkedin.com" },
  { icon: Twitter, href: "https://twitter.com" },
  { icon: Youtube, href: "https://youtube.com" },
  { icon: Instagram, href: "https://instagram.com" },
]

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <Image src="/logo.svg" alt="CloudMind Academy Logo" width={150} height={50} />
          <Image src="/b-corp.svg" alt="B Corp Certification" width={100} height={50} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="font-bold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="hover:text-blue-300 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">Empowering educators to improve our world.</p>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href="/donate" className="hover:text-blue-300 transition-colors">Donate</Link>
            <Link href="/shop" className="hover:text-blue-300 transition-colors">Shop</Link>
            <Link href="/newsletter" className="hover:text-blue-300 transition-colors">Newsletter sign up</Link>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <Link key={index} href={social.href} className="hover:text-blue-300 transition-colors">
                <social.icon className="w-6 h-6" />
              </Link>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-sm text-blue-300 flex flex-wrap justify-center md:justify-start space-x-4">
          <Link href="/cookies">Cookies Policy</Link>
          <Link href="/privacy">Privacy Notice</Link>
          <Link href="/trademark">Trademark Policy</Link>
        </div>
      </div>
    </footer>
  )
}