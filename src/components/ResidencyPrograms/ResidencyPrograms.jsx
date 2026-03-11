import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ScrollReveal from '../ScrollReveal/ScrollReveal'

const countries = [
  {
    name: 'Spain',
    slug: 'spain',
    icon: 'https://flagcdn.com/w160/es.png',
    description: 'Golden Visa with €500K investment and EU access',
  },
  {
    name: 'Greece',
    slug: 'greece',
    icon: 'https://flagcdn.com/w160/gr.png',
    description: 'One of Europe\'s most affordable Golden Visa programs',
  },
  {
    name: 'Portugal',
    slug: 'portugal',
    icon: 'https://flagcdn.com/w160/pt.png',
    description: 'Flexible investment options with path to EU citizenship',
  },
  {
    name: 'USA',
    slug: 'usa',
    icon: 'https://flagcdn.com/w160/us.png',
    description: 'EB-5 program for permanent residency and Green Card',
  },
  {
    name: 'Australia',
    slug: 'australia',
    icon: 'https://flagcdn.com/w160/au.png',
    description: 'Business Innovation and Investment Program',
  },
  {
    name: 'Poland',
    slug: 'poland',
    icon: 'https://flagcdn.com/w160/pl.png',
    description: 'Cost-effective EU residency with business opportunities',
  },
  {
    name: 'United Kingdom',
    slug: 'uk',
    icon: 'https://flagcdn.com/w160/gb.png',
    description: 'Innovator Founder Visa for entrepreneurs',
  },
]

export default function ResidencyPrograms() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-forest rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.h2
              className="font-serif text-forest text-4xl lg:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Which Countries Offer Residency By Investment Programs?
            </motion.h2>
            <motion.div
              className="w-16 h-0.5 bg-gold mx-auto mb-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            />
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Explore our curated selection of residency programs offering access to top destinations worldwide
            </motion.p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {countries.map((country, index) => (
            <ScrollReveal key={country.name} delay={index * 0.1}>
              <Link to={`/residency/${country.slug}`}>
                <motion.div
                  className="relative flex flex-col items-center group cursor-pointer"
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon Container with enhanced styling */}
                  <motion.div
                    className="relative w-28 h-28 mb-4 rounded-full bg-gradient-to-br from-white to-gray-50 shadow-lg flex items-center justify-center overflow-hidden border-2 border-transparent group-hover:border-gold transition-all duration-300"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Animated background circle */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-gold/20 to-forest/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                      animate={hoveredIndex === index ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                      transition={{ duration: 0.6, repeat: hoveredIndex === index ? Infinity : 0 }}
                    />
                    
                    <motion.img
                      src={country.icon}
                      alt={country.name}
                      className="relative z-10 w-16 h-16 object-contain"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  {/* Country Name */}
                  <h3 className="font-serif text-forest text-lg font-bold mb-2 text-center group-hover:text-gold transition-colors duration-300">
                    {country.name}
                  </h3>

                  {/* Description - appears on hover */}
                  <motion.p
                    className="text-gray-600 text-sm text-center px-2"
                    initial={{ opacity: 0, height: 0 }}
                    animate={hoveredIndex === index ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {country.description}
                  </motion.p>

                  {/* Animated underline */}
                  <motion.div
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-0.5 bg-gold"
                    initial={{ width: 0 }}
                    animate={hoveredIndex === index ? { width: '60%' } : { width: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
