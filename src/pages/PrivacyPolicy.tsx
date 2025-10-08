
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            PRIVACY POLICY
          </motion.h1>
          
          <motion.div
            className="flex items-center justify-center space-x-2 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link to="/" className="text-red-600 hover:text-red-700 transition-colors">
              Home
            </Link>
            <span>&gt;&gt;</span>
            <span>PRIVACY POLICY</span>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">PRIVACY POLICY</h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                At WorkSafe4567, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Information We Collect</h3>
              <p>
                We collect information you provide directly to us, such as when you create an account, subscribe to our services, or contact us for support. This may include your name, email address, phone number, and payment information.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">How We Use Your Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our safety services</li>
                <li>To process transactions and send related information</li>
                <li>To send you technical notices and support messages</li>
                <li>To communicate with you about products, services, and events</li>
                <li>To monitor and analyze usage patterns to improve our services</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Information Sharing and Disclosure</h3>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with trusted service providers who assist us in operating our services.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Data Security</h3>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Your Rights</h3>
              <p>
                You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us. To exercise these rights, please contact us at support@worksafe4567.com.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Changes to This Policy</h3>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h3>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p><strong>Zimaxe Tech Solutions Private Limited</strong></p>
                <p>4D, Chimbai Lane, Off Hill Road</p>
                <p>Bandra West, Mumbai 400050</p>
                <p>Email: support@worksafe4567.com</p>
                <p>Phone: 1800 210 4567</p>
              </div>

              <p className="text-sm text-gray-500 mt-8">
                <strong>Last updated:</strong> December 2024
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default PrivacyPolicy
