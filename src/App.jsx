import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import WhyUs from './components/WhyUs/WhyUs'
import Countries from './components/Countries/Countries'
import Testimonials from './components/Testimonials/Testimonials'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'
import PageLoader from './components/PageLoader/PageLoader'
import ScrollReveal from './components/ScrollReveal/ScrollReveal'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {/* Page Loader */}
      <PageLoader onComplete={() => setLoading(false)} />

      {/* Main content — fades in after loader exits */}
      <AnimatePresence>
        {!loading && (
          <motion.div
            key="content"
            className="min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Navbar />
            <main>
              {/* Hero has its own slider animation, small nudge only */}
              <ScrollReveal variant="fade" duration={1.0} amount={0.05}>
                <Hero />
              </ScrollReveal>

              <ScrollReveal variant="fadeUp" delay={0.05}>
                <About />
              </ScrollReveal>

              <ScrollReveal variant="fadeUp" delay={0.05}>
                <Services />
              </ScrollReveal>

              <ScrollReveal variant="fadeUp" delay={0.05}>
                <WhyUs />
              </ScrollReveal>

              <ScrollReveal variant="fadeUp" delay={0.05}>
                <Countries />
              </ScrollReveal>

              <ScrollReveal variant="fadeUp" delay={0.05}>
                <Testimonials />
              </ScrollReveal>

              <ScrollReveal variant="fadeUp"  delay={0.05}>
                <CTA />
              </ScrollReveal>
            </main>

            <ScrollReveal variant="fadeUp" delay={0.05}>
              <Footer />
            </ScrollReveal>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
