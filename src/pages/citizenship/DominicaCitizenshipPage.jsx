import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageBanner from '../../components/PageBanner/PageBanner'
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal'
import CitizenshipPrograms from '../../components/CitizenshipPrograms/CitizenshipPrograms'
import ExploreWorldCTA from '../../components/ExploreWorldCTA/ExploreWorldCTA'
import ResidencyPrograms from '../../components/ResidencyPrograms/ResidencyPrograms'

const BANNER_IMG = 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1920&q=80'

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
    title: 'Global Mobility',
    desc: 'Visa-free or visa-on-arrival access to numerous international destinations, supporting seamless international travel.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Security and Backup Plan',
    desc: 'A reliable second citizenship provides an additional layer of personal and family security.',
  },
]

export default function DominicaCitizenshipPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-white">
      <PageBanner
        title="Dominica Citizenship By Investment"
        subtitle="Your Gateway to a Better Future"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Citizenship By Investment', href: '/citizenship/dominica' },
          { label: 'Dominica', href: '/citizenship/dominica' },
        ]}
        image={BANNER_IMG}
        overlay={0.7}
      />

      {/* Hero Content */}
      <section className="py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <motion.h2
                  className="font-serif text-forest text-4xl lg:text-5xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Dominica Citizenship By Investment Program
                </motion.h2>
                <motion.div
                  className="w-16 h-0.5 bg-gold mb-8"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                />
                <motion.p
                  className="text-gray-600 text-lg leading-relaxed mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  The Dominica Citizenship by Investment Program is one of the most affordable and efficient programs in the world, offering a direct path to second citizenship through a minimum investment in government contribution or real estate.
                </motion.p>
                <motion.p
                  className="text-gray-600 text-lg leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Established in 1993, Dominica's program is the only CBI program in the Caribbean that is legally protected under the country's constitution, providing security and confidence to investors and their families.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-forest text-white px-8 py-4 rounded-md font-semibold hover:bg-forest-deeper transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Get Started
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-cream p-8 rounded-lg">
                <h3 className="font-serif text-forest text-2xl font-bold mb-6">
                  Key Benefits
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 text-gold">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-forest mb-1">{benefit.title}</h4>
                        <p className="text-gray-600 text-sm">{benefit.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Citizenship Programs Section */}
      <CitizenshipPrograms />

      {/* Explore World CTA */}
      <ExploreWorldCTA />
    </div>
  )
}
