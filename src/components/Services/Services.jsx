import React from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    num: '01',
    title: 'Skilled Immigration',
    desc: 'The journey to permanent residency in Canada or Australia through skilled migration often comes with challenges, paperwork, and strict eligibility requirements that can feel overwhelming. We simplify every step, from skills assessment to final visa approval, ensuring nothing is left to chance.',
    img: '/service/1.png',
    tag: 'Canada · Australia · New Zealand',
  },
  {
    num: '02',
    title: 'Residency By Investment',
    desc: "Through Residency by Investment, you can unlock a world of possibilities — gaining the right to live, work, and expand your future internationally. We guide you through every investment pathway, helping you select the right program and jurisdiction for your goals.",
    img: '/service/2.png',
    tag: 'Portugal · Greece · Spain · UAE',
  },
  {
    num: '03',
    title: 'Work Permit Immigration',
    desc: 'No matter where you are in your journey — as a student or a working professional — we empower you to create a stable, successful future in your dream destination. Our specialists handle employer sponsorships, permit renewals, and compliance documentation end-to-end.',
    img: '/service/3.png',
    tag: 'UK · Ireland · Switzerland · Czechia',
  },
  {
    num: '04',
    title: 'Tourist Visa',
    desc: "Ready to explore Europe or discover new destinations around the world? Our visa experts are here to make your travel process easy and stress-free. From Schengen applications to long-stay tourist permits, we prepare complete, compelling documentation for every journey.",
    img: '/service/4.png',
    tag: 'Schengen · Europe · Worldwide',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.span 
            className="section-label text-sm" 
            style={{ justifyContent: 'center' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Service We Provide
          </motion.span>
          <motion.h2 
            className="section-heading text-forest-deeper mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Explore Our Visa, Citizenship &{' '}
            <span className="text-gold italic">Immigration Services</span>
          </motion.h2>
        </div>

        {/* Alternating Service Rows */}
        <div className="flex flex-col">
          {services.map((svc, i) => (
            <motion.div
              key={svc.num}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0 ${i < services.length - 1 ? 'mb-0 border-b border-black/6' : ''}`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              {/* Image side */}
              <motion.div 
                className="lg:w-5/12 xl:w-[42%] relative overflow-hidden flex-shrink-0"
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: i * 0.15 + 0.1 }}
              >
                <div
                  className="w-full h-full min-h-[280px] lg:min-h-[360px] bg-cover bg-center transition-transform duration-700 hover:scale-105"
                  style={{ backgroundImage: `url(${svc.img})` }}
                />
                {/* Number overlay */}
                <motion.div 
                  className="absolute top-6 left-6 font-serif text-white/20 font-bold"
                  style={{ fontSize: 80, lineHeight: 1 }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 + 0.3 }}
                >
                  {svc.num}
                </motion.div>
                {/* Tag */}
                <motion.div 
                  className="absolute bottom-6 left-6 bg-forest-deeper/85 backdrop-blur-sm px-4 py-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 + 0.4 }}
                >
                  <span className="text-[10px] tracking-[3px] text-gold uppercase">{svc.tag}</span>
                </motion.div>
              </motion.div>

              {/* Content side */}
              <motion.div 
                className={`lg:w-7/12 xl:w-[58%] flex flex-col justify-center py-12 lg:py-16 ${i % 2 === 0 ? 'lg:pl-16 xl:pl-20' : 'lg:pr-16 xl:pr-20'}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: i * 0.15 + 0.2 }}
              >
                <motion.div 
                  className="flex items-center gap-4 mb-5"
                  initial={{ opacity: 0, width: 0 }}
                  whileInView={{ opacity: 1, width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.15 + 0.3 }}
                >
                  <span className="font-serif text-gold text-lg font-semibold">{svc.num}</span>
                  <div className="h-px flex-1 bg-gold/20" />
                </motion.div>
                <motion.h3 
                  className="font-serif text-forest-deeper text-3xl lg:text-4xl font-semibold mb-5 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 + 0.4 }}
                >
                  {svc.title}
                </motion.h3>
                <motion.p 
                  className="text-forest/65 text-[16px] leading-[1.9] mb-8 max-w-[480px]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 + 0.5 }}
                >
                  {svc.desc}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 + 0.6 }}
                >
                  <a href="#contact" className="btn-gold-outline inline-flex">
                    <span>Send Enquiry</span>
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
