'use client'

import Image from 'next/image'

const trainers = [
  {
    name: 'Maria Garcia',
    role: 'Makeup Specialist',
    bio: '15+ years in professional makeup with international recognition',
    image: '/expert1.jpg',
  },
  {
    name: 'Sophie Laurent',
    role: 'Hair Expert',
    bio: 'Certified colorist and styling expert with celebrity clientele',
    image: '/expert2.jpg',
  },
  {
    name: 'Jessica Chen',
    role: 'Nail Technician',
    bio: 'Master nail artist and business mentor for beauty professionals',
    image: '/expert3.jpg',
  },
  {
    name: 'Amanda Stone',
    role: 'Business Coach',
    bio: 'Helps graduates build successful independent beauty businesses',
    image: '/expert4.jpg',
  },
]

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
            About Arkani Beauty Academy
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        {/* ── Mission ── large image left, accent image + text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          <div className="relative rounded-2xl overflow-hidden min-h-[480px] lg:min-h-0">
            <Image src="/glam-makeup.avif" alt="Our Mission" fill className="object-cover object-center" />
          </div>
          <div className="flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden h-52">
              <Image src="/bridal-makeup.avif" alt="Mission detail" fill className="object-cover object-center" />
            </div>
            <div className="bg-secondary/50 rounded-2xl p-10 flex-1 flex flex-col justify-center">
              <h3 className="text-5xl sm:text-6xl font-serif font-bold text-foreground uppercase leading-[1] mb-6">
                Our<br />Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide world-class beauty education that empowers professionals to build successful careers and make a positive impact in the beauty industry.
              </p>
            </div>
          </div>
        </div>

        {/* ── Vision ── text + accent image left, large image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden h-52">
              <Image src="/creative-styling.avif" alt="Vision detail" fill className="object-cover object-center" />
            </div>
            <div className="bg-secondary/50 rounded-2xl p-10 flex-1 flex flex-col justify-center">
              <h3 className="text-5xl sm:text-6xl font-serif font-bold text-foreground uppercase leading-[1] mb-6">
                Our<br />Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted beauty academy that transforms passionate individuals into highly skilled, confident, and ethical beauty professionals.
              </p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden min-h-[480px] lg:min-h-0 order-1 lg:order-2">
            <Image src="/hair-styling.avif" alt="Our Vision" fill className="object-cover object-center" />
          </div>
        </div>

        {/* ── Story ── large image left, accent image + text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
          <div className="relative rounded-2xl overflow-hidden min-h-[480px] lg:min-h-0">
            <Image src="/graduation-day.avif" alt="Our Story" fill className="object-cover object-center" />
          </div>
          <div className="flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden h-52">
              <Image src="/student-work.avif" alt="Story detail" fill className="object-cover object-center" />
            </div>
            <div className="bg-secondary/50 rounded-2xl p-10 flex-1 flex flex-col justify-center">
              <h3 className="text-5xl sm:text-6xl font-serif font-bold text-foreground uppercase leading-[1] mb-6">
                Our<br />Story
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2015 by beauty industry veterans, Arkani Academy has trained over 500 students and continues to set the standard for excellence in beauty education.
              </p>
            </div>
          </div>
        </div>

        {/* Our Trainers */}
        <div>
          <h3 className="text-3xl font-serif font-bold text-foreground mb-12 text-center">
            Meet Our Expert Trainers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainers.map((trainer, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-md hover:-translate-y-2 transition-transform duration-300 group"
              >
                {/* Full-bleed portrait image */}
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Floating name / role label */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm">
                  <h4 className="font-bold text-foreground text-base leading-tight">{trainer.name}</h4>
                  <p className="text-gray-500 text-sm mt-0.5">{trainer.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
