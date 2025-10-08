import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowRight,
  Shield,
  Heart,
  Zap, 
  Globe,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [aboutRef, aboutInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [servicesRef, servicesInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [platformsRef, platformsInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [newsRef, newsInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // // Typewriter effect state
  // const [displayText, setDisplayText] = useState("");
  // const [currentWordIndex, setCurrentWordIndex] = useState(0);
  // const fullText = "AI, IoT, VA, and Cloud Solutions";
  // const words = ["AI,", "IoT,", "VA,", "and", "Cloud", "Solutions"];

  const heroSlides = [
    {
      src: "https://images.pexels.com/photos/5668856/pexels-photo-5668856.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Workforce Safety 24/7:",
      subtitle: "Always On",
      description: "India’s First Workforce Safety and Wellness Partner",
    },
    {
      src: "https://images.pexels.com/photos/3768114/pexels-photo-3768114.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Senior Citizen Safety:",
      subtitle: " Har Waqt Appke Saath",
      description: "Tech-enabled safety services 24/7 ",
    },
    {
      src: "https://i.ibb.co/0jSJJCp7/Captain-India.webp",
      title: "Captain India Pet Happiness and Safety:",
      subtitle: "Your Pet's Safety Superhero An ecosystem for pet care",
      description: "",
      link: "captain-india.com",
    },
  ];
  const platformFeatures = [
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description: "Advanced AI-powered monitoring systems",
    },
    {
      icon: Shield,
      title: "Emergency Response",
      description: "Instant alert and response protocols",
    },
    {
      icon: Heart,
      title: "Health Tracking",
      description: "Comprehensive wellness monitoring",
    },
    {
      icon: Globe,
      title: "Cloud Integration",
      description: "Seamless cloud-based solutions",
    },
  ];

  const newsArticles = [
    {
      date: "July 6, 2024",
      category: "Senior Citizen Safety",
      title: "Senior Citizen Counselling",
      image:
        "https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Comprehensive mental health support for elderly citizens",
    },
    {
      date: "July 6, 2024",
      category: "Senior Citizen Safety",
      title: "Senior Citizens Staying Alone While Their Children Are Abroad",
      image:
        "https://images.pexels.com/photos/3768114/pexels-photo-3768114.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Addressing the challenges of elderly care in modern families",
    },
    {
      date: "July 5, 2024",
      category: "WorkSafe 24/7",
      title: "Workplace Mental Health Initiatives",
      image:
        "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Innovative approaches to employee mental wellness",
    },
  ];

  // Typewriter effect
  // useEffect(() => {
  //   if (heroInView && currentWordIndex < words.length) {
  //     const timer = setTimeout(
  //       () => {
  //         setDisplayText((prev) => {
  //           const nextWord = words[currentWordIndex];
  //           return prev ? `${prev} ${nextWord}` : nextWord;
  //         });
  //         setCurrentWordIndex((prev) => prev + 1);
  //       },
  //       currentWordIndex === 0 ? 800 : 400
  //     ); // Delay for first word, then faster

  //     return () => clearTimeout(timer);
  //   }
  // }, [heroInView, currentWordIndex, words]);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, heroSlides.length]);

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Enhanced Hero Section with Carousel */}
      <section
        ref={heroRef}
        className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
          {/* Hero Text */}
          <div className="text-center mb-8 sm:mb-16">
            <motion.h1
              className="text-3xl sm:text-5xl md:text-5xl font-bold text-white mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              Trusted Partner for Life Safety: People and Pets
            </motion.h1>

          

            <motion.p
              className="text-base sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              24/7 Life Safety and Response Services
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-sm sm:text-base touch-manipulation"
              >
                CONTACT US
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </motion.div>
          </div>

          {/* Image Carousel */}
          <div className="relative max-w-6xl mx-auto">
            {/* Main Carousel Container */}
            <div className="relative h-64 sm:h-96 md:h-[500px] lg:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.1, rotateY: -15 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.95, rotateY: 15 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <img
                    src={heroSlides[currentSlide].src}
                    alt={heroSlides[currentSlide].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Slide Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 md:p-12 text-white">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <motion.h3
                        className="text-xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4 text-red-400"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        {heroSlides[currentSlide].title}
                      </motion.h3>
                      <motion.p
                        className="text-sm sm:text-xl md:text-2xl text-blue-200 mb-2 sm:mb-4"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      >
                        {heroSlides[currentSlide].subtitle}
                      </motion.p>
                      <motion.p
                        className="text-xs sm:text-lg text-gray-300 max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        {heroSlides[currentSlide].description}
                      </motion.p>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 z-10 touch-manipulation"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 z-10 touch-manipulation"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-4 sm:mt-8 space-x-2 sm:space-x-3">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 touch-manipulation ${
                    index === currentSlide
                      ? "bg-red-500 scale-125"
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Auto-play Control */}
            <div className="flex justify-center mt-2 sm:mt-4">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm touch-manipulation"
              >
                {isAutoPlaying ? "Pause Auto-play" : "Resume Auto-play"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section ref={aboutRef} className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About WorkSafe4567"
                className="rounded-xl sm:rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                ABOUT{" "}
                <span className="text-red-600 border-b-4 border-red-600">
                  US!
                </span>
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                We are an innovative social impact startup dedicated to making
                safety more human-centered for People and Pets. Our subscription
                services utilize technology to deliver comprehensive life safety
                solutions, giving clients real-time protection and exceptional
                peace of mind.
              </p>

              <motion.div
                className="mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                  HUMANIZING SAFETY SERVICES
                </h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/25 text-sm sm:text-base touch-manipulation"
                >
                  CONTACT US
                  <motion.div
                    className="ml-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Services Section */}
      <section
        ref={servicesRef}
        className="py-12 sm:py-20 bg-gray-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
              PLATFORM{" "}
              <span className="text-red-500 border-b-4 border-red-500">
                SERVICES
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* WorkSafe 24/7 Card */}
            <motion.div
              className="relative group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={
                servicesInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}
              }
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{
                scale: 1.02,
                rotateY: 2,
                z: 50,
              }}
            >
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5668856/pexels-photo-5668856.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="WorkSafe 24/7"
                  className="w-full h-64 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
                  <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4 text-red-400">
                    WorkSafe 24/7 <span className="text-white"></span>
                  </h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                    Comprehensive workplace safety monitoring through AI-driven
                    analytics and real-time response management.
                  </p>
                  <Link
                    to="/platform-services"
                    className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors text-sm sm:text-base touch-manipulation"
                  >
                    Learn More{" "}
                    <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Senior Citizen Safety Card */}
            <motion.div
              className="relative group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
              animate={
                servicesInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}
              }
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{
                scale: 1.02,
                rotateY: -2,
                z: 50,
              }}
            >
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Senior Citizen Safety"
                  className="w-full h-64 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
                  <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4 text-red-400">
                    SENIOR CITIZEN SAFETY{" "}
                    <span className="text-white">(coming Soon...)</span>
                  </h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                    Technology-enabled senior care offers emergency response
                    services for life safety.
                  </p>
                  <Link
                    to="/platform-services"
                    className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors text-sm sm:text-base touch-manipulation"
                  >
                    Learn More{" "}
                    <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Platforms Section */}
      <section
        ref={platformsRef}
        className="py-12 sm:py-20 bg-gradient-to-br from-blue-50 to-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={platformsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              OUR{" "}
              <span className="text-red-600 border-b-4 border-red-600">
                PLATFORMS
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced technology solutions powering our safety services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={
                  platformsInView ? { opacity: 1, y: 0, rotateX: 0 } : {}
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  rotateX: 2,
                  y: -10,
                }}
              >
                <motion.div
                  className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Articles Section */}
      <section ref={newsRef} className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={newsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              NEWS &{" "}
              <span className="text-red-600 border-b-4 border-red-600">
                ARTICLES
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Stay updated with the latest in safety technology and services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {newsArticles.map((article, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={newsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-40 sm:h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-red-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {article.date}
                  </div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-red-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {article.category}
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base line-clamp-3">
                    {article.description}
                  </p>
                  <Link
                    to="/blog"
                    className="inline-flex items-center text-red-600 hover:text-red-700 font-medium transition-colors text-sm sm:text-base touch-manipulation"
                  >
                    Read More
                    <motion.div
                      className="ml-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-8 sm:mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={newsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base touch-manipulation"
            >
              View All Articles
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
