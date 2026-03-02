import React, { useEffect, useRef } from 'react'

const testimonials = [
  {
    name: 'James Whitaker',
    date: 'March 23, 2024',
    text: 'Professional, reliable, and efficient – Legacy Migration Advisory exceeded all my expectations. I wouldn\'t trust anyone else with my migration journey.',
    initials: 'JW',
    country: 'United Kingdom',
  },
  {
    name: 'Sarah M. Johnson',
    date: 'January 23, 2025',
    text: 'Legacy Migration Advisory made the entire visa process incredibly smooth. Their team was responsive, professional, and truly cared about my application success. Highly recommended!',
    initials: 'SJ',
    country: 'Canada',
  },
  {
    name: 'Ahmed Al Mansoori',
    date: 'December 12, 2024',
    text: 'I was overwhelmed with the paperwork until I found Legacy. Their consultants guided me step by step and made everything so easy. Thank you for helping me start a new chapter!',
    initials: 'AA',
    country: 'Australia',
  },
]

export default function Testimonials() {
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
    <section id="testimonials" ref={ref} className="bg-white py-24 lg:py-32">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <span className="fade-up section-label">Our Testimonials</span>
            <h2 className="fade-up section-heading text-forest-deeper" style={{ transitionDelay: '0.1s' }}>
              What People Say About{' '}
              <span className="text-gold italic">Our Services</span>
            </h2>
          </div>
          <div className="fade-up" style={{ transitionDelay: '0.2s' }}>
            {/* Big quote mark as decoration */}
            <div className="font-serif text-[160px] text-gold/12 leading-none select-none hidden lg:block text-right" aria-hidden>
              "
            </div>
          </div>
        </div>

        {/* Testimonials — editorial vertical layout separated by lines */}
        <div className="flex flex-col divide-y divide-black/8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`fade-up grid lg:grid-cols-12 gap-8 py-14`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Author — left */}
              <div className="lg:col-span-3 flex lg:flex-col gap-5 items-start">
                <div className="w-14 h-14 rounded-full bg-forest-deeper flex items-center justify-center flex-shrink-0">
                  <span className="font-serif text-gold text-xl font-semibold">{t.initials}</span>
                </div>
                <div>
                  <div className="font-semibold text-forest-deeper text-[14px] mb-0.5">{t.name}</div>
                  <div className="text-gold text-[11px] tracking-wider mb-1">{t.country}</div>
                  <div className="text-forest/40 text-[11px]">{t.date}</div>
                </div>
              </div>

              {/* Divider line */}
              <div className="hidden lg:flex lg:col-span-1 justify-center">
                <div className="w-px h-full bg-black/8" />
              </div>

              {/* Quote — right */}
              <div className="lg:col-span-8 relative testimonial-quote">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-serif text-forest-deeper text-xl lg:text-2xl font-light italic leading-[1.7]">
                  "{t.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
