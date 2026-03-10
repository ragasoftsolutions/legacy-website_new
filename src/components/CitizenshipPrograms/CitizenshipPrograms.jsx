import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '../ScrollReveal/ScrollReveal'

const countries = [
  {
    name: 'Antigua & Barbuda',
    icon: 'https://legacymigadv.com/assets/img/cont/PC-antigua-icon-1.png',
    description: 'Fast-track citizenship with investment options starting from $100,000',
  },
  {
    name: 'Dominica',
    icon: 'https://legacymigadv.com/assets/img/cont/PC-dominica-icon-1.png',
    description: 'Most affordable citizenship program with strong passport benefits',
  },
  {
    name: 'Grenada',
    icon: 'https://legacymigadv.com/assets/img/cont/PC-grenada-icon-3.png',
    description: 'Only Caribbean CBI with visa-free access to China',
  },
  {
    name: 'Saint Lucia',
    icon: 'https://legacymigadv.com/assets/img/cont/PC_Saint_Lucia_icon.png',
    description: 'Flexible investment options and excellent tax advantages',
  },
  {
    name: 'Malta',
    icon: 'https://legacymigadv.com/assets/img/cont/PC-malta-icon-1.png',
    description: 'EU citizenship with global mobility and business opportunities',
  },
]

export default function CitizenshipPrograms() {
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
              Which Countries Offer Citizenship By Investment Programs?
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
              Explore our curated selection of citizenship programs offering global mobility and financial freedom
            </motion.p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {countries.map((country, index) => (
            <ScrollReveal key={country.name} delay={index * 0.1}>
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
                    className="w-16 h-16 object-contain relative z-10"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Country Name */}
                <h3 className="text-forest text-sm font-semibold text-center mb-2 group-hover:text-gold transition-colors duration-300 px-2">
                  {country.name}
                </h3>

                {/* Interactive tooltip/description */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-2 bg-forest text-white text-xs p-3 rounded-lg shadow-xl max-w-[200px] text-center z-20"
                    >
                      {country.description}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-forest" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Decorative ring on hover */}
                {/* <motion.div
                  className="absolute inset-0 rounded-full border-2 border-gold opacity-0 group-hover:opacity-100"
                  initial={false}
                  animate={hoveredIndex === index ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                  transition={{ duration: 1, repeat: hoveredIndex === index ? Infinity : 0 }}
                  style={{ top: '0', bottom: 'auto', height: '7rem', margin: 'auto' }}
                /> */}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
