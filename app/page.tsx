import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { WhyChooseUs } from '@/components/why-choose-us'
import { Courses } from '@/components/courses'
import { About } from '@/components/about'
import { Gallery } from '@/components/gallery'
import { Testimonials } from '@/components/testimonials'
import { FAQ } from '@/components/faq'
import { RegistrationForm } from '@/components/registration-form'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { BackToTop } from '@/components/back-to-top'


export default function Page() {
  return (
    <main className="w-full bg-background">
      <BackToTop />
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <About />
      <Courses />
      <Gallery />
      <Testimonials />
      <FAQ />
      <RegistrationForm />
      <Contact />
      <Footer />
    </main>
  )
}
