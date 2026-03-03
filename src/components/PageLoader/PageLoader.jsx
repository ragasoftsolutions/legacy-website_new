import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PageLoader({ onComplete }) {
  const [phase, setPhase] = useState('in') // 'in' | 'hold' | 'out'

  useEffect(() => {
    // Hold after intro → then exit
    const holdTimer = setTimeout(() => setPhase('out'), 2400)
    return () => clearTimeout(holdTimer)
  }, [])

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {phase !== 'out' && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-forest-deeper"
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Background radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.10) 0%, transparent 65%)',
            }}
          />

          {/* Logo */}
          <motion.img
            src="/logo2.png"
            alt="Legacy Migration Advisory"
            className="relative z-10"
            style={{ height: 350 }}
            initial={{ opacity: 0, scale: 0.72, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Tagline */}
          <motion.p
            className="relative z-10 mt-5 text-[10px] tracking-[6px] text-gold/80 uppercase font-semibold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            Legacy Migration Advisory
          </motion.p>

          {/* Progress bar track */}
          <div className="relative z-10 mt-10 w-48 h-px bg-white/10 overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-gold rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.0, delay: 0.3, ease: 'easeInOut' }}
            />
          </div>

          {/* Decorative corner lines */}
          {[
            'top-8 left-8 border-t border-l',
            'top-8 right-8 border-t border-r',
            'bottom-8 left-8 border-b border-l',
            'bottom-8 right-8 border-b border-r',
          ].map((cls, i) => (
            <motion.div
              key={i}
              className={`absolute w-10 h-10 border-gold/30 ${cls}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
