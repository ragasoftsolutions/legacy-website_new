import React from 'react'

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32 lg:py-40"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1800&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-forest-deeper opacity-90" />
      
      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="max-w-[900px] mx-auto text-center">

          <h2
            className="font-serif text-white mb-6 font-bold leading-[1.15]"
            style={{ fontSize: 'clamp(42px, 6vw, 72px)' }}
          >
            Let's Discuss &{' '}
            <span className="text-gold">Start Visa</span>{' '}
            Consultations
          </h2>

          <p className="text-white/70 text-lg lg:text-xl mb-12 font-light">
            Turning your migration dreams into reality.
          </p>

          <a
            href="mailto:info@legacymigadv.com"
            className="btn-shine inline-flex items-center gap-3 bg-gold text-forest-deeper px-12 py-5 text-base font-bold tracking-wide transition-all duration-300 hover:bg-gold-light hover:scale-105 hover:shadow-2xl hover:shadow-gold/30 shadow-lg active:scale-95 group"
            style={{ borderRadius: '50px' }}
          >
            Lets Get Started
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>

        </div>
      </div>
    </section>
  )
}
