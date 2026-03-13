import React, { useState } from 'react'
import { motion } from 'framer-motion'
import PageBanner from '../components/PageBanner/PageBanner'
import ScrollReveal from '../components/ScrollReveal/ScrollReveal'
import { sendContactEmail } from '../utils/emailService'

// Unsplash: modern Dubai business office / contact themed
const BANNER_IMG =
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80'

const contactDetails = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: 'Office Address',
    lines: ['2405, Single Business Tower,', 'Business Bay, Dubai, UAE'],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: 'Phone Numbers',
    lines: [
      { text: 'Mobile: +971 565586006', href: 'tel:+971565586006' },
      { text: 'Landline: +971 42824305', href: 'tel:+97142824305' },
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'Email Address',
    lines: [{ text: 'info@legacymigadv.com', href: 'mailto:info@legacymigadv.com' }],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Working Hours',
    lines: ['Monday – Saturday', '10:00 AM – 07:00 PM'],
  },
]

const initialForm = {
  fullName: '',
  phone: '',
  alternatePhone: '',
  email: '',
  country: '',
  visaType: '',
  nationality: '',
  dob: '',
  passportNumber: '',
  age: '',
  education: '',
  currentResidence: '',
  currentOccupation: '',
  timeline: '',
  workExperience: '',
  additionalComments: '',
}

