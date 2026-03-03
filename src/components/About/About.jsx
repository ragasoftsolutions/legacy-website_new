import React from 'react'
import { motion } from 'framer-motion'

const goals = [
  'Make the immigration process easy',
  'Reduce stress and confusion',
  'Ensure full transparency at every stage',
]

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '500+', label: 'Successful Cases' },
  { value: '30+', label: 'Countries Covered' },
]

export default function About() {
  return (
    <section id="about" className="bg-cream py-24 lg:py-32">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* LEFT — Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Main image block */}
            <div className="relative">
              <div
                className="w-full aspect-[4/5] bg-cover bg-center"
                style={{
                  backgroundImage: `url('/aboutUs.png')`,
                }}
              />
              {/* Gold frame offset */}
              <div
                className="absolute border border-gold/40 pointer-events-none"
                style={{ inset: '-16px 16px 16px -16px' }}
              />
            </div>

            {/* Stats bar */}
            <motion.div 
              className="absolute -bottom-8 left-8 right-8 bg-forest-deeper px-8 py-6 grid grid-cols-3 divide-x divide-white/10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {stats.map((s, i) => (
                <motion.div 
                  key={s.label} 
                  className="text-center px-4 first:pl-0 last:pr-0"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <div className="font-serif text-3xl text-gold font-semibold leading-none mb-1">{s.value}</div>
                  <div className="text-[10px] tracking-[2px] text-white/60 uppercase">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — Content */}
          <div className="mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="section-label">About Company</span>
            </motion.div>

            <motion.h2 
              className="section-heading text-forest-deeper mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Welcome To <span className="text-gold italic">Legacy Migration</span> Advisory
            </motion.h2>

            <motion.p 
              className="text-forest/70 text-[16px] leading-[1.9] mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              At Legacy Migration Advisory, we help turn your dream of moving abroad into reality.
              We are a professional migration consultancy firm offering complete, end-to-end immigration
              solutions for individuals and families who wish to relocate to a new country.
            </motion.p>

            <motion.div 
              className="my-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <div className="gold-line mb-6" />
              <h3 className="font-serif text-forest-deeper text-2xl font-semibold mb-5 italic">Our Goal Is Simple:</h3>
              <div className="flex flex-col gap-3">
                {goals.map((g, i) => (
                  <motion.div 
                    key={g} 
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.45 + i * 0.1 }}
                  >
                    <span className="mt-1 w-5 h-5 rounded-full border border-gold/50 flex items-center justify-center flex-shrink-0">
                      <span className="text-gold text-[10px]">✓</span>
                    </span>
                    <span className="text-forest/75 text-[16px] leading-relaxed">{g}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.p 
              className="text-forest/70 text-[16px] leading-[1.9] mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              With a team of experienced and knowledgeable immigration consultants in Dubai and Abu Dhabi,
              we guide you step-by-step throughout your entire migration journey.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a href="#contact" className="btn-gold-outline">
                <span>About Us</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
