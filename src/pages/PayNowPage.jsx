import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner/PageBanner'
import ScrollReveal from '../components/ScrollReveal/ScrollReveal'

// Unsplash: secure payment / finance themed
const BANNER_IMG =
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1920&q=80'

const paymentMethods = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    title: 'Credit / Debit Card',
    desc: 'Pay securely using Visa, Mastercard, or American Express. All card payments are encrypted via SSL.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
    title: 'Bank Transfer',
    desc: 'Transfer funds directly to our official bank account. Details provided upon confirmed booking.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: 'Online Payment Portal',
    desc: 'Use our secure online payment gateway to complete transactions quickly from anywhere.',
  },
]

const faqs = [
  {
    q: 'When is payment required?',
    a: 'Payment is required once you have agreed to our services and before we begin processing your application. A detailed service agreement will be provided.',
  },
  {
    q: 'Are there any hidden charges?',
    a: 'Absolutely not. We believe in full transparency — all fees are clearly outlined in your service agreement before you make any payment.',
  },
  {
    q: 'Can I pay in instalments?',
    a: 'Yes, instalment plans are available for certain services. Please contact us to discuss a payment schedule that works for you.',
  },
  {
    q: 'Is my payment information secure?',
    a: 'Yes. All online payments are processed through encrypted, PCI-DSS compliant gateways. We do not store card details on our servers.',
  },
  {
    q: 'What currency do you accept?',
    a: 'We primarily accept UAE Dirhams (AED). International wire transfers in USD, GBP, or EUR are also accepted. Contact us for details.',
  },
  {
    q: 'What is your refund policy?',
    a: 'Refunds are subject to the terms outlined in your service agreement. If your case cannot proceed due to an issue on our end, a full refund is provided.',
  },
]

const initialForm = { name: '', email: '', phone: '', serviceType: '', amount: '', notes: '' }

