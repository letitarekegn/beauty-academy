'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqItems = [
  {
    question: 'How long are the courses?',
    answer: 'Our professional courses range from 4-12 weeks depending on the program. The Full Beauty Package is our most comprehensive course at 12 weeks, while individual courses are typically 6-8 weeks.',
  },
  {
    question: 'Do I receive a certificate?',
    answer: 'Yes! Upon successful completion of your course, you will receive a professional certificate from Arkani Beauty Academy. This certification is recognized in the beauty industry and helps boost your career.',
  },
  {
    question: 'Do I need prior experience?',
    answer: 'No prior experience is necessary. Our courses are designed for beginners and welcome students at all levels. We have specialized tracks for beginners, intermediate, and advanced students.',
  },
  {
    question: 'Can I pay in installments?',
    answer: 'Yes, we offer flexible payment plans. You can pay in installments over the course of your training. Please contact our admissions team to discuss payment options that work best for you.',
  },
  {
    question: 'Do you provide models for practice?',
    answer: 'Absolutely! We provide professional models for all practical training sessions. This ensures you get real-world experience working with actual clients under supervised conditions.',
  },
  {
    question: 'What should I bring to class?',
    answer: 'We provide most equipment and materials. However, please bring comfortable clothing, closed-toe shoes, and a notebook. A detailed list will be provided upon enrollment.',
  },
  {
    question: 'What are the class sizes?',
    answer: 'We maintain small class sizes with a maximum of 12 students per class. This ensures personalized attention from instructors and better learning outcomes.',
  },
  {
    question: 'Do you offer job placement assistance?',
    answer: 'Yes! We provide career guidance and job placement support to all graduates. Our network includes beauty salons, spas, and freelance opportunities.',
  },
]

export function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Find answers to common questions about our courses and academy
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-border hover:border-accent transition-all duration-300"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 hover:bg-secondary/30 transition-colors"
              >
                <span className="text-lg font-semibold text-foreground text-left">
                  {item.question}
                </span>
                <ChevronDown
                  size={24}
                  className={`flex-shrink-0 text-accent transition-transform duration-300 ${
                    expandedIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              {expandedIndex === index && (
                <div className="px-6 pb-6 border-t border-border animate-in fade-in duration-300">
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Have more questions? We&apos;d love to hear from you!
          </p>
          <a
            href="#contact"
            className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3 rounded-full transition-all"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