export default function ContactPage() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.fullName.trim() || !form.phone.trim() || !form.email.trim()) {
      setError('Please fill in all required fields.')
      return
    }
    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.')
      return
    }
    
    setSubmitting(true)
    setError('')

    try {
      // Send email using ZeptoMail
      const result = await sendContactEmail({
        fullName: form.fullName,
        phone: form.phone,
        alternatePhone: form.alternatePhone,
        email: form.email,
        country: form.country,
        visaType: form.visaType,
        nationality: form.nationality,
        dob: form.dob,
        passportNumber: form.passportNumber,
        age: form.age,
        education: form.education,
        currentResidence: form.currentResidence,
        currentOccupation: form.currentOccupation,
        timeline: form.timeline,
        workExperience: form.workExperience,
        additionalComments: form.additionalComments,
      })

      if (!result.success) {
        setError('Failed to send message. Please try again or contact us directly.')
        setSubmitting(false)
        return
      }

      setSubmitting(false)
      setSubmitted(true)
      setForm(initialForm)
    } catch (err) {
      console.error('Submission error:', err)
      setError('An error occurred. Please try again or contact us directly.')
      setSubmitting(false)
    }
  }

  return (
    <>
      <PageBanner
        title={<>Get In <span className="text-gold italic">Touch</span></>}
        subtitle="We'd love to hear from you. Reach out for a free consultation or any enquiries about our immigration services."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Contact Us', href: '/contact' }]}
        image={BANNER_IMG}
        overlay={0.80}
      />

      {/* ── CONTACT DETAILS + FORM ── */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-12 xl:gap-20">

            {/* Left: contact info */}
            <div className="lg:col-span-2 flex flex-col gap-8">

              <ScrollReveal variant="fadeLeft">
                <span className="section-label">Contact Information</span>
                <h2 className="section-heading text-forest-deeper mb-4">
                  Feel Free to <span className="text-gold italic">Connect With Us</span>
                </h2>
                <p className="text-forest/65 text-[15px] leading-[1.9]">
                  Our team of expert immigration consultants is ready to assist you. Contact us via the
                  form, email, or call us directly during working hours.
                </p>
              </ScrollReveal>

              <div className="flex flex-col gap-6">
                {contactDetails.map((detail, i) => (
                  <motion.div
                    key={detail.label}
                    className="flex gap-4 items-start group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: i * 0.1 }}
                  >
                    <div className="w-12 h-12 flex-shrink-0 border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-forest-deeper transition-all duration-300">
                      {detail.icon}
                    </div>
                    <div>
                      <div className="text-[10px] tracking-[3px] text-gold uppercase font-semibold mb-1.5">
                        {detail.label}
                      </div>
                      {detail.lines.map((line, j) =>
                        typeof line === 'string' ? (
                          <p key={j} className="text-forest/70 text-[14px] leading-[1.7]">{line}</p>
                        ) : (
                          <a
                            key={j}
                            href={line.href}
                            className="block text-forest/70 text-[14px] leading-[1.7] hover:text-gold transition-colors duration-200"
                          >
                            {line.text}
                          </a>
                        )
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social links */}
              <motion.div
                className="pt-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="text-[10px] tracking-[3px] text-gold uppercase font-semibold mb-3">Follow Us</div>
                <div className="flex gap-3">
                  {[
                    { label: 'Facebook', href: 'https://www.facebook.com/LegacyMigrationAdv', icon: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /> },
                    { label: 'Instagram', href: 'https://instagram.com/legacymigrationadvisory', icon: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></> },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-9 h-9 border border-forest/20 flex items-center justify-center text-forest/50 hover:border-gold hover:text-gold transition-all duration-200"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        {s.icon}
                      </svg>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: form */}
            <ScrollReveal variant="fadeRight" delay={0.1} className="lg:col-span-3">
              <div className="bg-white p-8 lg:p-12 border border-black/6">
                <h3 className="font-serif text-forest-deeper text-2xl font-semibold mb-2">Send Us a Message</h3>
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
                    <h4 className="font-serif text-forest-deeper text-xl font-semibold mb-2">Message Sent!</h4>
                    <p className="text-forest/60 text-[14px] max-w-xs">
                      Thank you for reaching out. One of our consultants will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-[11px] tracking-[2px] uppercase text-gold hover:text-gold-dark underline transition-colors duration-200"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>

                    {/* Full Name */}
                    <div className="mb-5">
                      <label className="block text-[11px] tracking-[2px] uppercase text-forest/60 font-semibold mb-2">
                        Full Name <span className="text-gold">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="w-full border border-black/15 bg-cream/50 px-4 py-3 text-[14px] text-forest placeholder-forest/30 focus:outline-none focus:border-gold transition-colors duration-200"
                      />
                    </div>

                    {/* Phone + Alternate */}
                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-[11px] tracking-[2px] uppercase text-forest/60 font-semibold mb-2">
                          Phone Number <span className="text-gold">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+971 5X XXX XXXX"
                          required
                          className="w-full border border-black/15 bg-cream/50 px-4 py-3 text-[14px] text-forest placeholder-forest/30 focus:outline-none focus:border-gold transition-colors duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] tracking-[2px] uppercase text-forest/60 font-semibold mb-2">
                          Alternate Number
                        </label>
                        <input
                          type="tel"
                          name="alternatePhone"
                          value={form.alternatePhone}
                          onChange={handleChange}
                          placeholder="+971 5X XXX XXXX"
                          className="w-full border border-black/15 bg-cream/50 px-4 py-3 text-[14px] text-forest placeholder-forest/30 focus:outline-none focus:border-gold transition-colors duration-200"
                        />
                      </div>
                    </div>

                    {/* Email + Country */}
                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
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
                          className="w-full border border-black/15 bg-cream/50 px-4 py-3 text-[14px] text-forest placeholder-forest/30 focus:outline-none focus:border-gold transition-colors duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] tracking-[2px] uppercase text-forest/60 font-semibold mb-2">
                          Select Your Country
                        </label>
                        <select
                          name="country"
                          value={form.country}
                          onChange={handleChange}
                          className="w-full border border-black/15 bg-cream/50 px-4 py-3 text-[14px] text-forest focus:outline-none focus:border-gold transition-colors duration-200 appearance-none"
                        >
                          <option value="">Select country…</option>
                          <option>Afghanistan</option>
                          <option>Albania</option>
                          <option>Algeria</option>
                          <option>Andorra</option>
                          <option>Angola</option>
                          <option>Antigua and Barbuda</option>
                          <option>Argentina</option>
                          <option>Armenia</option>
                          <option>Australia</option>
                          <option>Austria</option>
                          <option>Azerbaijan</option>
                          <option>Bahamas</option>
                          <option>Bahrain</option>
                          <option>Bangladesh</option>
                          <option>Barbados</option>
                          <option>Belarus</option>
                          <option>Belgium</option>
                          <option>Belize</option>
                          <option>Benin</option>
                          <option>Bhutan</option>
                          <option>Bolivia</option>
                          <option>Bosnia and Herzegovina</option>
                          <option>Botswana</option>
                          <option>Brazil</option>
                          <option>Brunei</option>
                          <option>Bulgaria</option>
                          <option>Burkina Faso</option>
                          <option>Burundi</option>
                          <option>Cabo Verde</option>
                          <option>Cambodia</option>
                          <option>Cameroon</option>
                          <option>Canada</option>
                          <option>Central African Republic</option>
                          <option>Chad</option>
                          <option>Chile</option>
                          <option>China</option>
                          <option>Colombia</option>
                          <option>Comoros</option>
                          <option>Congo (DRC)</option>
                          <option>Congo (Republic)</option>
                          <option>Costa Rica</option>
                          <option>Croatia</option>
                          <option>Cuba</option>
                          <option>Cyprus</option>
                          <option>Czech Republic</option>
                          <option>Denmark</option>
                          <option>Djibouti</option>
                          <option>Dominica</option>
                          <option>Dominican Republic</option>
                          <option>Ecuador</option>
                          <option>Egypt</option>
                          <option>El Salvador</option>
                          <option>Equatorial Guinea</option>
                          <option>Eritrea</option>
                          <option>Estonia</option>
                          <option>Eswatini</option>
                          <option>Ethiopia</option>
                          <option>Fiji</option>
                          <option>Finland</option>
                          <option>France</option>
                          <option>Gabon</option>
                          <option>Gambia</option>
                          <option>Georgia</option>
                          <option>Germany</option>
                          <option>Ghana</option>
                          <option>Greece</option>
                          <option>Grenada</option>
                          <option>Guatemala</option>
                          <option>Guinea</option>
                          <option>Guinea-Bissau</option>
                          <option>Guyana</option>
                          <option>Haiti</option>
                          <option>Honduras</option>
                          <option>Hungary</option>
                          <option>Iceland</option>
                          <option>India</option>
                          <option>Indonesia</option>
                          <option>Iran</option>
                          <option>Iraq</option>
                          <option>Ireland</option>
                          <option>Israel</option>
                          <option>Italy</option>
                          <option>Ivory Coast</option>
                          <option>Jamaica</option>
                          <option>Japan</option>
                          <option>Jordan</option>
                          <option>Kazakhstan</option>
                          <option>Kenya</option>
                          <option>Kiribati</option>
                          <option>Kuwait</option>
                          <option>Kyrgyzstan</option>
                          <option>Laos</option>
                          <option>Latvia</option>
                          <option>Lebanon</option>
                          <option>Lesotho</option>
                          <option>Liberia</option>
                          <option>Libya</option>
                          <option>Liechtenstein</option>
                          <option>Lithuania</option>
                          <option>Luxembourg</option>
                          <option>Madagascar</option>
                          <option>Malawi</option>
                          <option>Malaysia</option>
                          <option>Maldives</option>
                          <option>Mali</option>
                          <option>Malta</option>
                          <option>Marshall Islands</option>
                          <option>Mauritania</option>
                          <option>Mauritius</option>
                          <option>Mexico</option>
                          <option>Micronesia</option>
                          <option>Moldova</option>
                          <option>Monaco</option>
                          <option>Mongolia</option>
                          <option>Montenegro</option>
                          <option>Morocco</option>
                          <option>Mozambique</option>
                          <option>Myanmar</option>
                          <option>Namibia</option>
                          <option>Nauru</option>
                          <option>Nepal</option>
                          <option>Netherlands</option>
                          <option>New Zealand</option>
                          <option>Nicaragua</option>
                          <option>Niger</option>
                          <option>Nigeria</option>
                          <option>North Korea</option>
                          <option>North Macedonia</option>
                          <option>Norway</option>
                          <option>Oman</option>
                          <option>Pakistan</option>
                          <option>Palau</option>
                          <option>Palestine</option>
                          <option>Panama</option>
                          <option>Papua New Guinea</option>
                          <option>Paraguay</option>
                          <option>Peru</option>
                          <option>Philippines</option>
                          <option>Poland</option>
                          <option>Portugal</option>
                          <option>Qatar</option>
                          <option>Romania</option>
                          <option>Russia</option>
                          <option>Rwanda</option>
                          <option>Saint Kitts and Nevis</option>
                          <option>Saint Lucia</option>
                          <option>Saint Vincent and the Grenadines</option>
                          <option>Samoa</option>
                          <option>San Marino</option>
                          <option>Sao Tome and Principe</option>
                          <option>Saudi Arabia</option>
                          <option>Senegal</option>
                          <option>Serbia</option>
                          <option>Seychelles</option>
                          <option>Sierra Leone</option>
                          <option>Singapore</option>
                          <option>Slovakia</option>
                          <option>Slovenia</option>
                          <option>Solomon Islands</option>
                          <option>Somalia</option>
                          <option>South Africa</option>
                          <option>South Korea</option>
                          <option>South Sudan</option>
                          <option>Spain</option>
                          <option>Sri Lanka</option>
                          <option>Sudan</option>
                          <option>Suriname</option>
                          <option>Sweden</option>
                          <option>Switzerland</option>
                          <option>Syria</option>
                          <option>Taiwan</option>
                          <option>Tajikistan</option>
                          <option>Tanzania</option>
                          <option>Thailand</option>
                          <option>Timor-Leste</option>
                          <option>Togo</option>
                          <option>Tonga</option>
                          <option>Trinidad and Tobago</option>
                          <option>Tunisia</option>
                          <option>Turkey</option>
                          <option>Turkmenistan</option>
                          <option>Tuvalu</option>
                          <option>Uganda</option>
                          <option>Ukraine</option>
                          <option>United Arab Emirates</option>
                          <option>United Kingdom</option>
                          <option>United States</option>
                          <option>Uruguay</option>
                          <option>Uzbekistan</option>
                          <option>Vanuatu</option>
                          <option>Vatican City</option>
                          <option>Venezuela</option>
                          <option>Vietnam</option>
                          <option>Yemen</option>
                          <option>Zambia</option>
                          <option>Zimbabwe</option>
                        </select>
                      </div>
                    </div>

                    {/* Visa Type + Nationality */}
                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-[11px] tracking-[2px] uppercase text-forest/60 font-semibold mb-2">
                          Select Visa Type
                        </label>
                        <select
                          name="visaType"
                          value={form.visaType}
                          onChange={handleChange}
                          className="w-full border border-black/15 bg-cream/50 px-4 py-3 text-[14px] text-forest focus:outline-none focus:border-gold transition-colors duration-200 appearance-none"
                        >
                          <option value="">Select visa type…</option>
                          <option>PR</option>
                          <option>Study</option>
                          <option>Visit Visa</option>
                          <option>Work Permit</option>
                          <option>Investor Visa</option>
                          <option>Citizenship Services</option>
                          <option>Others</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] tracking-[2px] uppercase text-forest/60 font-semibold mb-2">
                          Select Nationality
                        </label>
                        <select
                          name="nationality"
                          value={form.nationality}
                          onChange={handleChange}
                          className="w-full border border-black/15 bg-cream/50 px-4 py-3 text-[14px] text-forest focus:outline-none focus:border-gold transition-colors duration-200 appearance-none"
                        >
                          <option value="">Select nationality…</option>
                          <option>Indian</option>
                          <option>Pakistani</option>
                          <option>Chinese</option>
                          <option>Bangladeshi</option>
                          <option>Nepalese</option>
                          <option>Sri Lankan</option>
                          <option>Afghan</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Date + Passport */}
                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-[11px] tracking-[2px] uppercase text-forest/60 font-semibold mb-2">
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          name="dob"
                          value={form.dob}
                          onChange={handleChange}
                          className="w-full border border-black/15 bg-cream/50 px-4 py-3 text-[14px] text-forest focus:outline-none focus:border-gold transition-colors duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] tracking-[2px] uppercase text-forest/60 font-semibold mb-2">
                          Passport Number
                        </label>
                        <input
                          type="text"
                          name="passportNumber"
                          value={form.passportNumber}
                          onChange={handleChange}
                          placeholder="A12345678"
                          className="w-full border border-black/15 bg-cream/50 px-4 py-3 text-[14px] text-forest placeholder-forest/30 focus:outline-none focus:border-gold transition-colors duration-200"
                        />
                      </div>
                    </div>

                    {/* Age + Education */}
                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-[11px] tracking-[2px] uppercase text-forest/60 font-semibold mb-2">
                          Age
                        </label>
                        <input
                          type="number"
                          name="age"
                          value={form.age}
                          onChange={handleChange}
                          placeholder="e.g. 32"
                          min="18"
                          max="99"
                          className="w-full border border-black/15 bg-cream/50 px-4 py-3 text-[14px] text-forest placeholder-forest/30 focus:outline-none focus:border-gold transition-colors duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] tracking-[2px] uppercase text-forest/60 font-semibold mb-2">
                          Highest Education
                        </label>
                        <input
                          type="text"
                          name="education"
                          value={form.education}
                          onChange={handleChange}
                          placeholder="e.g. Bachelor's Degree"
                          className="w-full border border-black/15 bg-cream/50 px-4 py-3 text-[14px] text-forest placeholder-forest/30 focus:outline-none focus:border-gold transition-colors duration-200"
                        />
                      </div>
                    </div>

                    {/* Current Residence + Occupation */}
                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-[11px] tracking-[2px] uppercase text-forest/60 font-semibold mb-2">
                          Current Residence
                        </label>
                        <input
                          type="text"
                          name="currentResidence"
                          value={form.currentResidence}
                          onChange={handleChange}
                          placeholder="City, Country"
                          className="w-full border border-black/15 bg-cream/50 px-4 py-3 text-[14px] text-forest placeholder-forest/30 focus:outline-none focus:border-gold transition-colors duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] tracking-[2px] uppercase text-forest/60 font-semibold mb-2">
                          Current Occupation
                        </label>
                        <input
                          type="text"
                          name="currentOccupation"
                          value={form.currentOccupation}
                          onChange={handleChange}
                          placeholder="e.g. Software Engineer"
                          className="w-full border border-black/15 bg-cream/50 px-4 py-3 text-[14px] text-forest placeholder-forest/30 focus:outline-none focus:border-gold transition-colors duration-200"
                        />
                      </div>
                    </div>

                    {/* Timeline + Work Experience */}
                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-[11px] tracking-[2px] uppercase text-forest/60 font-semibold mb-2">
                          Select Timeline
                        </label>
                        <select
                          name="timeline"
                          value={form.timeline}
                          onChange={handleChange}
                          className="w-full border border-black/15 bg-cream/50 px-4 py-3 text-[14px] text-forest focus:outline-none focus:border-gold transition-colors duration-200 appearance-none"
                        >
                          <option value="">Select timeline…</option>
                          <option>As soon as possible</option>
                          <option>Within 3 months</option>
                          <option>Within 6 months</option>
                          <option>Within 1 year</option>
                          <option>More than 1 year</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] tracking-[2px] uppercase text-forest/60 font-semibold mb-2">
                          Total Work Experience (Years)
                        </label>
                        <input
                          type="number"
                          name="workExperience"
                          value={form.workExperience}
                          onChange={handleChange}
                          placeholder="e.g. 5"
                          min="0"
                          className="w-full border border-black/15 bg-cream/50 px-4 py-3 text-[14px] text-forest placeholder-forest/30 focus:outline-none focus:border-gold transition-colors duration-200"
                        />
                      </div>
                    </div>

                    {/* Additional Comments */}
                    <div className="mb-6">
                      <label className="block text-[11px] tracking-[2px] uppercase text-forest/60 font-semibold mb-2">
                        Additional Comments
                      </label>
                      <textarea
                        name="additionalComments"
                        value={form.additionalComments}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Any additional information or specific queries…"
                        className="w-full border border-black/15 bg-cream/50 px-4 py-3 text-[14px] text-forest placeholder-forest/30 focus:outline-none focus:border-gold transition-colors duration-200 resize-none"
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
                          <span>Sending…</span>
                        </>
                      ) : (
                        <>
                          <span>Get In Touch</span>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── GOOGLE MAP EMBED PLACEHOLDER ── */}
      <section className="bg-white">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 pb-24 lg:pb-32">
          <ScrollReveal variant="fadeUp">
            <div className="w-full overflow-hidden border border-black/8" style={{ height: 420 }}>
              <iframe
                title="Legacy Migration Advisory — Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178530067587!2d55.2641!3d25.1857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d9a9f4d2a7%3A0x5d7a1b4f43f91b6!2sSingle%20Business%20Tower%2C%20Business%20Bay%2C%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
