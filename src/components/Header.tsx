
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {Menu, X, Phone, Mail} from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Platform Services', path: '/platform-services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' }
  ]

  // Custom SVG Icons for social media
  const LinkedInIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )

  const WhatsAppIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
    </svg>
  )

  const FacebookIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )

  const XIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )

  return (
    <>
      {/* Top Contact Bar with Zicom Logo */}
      <div className="bg-red-600 text-white py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6">
            
            
            {/* Contact Info - Stack on mobile */}
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 lg:space-x-6">
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  whileHover={{ color: '#60A5FA' }}
                  transition={{ duration: 0.3 }}
                  className="text-blue-300"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
                <span className="text-xs sm:text-sm">1800 210 4567</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  whileHover={{ color: '#34D399' }}
                  transition={{ duration: 0.3 }}
                  className="text-green-300"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
                <span className="text-xs sm:text-sm hidden sm:inline">support@worksafe4567.com</span>
                <span className="text-xs sm:text-sm sm:hidden">support@worksafe...</span>
              </motion.div>
            </div>
          </div>
          
          {/* Social Icons - Hide on very small screens */}
          <div className="flex space-x-3 sm:space-x-4">
            <motion.a
              href="#"
              className="text-blue-300 hover:text-blue-200 transition-colors p-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              whileHover={{ scale: 1.2, color: '#0077B5' }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
            </motion.a>
            
            <motion.a
              href="#"
              className="text-green-300 hover:text-green-200 transition-colors p-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              whileHover={{ scale: 1.2, color: '#25D366' }}
              whileTap={{ scale: 0.9 }}
            >
              <WhatsAppIcon />
            </motion.a>

            <motion.a
              href="#"
              className="text-gray-300 hover:text-gray-200 transition-colors p-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              whileHover={{ scale: 1.2, color: '#000000' }}
              whileTap={{ scale: 0.9 }}
            >
              <XIcon />
            </motion.a>

            <motion.a
              href="#"
              className="text-blue-400 hover:text-blue-200 transition-colors p-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              whileHover={{ scale: 1.2, color: '#1877F2' }}
              whileTap={{ scale: 0.9 }}
            >
              <FacebookIcon />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Main Navigation with WorkSafe Logo */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center py-2 sm:py-4">
            {/* WorkSafe Logo - Responsive sizing */}
            <Link to="/">
              <motion.div
                className="flex items-center space-x-2 sm:space-x-3"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.img
                  src="https://i.postimg.cc/TPwDZZK8/WorkSafe.png"
                  alt="WorkSafe 24/7 Logo"
                  className="h-12 sm:h-16 lg:h-20 w-auto drop-shadow-md"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ 
                    scale: 1, 
                    opacity: 1,
                    y: [0, -2, 0]
                  }}
                  transition={{ 
                    duration: 0.8,
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  whileHover={{ 
                    scale: 1.15,
                    filter: "drop-shadow(0 0 20px rgba(239, 68, 68, 0.5))",
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6 xl:space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`relative text-gray-700 hover:text-red-600 transition-colors duration-300 font-medium text-sm lg:text-base ${
                      location.pathname === item.path ? 'text-red-600' : ''
                    }`}
                  >
                    {item.name}
                    {location.pathname === item.path && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-600"
                        layoutId="underline"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors touch-manipulation"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden bg-white border-t shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-4 space-y-2 max-w-7xl mx-auto">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`block px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors font-medium touch-manipulation ${
                        location.pathname === item.path ? 'text-red-600 bg-red-50' : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}

export default Header
