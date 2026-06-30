'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(25, 25, 25, 0.3) 0%, rgba(201, 162, 39, 0.2) 100%), url("https://images.unsplash.com/photo-1596705686527-b4f11ab87f10?w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/10 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="space-y-6 animate-fade-in">
          {/* Badge */}
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm">
              Welcome to Excellence
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight">
            Become a Professional Beauty Expert
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-light">
            Master Makeup, Hair Styling, Nail Art, and Build a Successful Beauty Career with Arkani Beauty Academy
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="#register" className="flex items-center gap-2">
                Register Now
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-2 border-foreground hover:bg-foreground/5 text-foreground font-semibold px-8 py-6 text-lg rounded-full"
            >
              <Link href="#courses">Explore Courses</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium text-foreground/60">Scroll to explore</span>
          <svg
            className="w-6 h-6 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
