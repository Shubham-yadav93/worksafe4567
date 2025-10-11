import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, Target, Shield, ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutUs = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg')] bg-cover bg-center opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
              About <span className="text-red-500">US</span>
            </h1>
            <div className="w-32 h-1 bg-red-500 mx-auto mb-8"></div>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are an innovative social impact startup dedicated to making
              safety more human-centered for People and Pets. Our subscription
              services utilize technology to deliver comprehensive life safety
              solutions, giving clients real-time protection and exceptional
              peace of mind.
            </p>
          </motion.div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center space-x-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <span>CONTACT US</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              What do we{" "}
             <span className="text-red-600">do?</span>
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg"
                alt="Technology Solutions"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                We are a passionate social impact startup dedicated to making safety more personal for people and pets. Through our subscription services, we utilize innovative technology in our advanced 24/7 Safety Station to deliver top-quality life safety services and solutions, providing our clients with real-time response capabilities.
              </p>

              <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    24/7 Safety Station
                  </h4>
                  <p className="text-gray-600">
                    Advanced technology for real-time safety alerts
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Founded by Renowned{" "}
              <span className="text-red-600">Technocrats</span>
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              className="space-y-6 order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                Founded by esteemed technocrats, the leadership team has more
                than a century of combined experience in Safety and Electronic
                Security, with several members being pioneers in the industry's
                development.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    100+
                  </div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    2022
                  </div>
                  <div className="text-gray-600">Incorporated</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
                alt="Leadership Team"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section - FIXED */}
      <section className="py-20 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 lg:items-stretch"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Vision */}
            <motion.div
              className="flex flex-col text-center lg:text-left"
              variants={fadeInUp}
            >
              <div className="flex items-center justify-center lg:justify-start mb-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Eye className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  Vision
                </h3>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl flex-grow flex items-center justify-center">
                <p className="text-lg text-gray-700 leading-relaxed">
                  We imagine a world where every person and pet lives safe,
                  healthy, and worry-free.
                </p>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              className="flex flex-col text-center lg:text-left"
              variants={fadeInUp}
            >
              <div className="flex items-center justify-center lg:justify-start mb-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Target className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  Mission
                </h3>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl flex-grow flex items-center justify-center">
                <p className="text-lg text-gray-700 leading-relaxed">
                  To provide affordable technology access to people and pets,
                  keeping them happy and safe forever, through innovative
                  solutions.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              Ready to Discover Safety Innovation
            </h2>
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              Join thousands of satisfied customers who trust us for their
              safety needs. Contact us today to learn more about our life safety
              services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="https://worksafe4567.vercel.app/platform-services"
                className="inline-flex items-center justify-center space-x-3 bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <span>Our Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center space-x-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
