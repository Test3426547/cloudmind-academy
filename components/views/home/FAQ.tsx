'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/faq/button"
import { ChevronRight, ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do I configure my CloudMind Academy site?",
    answer: "Configuration of your CloudMind Academy site involves several steps including setting up your courses, enrolling users, and customizing the appearance. For detailed instructions, please refer to our comprehensive setup guide in the CloudMind Academy Knowledge Base."
  },
  {
    question: "Can I host my own CloudMind Academy site or can you host it for us?",
    answer: "You have both options available. You can self-host CloudMind Academy if you have the technical expertise, or we can host it for you through our CloudMindCloud service. The choice depends on your resources and specific needs."
  },
  {
    question: "Does CloudMind Academy HQ offer CloudMind Academy support and services?",
    answer: "Yes, CloudMind Academy HQ offers various support options and services. These include technical support, consulting services, and training programs. For more information on our support packages, please visit our Support page."
  }
]

const FAQItem: React.FC<{ item: FAQItem; index: number }> = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-blue-900">
          <span className="text-orange-500 mr-2">{String(index + 1).padStart(2, '0')}</span>
          {item.question}
        </span>
        {isOpen ? <ChevronDown className="h-5 w-5 text-blue-900" /> : <ChevronRight className="h-5 w-5 text-blue-900" />}
      </button>
      {isOpen && (
        <p className="mt-2 text-gray-600">
          {item.answer}
        </p>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <p className="text-blue-600 text-sm mb-2">CloudMind Academy FAQs</p>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Frequently asked questions
        </h2>
        <Button variant="outline" className="mb-8 flex items-center">
          CloudMind Academy Knowledge Base
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} item={faq} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}