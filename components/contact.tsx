'use client'

import { Phone, Mail, MapPin, Clock, Send, Heart, Share2, MessageCircle, Smartphone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 3000)
  }

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

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
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
                <p className="text-gray-600 text-sm mt-2">Email us anytime, we&apos;ll respond within 24 hours</p>
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

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Business Hours & Contact Methods */}
          <div className="space-y-8">
            {/* Business Hours */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-6 w-6 text-accent" />
                <h3 className="text-2xl font-bold text-foreground">Business Hours</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-semibold text-foreground">Monday - Friday:</span>
                  <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-foreground">Saturday:</span>
                  <span className="text-gray-600">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-foreground">Sunday:</span>
                  <span className="text-gray-600">Closed</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Connect With Us</h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 p-4 bg-secondary hover:bg-accent/10 rounded-lg transition-all group"
                >
                  <Heart className="text-accent group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-foreground">Instagram</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 p-4 bg-secondary hover:bg-accent/10 rounded-lg transition-all group"
                >
                  <Share2 className="text-accent group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-foreground">Facebook</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 p-4 bg-secondary hover:bg-accent/10 rounded-lg transition-all group"
                >
                  <MessageCircle className="text-accent group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-foreground">WhatsApp</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 p-4 bg-secondary hover:bg-accent/10 rounded-lg transition-all group"
                >
                  <Smartphone className="text-accent group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-foreground">Telegram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
            
            {submitted && (
              <div className="mb-6 p-4 bg-accent/10 border border-accent text-accent rounded-lg">
                <p className="font-semibold">Thank you! We&apos;ll be in touch soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Your message..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all"
              >
                <Send size={18} />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
