import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const immigrationData = {
  'Citizenship By Investment': [
    { label: 'Dominica Citizenship', href: '/citizenship/dominica' },
    { label: 'Saint Kitts & Nevis Citizenship', href: '/citizenship/saint-kitts-nevis' },
    { label: 'Vanuatu Citizenship', href: '/citizenship/vanuatu' },
    { label: 'Saint Lucia Citizenship', href: '/citizenship/saint-lucia' },
  ],
  'Residency By Investment': [
    { label: 'Spain', href: '/residency/spain' },
    { label: 'Greece', href: '/residency/greece' },
    { label: 'Portugal', href: '/residency/portugal' },
    { label: 'USA', href: '/residency/usa' },
    { label: 'Australia', href: '/residency/australia' },
    { label: 'Poland', href: '/residency/poland' },
    { label: 'United Kingdom', href: '/residency/uk' },
  ],
  'United Kingdom': [
    { label: 'UK Skilled Worker Visa', href: '/work-visa/uk-skilled-worker-visa' },
    { label: 'UK Creative Worker Visa', href: '/work-visa/uk-creative-worker-visa' },
    { label: 'UK TIER 5', href: '/work-visa/uk-tier-5' },
    { label: 'UK Self Sponsorship Programs', href: '/work-visa/uk-self-sponsorship-programs' },
    { label: 'UK Innovator Visa', href: '/work-visa/uk-innovator-visa' },
  ],
  'Work Visa': [
    { label: 'Ireland Work Visa', href: '/work-visa/ireland-work-visa' },
    { label: 'Switzerland Work Permit', href: '/work-visa/switzerland-work-permit' },
    { label: 'Czech Republic Work Visa', href: '/work-visa/czech-republic-work-visa' },
  ],
}



export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState(null)
  const megaRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  const handleSectionNav = (sectionId) => {
    setMobileOpen(false)
    if (location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: sectionId } })
    }
  }

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
            <Link
              to="/"
              className="text-sm font-medium tracking-wider text-forest hover:text-gold transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium tracking-wider text-forest hover:text-gold transition-colors duration-200"
            >
              About
            </Link>
            {['Countries', 'Testimonials'].map((item) => (
              <button
                key={item}
                onClick={() => handleSectionNav(item.toLowerCase())}
                className="text-sm font-medium tracking-wider text-forest hover:text-gold transition-colors duration-200"
              >
                {item}
              </button>
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
                className={`absolute top-[calc(100%+20px)] left-1/2 -translate-x-1/2 bg-white border border-black/8 shadow-2xl min-w-[900px] p-8 grid grid-cols-4 gap-8 transition-all duration-250 ${
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
                      <Link
                        key={item.label}
                        to={item.href}
                        className="block py-1.5 text-[12px] text-forest/70 hover:text-gold hover:pl-2 transition-all duration-200"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className="text-sm font-medium tracking-wider text-forest hover:text-gold transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Phone Number & Pay Now */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              to="/pay-now"
              className="btn-shine bg-gold text-forest-deeper text-[11px] font-bold tracking-[2px] uppercase px-5 py-2.5 rounded-full transition-all duration-300 hover:bg-gold-light hover:scale-105 hover:shadow-lg active:scale-95"
            >
              Pay Now
            </Link>

            <a
              href="tel:+97142824305"
              className="flex items-center gap-2 text-forest hover:text-gold transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <div className="flex flex-col">
                <span className="text-[9px] font-semibold tracking-[1px] uppercase opacity-70">Landline:</span>
                <span className="text-[13px] font-bold tracking-wide">+971 42824305</span>
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
          <Link to="/" className="block py-4 text-[13px] font-medium tracking-widest text-forest-deeper uppercase border-b border-black/8" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="/about" className="block py-4 text-[13px] font-medium tracking-widest text-forest-deeper uppercase border-b border-black/8" onClick={() => setMobileOpen(false)}>About</Link>
          {['Countries', 'Testimonials'].map((item) => (
            <button
              key={item}
              onClick={() => handleSectionNav(item.toLowerCase())}
              className="w-full text-left block py-4 text-[13px] font-medium tracking-widest text-forest-deeper uppercase border-b border-black/8"
            >
              {item}
            </button>
          ))}
          <Link to="/contact" className="block py-4 text-[13px] font-medium tracking-widest text-forest-deeper uppercase border-b border-black/8" onClick={() => setMobileOpen(false)}>Contact</Link>

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
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block py-2 text-[12px] text-forest/70"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            to="/pay-now"
            className="mt-6 bg-gold text-forest-deeper text-[11px] font-bold tracking-[3px] uppercase py-4 text-center transition-all duration-300 hover:bg-gold-light active:scale-95"
            onClick={() => setMobileOpen(false)}
          >
            Pay Now
          </Link>

          <a
            href="tel:+97142824305"
            className="mt-2 flex items-center justify-center gap-2 py-4 text-[13px] font-semibold text-forest border-b border-black/8"
            onClick={() => setMobileOpen(false)}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            +971 42824305
          </a>
        </div>
      </div>
    </>
  )
}
