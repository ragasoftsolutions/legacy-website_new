import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageBanner from '../components/PageBanner/PageBanner'
import ScrollReveal from '../components/ScrollReveal/ScrollReveal'
import { sendPaymentEmail } from '../utils/emailService'

const BANNER_IMG = 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&w=1920&q=80'

export default function PaymentSuccessPage() {
  const [searchParams] = useSearchParams()
  const orderRef = searchParams.get('ref')
  const [countdown, setCountdown] = useState(10)
  const [emailSent, setEmailSent] = useState(false)
  const [emailError, setEmailError] = useState(false)

  useEffect(() => {
    // Send email notification for successful payment
    const sendPaymentConfirmation = async () => {
      try {
        // Retrieve payment data from localStorage
        const pendingDataStr = localStorage.getItem('pendingPaymentData')
        
        if (pendingDataStr) {
          const paymentData = JSON.parse(pendingDataStr)
          
          // Check if data is not too old (max 1 hour)
          const dataAge = Date.now() - paymentData.timestamp
          if (dataAge < 3600000) {
            console.log('Sending payment confirmation email...')
            
            const emailResult = await sendPaymentEmail({
              name: paymentData.name,
              email: paymentData.email,
              phone: paymentData.phone,
              serviceType: paymentData.serviceType,
              amount: paymentData.amount,
              notes: paymentData.notes,
            })

            if (emailResult.success) {
              console.log('Payment confirmation email sent successfully')
              setEmailSent(true)
            } else {
              console.error('Failed to send payment confirmation email')
              setEmailError(true)
            }
          }
          
          // Clear the stored data
          localStorage.removeItem('pendingPaymentData')
        }
      } catch (error) {
        console.error('Error sending payment confirmation:', error)
        setEmailError(true)
      }
    }

    sendPaymentConfirmation()

    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          // Redirect to home after countdown
          window.location.href = '/'
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <PageBanner
        title={
          <>
            Payment <span className="text-gold italic">Successful</span>
          </>
        }
        subtitle="Your payment has been processed successfully. Thank you for choosing Legacy Migration Advisory."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Payment Success' }]}
        image={BANNER_IMG}
        overlay={0.75}
      />

      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[800px] mx-auto px-6 lg:px-10">
          <ScrollReveal variant="fadeUp" className="text-center">
            {/* Success Icon */}
            <motion.div
              className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', duration: 0.6, delay: 0.2 }}
            >
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>

            <h2 className="font-serif text-forest-deeper text-3xl lg:text-4xl font-bold mb-4">
              Payment Confirmed!
            </h2>

            {orderRef && (
              <div className="bg-white border border-black/10 p-6 mb-8 inline-block">
                <p className="text-[11px] tracking-[2px] uppercase text-forest/60 font-semibold mb-2">
                  Order Reference
                </p>
                <p className="font-mono text-forest text-lg font-semibold">{orderRef}</p>
              </div>
            )}

            <p className="text-forest/70 text-[15px] leading-[1.9] mb-8 max-w-2xl mx-auto">
              Your payment has been successfully processed. {emailSent ? 'A confirmation email has been sent to your registered email address.' : emailError ? 'We are processing your confirmation email.' : 'Processing confirmation email...'} Our team will contact you shortly with the next steps for your
              migration journey.
            </p>

            {/* What's Next Section */}
            <div className="bg-white border border-black/10 p-8 text-left mb-8">
              <h3 className="font-serif text-forest-deeper text-xl font-semibold mb-6 text-center">
                What Happens Next?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gold font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="text-forest font-semibold mb-1">Email Confirmation</h4>
                    <p className="text-forest/60 text-[14px] leading-[1.7]">
                      You'll receive a detailed payment receipt via email within 5-10 minutes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gold font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="text-forest font-semibold mb-1">Consultant Assignment</h4>
                    <p className="text-forest/60 text-[14px] leading-[1.7]">
                      Our expert consultant will be assigned to your case within 24 hours.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gold font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="text-forest font-semibold mb-1">Initial Consultation</h4>
                    <p className="text-forest/60 text-[14px] leading-[1.7]">
                      We'll schedule your first consultation call to discuss your requirements and timeline.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gold font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="text-forest font-semibold mb-1">Document Collection</h4>
                    <p className="text-forest/60 text-[14px] leading-[1.7]">
                      We'll provide a comprehensive checklist of required documents for your application.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-forest-deeper p-8 text-white">
              <h3 className="font-serif text-xl font-semibold mb-4">Need Immediate Assistance?</h3>
              <p className="text-white/70 text-[14px] mb-6">
                Our team is available Mon–Sat, 10AM to 7PM UAE Time
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+971565586006"
                  className="flex items-center justify-center gap-2 bg-gold text-forest px-6 py-3 hover:bg-gold-dark transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  <span>+971 565586006</span>
                </a>
                <a
                  href="mailto:info@legacymigadv.com"
                  className="flex items-center justify-center gap-2 border border-gold text-gold px-6 py-3 hover:bg-gold hover:text-forest transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <span>Email Us</span>
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link to="/" className="btn-gold-solid" style={{ borderRadius: 2 }}>
                <span>Return to Home</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link to="/contact" className="btn-gold-outline" style={{ borderRadius: 2 }}>
                <span>Contact Support</span>
              </Link>
            </div>

            <p className="text-forest/40 text-[13px] mt-6">
              Redirecting to home page in <span className="font-bold text-gold">{countdown}</span> seconds...
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
