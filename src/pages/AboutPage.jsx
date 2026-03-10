import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner/PageBanner'
import ScrollReveal from '../components/ScrollReveal/ScrollReveal'

// Unsplash images - professional immigration/consulting themed
const BANNER_IMG =
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80'
const STORY_IMG =
  'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&w=900&q=80'
const MISSION_IMG =
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80'

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '500+', label: 'Successful Cases' },
  { value: '30+', label: 'Countries Covered' },
  { value: '98%', label: 'Client Satisfaction' },
]

const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: 'Integrity & Transparency',
    desc: 'We believe in clear, honest communication at every stage of your journey. No hidden fees, no surprises — just straightforward advice you can trust.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Client-First Approach',
    desc: 'Your goals are our goals. We listen carefully, understand your unique circumstances, and craft a personalised immigration strategy that works for you.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: 'Expert Knowledge',
    desc: 'Our team of experienced immigration consultants stays ahead of ever-changing immigration laws and policies to deliver accurate, reliable guidance.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Global Reach',
    desc: 'With deep expertise across 30+ countries, we open doors to citizenship, residency, work permits, and visa pathways worldwide.',
  },
]

const team = [
  {
    name: 'Ahmad Al-Rashid',
    role: 'Senior Immigration Consultant',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Sara Mitchell',
    role: 'Residency by Investment Specialist',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'James Thornton',
    role: 'Visa & Work Permit Advisor',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
  },
]

