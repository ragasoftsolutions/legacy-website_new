import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ScrollReveal from '../ScrollReveal/ScrollReveal'

export default function ExploreWorldCTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1920&q=80)',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest/90 via-forest/85 to-forest-deeper/90" />

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 relative z-10">
        <ScrollReveal>
          <div className="text-center">
            <motion.p
              className="text-gold text-sm tracking-[3px] uppercase mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Dream Tour
            </motion.p>
            
            <motion.h2
              className="font-serif text-white text-4xl lg:text-5xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Explore The World
            </motion.h2>

            <motion.div
              className="w-16 h-0.5 bg-gold mx-auto mb-10"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            />

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                to="/contact"
                className="px-8 py-4 bg-gold text-forest font-semibold rounded-md hover:bg-gold/90 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Contact Us
              </Link>
              
              <button className="px-8 py-4 bg-transparent border-2 border-gold text-gold font-semibold rounded-md hover:bg-gold hover:text-forest transition-all duration-300 hover:scale-105">
                Download PDF File
              </button>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
