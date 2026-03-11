import React from 'react'
import { motion } from 'framer-motion'
import { useParams, Navigate, Link } from 'react-router-dom'
import PageBanner from '../../components/PageBanner/PageBanner'
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal'
import ExploreWorldCTA from '../../components/ExploreWorldCTA/ExploreWorldCTA'
import ResidencyPrograms from '../../components/ResidencyPrograms/ResidencyPrograms'
import { getResidencyCountryBySlug } from '../../data/residencyData'

const BANNER_IMG = 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80'

export default function ResidencyPage() {
  const { country } = useParams()
  const countryData = getResidencyCountryBySlug(country)

  // If country not found, redirect to home
  if (!countryData) {
    return <Navigate to="/" replace />
  }

  const {
    name,
    title,
    subtitle,
    flagImage,
    description,
    additionalInfo,
    benefits
  } = countryData

  return (
    <div className="bg-white">
      <PageBanner
        title={title}
        subtitle={subtitle}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Immigration Types', href: '/#services' },
          { label: `${name} Residency`, href: `/residency/${country}` },
        ]}
        image={BANNER_IMG}
        overlay={0.7}
      />

      {/* Program Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_500px] gap-12 items-start">
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
                  {title}
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
                  {description}
                </motion.p>

                <motion.p
                  className="text-gray-600 text-lg leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {additionalInfo}
                </motion.p>

                {/* Benefits list with heading */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <h3 className="font-serif text-forest text-2xl font-bold mb-6">
                    Here Are The Key Advantages:
                  </h3>

                  <div className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                      >
                        <div className="w-6 h-6 bg-forest rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-gray-700 text-lg">{benefit.title}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>

            {/* Right Sidebar */}
            <ScrollReveal delay={0.3}>
              <div className="space-y-6">
                {/* Flag Image */}
                <motion.div
                  className="relative overflow-hidden rounded-lg shadow-xl"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <img 
                    src={flagImage} 
                    alt={`${name} flag`}
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80'
                    }}
                  />
                </motion.div>

                {/* Explore World Banner */}
                <motion.div
                  className="relative overflow-hidden rounded-lg shadow-xl h-[400px]"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
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

      {/* Residency Programs Section */}
      <ResidencyPrograms />

      {/* CTA Section */}
      <ExploreWorldCTA />
    </div>
  )
}
