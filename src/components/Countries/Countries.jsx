import React from 'react'
import { motion } from 'framer-motion'

const countries = [
  {
    name: 'Germany',
    desc: 'EU Blue Card, Job Seeker Visa, Skilled Worker Immigration',
    flag: '🇩🇪',
    img: '/countries/Germany.png',
  },
  {
    name: 'Hungary',
    desc: 'Golden Visa Program, Residency Bond, Guest Investor Program',
    flag: '🇭🇺',
    img: '/countries/Hungary.png',
  },
  {
    name: 'Ireland',
    desc: 'Critical Skills Employment Permit, Investor Programme, Start-Up Visa',
    flag: '🇮🇪',
    img: '/countries/Ireland.png',
  },
  {
    name: 'Luxembourg',
    desc: 'Work Authorization, Investor Residence, EU Blue Card',
    flag: '🇱🇺',
    img: '/countries/Luxembourg.png',
  },
  {
    name: 'Netherlands',
    desc: 'Highly Skilled Migrant Visa, Dutch American Friendship Treaty, Start-Up Visa',
    flag: '🇳🇱',
    img: '/countries/Netherland.png',
  },
  {
    name: 'Slovakia',
    desc: 'EU Blue Card, Employment Residence, Business Immigration',
    flag: '🇸🇰',
    img: '/countries/Slovakia.png',
  },
  {
    name: 'Switzerland',
    desc: 'L Permit, B Permit, C Permit, Investor Programs',
    flag: '🇨🇭',
    img: '/countries/Switzerland.png',
  },
]

export default function Countries() {
  return (
    <section id="countries" className="bg-cream py-24 lg:py-32">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            className="section-label text-sm" 
            style={{ justifyContent: 'center' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Countries We Offer
          </motion.span>
          <motion.h2 
            className="section-heading text-forest-deeper mb-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Countries We <span className="text-gold italic">Support</span> For Immigration
          </motion.h2>
          <motion.p 
            className="text-forest/55 text-[16px] tracking-wider"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Select A Destination Of Your Choice
          </motion.p>
        </div>

        {/* Horizontal full-width strips */}
        <div className="flex flex-col gap-0 border border-black/8">
          {countries.map((c, i) => (
            <motion.div
              key={c.name}
              className={`group flex flex-col lg:flex-row ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''} overflow-hidden ${i < countries.length - 1 ? 'border-b border-black/8' : ''} cursor-pointer`}
              style={{ minHeight: 200 }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            >
              {/* Image strip */}
              <motion.div 
                className="lg:w-2/5 relative overflow-hidden" 
                style={{ minHeight: 200 }}
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: i * 0.15 + 0.1 }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${c.img})` }}
                />
                <div className="absolute inset-0 bg-forest-deeper/40 group-hover:bg-forest-deeper/20 transition-all duration-500" />
                {/* Flag */}
               
              </motion.div>

              {/* Content strip */}
              <motion.div 
                className={`lg:w-3/5 flex flex-col justify-center py-10 px-10 lg:px-14 ${i % 2 !== 0 ? 'lg:text-right' : ''}`}
                initial={{ opacity: 0, x: i % 2 !== 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.15 + 0.2 }}
              >
                <motion.div 
                  className={`flex items-center gap-4 mb-3 ${i % 2 !== 0 ? 'lg:justify-end' : ''}`}
                  initial={{ opacity: 0, width: 0 }}
                  whileInView={{ opacity: 1, width: 'auto' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 + 0.3 }}
                >
                  <div className="gold-line" />
                  <span className="text-[10px] tracking-[4px] text-gold uppercase font-semibold">Immigration Pathway</span>
                </motion.div>
                <motion.h3 
                  className="font-serif text-forest-deeper text-4xl lg:text-5xl font-semibold mb-3 leading-tight group-hover:text-forest transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 + 0.4 }}
                >
                  {c.name}
                </motion.h3>
                <motion.p 
                  className={`text-forest/60 text-sm leading-relaxed mb-6 max-w-[400px] ${i % 2 !== 0 ? 'lg:ml-auto' : ''}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 + 0.5 }}
                >
                  {c.desc}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 + 0.6 }}
                >
                  <a href="#contact" className="btn-gold-outline inline-flex">
                    <span>Explore Pathways</span>
                    <span>→</span>
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
