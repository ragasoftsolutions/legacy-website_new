import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const immigrationData = {
  'Citizenship By Investment': [
    { label: 'Dominica Citizenship', href: '#' },
    { label: 'Saint Kitts & Nevis Citizenship', href: '#' },
    { label: 'Vanuatu Citizenship', href: '#' },
    { label: 'Saint Lucia Citizenship', href: '#' },
  ],
  'Residency By Investment': [
    { label: 'Spain', href: '#' },
    { label: 'Greece', href: '#' },
    { label: 'Portugal', href: '#' },
    { label: 'USA', href: '#' },
    { label: 'Australia', href: '#' },
    { label: 'Poland', href: '#' },
    { label: 'United Kingdom', href: '#' },
  ],
  'Work Visa': [
    { label: 'UK Skilled Worker Visa', href: '#' },
    { label: 'UK Creative Worker Visa', href: '#' },
    { label: 'UK TIER 5', href: '#' },
    { label: 'UK Self Sponsorship Programs', href: '#' },
    { label: 'UK Innovator Visa', href: '#' },
    { label: 'Ireland Work Visa', href: '#' },
    { label: 'Switzerland Work Permit', href: '#' },
    { label: 'Czech Republic Work Visa', href: '#' },
  ],
}

const TreeIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="35" r="22" fill="none" stroke="#C9A84C" strokeWidth="2" />
    <circle cx="35" cy="28" r="15" fill="none" stroke="#C9A84C" strokeWidth="2" />
    <circle cx="65" cy="28" r="15" fill="none" stroke="#C9A84C" strokeWidth="2" />
    <circle cx="50" cy="20" r="16" fill="#C9A84C" fillOpacity="0.2" />
    <circle cx="38" cy="32" r="14" fill="#C9A84C" fillOpacity="0.2" />
    <circle cx="62" cy="32" r="14" fill="#C9A84C" fillOpacity="0.2" />
    <circle cx="50" cy="38" r="18" fill="#C9A84C" fillOpacity="0.25" />
    <line x1="50" y1="57" x2="50" y2="90" stroke="#C9A84C" strokeWidth="3.5" />
    <line x1="28" y1="90" x2="72" y2="90" stroke="#C9A84C" strokeWidth="3.5" />
    <line x1="50" y1="72" x2="34" y2="84" stroke="#C9A84C" strokeWidth="2.5" />
    <line x1="50" y1="72" x2="66" y2="84" stroke="#C9A84C" strokeWidth="2.5" />
  </svg>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState(null)
  const megaRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMegaOpen(false)
  }, [location])

  useEffect(() => {
    const handler = (e) => {
      if (megaRef.current && !megaRef.current.contains(e.target)) setMegaOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <>
      {/* ── NAVBAR ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-md shadow-black/10'
            : 'bg-cream'
        }`}
        style={{ height: 72 }}
      >
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 h-full flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Legacy Migration Advisory" className="h-14" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {['Home', 'About', 'Countries', 'Testimonials'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium tracking-wider text-forest hover:text-gold transition-colors duration-200"
              >
                {item}
              </a>
            ))}

            {/* Immigration Types Mega */}
            <div ref={megaRef} className="relative">
              <button
                onMouseEnter={() => setMegaOpen((p) => !p)}
                className="flex items-center gap-1.5 text-sm font-medium tracking-wider text-forest hover:text-gold transition-colors duration-200"
              >
                Immigration Types
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mega Dropdown */}
              <div
                className={`absolute top-[calc(100%+20px)] left-1/2 -translate-x-1/2 bg-white border border-black/8 shadow-2xl min-w-[720px] p-8 grid grid-cols-3 gap-8 transition-all duration-250 ${
                  megaOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                }`}
                style={{ boxShadow: '0 24px 60px rgba(0,0,0,0.12)' }}
              >
                {Object.entries(immigrationData).map(([cat, items]) => (
                  <div key={cat}>
                    <h4 className="font-serif text-forest-deeper text-[15px] font-semibold mb-3 pb-2 border-b border-gold/30">
                      {cat}
                    </h4>
                    {items.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block py-1.5 text-[12px] text-forest/70 hover:text-gold hover:pl-2 transition-all duration-200"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              className="text-sm font-medium tracking-wider text-forest hover:text-gold transition-colors duration-200"
            >
              Contact
            </a>
          </nav>

          {/* Phone Number & Pay Now */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="#contact"
              className="btn-shine bg-gold text-forest-deeper text-[11px] font-bold tracking-[2px] uppercase px-5 py-2.5 rounded-full transition-all duration-300 hover:bg-gold-light hover:scale-105 hover:shadow-lg active:scale-95"
            >
              Pay Now
            </a>

            <a
              href="tel:+971565586006"
              className="flex items-center gap-2 text-forest hover:text-gold transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <div className="flex flex-col">
                <span className="text-[9px] font-semibold tracking-[1px] uppercase opacity-70">Phone:</span>
                <span className="text-[13px] font-bold tracking-wide">+971-5655-86006</span>
              </div>
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="Menu"
          >
            <span className={`block w-6 h-px bg-forest-deeper transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-px bg-forest-deeper transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-forest-deeper transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ top: 72 }}
      >
        <div className="p-6 flex flex-col gap-0 overflow-y-auto h-full">
          {['Home', 'About', 'Countries', 'Testimonials', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-4 text-[13px] font-medium tracking-widest text-forest-deeper uppercase border-b border-black/8"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </a>
          ))}

          {/* Immigration accordion */}
          {Object.entries(immigrationData).map(([cat, items]) => (
            <div key={cat}>
              <button
                className="w-full flex justify-between items-center py-4 text-[13px] font-semibold tracking-widest text-forest-deeper uppercase border-b border-black/8"
                onClick={() => setMobileSection(mobileSection === cat ? null : cat)}
              >
                {cat}
                <span className="text-gold text-lg">{mobileSection === cat ? '−' : '+'}</span>
              </button>
              {mobileSection === cat && (
                <div className="pl-4 py-2 border-b border-black/8">
                  {items.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block py-2 text-[12px] text-forest/70"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          <a
            href="#contact"
            className="mt-6 bg-gold text-forest-deeper text-[11px] font-bold tracking-[3px] uppercase py-4 text-center transition-all duration-300 hover:bg-gold-light active:scale-95"
          >
            Pay Now
          </a>

          <a
            href="tel:+971565586006"
            className="mt-2 flex items-center justify-center gap-2 py-4 text-[13px] font-semibold text-forest border-b border-black/8"
            onClick={() => setMobileOpen(false)}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            +971-5655-86006
          </a>
        </div>
      </div>
    </>
  )
}
