'use client'

import Link from 'next/link'
import { Share2, Heart, MessageCircle, Phone, Mail, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="font-serif text-xl font-bold">Arkani Beauty</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Professional beauty training for the modern beauty professional.
            </p>
            <div className="flex gap-4 mt-6">
              <Link href="#" className="text-white/60 hover:text-accent transition-colors">
                <Heart size={20} />
              </Link>
              <Link href="#" className="text-white/60 hover:text-accent transition-colors">
                <Share2 size={20} />
              </Link>
              <Link href="#" className="text-white/60 hover:text-accent transition-colors">
                <MessageCircle size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/70 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#courses" className="text-white/70 hover:text-accent transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-white/70 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-white/70 hover:text-accent transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <a href="tel:+1234567890" className="text-white/70 hover:text-accent transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <a href="mailto:info@arkani.com" className="text-white/70 hover:text-accent transition-colors">
                  info@arkani.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent flex-shrink-0 mt-1" />
                <span className="text-white/70">123 Beauty Lane, Style City, ST 12345</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Business Hours</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <span className="font-medium">Monday - Friday:</span>
                <p>9:00 AM - 6:00 PM</p>
              </li>
              <li>
                <span className="font-medium">Saturday:</span>
                <p>10:00 AM - 4:00 PM</p>
              </li>
              <li>
                <span className="font-medium">Sunday:</span>
                <p>Closed</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-white/60 text-sm">
            &copy; {currentYear} Arkani Beauty Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
