import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageBanner from '../components/PageBanner/PageBanner'
import ScrollReveal from '../components/ScrollReveal/ScrollReveal'

const BANNER_IMG = 'https://images.unsplash.com/photo-1554224311-beee4f0058c1?auto=format&fit=crop&w=1920&q=80'

export default function PaymentCancelPage() {
  const [searchParams] = useSearchParams()
  const orderRef = searchParams.get('ref')
  const [countdown, setCountdown] = useState(15)

  useEffect(() => {
    // Clear pending payment data from localStorage
    localStorage.removeItem('pendingPaymentData')
    
    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          // Redirect to pay-now page after countdown
          window.location.href = '/pay-now'
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
            Payment <span className="text-gold italic">Cancelled</span>
          </>
        }
        subtitle="Your payment was not completed. You can try again or contact us for assistance."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Payment Cancelled' }]}
        image={BANNER_IMG}
        overlay={0.82}
      />

      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[800px] mx-auto px-6 lg:px-10">
          <ScrollReveal variant="fadeUp" className="text-center">
            {/* Cancel Icon */}
            <motion.div
              className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-8"
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.div>

            <h2 className="font-serif text-forest-deeper text-3xl lg:text-4xl font-bold mb-4">
              Payment Not Completed
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
              Your payment was cancelled or could not be processed. This could happen if the transaction
              was interrupted, declined by your bank, or you chose to cancel the payment.
            </p>

            {/* Common Reasons */}
            <div className="bg-white border border-black/10 p-8 text-left mb-8">
              <h3 className="font-serif text-forest-deeper text-xl font-semibold mb-6 text-center">
                Common Reasons for Payment Failure
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-forest font-semibold mb-1">Insufficient Funds</h4>
                    <p className="text-forest/60 text-[14px] leading-[1.7]">
                      Your card or account may not have enough balance. Please check and try again.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-forest font-semibold mb-1">Card Declined</h4>
                    <p className="text-forest/60 text-[14px] leading-[1.7]">
                      Your bank may have declined the transaction for security reasons. Contact your bank.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-forest font-semibold mb-1">Incorrect Card Details</h4>
                    <p className="text-forest/60 text-[14px] leading-[1.7]">
                      Please verify that your card number, expiry date, and CVV are entered correctly.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-forest font-semibold mb-1">Transaction Timeout</h4>
                    <p className="text-forest/60 text-[14px] leading-[1.7]">
                      The payment session may have expired. Please start a new transaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Alternative Payment Methods */}
            <div className="bg-forest-deeper p-8 text-white mb-8">
              <h3 className="font-serif text-xl font-semibold mb-4">Need Help with Payment?</h3>
              <p className="text-white/70 text-[14px] mb-6">
                Our team can assist you with alternative payment methods including bank transfers, installment
                plans, or other secure payment options.
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
                  <span>Call +971 565586006</span>
                </a>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 border border-gold text-gold px-6 py-3 hover:bg-gold hover:text-forest transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <span>Contact Support</span>
                </Link>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pay-now" className="btn-gold-solid" style={{ borderRadius: 2 }}>
                <span>Try Payment Again</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link to="/" className="btn-gold-outline" style={{ borderRadius: 2 }}>
                <span>Return to Home</span>
              </Link>
            </div>

            <p className="text-forest/40 text-[13px] mt-6">
              Redirecting to payment page in <span className="font-bold text-orange-500">{countdown}</span>{' '}
              seconds...
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
