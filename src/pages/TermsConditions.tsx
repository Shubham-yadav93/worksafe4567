
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'

const TermsConditions = () => {
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
            TERMS & CONDITIONS
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
            <span>TERMS & CONDITIONS</span>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">TERMS & CONDITIONS</h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Welcome to WorkSafe4567. These Terms and Conditions govern your use of our safety services and platform. By accessing or using our services, you agree to be bound by these terms.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h3>
              <p>
                By accessing and using WorkSafe4567 services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Service Description</h3>
              <p>
                WorkSafe4567 provides safety solutions including Workforce Wellbeing and Senior Citizen Safety services through advanced AI, IoT, and cloud technologies. Our services are designed to enhance safety and security for individuals and organizations.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. User Responsibilities</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information when registering for our services</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use our services in compliance with applicable laws and regulations</li>
                <li>Not misuse or attempt to gain unauthorized access to our systems</li>
                <li>Report any security breaches or unauthorized use of your account</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Payment Terms</h3>
              <p>
                Payment for our services is due according to the billing cycle selected during subscription. We accept various payment methods including credit cards, debit cards, and UPI. All prices are in Indian Rupees (INR).
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Subscription and Cancellation</h3>
              <p>
                Subscriptions automatically renew unless cancelled before the renewal date. You may cancel your subscription at any time through your account settings or by contacting our support team. Refunds are subject to our refund policy.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Limitation of Liability</h3>
              <p>
                WorkSafe4567 shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Privacy</h3>
              <p>
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the services, to understand our practices.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">8. Modifications</h3>
              <p>
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of the service constitutes acceptance of the modified terms.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">9. Governing Law</h3>
              <p>
                These Terms and Conditions are governed by the laws of India. Any disputes arising from these terms shall be subject to the jurisdiction of courts in Mumbai, Maharashtra.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">10. Contact Information</h3>
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

export default TermsConditions
