'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen bg-background flex items-center overflow-hidden">

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">

          {/* ── Left: text block ── */}
          <div className="flex flex-col justify-center space-y-8 animate-fade-in">

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-accent" />
              <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">
                Premium Beauty Education
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-[1.05] tracking-tight">
              Become a<br />
              <span className="text-accent italic">Beauty</span><br />
              Expert
            </h1>

            {/* Subheadline */}
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Master Makeup, Hair Styling, and Nail Art — then build a thriving career with Arkani Beauty Academy.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-base rounded-full shadow-md shadow-accent/25 hover:shadow-accent/40 hover:scale-[1.03] transition-all duration-300"
              >
                <Link href="#register" className="flex items-center gap-2">
                  Register Now <ArrowRight size={18} />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-foreground/20 text-foreground hover:bg-foreground/5 font-semibold px-8 py-6 text-base rounded-full transition-all duration-300"
              >
                <Link href="#courses">Explore Courses</Link>
              </Button>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 pt-4 border-t border-border">
              <div>
                <p className="text-2xl font-bold text-foreground">500+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">Graduates</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">10+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">Years</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">4.9 ★</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">Rating</p>
              </div>
            </div>
          </div>

          {/* ── Right: image — same height as the text column ── */}
          <div className="relative rounded-3xl overflow-hidden min-h-[420px] lg:min-h-0">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'url("/women2hero.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
              }}
            />
            {/* Warm tint — keeps it bright */}
            <div className="absolute inset-0 bg-accent/8 rounded-3xl" />
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 animate-bounce flex flex-col items-center gap-2">
        <span
          className="text-xs font-medium text-accent"
          style={{ textShadow: '0 0 8px rgba(125,78,36,0.5), 0 0 20px rgba(125,78,36,0.3)' }}
        >
          Scroll to explore
        </span>
        <svg
          className="w-5 h-5 text-accent"
          style={{ filter: 'drop-shadow(0 0 5px rgba(125,78,36,0.7))' }}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

    </section>
  )
}
