import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

/**
 * Reusable inner-page hero banner.
 * Props:
 *  - title: string (supports JSX)
 *  - subtitle: string
 *  - breadcrumb: [{ label, href }]  (last item is current page)
 *  - image: Unsplash URL or local path
 *  - overlay: opacity (0-1), default 0.75
 */
export default function PageBanner({ title, subtitle, breadcrumb = [], image, overlay = 0.75 }) {
  return (
    <section
      className="relative w-full overflow-hidden flex items-center"
      style={{ minHeight: 420, marginTop: 72 }}
    >
      {/* Background image with subtle zoom */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to right, rgba(13,35,24,${overlay}) 0%, rgba(13,35,24,${overlay * 0.85}) 50%, rgba(13,35,24,${overlay * 0.6}) 100%)`,
        }}
      />

      {/* Gold accent left border */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold opacity-70" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-6 lg:px-10 py-20">

        {/* Breadcrumb */}
        {breadcrumb.length > 0 && (
          <motion.nav
            className="flex items-center gap-2 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            aria-label="Breadcrumb"
          >
            {breadcrumb.map((crumb, i) => (
              <React.Fragment key={i}>
                {i > 0 && (
                  <svg className="w-3 h-3 text-gold/60 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                )}
                {i < breadcrumb.length - 1 ? (
                  <Link
                    to={crumb.href}
                    className="text-[11px] tracking-[3px] uppercase text-white/60 hover:text-gold transition-colors duration-200"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[11px] tracking-[3px] uppercase text-gold font-semibold">
                    {crumb.label}
                  </span>
                )}
              </React.Fragment>
            ))}
          </motion.nav>
        )}

        {/* Title */}
        <motion.h1
          className="font-serif text-white font-bold leading-[1.1] mb-4"
          style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          className="w-16 h-0.5 bg-gold mb-5"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        />

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            className="text-white/70 text-[15px] lg:text-lg leading-[1.8] max-w-[600px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
