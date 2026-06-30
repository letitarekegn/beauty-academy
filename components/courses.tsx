'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'

const courses = [
  {
    id: 1,
    name: 'Professional Makeup Course',
    icon: '💄',
    topics: ['Bridal Makeup', 'Glam Makeup', 'Everyday Makeup', 'Product Knowledge', 'Client Practice'],
    featured: false,
  },
  {
    id: 2,
    name: 'Professional Hair Course',
    icon: '💇',
    topics: ['Hair Styling', 'Braiding', 'Hair Treatments', 'Hair Coloring Basics', 'Blow Dry Techniques'],
    featured: false,
  },
  {
    id: 3,
    name: 'Professional Nail Course',
    icon: '💅',
    topics: ['Manicure', 'Pedicure', 'Gel Nails', 'Acrylic Nails', 'Nail Art'],
    featured: false,
  },
  {
    id: 4,
    name: 'Full Beauty Package',
    icon: '✨',
    topics: [
      '✓ Makeup',
      '✓ Hair',
      '✓ Nails',
      'Business & Client Management',
      'Social Media Marketing',
      'Photography for Beauty',
      'Pricing Your Services',
      'Branding Yourself',
    ],
    featured: true,
  },
]

export function Courses() {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
            Our Courses
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Choose the perfect beauty course to launch your professional career
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 group ${
                course.featured
                  ? 'lg:col-span-1 md:col-span-2 border-2 border-accent bg-accent/5 shadow-xl scale-105'
                  : 'border-2 border-border bg-white hover:border-accent'
              }`}
            >
              {/* Most Popular Badge */}
              {course.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-accent text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Sparkles size={12} />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-8">
                {/* Icon */}
                <div className="text-5xl mb-4">{course.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-6">{course.name}</h3>

                {/* Topics */}
                <div className="space-y-3 mb-8">
                  {course.topics.map((topic, index) => (
                    <div key={index} className="flex items-start gap-2">
                      {topic.includes('✓') ? (
                        <span className="text-accent font-bold mt-0.5 flex-shrink-0">✓</span>
                      ) : (
                        <span className="text-accent mt-1 flex-shrink-0">•</span>
                      )}
                      <span className="text-gray-700 text-sm">{topic.replace('✓ ', '')}</span>
                    </div>
                  ))}
                </div>

                {/* Register Button */}
                <Button
                  asChild
                  className={`w-full font-semibold rounded-full py-6 transition-all ${
                    course.featured
                      ? 'bg-accent hover:bg-accent/90 text-white'
                      : 'bg-white hover:bg-accent/10 text-accent border-2 border-accent'
                  }`}
                >
                  <Link href="#register">Register for {course.name.split(' ')[0]}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
