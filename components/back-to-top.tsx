'use client'

import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 bg-accent hover:bg-accent/90 text-white p-3 rounded-full shadow-lg transition-all duration-300 animate-fade-in"
          aria-label="Back to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  )
}
