
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {Shield, Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram} from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'Workforce Wellbeing', path: '/platform-services' },
    { name: 'Senior Citizen Safety', path: '/platform-services' },
    { name: 'About Us', path: '/' },
    { name: 'Media', path: '/blog' },
    { name: 'Blog', path: '/blog' }
  ]

  const otherLinks = [
    { name: 'About Us', path: '/' },
    { name: 'Help', path: '/contact' },
    { name: 'Blog', path: '/blog' },
    { name: 'Privacy Policy', path: '#' },
    { name: 'Terms & Conditions', path: '#' },
    { name: 'Shipping And Delivery', path: '#' },
    { name: 'Return & Refund Policy', path: '#' }
  ]

  const socialIcons = [
    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Facebook, href: '#', color: 'hover:text-blue-700' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              className="flex items-center space-x-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.8 }}
              >
                <Shield className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
                  WorkSafe4567
                </h3>
                <p className="text-sm text-gray-400">Safety Solutions</p>
              </div>
            </motion.div>
            
            <motion.p
              className="text-gray-300 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Pioneering social impact startup dedicated to humanizing safety for humans and pets with advanced AI, IoT, and cloud solutions.
            </motion.p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`p-3 bg-gray-800 rounded-full ${social.color} transition-all duration-300`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h4
              className="text-lg font-semibold mb-6 text-red-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              QUICK <span className="border-b-2 border-red-500">LINKS</span>
            </motion.h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-red-400 transition-colors duration-300 block py-1"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <motion.h4
              className="text-lg font-semibold mb-6 text-red-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              OTHER <span className="border-b-2 border-red-500">LINKS</span>
            </motion.h4>
            <ul className="space-y-3">
              {otherLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-red-400 transition-colors duration-300 block py-1"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <motion.h4
              className="text-lg font-semibold mb-6 text-red-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <MapPin className="inline w-5 h-5 mr-2" />
              Address
            </motion.h4>
            
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-gray-300">
                <p>Zimaxe Tech Solutions Private Limited</p>
                <p>4D, Chimbai Lane, Off Hill Road</p>
                <p>Bandra West, Mumbai</p>
                <p>400050</p>
              </div>

              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-4 h-4 text-red-400" />
                <span>Toll-Free: 1800 210 4567</span>
              </div>

              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4 text-red-400" />
                <span>support@worksafe4567.com</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p>&copy; 2024 WorkSafe4567. All rights reserved. | Powered by Zimaxe Tech Solutions</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
