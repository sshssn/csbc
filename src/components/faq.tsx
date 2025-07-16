'use client'

import { GradientText } from "@/components/ui/gradient-text"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What construction services do you offer?",
    answer: "We offer comprehensive construction services including luxury villa construction, warehouse construction, commercial buildings, industrial facilities, major RCC works, steel structure construction, renovation & retrofitting, and green building solutions."
  },
  {
    question: "Where do you operate in the UAE?",
    answer: "We operate across all Emirates in the UAE including Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah. We have completed projects in all major cities and industrial areas."
  },
  {
    question: "How long does a typical construction project take?",
    answer: "Project timelines vary based on size and complexity. A luxury villa typically takes 12-18 months, warehouses 8-12 months, and commercial buildings 16-24 months. We provide detailed project schedules during the planning phase."
  },
  {
    question: "What types of projects do you specialize in?",
    answer: "We specialize in luxury villas, warehouse construction, commercial buildings, industrial facilities, major RCC works, and steel structures. Our expertise includes both new construction and renovation projects."
  },
  {
    question: "Do you provide sustainable building solutions?",
    answer: "Yes, we are a leading provider of green building solutions. We use sustainable materials, energy-efficient systems, and can help achieve LEED certification for your projects."
  },
  {
    question: "What is your experience in the construction industry?",
    answer: "We have been established since 2007 with over 20 years of experience in the UAE construction industry. We have completed 100+ projects and served 100+ satisfied clients across all Emirates."
  }
]

export function FAQ() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <GradientText as="span">Frequently Asked Questions</GradientText>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our construction services
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-2xl rounded-3xl p-6 shadow-lg">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
} 