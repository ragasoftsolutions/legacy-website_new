import React, { useEffect, useRef } from 'react'

const reasons = [
  {
    title: 'Professional Expertise',
    body: 'Legacy is supported by a team of highly qualified immigration consultants possessing comprehensive knowledge of international immigration laws, regulatory frameworks, and global mobility practices. With extensive industry experience, our professionals provide strategic guidance and compliant solutions tailored to each client\'s unique immigration objectives.',
    icon: '⚖',
  },
  {
    title: 'Results-Driven Approach',
    body: 'Legacy adopts a results-driven methodology, ensuring that every application is prepared with precision, compliance, and strategic attention to detail. Our dedicated team works diligently to strengthen each client\'s profile, minimize potential risks, and maximize the likelihood of a successful outcome.',
    icon: '◎',
  },
  {
    title: 'Worldwide Presence',
    body: 'With an extensive international network and in-depth knowledge of diverse immigration frameworks, Legacy provides expert guidance across multiple countries. We support clients in navigating complex immigration pathways, enabling them to confidently pursue their professional and settlement goals worldwide.',
    icon: '⊕',
  },
  {
    title: 'Client-Centric Service',
    body: 'At Legacy, we recognize that each client\'s immigration journey is distinct. Our approach is tailored to individual goals, qualifications, and circumstances, ensuring customized solutions that align with specific career and settlement objectives. We provide dedicated guidance at every stage to deliver a seamless experience.',
    icon: '◈',
  },
  {
    title: 'Transparent Communication',
    body: 'We prioritize clear, open, and transparent communication, ensuring our clients fully understand every stage of the immigration process. Our approach keeps you informed, confident, and empowered throughout your journey.',
    icon: '◇',
  },
]

export default function WhyUs() {
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
    <section id="why" ref={ref} className="bg-forest-deeper py-24 lg:py-32 relative overflow-hidden">

      {/* Decorative radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 80% 50%, rgba(201,168,76,0.07) 0%, transparent 60%)',
        }}
      />
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 72px,rgba(201,168,76,1) 72px,rgba(201,168,76,1) 73px),repeating-linear-gradient(90deg,transparent,transparent 72px,rgba(201,168,76,1) 72px,rgba(201,168,76,1) 73px)',
        }}
      />

      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 relative z-10">

        {/* Header row */}
        <div className="text-center mb-20">
          <span className="fade-up section-label text-sm text-gold" style={{ justifyContent: 'center' }}>Why Us</span>
          <h2 className="fade-up section-heading text-white mx-auto" style={{ transitionDelay: '0.1s' }}>
            Why Choose{' '}
            <span className="text-gold italic">Legacy Migration</span>{' '}
            Advisory?
          </h2>
        </div>

        {/* Two-column flowing content */}
        <div className="grid lg:grid-cols-2 gap-x-20 gap-y-0">

          {/* Left column — first 3 */}
          <div className="flex flex-col">
            {reasons.slice(0, 3).map((r, i) => (
              <div
                key={r.title}
                className={`fade-up flex gap-8 py-10 ${i < 2 ? 'border-b border-white/8' : ''}`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="flex-shrink-0 pt-1">
                  <span className="text-gold text-2xl">{r.icon}</span>
                </div>
                <div>
                  <h3 className="font-serif text-white text-2xl font-semibold mb-3">{r.title}</h3>
                  <p className="text-white/55 text-base leading-[1.85]">{r.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right column — last 2 + image */}
          <div className="flex flex-col">
            {/* Image accent */}
            <div className="fade-up relative mb-2 overflow-hidden" style={{ transitionDelay: '0.1s' }}>
              <div
                className="w-full h-48 bg-cover bg-center opacity-40"
                style={{ backgroundImage: `url(/whyUs.png)` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-forest-deeper via-transparent to-forest-deeper" />
            </div>

            {reasons.slice(3).map((r, i) => (
              <div
                key={r.title}
                className={`fade-up flex gap-8 py-10 ${i < reasons.slice(3).length - 1 ? 'border-b border-white/8' : ''}`}
                style={{ transitionDelay: `${(i + 3) * 0.12}s` }}
              >
                <div className="flex-shrink-0 pt-1">
                  <span className="text-gold text-2xl">{r.icon}</span>
                </div>
                <div>
                  <h3 className="font-serif text-white text-2xl font-semibold mb-3">{r.title}</h3>
                  <p className="text-white/55 text-base leading-[1.85]">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
