'use client'

import { useState } from 'react'
import Image from 'next/image'

const galleryItems = [
  { id: 1, category: 'Makeup', image: '/glam-makeup.avif?w=600&h=600&fit=crop', title: 'Glam Makeup' },
  { id: 2, category: 'Hair', image: '/hair-styling.avif?w=600&h=600&fit=crop', title: 'Hair Styling' },
  { id: 3, category: 'Nails', image: '/nail-art.avif?w=600&h=600&fit=crop', title: 'Nail Art' },
  { id: 4, category: 'Makeup', image: '/bridal-makeup.avif?w=600&h=600&fit=crop', title: 'Bridal Makeup' },
  { id: 5, category: 'Hair', image: '/creative-styling.avif?w=600&h=600&fit=crop', title: 'Creative Styling' },
  { id: 6, category: 'Graduation', image: '/graduation-day.avif?w=600&h=600&fit=crop', title: 'Graduation Day' },
  { id: 7, category: 'Student Work', image: '/student-work.avif?w=600&h=600&fit=crop', title: 'Student Work' },
  { id: 8, category: 'Nails', image: '/gel-nail.avif?w=600&h=600&fit=crop', title: 'Gel Nails' },
]

const categories = ['All', 'Makeup', 'Hair', 'Nails', 'Graduation', 'Student Work']

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<(typeof galleryItems)[0] | null>(null)

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
            Gallery
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Explore our student work and academy highlights
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-accent text-white'
                  : 'bg-secondary text-foreground hover:bg-secondary/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative h-64 rounded-lg overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-end">
                <div className="p-4 text-white w-full">
                  <p className="text-sm font-medium opacity-75">{item.category}</p>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl max-h-screen"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="mt-4 text-center text-white">
              <h3 className="text-2xl font-serif font-bold">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
