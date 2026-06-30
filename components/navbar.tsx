'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#courses', label: 'Courses' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="hidden sm:inline font-serif text-xl font-bold text-foreground">
              Arkani Beauty
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Register Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-white font-medium px-6 py-2 rounded-full"
            >
              <Link href="#register">Register Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border animate-in fade-in duration-300">
            <div className="flex flex-col space-y-2 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-foreground hover:text-accent hover:bg-secondary/50 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="w-full bg-accent hover:bg-accent/90 text-white font-medium mt-4 rounded-full"
              >
                <Link href="#register">Register Now</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
