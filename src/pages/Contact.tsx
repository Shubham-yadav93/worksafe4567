import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  User,
  MessageSquare,
  Clock,
  Globe,
  Shield,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import toast, { Toaster } from "react-hot-toast";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [formRef, formInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [infoRef, infoInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    //const submissionToast = toast.loading('Sending your message...');

    try {
      const response = await fetch("https://zimaxx.onrender.com/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        console.log(response.ok);

        toast.success("Mail sent successfully", {
          duration: 4000,
          position: "top-right",
          style: {
            background: "#10B981",
            color: "#fff",
            fontWeight: "600",
            borderRadius: "12px",
            padding: "16px 20px",
            fontSize: "16px",
            boxShadow:
              "0 10px 25px -3px rgba(16, 185, 129, 0.3), 0 4px 6px -2px rgba(16, 185, 129, 0.05)",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#10B981",
          },
        });

        // Reset the form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(result.error || "Something went wrong.");
      }
    } catch (error: any) {
      console.error("Submission error:", error);
      toast.error(
        `⚠️ Failed to send message: ${error.message || "Please try again."}`,
        {
          id: submissionToast,
          duration: 5000,
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["Toll-Free: 1800 210 4567"],
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["support@worksafe4567.com"],
      color: "from-red-500 to-red-600",
      hoverColor: "hover:from-red-600 hover:to-red-700",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Bandra West, Mumbai 400050"],
      color: "from-green-500 to-green-600",
      hoverColor: "hover:from-green-600 hover:to-green-700",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 9:00 AM - 6:00 PM"],
      color: "from-purple-500 to-purple-600",
      hoverColor: "hover:from-purple-600 hover:to-purple-700",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Humanizing Safety for People and Pets ",
      description:
        "Ensuring protection and care for both humans and their beloved pets.",
    },
    {
      icon: Clock,
      title: "Life Safety Services ",
      description:
        "Providing rapid and reliable response in every safety situation.",
    },
    {
      icon: Globe,
      title: "24/7 Safety Station",
      description: "Always active and ready to assist, anytime and anywhere.",
    },
  ];

  const openInGoogleMaps = () => {
    window.open(
      "https://www.google.com/maps/dir//45,+Chimbai+Rd+Bandra+West+Mumbai,+Maharashtra+400050/@19.055577,72.8246211,15z",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Toaster />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get in touch with our safety experts. We're here to help you create
            safer environments for your workforce and loved ones.
          </motion.p>

          {/* Features */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              ref={formRef}
              className="bg-white rounded-2xl shadow-2xl p-8"
              initial={{ opacity: 0, x: -50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Send us a Message
              </motion.h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Workforce Wellbeing">
                      Workforce Wellbeing
                    </option>
                    <option value="Captain India : Pet Happiness & Safety">
                      Captain India : Pet Happiness & Safety
                    </option>
                    <option value="Senior Citizen Safety">
                      Senior Citizen Safety
                    </option>
                    <option value="Partnership">Partnership</option>
                  </select>
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Tell us about your safety needs..."
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none transition-all"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold py-4 px-8 rounded-xl hover:from-red-700 hover:to-red-800 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              ref={infoRef}
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={infoInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={infoInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${info.color} ${info.hoverColor} rounded-xl flex items-center justify-center transition-all`}
                    >
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-600 mb-1">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Map */}
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={infoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-red-600" />
                  Our Location
                  <motion.div
                    className="ml-auto flex items-center text-sm text-gray-500 cursor-pointer hover:text-red-600 transition-colors"
                    onClick={openInGoogleMaps}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Open in Maps
                  </motion.div>
                </h3>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.6942140351973!2d72.8246211!3d19.055577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c941b5f960e7%3A0x1fe546a2dede3c09!2s45,+Chimbai+Rd+Bandra+West+Mumbai,+Maharashtra+400050!5e0!3m2!1sen!2sin!4v1695286800000!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Emergency Contact
            </h2>
            <p className="text-xl text-red-100 mb-12 max-w-3xl mx-auto">
              For immediate safety concerns or emergencies, contact our 24/7
              response team
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="tel:18002104567"
                className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 text-lg shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="mr-3 w-6 h-6" />
                1800 210 4567
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
