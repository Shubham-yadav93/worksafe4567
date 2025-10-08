
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {Shield, Users, Heart, Zap, Phone, Monitor, AlertCircle, Clock, CheckCircle, ArrowRight, Crown, Star} from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const PlatformServices = () => {
  const [activeTab, setActiveTab] = useState('workforce')
  const [plansRef, plansInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [clientsRef, clientsInView] = useInView({ threshold: 0.3, triggerOnce: true })

  const tabs = [
    {
      id: 'workforce',
      title: 'Workforce Wellbeing',
      icon: Users,
      color: 'from-blue-600 to-blue-700'
    },
    {
      id: 'senior',
      title: 'Senior Citizen Safety',
      icon: Heart,
      color: 'from-red-600 to-red-700'
    }
  ]

  const workforceBasicFeatures = [
    'Panic Alert Services: In a panic situation, your emergency contacts will be informed together with your location details.',
    'PoSH: Electronically gather proof of workplace sexual harassment.',
    'Corporate News Board: Current business announcements and other noteworthy news.',
    'Roadside Assistance: In the event of a vehicle breakdown, or roadside risks, we offer assistance 24/7.',
    'Home Watch: You can watch your house or your loved ones from anywhere, anytime.',
    'Locate Me: Find the people closest to you in real-time.',
    'What\'s Nearby: Information on emergency services like Hospitals, Blood banks, ATMs, etc is available with just a click.',
    'Customer Support: We are available for support via email and our toll-free number 1800 210 4567.'
  ]

  const workforceAdvancedFeatures = [
    '24/7 Safety Command Station: The core hub of our services, operational 24/7.',
    'Emergency SOS (voice activated): Obtain immediate assistance in any emergency.',
    'Mircofin: Find your misplaced personal items and get them back.',
    'Ambulance Service: Call for help in case of a medical emergency.',
    'Travel Safe: If you\'re going anywhere alone, have a safety companion.',
    'Personal Counselling: Seek professional online guidance on mental health concerns.'
  ]

  const seniorBasicFeatures = [
    '24/7 Senior Citizen Safety Station: The core hub of our services, open 24/7. Always awake.',
    'Emergency SOS (voice activated): Obtain immediate assistance in any emergency.',
    'Fall Detection: To detect when a fall occurs and automatically send an alert to an emergency Contacts.',
    'Travel Safe: If you\'re going anywhere alone, have a safety companion.',
    'Activity Reminder: An automated daily reminder of the various activities like medication, food, sleep, walking, BP Monitoring, etc.',
    'Roadside Assistance: In the event of a vehicle breakdown, or roadside risks, we offer assistance 24/7.',
    'Home Watch: You can watch your house or your loved ones from anywhere, anytime.',
    'Locate Me: Find the people closest to you in real-time.',
    'What\'s Nearby: Information on emergency services like Hospitals, Blood banks, ATMs, etc is available with just a click.',
    'Community News Board: One can share valuable updates or receive information in text, video, or audio on various facets for better living.',
    'Customer Support: We are available for support via email and our toll-free number 1800 210 4567.'
  ]

  const seniorAdvancedFeatures = [
    'Mira QR: Find your misplaced personal items and get them back.',
    'Ambulance Service: Call for help in case of a medical emergency.',
    'Personal Counselling: Seek professional online guidance on mental health concerns.'
  ]

  // Combined features for the new Advanced plan
  const combinedAdvancedFeatures = [
    // Workforce Wellbeing features
    'Panic Alert Services: Emergency contacts informed with location details',
    'PoSH: Electronic workplace harassment proof gathering',
    'Corporate News Board: Business announcements and news',
    '24/7 Safety Command Station: Core operational hub',
    'Emergency SOS (voice activated): Immediate assistance',
    'Mircofin: Personal item recovery service',
    'Travel Safe: Safety companion for solo travel',
    'Personal Counselling: Professional mental health guidance',
    
    // Senior Citizen Safety features
    '24/7 Senior Citizen Safety Station: Dedicated senior support hub',
    'Fall Detection: Automatic fall alert system',
    'Activity Reminder: Daily activity notifications',
    'Community News Board: Information sharing platform',
    'Mira QR: Advanced item recovery system',
    
    // Common features
    'Roadside Assistance: 24/7 vehicle breakdown support',
    'Home Watch: Remote monitoring capabilities',
    'Locate Me: Real-time location services',
    'What\'s Nearby: Emergency services information',
    'Ambulance Service: Medical emergency response',
    'Customer Support: Email and toll-free support'
  ]

  const clients = [
    { name: 'TCS', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Tata-Consultancy-Services-TCS-Logo.png' },
    { name: 'Tata', logo: 'https://logos-world.net/wp-content/uploads/2020/11/Tata-Logo.png' },
    { name: 'Apple', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Apple-Logo.png' },
    { name: 'Microsoft', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Microsoft-Logo.png' },
    { name: 'Google', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Google-Logo.png' },
    { name: 'Amazon', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png' }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Platform Services
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Advanced safety solutions powered by AI, IoT, and cloud technologies for comprehensive protection
          </motion.p>
        </div>
      </section>

      {/* Services Tabs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <motion.div
            className="flex justify-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gray-100 rounded-2xl p-2 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  className={`flex items-center justify-center space-x-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <tab.icon className="w-5 h-5" />
                  <span className="text-center">{tab.title}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'workforce' && (
              <motion.div
                key="workforce"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
              >
                {/* Service Introduction */}
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Services for Corporate <span className="text-blue-600 underline decoration-blue-600">Workforce Wellbeing</span>
                  </h2>
                  <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                    We provide internalized Basic and Advanced Services to support the corporate workforce's safety needs.
                  </p>
                  <motion.button
                    className="mt-8 px-8 py-3 border-2 border-red-600 text-red-600 font-semibold rounded-full hover:bg-red-600 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    CONTACT US
                  </motion.button>
                </div>

                {/* Video Section */}
                <div className="mb-16">
                  <motion.div
                    className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <video
                      controls
                      className="w-full h-auto"
                    >
                      <source src="https://dial4567.com/wp-content/uploads/2024/06/Dial-4567-seniour-safety.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </motion.div>
                </div>

                {/* Subscription Plans */}
                <div ref={plansRef} className="mb-16">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Basic Plan */}
                    <motion.div
                      className="bg-white border-2 border-gray-300 rounded-2xl p-8 shadow-lg"
                      initial={{ opacity: 0, x: -50 }}
                      animate={plansInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="text-center mb-8">
                        <Crown className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">Basic</h3>
                        <div className="text-4xl font-bold text-blue-600 mb-4">₹2,000</div>
                        <p className="text-gray-600">per month</p>
                      </div>
                      <ul className="space-y-4">
                        {workforceBasicFeatures.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <motion.button
                        className="w-full mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Choose Basic Plan
                      </motion.button>
                    </motion.div>

                    {/* Premium Plan */}
                    <motion.div
                      className="bg-white border-2 border-red-500 rounded-2xl p-8 shadow-lg relative"
                      initial={{ opacity: 0, y: -50 }}
                      animate={plansInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          RECOMMENDED
                        </div>
                      </div>
                      <div className="text-center mb-8">
                        <Crown className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">Premium</h3>
                        <div className="text-4xl font-bold text-red-600 mb-4">₹5,000</div>
                        <p className="text-gray-600">per month</p>
                      </div>
                      <div className="mb-6">
                        <p className="text-sm text-gray-600 mb-4">Includes all Basic features plus:</p>
                        <ul className="space-y-3">
                          {workforceAdvancedFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <Star className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 text-sm font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <motion.button
                        className="w-full mt-8 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Choose Premium Plan
                      </motion.button>
                    </motion.div>

                    {/* Advanced Combined Plan */}
                    <motion.div
                      className="bg-white border-2 border-purple-500 rounded-2xl p-8 shadow-lg relative"
                      initial={{ opacity: 0, x: 50 }}
                      animate={plansInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          ULTIMATE
                        </div>
                      </div>
                      <div className="text-center mb-8">
                        <Crown className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">Advanced</h3>
                        <div className="text-4xl font-bold text-purple-600 mb-4">₹8,999</div>
                        <p className="text-gray-600">per month</p>
                      </div>
                      <div className="mb-6">
                        <p className="text-sm text-gray-600 mb-4">Complete safety solution combining workforce & senior care:</p>
                        <div className="max-h-64 overflow-y-auto">
                          <ul className="space-y-2">
                            {combinedAdvancedFeatures.slice(0, 8).map((feature, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-1 py-0.5 rounded text-xs font-semibold flex-shrink-0">
                                  ALL
                                </div>
                                <span className="text-gray-700 text-xs">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <p className="text-xs text-gray-500 mt-2">+ {combinedAdvancedFeatures.length - 8} more features</p>
                        </div>
                      </div>
                      <motion.button
                        className="w-full mt-8 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Choose Advanced Plan
                      </motion.button>
                    </motion.div>
                  </div>
                  
                  <div className="text-center mt-8">
                    <p className="text-gray-600">
                      To access Advanced services, a subscription is required. If not subscribed, these services will be{' '}
                      <span className="underline font-semibold">viewable but not usable</span>.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'senior' && (
              <motion.div
                key="senior"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
              >
                {/* Service Introduction */}
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Services for <span className="text-red-600 underline decoration-red-600">Senior Citizen Safety</span>
                  </h2>
                  <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                    Our goal is to provide round-the-clock life safety services to senior citizens in their golden years 
                    supported by a 24/7 Safety Station. Available in two versions: Basic and Advanced Services.
                  </p>
                  <motion.button
                    className="mt-8 px-8 py-3 border-2 border-red-600 text-red-600 font-semibold rounded-full hover:bg-red-600 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    CONTACT US
                  </motion.button>
                </div>

                {/* Video Section */}
                <div className="mb-16">
                  <motion.div
                    className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <video
                      controls
                      className="w-full h-auto"
                      
                    >
                      <source src="https://dial4567.com/wp-content/uploads/2024/06/Dial-4567-seniour-safety.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </motion.div>
                </div>

                {/* Subscription Plans */}
                <div ref={plansRef} className="mb-16">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Basic Plan */}
                    <motion.div
                      className="bg-white border-2 border-red-400 rounded-2xl p-8 shadow-lg"
                      initial={{ opacity: 0, x: -50 }}
                      animate={plansInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="text-center mb-8">
                        <Crown className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">Basic</h3>
                        <div className="text-4xl font-bold text-red-600 mb-4">₹3,000</div>
                        <p className="text-gray-600">per month</p>
                      </div>
                      <ul className="space-y-3 max-h-96 overflow-y-auto">
                        {seniorBasicFeatures.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <motion.button
                        className="w-full mt-8 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Choose Basic Plan
                      </motion.button>
                    </motion.div>

                    {/* Premium Plan */}
                    <motion.div
                      className="bg-white border-2 border-blue-500 rounded-2xl p-8 shadow-lg relative"
                      initial={{ opacity: 0, y: -50 }}
                      animate={plansInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          PREMIUM
                        </div>
                      </div>
                      <div className="text-center mb-8">
                        <Crown className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">Premium</h3>
                        <div className="text-4xl font-bold text-blue-600 mb-4">₹5,999</div>
                        <p className="text-gray-600">per month</p>
                      </div>
                      <div className="mb-6">
                        <p className="text-sm text-gray-600 mb-4">Includes all Basic features plus:</p>
                        <ul className="space-y-3">
                          {seniorAdvancedFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold flex-shrink-0">
                                NEW
                              </div>
                              <span className="text-gray-700 text-sm font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <motion.button
                        className="w-full mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Choose Premium Plan
                      </motion.button>
                    </motion.div>

                    {/* Advanced Combined Plan */}
                    <motion.div
                      className="bg-white border-2 border-purple-500 rounded-2xl p-8 shadow-lg relative"
                      initial={{ opacity: 0, x: 50 }}
                      animate={plansInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          ULTIMATE
                        </div>
                      </div>
                      <div className="text-center mb-8">
                        <Crown className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">Advanced</h3>
                        <div className="text-4xl font-bold text-purple-600 mb-4">₹8,999</div>
                        <p className="text-gray-600">per month</p>
                      </div>
                      <div className="mb-6">
                        <p className="text-sm text-gray-600 mb-4">Complete safety solution combining workforce & senior care:</p>
                        <div className="max-h-64 overflow-y-auto">
                          <ul className="space-y-2">
                            {combinedAdvancedFeatures.slice(0, 8).map((feature, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-1 py-0.5 rounded text-xs font-semibold flex-shrink-0">
                                  ALL
                                </div>
                                <span className="text-gray-700 text-xs">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <p className="text-xs text-gray-500 mt-2">+ {combinedAdvancedFeatures.length - 8} more features</p>
                        </div>
                      </div>
                      <motion.button
                        className="w-full mt-8 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Choose Advanced Plan
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Our Esteemed Clients Section */}
      <section ref={clientsRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={clientsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Esteemed Clients</h2>
            <p className="text-lg text-gray-600">Trusted by leading organizations worldwide</p>
          </motion.div>

          {/* Animated Client Logos */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex space-x-16 items-center"
              animate={{
                x: [0, -100 * clients.length]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ width: `${200 * clients.length * 2}px` }}
            >
              {/* First set of logos */}
              {clients.map((client, index) => (
                <motion.div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-32 h-20 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-24 max-h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              ))}
              {/* Duplicate set for seamless loop */}
              {clients.map((client, index) => (
                <motion.div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-32 h-20 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-24 max-h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Transform Safety?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join thousands of organizations and families who trust WorkSafe4567 for their safety needs
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
            <motion.a
              href="tel:18002104567"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="mr-2 w-5 h-5" />
              Call 1800 210 4567
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PlatformServices
