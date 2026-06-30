'use client'

import { Check, Users, BookOpen, Award, Zap, Palette } from 'lucide-react'

const reasons = [
  {
    icon: Users,
    title: 'Professional Trainers',
    description: 'Learn from industry experts with years of experience',
  },
  {
    icon: BookOpen,
    title: 'Hands-on Learning',
    description: 'Practical training with real-world scenarios',
  },
  {
    icon: Palette,
    title: 'Small Class Sizes',
    description: 'Personalized attention from your instructors',
  },
  {
    icon: Award,
    title: 'Certification',
    description: 'Professional certificates upon completion',
  },
  {
    icon: Zap,
    title: 'Career Guidance',
    description: 'Support building your beauty career',
  },
  {
    icon: Check,
    title: 'Modern Equipment',
    description: 'Latest beauty industry equipment and tools',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
            Why Choose Arkani?
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            We combine professional expertise, modern facilities, and personalized training
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