export default function PayNowPage() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [openFaq, setOpenFaq] = useState(null)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.serviceType) {
      setError('Please fill in all required fields.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.')
      return
    }
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1200))
    setSubmitting(false)
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <>
      <PageBanner
        title={<>Secure <span className="text-gold italic">Payment</span> Portal</>}
        subtitle="Complete your payment safely and quickly. All transactions are encrypted and fully secured."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Pay Now', href: '/pay-now' }]}
        image={BANNER_IMG}
        overlay={0.82}
      />

      {/* ── INTRO STRIP ── */}
      <section className="bg-forest-deeper py-12">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <svg className="w-8 h-8 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
              <p className="text-white/70 text-[14px] leading-[1.7] max-w-xl">
                Your payment is protected by SSL encryption. We accept credit/debit cards, bank transfers, and online payment gateways.
              </p>
            </div>
            <div className="flex items-center gap-6 flex-shrink-0">
              {/* Security badges */}
              {['SSL Secure', 'PCI Compliant', 'Encrypted'].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <span className="text-[11px] tracking-[2px] text-white/50 uppercase">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PAYMENT METHODS ── */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">

          <ScrollReveal variant="fadeUp" className="text-center mb-16">
            <span className="section-label" style={{ justifyContent: 'center' }}>How to Pay</span>
            <h2 className="section-heading text-forest-deeper mx-auto">
              Accepted <span className="text-gold italic">Payment Methods</span>
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-0 border border-black/8">
            {paymentMethods.map((method, i) => (
              <motion.div
                key={method.title}
                className="p-10 border-r border-black/8 last:border-r-0 group hover:bg-forest-deeper transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div className="w-16 h-16 border border-gold/40 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:border-gold group-hover:text-forest-deeper transition-all duration-300">
                  {method.icon}
                </div>
                <h3 className="font-serif text-forest-deeper text-xl font-semibold mb-3 group-hover:text-white transition-colors duration-300">
                  {method.title}
                </h3>
                <p className="text-forest/60 text-[13.5px] leading-[1.8] group-hover:text-white/65 transition-colors duration-300">
                  {method.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAYMENT REQUEST FORM + CONTACT ── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-12 xl:gap-20">

            {/* Left: info */}
            <div className="lg:col-span-2">
              <ScrollReveal variant="fadeLeft">
                <span className="section-label">Make a Payment</span>
                <h2 className="section-heading text-forest-deeper mb-5">
                  Submit Your <span className="text-gold italic">Payment Details</span>
                </h2>
                <p className="text-forest/65 text-[15px] leading-[1.9] mb-8">
                  Fill in the form and one of our consultants will reach out to confirm your payment and advise on the next steps for your immigration journey.
                </p>

                {/* Quick contact */}
                <div className="bg-cream p-6 border border-gold/20 space-y-4">
                  <div className="text-[10px] tracking-[3px] text-gold uppercase font-semibold mb-2">Need Help?</div>
                  <a href="tel:+971565586006" className="flex items-center gap-3 text-forest/70 hover:text-gold transition-colors duration-200 text-[14px]">
                    <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    Mobile: +971 565586006
                  </a>
                  <a href="tel:+97142824305" className="flex items-center gap-3 text-forest/70 hover:text-gold transition-colors duration-200 text-[14px]">
                    <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    Landline: +971 42824305
                  </a>
                  <a href="mailto:info@legacymigadv.com" className="flex items-center gap-3 text-forest/70 hover:text-gold transition-colors duration-200 text-[14px]">
                    <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    info@legacymigadv.com
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: form */}
            <ScrollReveal variant="fadeRight" delay={0.1} className="lg:col-span-3">
              <div className="bg-cream p-8 lg:p-12 border border-black/6">
                <h3 className="font-serif text-forest-deeper text-2xl font-semibold mb-2">Payment Request Form</h3>
                <div className="w-10 h-0.5 bg-gold mb-8" />

                {submitted ? (
                  <motion.div
                    className="flex flex-col items-center justify-center py-16 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-16 h-16 bg-gold/10 flex items-center justify-center mb-5">
                      <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h4 className="font-serif text-forest-deeper text-xl font-semibold mb-2">Request Received!</h4>
                    <p className="text-forest/60 text-[14px] max-w-xs leading-[1.7]">
                      Thank you. Our team will contact you within 24 hours to confirm payment details and next steps.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-[11px] tracking-[2px] uppercase text-gold hover:text-gold-dark underline transition-colors duration-200"
                    >
                      Submit Another Request
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-[11px] tracking-[2px] uppercase text-forest/60 font-semibold mb-2">
                          Full Name <span className="text-gold">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="w-full border border-black/15 bg-white px-4 py-3 text-[14px] text-forest placeholder-forest/30 focus:outline-none focus:border-gold transition-colors duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] tracking-[2px] uppercase text-forest/60 font-semibold mb-2">
                          Email Address <span className="text-gold">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          required
                          className="w-full border border-black/15 bg-white px-4 py-3 text-[14px] text-forest placeholder-forest/30 focus:outline-none focus:border-gold transition-colors duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] tracking-[2px] uppercase text-forest/60 font-semibold mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+971 5X XXX XXXX"
                          className="w-full border border-black/15 bg-white px-4 py-3 text-[14px] text-forest placeholder-forest/30 focus:outline-none focus:border-gold transition-colors duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] tracking-[2px] uppercase text-forest/60 font-semibold mb-2">
                          Service Type <span className="text-gold">*</span>
                        </label>
                        <select
                          name="serviceType"
                          value={form.serviceType}
                          onChange={handleChange}
                          required
                          className="w-full border border-black/15 bg-white px-4 py-3 text-[14px] text-forest focus:outline-none focus:border-gold transition-colors duration-200 appearance-none"
                        >
                          <option value="">Select a service…</option>
                          <option>Skilled Immigration</option>
                          <option>Residency by Investment</option>
                          <option>Citizenship by Investment</option>
                          <option>Work Permit / Visa</option>
                          <option>Tourist Visa</option>
                          <option>Consultation Fee</option>
                          <option>Document Processing</option>
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-[11px] tracking-[2px] uppercase text-forest/60 font-semibold mb-2">
                          Payment Amount (AED)
                        </label>
                        <input
                          type="number"
                          name="amount"
                          value={form.amount}
                          onChange={handleChange}
                          placeholder="e.g. 2500"
                          min="0"
                          className="w-full border border-black/15 bg-white px-4 py-3 text-[14px] text-forest placeholder-forest/30 focus:outline-none focus:border-gold transition-colors duration-200"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-[11px] tracking-[2px] uppercase text-forest/60 font-semibold mb-2">
                        Additional Notes
                      </label>
                      <textarea
                        name="notes"
                        value={form.notes}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Any additional information about your payment…"
                        className="w-full border border-black/15 bg-white px-4 py-3 text-[14px] text-forest placeholder-forest/30 focus:outline-none focus:border-gold transition-colors duration-200 resize-none"
                      />
                    </div>

                    {error && (
                      <p className="text-red-600 text-[13px] mb-4">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-gold-solid w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                      style={{ borderRadius: 2 }}
                    >
                      {submitting ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          <span>Processing…</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Payment Request</span>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </>
                      )}
                    </button>

                    <p className="text-forest/40 text-[11px] text-center mt-4">
                      By submitting, you agree to our{' '}
                      <Link to="/privacy-policy" className="underline hover:text-gold transition-colors duration-200">
                        Privacy Policy
                      </Link>
                      . No card details are stored on our servers.
                    </p>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[900px] mx-auto px-6 lg:px-10">

          <ScrollReveal variant="fadeUp" className="text-center mb-16">
            <span className="section-label" style={{ justifyContent: 'center' }}>Payment FAQs</span>
            <h2 className="section-heading text-forest-deeper mx-auto">
              Frequently Asked <span className="text-gold italic">Questions</span>
            </h2>
          </ScrollReveal>

          <div className="flex flex-col divide-y divide-black/8 border border-black/8">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <button
                  className="w-full flex justify-between items-center px-6 py-5 text-left group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-sans text-forest-deeper text-[15px] font-medium group-hover:text-gold transition-colors duration-200 pr-4">
                    {faq.q}
                  </span>
                  <span className={`text-gold text-xl transition-transform duration-300 flex-shrink-0 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                {openFaq === i && (
                  <motion.div
                    className="px-6 pb-5"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-forest/65 text-[14px] leading-[1.8] border-l-2 border-gold pl-4">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="relative overflow-hidden py-20">
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
            background: 'linear-gradient(135deg, rgba(13, 35, 24, 0.90) 0%, rgba(27, 58, 45, 0.90) 100%)',
          }}
        />
        
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 relative z-10">
          <ScrollReveal variant="fadeUp" className="text-center">
            <h2 className="font-serif text-white font-bold mb-4" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
              Have Questions About <span className="text-gold italic">Payment?</span>
            </h2>
            <p className="text-white/60 text-[15px] mb-8 max-w-md mx-auto">
              Our team is available Mon–Sat, 10AM to 7PM. Reach out and we'll guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-gold-solid"
                style={{ borderRadius: 2 }}
              >
                <span>Contact Us</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href="tel:+97142824305"
                className="btn-gold-outline"
                style={{ borderRadius: 2 }}
              >
                <span>Call Us Now</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
