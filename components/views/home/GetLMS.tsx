'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/get-lms/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/get-lms/card"
import { ChevronRight } from 'lucide-react'

export default function GetLMS() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Get CloudMind Academy LMS
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl">
          There are three ways to set up CloudMind Academy LMS. Find out which option is best suited to your needs and budget.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="col-span-1 md:col-span-2 lg:col-span-1">
            <CardContent className="p-6">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Partner with an expert"
                width={300}
                height={200}
                className="w-full h-auto mb-4"
              />
              <div className="bg-gray-100 text-blue-900 text-xs font-semibold px-2 py-1 rounded-full inline-block mb-2">
                Expert Delivery
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Partner with an expert</h3>
              <p className="text-gray-600 mb-4">
                Our network of CloudMind Academy Certified Partners and Service Providers can customize CloudMind Academy for your needs and provide expertise in customizations, hosting, support and training.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" className="flex items-center">
                  Get a demo
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="flex items-center">
                  Find a partner
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex space-x-2 mb-2">
                <div className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                  Free Trial
                </div>
                <div className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                  Self-service
                </div>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">CloudMindCloud</h3>
              <p className="text-gray-600 mb-4">
                Want to start teaching your classes, training your staff, or selling your courses online fast? Try our off-the-shelf LMS solution that's ready to go with CloudMind Academy's most popular features built in.
              </p>
              <Button variant="outline" className="flex items-center">
                Learn more
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex space-x-2 mb-2">
                <div className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full">
                  Open Source
                </div>
                <div className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full">
                  Unlimited Users
                </div>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Direct download</h3>
              <p className="text-gray-600 mb-4">
                Got in-house technical expertise? As an open source platform, it's possible to download, build, and host your own CloudMind Academy site.
              </p>
              <Button variant="outline" className="flex items-center">
                Download CloudMind Academy now
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}