import React, { useState, useEffect, useCallback } from 'react'

const slides = [
  {
    label: 'End-to-End Services',
    title: 'End-To-End Immigration Services',
    subtitle: 'From consultation to application, we provide a smooth, efficient process tailored to your relocation goals.',
    cta: 'Learn More',
    // Unsplash: Professional business consultation meeting
    bg: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1800&q=80',
  },
  {
    label: 'Seamless Relocation',
    title: 'Move Abroad, Stress-Free',
    subtitle: 'We take the hassle out of immigration with personalized guidance and expert handling of your application.',
    cta: 'Start Your Journey',
    // Unsplash: Passport with documents and stamps
    bg: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1800&q=80',
  },
  {
    label: 'Global Opportunities',
    title: 'Your Pathway To Global Opportunities',
    subtitle: 'Expert immigration solutions designed to help you live, work, and settle abroad with confidence.',
    cta: 'Get Consultation',
    // Unsplash: Global business cityscape
    bg: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1800&q=80',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback((index) => {
    if (animating || index === current) return
    setAnimating(true)
    setCurrent(index)
    setTimeout(() => setAnimating(false), 1300)
  }, [animating, current])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative w-full overflow-hidden" style={{ height: '100vh', minHeight: 600, marginTop: 72 }}>

      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`hero-slide ${i === current ? 'active' : ''}`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.bg})` }}
          />
          {/* Dark green overlay - matching reference */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(13,35,24,0.90) 0%, rgba(13,35,24,0.75) 45%, rgba(13,35,24,0.30) 100%)',
            }}
          />

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-[1320px] mx-auto px-6 lg:px-10 w-full">
              <div className="max-w-[620px]">

                {/* Pin icon like reference */}
                <div className="slide-label flex items-center gap-2 mb-5">
                  <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span className="text-[11px] tracking-[5px] text-gold uppercase font-semibold">
                    {slide.label}
                  </span>
                </div>

                <h1 className="slide-title font-serif text-white leading-[1.08] mb-6"
                    style={{ fontSize: 'clamp(42px, 6vw, 76px)', fontWeight: 700 }}>
                  {slide.title}
                </h1>

                <p className="slide-sub text-white/80 text-[15px] leading-[1.85] mb-10 max-w-[500px] font-light">
                  {slide.subtitle}
                </p>

                <div className="slide-cta">
                  <button className="inline-flex items-center gap-3 bg-gold/90 hover:bg-gold text-forest-deeper font-semibold text-[13px] tracking-wider px-8 py-4 rounded-full transition-all duration-300 group">
                    {slide.cta}
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-400 rounded-full ${
              i === current
                ? 'bg-gold w-8 h-3'
                : 'bg-white/40 hover:bg-white/60 w-3 h-3'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 right-10 z-20 hidden lg:flex items-baseline gap-1">
        <span className="font-serif text-4xl text-gold font-light leading-none">{String(current + 1).padStart(2, '0')}</span>
        <span className="text-white/30 text-sm mx-1">/</span>
        <span className="text-white/50 text-sm">{String(slides.length).padStart(2, '0')}</span>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-0 left-10 hidden lg:flex flex-col items-center gap-2 z-20 pb-6">
        <div className="w-px h-16 bg-gradient-to-b from-gold/50 to-transparent animate-pulse" />
        <span className="text-[9px] tracking-[4px] text-gold/60 uppercase" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
      </div>
    </section>
  )
}
