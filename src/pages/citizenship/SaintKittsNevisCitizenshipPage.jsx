import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageBanner from '../../components/PageBanner/PageBanner'
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal'
import CitizenshipPrograms from '../../components/CitizenshipPrograms/CitizenshipPrograms'
import ExploreWorldCTA from '../../components/ExploreWorldCTA/ExploreWorldCTA'
import ResidencyPrograms from '../../components/ResidencyPrograms/ResidencyPrograms'

const BANNER_IMG = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80'

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
    title: 'Extensive Global Mobility',
    desc: 'Enjoy visa-free or visa-on-arrival access to more than 150 destinations worldwide, including the Schengen Area, the United Kingdom, and numerous Commonwealth countries.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: 'Favorable Tax Environment',
    desc: 'Saint Kitts and Nevis offers no capital gains tax, no inheritance tax, and no wealth tax, creating a favorable environment for international investors.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Dual Citizenship Permitted',
    desc: 'Applicants are not required to renounce their existing nationality (subject to the laws of their home country), allowing them to maintain dual citizenship.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: 'Family Inclusion',
    desc: 'Citizenship can extend to eligible family members, including spouses, dependent children, and other qualifying dependents under a single application.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: 'Political & Economic Stability',
    desc: 'The country offers a stable political climate, a well-regulated financial system, and an appealing Caribbean lifestyle.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Efficient & Flexible Investment Options',
    desc: 'The program provides multiple investment pathways designed to accommodate different financial profiles with streamlined processing.',
  },
]

export default function SaintKittsNevisCitizenshipPage() {
  return (
    <div className="bg-white">
      <PageBanner
        title="Saint Kitts & Nevis Citizenship By Investment"
        subtitle="One of the longest-running and most reputable citizenship programs in the Caribbean"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Immigration Types', href: '/immigration-types' },
          { label: 'Saint Kitts & Nevis', href: '/citizenship/saint-kitts-nevis' },
        ]}
        image={BANNER_IMG}
        overlay={0.7}
      />

      {/* Program Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
            {/* Left Content */}
            <ScrollReveal>
              <div>
                <motion.h2
                  className="font-serif text-forest text-4xl lg:text-5xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Saint Kitts And Nevis Citizenship By Investment Program (CIP)
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
                  The Saint Kitts and Nevis Citizenship by Investment Program (CIP) is one of the
                  longest-running and most reputable citizenship programs in the Caribbean.
                </motion.p>

                <motion.p
                  className="text-gray-600 text-lg leading-relaxed mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Through a qualifying economic contribution, eligible individuals and their families
                  can obtain full citizenship in a stable and internationally respected jurisdiction.
                </motion.p>

                <motion.p
                  className="text-gray-600 text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Recognized for its strong due diligence standards and structured application process,
                  the program offers investors an efficient pathway to a second passport with long-term
                  global benefits.
                </motion.p>
              </div>
            </ScrollReveal>

            {/* Right Sidebar */}
            <ScrollReveal delay={0.3}>
              <div className="space-y-6">
                {/* Explore World Banner */}
                <motion.div
                  className="relative overflow-hidden rounded-lg shadow-xl h-[400px]"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80)',
                    }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-forest/70 via-forest/60 to-forest/80" />

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-center items-center text-center p-8">
                    <p className="text-gold text-xs tracking-[3px] uppercase mb-3 font-semibold">
                      Dream Tour
                    </p>
                    <h3 className="font-serif text-white text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                      Explore<br />The World
                    </h3>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-white text-forest px-8 py-3 rounded-md font-semibold hover:bg-gold hover:text-white transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      Contact Us
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>

                {/* Download PDF Button */}
                <motion.button
                  className="w-full bg-forest text-white py-4 px-6 rounded-lg flex items-center justify-center gap-3 font-semibold hover:bg-forest-deeper transition-all duration-300 hover:scale-105 shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                  Download Pdf File
                </motion.button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <motion.h2
                className="font-serif text-forest text-4xl lg:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Why Choose Saint Kitts And Nevis Citizenship?
              </motion.h2>
              
              <motion.div
                className="w-16 h-0.5 bg-gold mx-auto"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              />
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={index * 0.05}>
                <motion.div
                  className="flex gap-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-forest text-lg font-bold mb-2 group-hover:text-gold transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{benefit.desc}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Citizenship Programs Section */}
      <ResidencyPrograms />

      {/* CTA Section */}
      <ExploreWorldCTA />
    </div>
  )
}
