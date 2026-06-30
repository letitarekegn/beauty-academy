'use client'

const trainers = [
  {
    name: 'Maria Garcia',
    role: 'Makeup Specialist',
    bio: '15+ years in professional makeup with international recognition',
    image: '💄',
  },
  {
    name: 'Sophie Laurent',
    role: 'Hair Expert',
    bio: 'Certified colorist and styling expert with celebrity clientele',
    image: '💇‍♀️',
  },
  {
    name: 'Jessica Chen',
    role: 'Nail Technician',
    bio: 'Master nail artist and business mentor for beauty professionals',
    image: '💅',
  },
  {
    name: 'Amanda Stone',
    role: 'Business Coach',
    bio: 'Helps graduates build successful independent beauty businesses',
    image: '👩‍💼',
  },
]

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
            About Arkani Beauty Academy
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        {/* Mission, Vision, Story */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Mission */}
          <div className="bg-secondary/30 p-8 rounded-xl border border-border">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To provide world-class beauty education that empowers professionals to build successful careers and make a positive impact in the beauty industry.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-secondary/30 p-8 rounded-xl border border-border">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be the most trusted beauty academy that transforms passionate individuals into highly skilled, confident, and ethical beauty professionals.
            </p>
          </div>

          {/* Story */}
          <div className="bg-secondary/30 p-8 rounded-xl border border-border">
            <div className="text-4xl mb-4">📖</div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Story</h3>
            <p className="text-gray-700 leading-relaxed">
              Founded in 2015 by beauty industry veterans, Arkani Academy has trained over 500 students and continues to set the standard for excellence in beauty education.
            </p>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-serif font-bold text-foreground mb-8 text-center">
            Why Choose Arkani?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent text-white font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Expert Instructors</h4>
                <p className="text-gray-600">Learn from professionals with decades of industry experience</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent text-white font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Modern Facilities</h4>
                <p className="text-gray-600">State-of-the-art equipment and professional-grade tools</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent text-white font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Career Support</h4>
                <p className="text-gray-600">Job placement assistance and business mentorship included</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent text-white font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Flexible Schedules</h4>
                <p className="text-gray-600">Morning, afternoon, and weekend classes available</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent text-white font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Affordable Pricing</h4>
                <p className="text-gray-600">Flexible payment plans to fit your budget</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent text-white font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Certification</h4>
                <p className="text-gray-600">Industry-recognized certificates upon graduation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Trainers */}
        <div>
          <h3 className="text-3xl font-serif font-bold text-foreground mb-12 text-center">
            Meet Our Expert Trainers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((trainer, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-secondary/30 border border-border hover:border-accent transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-6xl mb-4">{trainer.image}</div>
                <h4 className="text-xl font-bold text-foreground mb-2">{trainer.name}</h4>
                <p className="text-accent font-semibold mb-3">{trainer.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{trainer.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
