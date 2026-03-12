import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PayNowPage from './pages/PayNowPage'
import PaymentSuccessPage from './pages/PaymentSuccessPage'
import PaymentCancelPage from './pages/PaymentCancelPage'
import {
  DominicaCitizenshipPage,
  SaintKittsNevisCitizenshipPage,
  VanuatuCitizenshipPage,
  SaintLuciaCitizenshipPage,
} from './pages/citizenship'
import { ResidencyPage } from './pages/residency'
import { WorkVisaPage } from './pages/work-visa'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<Layout />}>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pay-now" element={<PayNowPage />} />
        <Route path="/payment-success" element={<PaymentSuccessPage />} />
        <Route path="/payment-cancel" element={<PaymentCancelPage />} />
        
        {/* Citizenship by Investment Routes */}
        <Route path="/citizenship/dominica" element={<DominicaCitizenshipPage />} />
        <Route path="/citizenship/saint-kitts-nevis" element={<SaintKittsNevisCitizenshipPage />} />
        <Route path="/citizenship/vanuatu" element={<VanuatuCitizenshipPage />} />
        <Route path="/citizenship/saint-lucia" element={<SaintLuciaCitizenshipPage />} />
        
        {/* Residency by Investment Routes - Dynamic route for all countries */}
        <Route path="/residency/:country" element={<ResidencyPage />} />
        
        {/* Work Visa Routes - Dynamic route for all programs */}
        <Route path="/work-visa/:program" element={<WorkVisaPage />} />
      </Route>
    </Routes>
  )
}
