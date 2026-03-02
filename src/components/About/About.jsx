import React, { useEffect, useRef } from 'react'

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
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    ref.current?.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="bg-cream py-24 lg:py-32">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* LEFT — Visual */}
          <div className="fade-up relative">
            {/* Main image block */}
            <div className="relative">
              <div
                className="w-full aspect-[4/5] bg-cover bg-center"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&q=80)`,
                }}
              />
              {/* Gold frame offset */}
              <div
                className="absolute border border-gold/40 pointer-events-none"
                style={{ inset: '-14px 14px 14px -14px' }}
              />
            </div>

            {/* Stats bar */}
            <div className="absolute -bottom-8 left-8 right-8 bg-forest-deeper px-8 py-6 grid grid-cols-3 divide-x divide-white/10">
              {stats.map((s) => (
                <div key={s.label} className="text-center px-4 first:pl-0 last:pr-0">
                  <div className="font-serif text-3xl text-gold font-semibold leading-none mb-1">{s.value}</div>
                  <div className="text-[10px] tracking-[2px] text-white/60 uppercase">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="mt-12 lg:mt-0">
            <div className="fade-up" style={{ transitionDelay: '0.1s' }}>
              <span className="section-label">About Company</span>
            </div>

            <h2 className="fade-up section-heading text-forest-deeper mb-6" style={{ transitionDelay: '0.2s' }}>
              Welcome To <span className="text-gold italic">Legacy Migration</span> Advisory
            </h2>

            <p className="fade-up text-forest/70 text-[14px] leading-[1.9] mb-4" style={{ transitionDelay: '0.3s' }}>
              At Legacy Migration Advisory, we help turn your dream of moving abroad into reality.
              We are a professional migration consultancy firm offering complete, end-to-end immigration
              solutions for individuals and families who wish to relocate to a new country.
            </p>

            <div className="fade-up my-8" style={{ transitionDelay: '0.35s' }}>
              <div className="gold-line mb-6" />
              <h3 className="font-serif text-forest-deeper text-2xl font-semibold mb-5 italic">Our Goal Is Simple:</h3>
              <div className="flex flex-col gap-3">
                {goals.map((g) => (
                  <div key={g} className="flex items-start gap-4">
                    <span className="mt-1 w-5 h-5 rounded-full border border-gold/50 flex items-center justify-center flex-shrink-0">
                      <span className="text-gold text-[10px]">✓</span>
                    </span>
                    <span className="text-forest/75 text-[14px] leading-relaxed">{g}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="fade-up text-forest/70 text-[14px] leading-[1.9] mb-8" style={{ transitionDelay: '0.4s' }}>
              With a team of experienced and knowledgeable immigration consultants in Dubai and Abu Dhabi,
              we guide you step-by-step throughout your entire migration journey.
            </p>

            <div className="fade-up" style={{ transitionDelay: '0.5s' }}>
              <a href="#contact" className="btn-gold-outline">
                <span>About Us</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
