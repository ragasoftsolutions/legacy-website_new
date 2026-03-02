import React, { useEffect, useRef } from 'react'

const countries = [
  {
    name: 'Australia',
    desc: 'General Skilled Migration, Business Innovation & Investment',
    flag: '🇦🇺',
    img: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&q=80',
  },
  {
    name: 'Canada',
    desc: 'Express Entry, Provincial Nominee Programs, Family Sponsorship',
    flag: '🇨🇦',
    img: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&q=80',
  },
  {
    name: 'Poland',
    desc: 'Work Permits, Residency by Investment, EU Pathways',
    flag: '🇵🇱',
    img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
  },
  {
    name: 'Portugal',
    desc: 'Golden Visa, D7 Passive Income Visa, NHR Tax Regime',
    flag: '🇵🇹',
    img: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&q=80',
  },
]

export default function Countries() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="countries" ref={ref} className="bg-cream py-24 lg:py-32">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="fade-up section-label" style={{ justifyContent: 'center' }}>
            Countries We Offer
          </span>
          <h2 className="fade-up section-heading text-forest-deeper mb-3" style={{ transitionDelay: '0.1s' }}>
            Countries We <span className="text-gold italic">Support</span> For Immigration
          </h2>
          <p className="fade-up text-forest/55 text-[14px] tracking-wider" style={{ transitionDelay: '0.2s' }}>
            Select A Destination Of Your Choice
          </p>
        </div>

        {/* Horizontal full-width strips */}
        <div className="flex flex-col gap-0 border border-black/8">
          {countries.map((c, i) => (
            <div
              key={c.name}
              className={`fade-up group flex flex-col lg:flex-row ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''} overflow-hidden ${i < countries.length - 1 ? 'border-b border-black/8' : ''} cursor-pointer`}
              style={{ transitionDelay: `${i * 0.1}s`, minHeight: 200 }}
            >
              {/* Image strip */}
              <div className="lg:w-2/5 relative overflow-hidden" style={{ minHeight: 200 }}>
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${c.img})` }}
                />
                <div className="absolute inset-0 bg-forest-deeper/40 group-hover:bg-forest-deeper/20 transition-all duration-500" />
                {/* Flag */}
               
              </div>

              {/* Content strip */}
              <div className={`lg:w-3/5 flex flex-col justify-center py-10 px-10 lg:px-14 ${i % 2 !== 0 ? 'lg:text-right' : ''}`}>
                <div className={`flex items-center gap-4 mb-3 ${i % 2 !== 0 ? 'lg:justify-end' : ''}`}>
                  <div className="gold-line" />
                  <span className="text-[10px] tracking-[4px] text-gold uppercase font-semibold">Immigration Pathway</span>
                </div>
                <h3 className="font-serif text-forest-deeper text-4xl lg:text-5xl font-semibold mb-3 leading-tight group-hover:text-forest transition-colors">
                  {c.name}
                </h3>
                <p className="text-forest/60 text-[13px] leading-relaxed mb-6 max-w-[400px]">
                  {c.desc}
                </p>
                <div>
                  <a href="#contact" className="btn-gold-outline inline-flex">
                    <span>Explore Pathways</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