const milestones = [
  { year: '2013', event: 'Founded in Dubai, UAE with a mission to simplify global immigration.' },
  { year: '2016', event: 'Expanded services to Residency by Investment programs across Europe.' },
  { year: '2019', event: 'Reached 200+ successful client cases and opened new advisory services.' },
  { year: '2022', event: 'Partnered with legal experts in 20+ countries to deliver end-to-end support.' },
  { year: '2024', event: 'Recognised as a leading immigration consultancy firm in the GCC region.' },
]

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title={<>About <span className="text-gold italic">Legacy Migration</span> Advisory</>}
        subtitle="Your trusted partner in turning overseas dreams into reality — with expertise, integrity, and care."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'About Us', href: '/about' }]}
        image={BANNER_IMG}
        overlay={0.78}
      />

      {/* ── WHO WE ARE ── */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

            {/* Image */}
            <ScrollReveal variant="fadeLeft">
              <div className="relative">
                <div
                  className="w-full aspect-[4/5] bg-cover bg-center"
                  style={{ backgroundImage: `url(${STORY_IMG})` }}
                />
                <div
                  className="absolute border border-gold/40 pointer-events-none"
                  style={{ inset: '-16px 16px 16px -16px' }}
                />
                {/* Floating badge */}
                <motion.div
                  className="absolute -bottom-6 -right-4 lg:-right-8 bg-gold px-7 py-5 shadow-xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="font-serif text-forest-deeper text-4xl font-bold leading-none">10+</div>
                  <div className="text-[10px] tracking-[2px] text-forest-deeper/80 uppercase mt-1">Years Experience</div>
                </motion.div>
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal variant="fadeRight" delay={0.1}>
              <span className="section-label">Who We Are</span>
              <h2 className="section-heading text-forest-deeper mb-6">
                Welcome To <span className="text-gold italic">Legacy Migration</span> Advisory
              </h2>
              <p className="text-forest/70 text-[16px] leading-[1.9] mb-5">
                At Legacy Migration Advisory, we help turn your dream of moving abroad into reality.
                We are a professional migration consultancy firm offering complete, end-to-end immigration
                services tailored to each client's unique needs.
              </p>
              <p className="text-forest/70 text-[16px] leading-[1.9] mb-5">
                Based in the heart of Dubai's Business Bay, our team of experienced consultants has
                guided hundreds of individuals and families through the complexities of international
                migration — from skilled immigration and residency by investment, to work permits,
                tourist visas, and citizenship programmes.
              </p>
              <p className="text-forest/70 text-[16px] leading-[1.9] mb-8">
                We believe that every person deserves clear, reliable, and step-by-step guidance
                through the immigration journey. Our goal is simple: make the process easy, reduce
                stress, and ensure full transparency at every stage.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="btn-gold-solid"
                  style={{ borderRadius: 2 }}
                >
                  <span>Get a Free Consultation</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-forest-deeper py-16">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="text-center px-4 py-4 first:pl-0 last:pr-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <div className="font-serif text-4xl lg:text-5xl text-gold font-bold leading-none mb-2">{s.value}</div>
                <div className="text-[11px] tracking-[3px] text-white/50 uppercase">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR MISSION ── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

            {/* Content */}
            <ScrollReveal variant="fadeLeft">
              <span className="section-label">Our Mission & Vision</span>
              <h2 className="section-heading text-forest-deeper mb-6">
                Start Your Global Journey{' '}
                <span className="text-gold italic">With Confidence</span>
              </h2>

              <div className="space-y-5 mb-8">
                {[
                  { heading: 'Our Mission', text: 'To empower individuals and families with clear, reliable, and personalised immigration solutions — making the dream of moving abroad achievable for everyone.' },
                  { heading: 'Our Vision', text: 'To be the most trusted immigration consultancy in the MENA region, known for our deep expertise, ethical practice, and commitment to client success.' },
                ].map((item) => (
                  <div key={item.heading} className="flex gap-4 items-start">
                    <div className="w-1 flex-shrink-0 bg-gold" style={{ height: 48, marginTop: 2 }} />
                    <div>
                      <h4 className="font-serif text-forest-deeper font-semibold text-lg mb-1">{item.heading}</h4>
                      <p className="text-forest/65 text-[15px] leading-[1.8]">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Goals list */}
              <div className="space-y-3">
                {[
                  'Make the immigration process easy and stress-free',
                  'Reduce confusion with clear, step-by-step guidance',
                  'Ensure full transparency at every stage of the journey',
                  'Deliver results through expert knowledge and dedication',
                ].map((goal, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-forest/75 text-[15px]">{goal}</span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            {/* Image */}
            <ScrollReveal variant="fadeRight" delay={0.1}>
              <div className="relative">
                <div
                  className="w-full aspect-[4/3] bg-cover bg-center"
                  style={{ backgroundImage: `url(${MISSION_IMG})` }}
                />
                {/* Accent corner */}
                <div
                  className="absolute border border-gold/30 pointer-events-none"
                  style={{ inset: '16px -16px -16px 16px' }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">

          <ScrollReveal variant="fadeUp" className="text-center mb-16">
            <span className="section-label" style={{ justifyContent: 'center' }}>What We Stand For</span>
            <h2 className="section-heading text-forest-deeper mx-auto">
              Our Core <span className="text-gold italic">Values</span>
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-black/8">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                className="p-8 lg:p-10 border-r border-b border-black/8 last:border-r-0 group hover:bg-forest-deeper transition-colors duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <div className="w-14 h-14 border border-gold/40 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:border-gold group-hover:text-forest-deeper transition-all duration-300">
                  {val.icon}
                </div>
                <h3 className="font-serif text-forest-deeper text-[17px] font-semibold mb-3 group-hover:text-white transition-colors duration-300">
                  {val.title}
                </h3>
                <p className="text-forest/60 text-[13.5px] leading-[1.8] group-hover:text-white/70 transition-colors duration-300">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPLORE CITIZENSHIP OPTIONS ── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* Left: image */}
            <ScrollReveal variant="fadeRight">
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img
                  src="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?auto=format&fit=crop&w=900&q=80"
                  alt="Explore Citizenship Options"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-forest/10" />
              </div>
            </ScrollReveal>

            {/* Right: content */}
            <ScrollReveal variant="fadeLeft">
              <h2 className="font-serif text-forest-deeper text-[28px] lg:text-[34px] font-semibold leading-[1.25] mb-5">
                Explore Citizenship Options
              </h2>
              <p className="text-forest/70 text-[14.5px] leading-[1.8] mb-3">
                We are here to support you at every stage.
              </p>
              <p className="text-forest/70 text-[14.5px] leading-[1.8] mb-5">
                Immigration rules and procedures can often feel confusing and overwhelming. At Legacy Migration Advisory, we simplify the entire process, explain everything clearly, and guide you with honesty and transparency.
              </p>
              <p className="text-forest/70 text-[14.5px] leading-[1.8] mb-4">
                Our goal is to make your immigration journey:
              </p>
              <ul className="mb-6 space-y-3">
                {['Simple', 'Smooth', 'Stress-free', 'Successful'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[15px] font-semibold text-forest-deeper">
                    <svg className="w-5 h-5 flex-shrink-0 text-forest-deeper" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-forest/70 text-[14.5px] leading-[1.8]">
                With strong knowledge of immigration laws and up-to-date regulations, our team ensures that your application is handled professionally and efficiently.
              </p>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── JOURNEY / TIMELINE ── */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">

          <ScrollReveal variant="fadeUp" className="text-center mb-16">
            <span className="section-label" style={{ justifyContent: 'center' }}>Our Journey</span>
            <h2 className="section-heading text-forest-deeper mx-auto">
              A Decade of <span className="text-gold italic">Excellence</span>
            </h2>
          </ScrollReveal>

          <div className="relative max-w-[860px] mx-auto">
            {/* Central line */}
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gold/20 hidden lg:block" />

            <div className="flex flex-col gap-12">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-10 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  {/* Year badge */}
                  <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center bg-forest-deeper border border-gold/30 relative z-10">
                    <span className="font-serif text-gold text-xl font-bold">{m.year}</span>
                  </div>
                  {/* Event text */}
                  <div className={`flex-1 bg-cream p-6 border-l-2 border-gold ${i % 2 !== 0 ? 'lg:border-l-0 lg:border-r-2 lg:text-right' : ''}`}>
                    <p className="text-forest/75 text-[15px] leading-[1.7]">{m.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">

          <ScrollReveal variant="fadeUp" className="text-center mb-16">
            <span className="section-label" style={{ justifyContent: 'center' }}>The People Behind Legacy</span>
            <h2 className="section-heading text-forest-deeper mx-auto">
              Meet Our <span className="text-gold italic">Expert Team</span>
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                className="group overflow-hidden bg-white border border-black/6 hover:border-gold/40 transition-colors duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${member.img})` }}
                  />
                  <div className="absolute inset-0 bg-forest-deeper/0 group-hover:bg-forest-deeper/30 transition-all duration-300" />
                </div>
                {/* Info */}
                <div className="p-6 border-t border-black/6">
                  <div className="w-8 h-0.5 bg-gold mb-3" />
                  <h3 className="font-serif text-forest-deeper text-lg font-semibold mb-1">{member.name}</h3>
                  <span className="text-[11px] tracking-[2px] text-gold uppercase">{member.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="relative overflow-hidden py-24">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1920&q=80)',
          }}
        />
        
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(13, 35, 24, 0.90) 0%, rgba(27, 58, 45, 0.85) 100%)',
          }}
        />
        
        {/* Decorative radial gradient */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #C9A84C 0%, transparent 60%)' }}
        />
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 relative z-10 text-center">
          <ScrollReveal variant="fadeUp">
            <span className="section-label" style={{ justifyContent: 'center' }}>Ready to Begin?</span>
            <h2 className="font-serif text-white font-bold mb-6" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}>
              Your Dream Migration Starts <span className="text-gold italic">Here</span>
            </h2>
            <p className="text-white/65 text-lg mb-10 max-w-[560px] mx-auto leading-[1.8]">
              Connect with our expert team today for a free consultation and take the first step towards your new life abroad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-gold-solid"
                style={{ borderRadius: 2 }}
              >
                <span>Book Free Consultation</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                to="/pay-now"
                className="btn-gold-outline"
                style={{ borderRadius: 2 }}
              >
                <span>Pay Now</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
