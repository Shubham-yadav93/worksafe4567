
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import PlatformServices from './pages/PlatformServices'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import ShippingDelivery from './pages/ShippingDelivery'
import ReturnRefund from './pages/ReturnRefund'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/platform-services" element={<PlatformServices />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/shipping-delivery" element={<ShippingDelivery />} />
          <Route path="/return-refund" element={<ReturnRefund />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
