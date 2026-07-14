'use client'

import { Phone, Mail, MapPin, Clock, Heart, Share2, MessageCircle, Smartphone } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Have questions? We&apos;d love to hear from you. Reach out today!
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-border hover:border-accent transition-all">
            <div className="flex items-start gap-4">
              <Phone className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Phone</h3>
                <a href="tel:+1234567890" className="text-accent font-semibold hover:underline">
                  +1 (234) 567-890
                </a>
                <p className="text-gray-600 text-sm mt-2">Call us during business hours</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-border hover:border-accent transition-all">
            <div className="flex items-start gap-4">
              <Mail className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
                <a href="mailto:info@arkani.com" className="text-accent font-semibold hover:underline">
                  info@arkani.com
                </a>
                <p className="text-gray-600 text-sm mt-2">We&apos;ll respond within 24 hours</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-border hover:border-accent transition-all">
            <div className="flex items-start gap-4">
              <MapPin className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Location</h3>
                <p className="text-gray-700 font-semibold">123 Beauty Lane</p>
                <p className="text-gray-600 text-sm">Style City, ST 12345</p>
              </div>
            </div>
          </div>
        </div>

        {/* Business Hours & Social Media */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-border">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="h-6 w-6 text-accent" />
              <h3 className="text-2xl font-bold text-foreground">Business Hours</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-semibold text-foreground">Monday – Friday</span>
                <span className="text-gray-600">9:00 AM – 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-foreground">Saturday</span>
                <span className="text-gray-600">10:00 AM – 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-foreground">Sunday</span>
                <span className="text-gray-600">Closed</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Connect With Us</h3>
            <div className="grid grid-cols-2 gap-4">
              <a href="#" className="flex items-center justify-center gap-2 p-4 bg-secondary hover:bg-accent/10 rounded-lg transition-all group">
                <Heart className="text-accent group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-foreground">Instagram</span>
              </a>
              <a href="#" className="flex items-center justify-center gap-2 p-4 bg-secondary hover:bg-accent/10 rounded-lg transition-all group">
                <Share2 className="text-accent group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-foreground">Facebook</span>
              </a>
              <a href="#" className="flex items-center justify-center gap-2 p-4 bg-secondary hover:bg-accent/10 rounded-lg transition-all group">
                <MessageCircle className="text-accent group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-foreground">WhatsApp</span>
              </a>
              <a href="#" className="flex items-center justify-center gap-2 p-4 bg-secondary hover:bg-accent/10 rounded-lg transition-all group">
                <Smartphone className="text-accent group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-foreground">Telegram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
