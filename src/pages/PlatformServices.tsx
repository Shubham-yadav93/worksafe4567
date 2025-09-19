
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {Shield, Users, Heart, Zap, Phone, Monitor, AlertCircle, Clock, CheckCircle, ArrowRight} from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const PlatformServices = () => {
  const [activeTab, setActiveTab] = useState('workforce')
  const [servicesRef, servicesInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [featuresRef, featuresInView] = useInView({ threshold: 0.3, triggerOnce: true })

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

  const workforceFeatures = [
    {
      icon: Monitor,
      title: 'Real-time Monitoring',
      description: 'Advanced AI-powered workplace monitoring with instant alerts and analytics dashboard.'
    },
    {
      icon: AlertCircle,
      title: 'Emergency Response',
      description: 'Immediate emergency response protocols with automated notifications to relevant personnel.'
    },
    {
      icon: Shield,
      title: 'Safety Compliance',
      description: 'Comprehensive safety compliance tracking and reporting for regulatory requirements.'
    },
    {
      icon: Zap,
      title: 'IoT Integration',
      description: 'Seamless integration with workplace IoT devices for comprehensive safety coverage.'
    }
  ]

  const seniorFeatures = [
    {
      icon: Heart,
      title: 'Health Monitoring',
      description: '24/7 health vitals monitoring with medical emergency detection and response.'
    },
    {
      icon: Phone,
      title: 'Emergency Calling',
      description: 'One-touch emergency calling system with GPS location tracking and family notifications.'
    },
    {
      icon: Clock,
      title: 'Medication Reminders',
      description: 'Smart medication management with automated reminders and adherence tracking.'
    },
    {
      icon: Users,
      title: 'Family Connect',
      description: 'Real-time updates and communication platform for family members and caregivers.'
    }
  ]

  const benefits = [
    'Reduced workplace accidents by 85%',
    '24/7 monitoring and support',
    'Real-time emergency response',
    'Advanced AI and IoT integration',
    'Comprehensive reporting and analytics',
    'Regulatory compliance assurance'
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
      <section ref={servicesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <motion.div
            className="flex justify-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gray-100 rounded-2xl p-2 flex space-x-2">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  className={`flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.title}</span>
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                  <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                      DIAL 4567: <span className="text-blue-600">WORKFORCE WELLBEING</span>
                    </h2>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      Our workforce wellbeing platform leverages cutting-edge AI and IoT technologies to create 
                      safer workplace environments. With real-time monitoring, predictive analytics, and instant 
                      emergency response capabilities, we ensure your employees' safety and wellbeing.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      {benefits.map((benefit, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Workforce Wellbeing"
                      className="rounded-2xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-2xl" />
                  </motion.div>
                </div>

                {/* Workforce Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {workforceFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -10 }}
                    >
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <feature.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </motion.div>
                  ))}
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                  <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                      <span className="text-red-600">SENIOR CITIZEN</span> SAFETY
                    </h2>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      Our senior citizen safety platform provides comprehensive care and monitoring solutions 
                      for elderly individuals. With 24/7 health monitoring, emergency response systems, and 
                      family connectivity features, we ensure peace of mind for seniors and their loved ones.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      {[
                        'Immediate emergency response within 2 minutes',
                        'Health vitals monitoring and alerts',
                        'Medication adherence tracking',
                        'Fall detection and prevention',
                        'Family notification system',
                        'Professional caregiver network'
                      ].map((benefit, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05, rotateY: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src="https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Senior Citizen Safety"
                      className="rounded-2xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent rounded-2xl" />
                  </motion.div>
                </div>

                {/* Senior Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {seniorFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -10 }}
                    >
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <feature.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
