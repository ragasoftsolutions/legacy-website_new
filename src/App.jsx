import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PayNowPage from './pages/PayNowPage'
import {
  DominicaCitizenshipPage,
  SaintKittsNevisCitizenshipPage,
  VanuatuCitizenshipPage,
  SaintLuciaCitizenshipPage,
} from './pages/citizenship'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<Layout />}>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pay-now" element={<PayNowPage />} />
        
        {/* Citizenship by Investment Routes */}
        <Route path="/citizenship/dominica" element={<DominicaCitizenshipPage />} />
        <Route path="/citizenship/saint-kitts-nevis" element={<SaintKittsNevisCitizenshipPage />} />
        <Route path="/citizenship/vanuatu" element={<VanuatuCitizenshipPage />} />
        <Route path="/citizenship/saint-lucia" element={<SaintLuciaCitizenshipPage />} />
      </Route>
    </Routes>
  )
}
