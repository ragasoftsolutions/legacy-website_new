import React from 'react'
import { Link } from 'react-router-dom'
import { Linkedin, Facebook, Instagram } from 'lucide-react'
import { X } from 'lucide-react'

const TreeIcon = () => (
  <svg className="w-9 h-9" viewBox="0 0 100 100" fill="none">
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

const quickLinks = ['Home', 'About', 'Contact US', 'Privacy Policy']
const immigrationLinks = [
  'UK Skilled Immigration',
  'Australia General Skilled Migration',
  'Canada Express Entry Program',
  'Poland Work Permits',
]

export default function Footer() {
  return (
    <footer className="bg-forest-darkest border-t border-white/8">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-16 lg:py-20">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <img src="/logo.png" alt="Legacy Migration Advisory" className="h-14 mb-5" />
            <p className="text-white/40 text-[12.5px] leading-[1.9] italic mb-6">
              Trusted Immigration & Visa Consulting – Your Gateway to a Better Future.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/40 hover:border-gold hover:text-gold transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/40 hover:border-gold hover:text-gold transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/40 hover:border-gold hover:text-gold transition-all duration-200"
                aria-label="X (Twitter)"
              >
                <X size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/40 hover:border-gold hover:text-gold transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-white text-lg font-semibold mb-5 pb-3 border-b border-white/10">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {quickLinks.map((l) => (
                <a
                  key={l}
                  href="#"
                  className="text-white/45 text-[12.5px] hover:text-gold hover:pl-2 transition-all duration-200"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Immigration Types */}
          <div>
            <h4 className="font-serif text-white text-lg font-semibold mb-5 pb-3 border-b border-white/10">
              Immigration Types
            </h4>
            <div className="flex flex-col gap-2">
              {immigrationLinks.map((l) => (
                <a
                  key={l}
                  href="#"
                  className="text-white/45 text-[12.5px] hover:text-gold hover:pl-2 transition-all duration-200"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-white text-lg font-semibold mb-5 pb-3 border-b border-white/10">
              Contact Us
            </h4>
            <div className="flex flex-col gap-5">
              <div className="flex gap-3">
                <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="text-white/45 text-[12.5px] leading-relaxed">
                  2405, Single Business Tower<br />Business Bay, Dubai, UAE
                </span>
              </div>

              <div className="flex gap-3">
                <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white/45 text-[12.5px] leading-relaxed">
                  10:00am – 7:00pm<br />Monday to Saturday
                </span>
              </div>

              <div className="flex gap-3">
                <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href="tel:+971565586006" className="text-white/45 text-[12.5px] hover:text-gold transition-colors">
                  +971565586006
                </a>
              </div>

              <div className="flex gap-3">
                <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:info@legacymigadv.com" className="text-white/45 text-[12.5px] hover:text-gold transition-colors">
                  info@legacymigadv.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/8 pt-7 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/25 text-[11px] tracking-[2px]">
            © {new Date().getFullYear()} LEGACY MIGRATION ADVISORY. ALL RIGHTS RESERVED.
          </p>
          <p className="text-white/20 text-[11px] tracking-[2px]">
            BUSINESS BAY · DUBAI · UAE
          </p>
        </div>
      </div>
    </footer>
  )
}
