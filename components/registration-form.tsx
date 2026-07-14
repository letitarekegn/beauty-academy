'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

export function RegistrationForm() {
  const [toast, setToast] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const formLoadTime = useRef(Date.now())
  const [honeypot, setHoneypot] = useState('')
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    gender: '',
    age: '',
    address: '',
    course: 'makeup',
    schedule: 'morning',
    experience: 'none',
    emergency: '',
    emergencyPhone: '',
    source: '',
    notes: '',
    agreeTerms: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!formData.agreeTerms) {
      setError('Please agree to the terms and conditions.')
      return
    }

    setLoading(true)

    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        honeypot,
        formLoadTime: formLoadTime.current,
        ...formData,
      }),
    })

    const json = await res.json()
    setLoading(false)

    if (!res.ok) {
      setError(json.error ?? 'Registration failed. Please try again.')
      return
    }

    setToast(true)
    setFormData({
      fullName: '', phone: '', email: '', gender: '', age: '',
      address: '', course: 'makeup', schedule: 'morning',
      experience: 'none', emergency: '', emergencyPhone: '',
      source: '', notes: '', agreeTerms: false,
    })
    setTimeout(() => setToast(false), 4000)
  }

  return (
    <section id="register" className="py-20 bg-secondary/30 relative">

      {/* Toast notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-white border border-accent/30 shadow-lg rounded-2xl px-5 py-4 animate-fade-in">
          <CheckCircle size={22} className="text-accent shrink-0" />
          <p className="text-sm font-semibold text-foreground">Registered successfully!</p>
        </div>
      )}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
            Register Now
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
          <p className="text-gray-600 mt-6 max-w-xl mx-auto text-lg">
            Join Arkani Beauty Academy and start your professional beauty journey today
          </p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm border border-border">
          {/* Honeypot — hidden from real users, bots fill it automatically */}
          <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }} aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Age *
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="Enter your age"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              >
                <option value="">Select gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Course Selection */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Course Selection *
              </label>
              <select
                name="course"
                value={formData.course}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              >
                <optgroup label="Single">
                  <option value="makeup">Makeup</option>
                  <option value="hair">Hair Styling</option>
                  <option value="nails">Nail Art</option>
                </optgroup>
                <optgroup label="Combination">
                  <option value="hair-makeup">Hair &amp; Makeup</option>
                  <option value="hair-nails">Hair &amp; Nails</option>
                  <option value="makeup-nails">Makeup &amp; Nails</option>
                </optgroup>
                <optgroup label="Full">
                  <option value="full">Full Package (All Three)</option>
                </optgroup>
              </select>
            </div>

            {/* Preferred Schedule */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Preferred Schedule *
              </label>
              <select
                name="schedule"
                value={formData.schedule}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              >
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="weekend">Weekend</option>
              </select>
            </div>

            {/* Previous Experience */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Previous Experience *
              </label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              >
                <option value="none">None</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            {/* Emergency Contact */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Emergency Contact Name
              </label>
              <input
                type="text"
                name="emergency"
                value={formData.emergency}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="Emergency contact name"
              />
            </div>

            {/* Emergency Phone */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Emergency Phone
              </label>
              <input
                type="tel"
                name="emergencyPhone"
                value={formData.emergencyPhone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="Emergency contact phone"
              />
            </div>
          </div>

          {/* Address */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-foreground mb-2">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="Enter your address"
            />
          </div>

          {/* How did you hear about us */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-foreground mb-2">
              How did you hear about us?
            </label>
            <input
              type="text"
              name="source"
              value={formData.source}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="Social media, referral, search, etc."
            />
          </div>

          {/* Special Notes */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-foreground mb-2">
              Special Notes
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
              placeholder="Any special requests or questions?"
            />
          </div>

          {/* Terms Checkbox */}
          <div className="mb-8 flex items-center gap-3">
            <input
              type="checkbox"
              name="agreeTerms"
              id="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleInputChange}
              className="w-5 h-5 rounded accent border-border"
            />
            <label htmlFor="agreeTerms" className="text-sm text-gray-600">
              I agree to the academy terms and conditions *
            </label>
          </div>

          {/* Error message */}
          {error && (
            <p className="mb-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
              {error}
            </p>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-4 rounded-full text-lg transition-all disabled:opacity-60"
          >
            {loading ? 'Registering...' : 'Register Now'}
          </Button>
        </form>
      </div>
    </section>
  )
}
