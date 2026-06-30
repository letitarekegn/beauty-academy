'use client'

import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    course: 'Professional Makeup Course',
    text: 'Arkani changed my life! The trainers are incredibly knowledgeable and supportive. I now have my own makeup business.',
    rating: 5,
    avatar: '👩‍🎓',
  },
  {
    name: 'Emily Chen',
    course: 'Full Beauty Package',
    text: 'Best investment I made in myself. The comprehensive training and business guidance helped me launch successfully.',
    rating: 5,
    avatar: '💄',
  },
  {
    name: 'Jessica Martinez',
    course: 'Professional Hair Course',
    text: 'The hands-on experience and modern equipment made all the difference in my learning. Highly recommended!',
    rating: 5,
    avatar: '💇‍♀️',
  },
  {
    name: 'Olivia Williams',
    course: 'Professional Nail Course',
    text: 'Amazing instructors and small class sizes meant I got personalized attention. Worth every penny!',
    rating: 5,
    avatar: '💅',
  },
  {
    name: 'Amanda Brown',
    course: 'Professional Makeup Course',
    text: 'The certificate and career support from Arkani helped me secure my first job at a prestigious salon.',
    rating: 5,
    avatar: '✨',
  },
  {
    name: 'Rachel Green',
    course: 'Full Beauty Package',
    text: "I loved how they teach both technical skills and business management. Now I'm running my own studio!",
    rating: 5,
    avatar: '👑',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
            What Our Students Say
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Real success stories from our academy graduates
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-accent group"
            >
              {/* Header with Avatar and Course */}
              <div className="mb-4">
                <div className="text-5xl mb-4">{testimonial.avatar}</div>
                <h3 className="text-lg font-semibold text-foreground">{testimonial.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{testimonial.course}</p>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed">"{testimonial.text}"</p>

              {/* Decorative Line */}
              <div className="h-1 w-12 bg-accent mt-6 group-hover:w-full transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 bg-white p-12 rounded-2xl border-2 border-accent/20">
          <div className="text-center">
            <p className="text-4xl font-bold text-accent mb-2">500+</p>
            <p className="text-gray-600 font-medium">Students Trained</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-accent mb-2">95%</p>
            <p className="text-gray-600 font-medium">Student Satisfaction</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-accent mb-2">100%</p>
            <p className="text-gray-600 font-medium">Professional Certification</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-accent mb-2">88%</p>
            <p className="text-gray-600 font-medium">Career Placement Rate</p>
          </div>
        </div>
      </div>
    </section>
  )
}
