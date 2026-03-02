import React, { useEffect, useRef } from 'react'

const services = [
  {
    num: '01',
    title: 'Skilled Immigration',
    desc: 'The journey to permanent residency in Canada or Australia through skilled migration often comes with challenges, paperwork, and strict eligibility requirements that can feel overwhelming. We simplify every step, from skills assessment to final visa approval, ensuring nothing is left to chance.',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    tag: 'Canada · Australia · New Zealand',
  },
  {
    num: '02',
    title: 'Residency By Investment',
    desc: "Through Residency by Investment, you can unlock a world of possibilities — gaining the right to live, work, and expand your future internationally. We guide you through every investment pathway, helping you select the right program and jurisdiction for your goals.",
    img: 'https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=800&q=80',
    tag: 'Portugal · Greece · Spain · UAE',
  },
  {
    num: '03',
    title: 'Work Permit Immigration',
    desc: 'No matter where you are in your journey — as a student or a working professional — we empower you to create a stable, successful future in your dream destination. Our specialists handle employer sponsorships, permit renewals, and compliance documentation end-to-end.',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    tag: 'UK · Ireland · Switzerland · Czechia',
  },
  {
    num: '04',
    title: 'Tourist Visa',
    desc: "Ready to explore Europe or discover new destinations around the world? Our visa experts are here to make your travel process easy and stress-free. From Schengen applications to long-stay tourist permits, we prepare complete, compelling documentation for every journey.",
    img: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
    tag: 'Schengen · Europe · Worldwide',
  },
]

export default function Services() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={ref} className="bg-white py-24 lg:py-32">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20 gap-6">
          <div>
            <span className="fade-up section-label">Service We Provide</span>
            <h2 className="fade-up section-heading text-forest-deeper max-w-[560px]" style={{ transitionDelay: '0.1s' }}>
              Explore Our Visa, Citizenship &{' '}
              <span className="text-gold italic">Immigration Services</span>
            </h2>
          </div>
          <p className="fade-up text-forest/60 text-[13px] leading-relaxed max-w-[320px]" style={{ transitionDelay: '0.2s' }}>
            Comprehensive immigration solutions crafted for individuals, families, and investors worldwide.
          </p>
        </div>

        {/* Alternating Service Rows */}
        <div className="flex flex-col">
          {services.map((svc, i) => (
            <div
              key={svc.num}
              className={`fade-up flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0 ${i < services.length - 1 ? 'mb-0 border-b border-black/6' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Image side */}
              <div className="lg:w-5/12 xl:w-[42%] relative overflow-hidden flex-shrink-0">
                <div
                  className="w-full h-full min-h-[280px] lg:min-h-[360px] bg-cover bg-center transition-transform duration-700 hover:scale-105"
                  style={{ backgroundImage: `url(${svc.img})` }}
                />
                {/* Number overlay */}
                <div className="absolute top-6 left-6 font-serif text-white/20 font-bold"
                     style={{ fontSize: 80, lineHeight: 1 }}>
                  {svc.num}
                </div>
                {/* Tag */}
                <div className="absolute bottom-6 left-6 bg-forest-deeper/85 backdrop-blur-sm px-4 py-2">
                  <span className="text-[10px] tracking-[3px] text-gold uppercase">{svc.tag}</span>
                </div>
              </div>

              {/* Content side */}
              <div className={`lg:w-7/12 xl:w-[58%] flex flex-col justify-center py-12 lg:py-16 ${i % 2 === 0 ? 'lg:pl-16 xl:pl-20' : 'lg:pr-16 xl:pr-20'}`}>
                <div className="flex items-center gap-4 mb-5">
                  <span className="font-serif text-gold text-lg font-semibold">{svc.num}</span>
                  <div className="h-px flex-1 bg-gold/20" />
                </div>
                <h3 className="font-serif text-forest-deeper text-3xl lg:text-4xl font-semibold mb-5 leading-tight">
                  {svc.title}
                </h3>
                <p className="text-forest/65 text-[14px] leading-[1.9] mb-8 max-w-[480px]">
                  {svc.desc}
                </p>
                <div>
                  <a href="#contact" className="btn-gold-outline inline-flex">
                    <span>Send Enquiry</span>
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
