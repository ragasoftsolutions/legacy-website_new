import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import WhyUs from './components/WhyUs/WhyUs'
import Countries from './components/Countries/Countries'
import Testimonials from './components/Testimonials/Testimonials'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Countries />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
