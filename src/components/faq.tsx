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
    question: "What logistics services do you offer?",
    answer: "We offer comprehensive logistics solutions including air freight, sea freight, land transport, warehousing, project logistics, military logistics, and specialized services for events and luxury goods."
  },
  {
    question: "Where do you operate?",
    answer: "We operate globally with a strong presence in the UAE, KSA, and across the GCC region. Through our network of partners, we can handle shipments worldwide."
  },
  {
    question: "How can I track my shipment?",
    answer: "You can track your shipment in real-time through our online tracking system. Simply enter your tracking number on our cargo tracking page."
  },
  {
    question: "What types of cargo can you handle?",
    answer: "We handle all types of cargo including general cargo, perishables, dangerous goods, oversized cargo, luxury items, and specialized military equipment."
  },
  {
    question: "Do you provide customs clearance services?",
    answer: "Yes, we provide comprehensive customs clearance services in all major ports and airports, ensuring smooth and compliant import/export processes."
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
            Find answers to common questions about our logistics services
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