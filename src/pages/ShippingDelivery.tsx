
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ShippingDelivery = () => {
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
            SHIPPING AND DELIVERY
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
            <span>SHIPPING AND DELIVERY</span>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">SHIPPING AND DELIVERY</h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Any purchase will be considered an order once the full payment is received.
              </p>

              <p>
                Our payment gateway partner is Cashfree Payments and courtesy our partner we accept payments via netbanking, debit card, credit card and UPI.
              </p>

              <p>
                Our standard delivery time is 14-21 days. This delivery time assumes normal working conditions and can be longer in case of any unforeseen circumstances.
              </p>

              <p>
                We reserve the right to cancel your order at its sole discretion in cases where it takes longer than usual delivery time or the shipment is physically untraceable and refund the amount paid for cancelled product(s) to your source account.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Order Processing</h3>
              <p>
                Orders are processed within 1-2 business days after payment confirmation. You will receive an email confirmation with order details and tracking information once your order has been dispatched.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Shipping Charges</h3>
              <p>
                Shipping charges may vary based on the delivery location and product type. Any applicable shipping charges will be displayed during checkout before payment confirmation.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Delivery Areas</h3>
              <p>
                We currently deliver across major cities in India. For specific delivery availability in your area, please contact our customer support team at 1800 210 4567.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Tracking Your Order</h3>
              <p>
                Once your order is shipped, you will receive a tracking number via email and SMS. You can use this tracking number to monitor your shipment status on our website or the courier partner's website.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Delivery Issues</h3>
              <p>
                In case of any delivery issues such as damaged products, missing items, or delayed delivery, please contact our customer support team immediately. We will work to resolve the issue promptly.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Contact for Delivery Support</h3>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p><strong>Customer Support</strong></p>
                <p>Phone: 1800 210 4567</p>
                <p>Email: support@worksafe4567.com</p>
                <p>Working Hours: Monday to Friday, 9:00 AM to 6:00 PM</p>
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

export default ShippingDelivery
