import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [blogRef, blogInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const categories = [
    "all",
    "WorkSafe 24/7",
    "Senior Citizen Safety",
    "Captain India",
  ];

  const blogPosts = [
    {
      id: 1,
      title:
        "Senior Citizen Counselling: A Comprehensive Approach to Mental Health",
      excerpt:
        "Exploring innovative methods to provide mental health support for elderly citizens through technology and personalized care.",
      image:
        "https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Senior Citizen Safety",
      date: "July 6, 2024",
      author: "Dr. Sarah Johnson",
      readTime: "8 min read",
    },
    {
      id: 2,
      title:
        "Senior Citizens Staying Alone: Addressing Modern Family Challenges",
      excerpt:
        "Understanding the unique challenges faced by elderly individuals living alone while their children work abroad.",
      image:
        "https://images.pexels.com/photos/3768114/pexels-photo-3768114.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Senior Citizen Safety",
      date: "July 6, 2024",
      author: "Michael Chen",
      readTime: "6 min read",
    },
    {
      id: 3,
      title: "Workplace Mental Health: Revolutionary AI-Powered Solutions",
      excerpt:
        "How artificial intelligence is transforming workplace mental health initiatives and employee wellbeing programs.",
      image:
        "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "WorkSafe 24/7",
      date: "July 5, 2024",
      author: "Emma Rodriguez",
      readTime: "10 min read",
    },
    {
      id: 4,
      title: "IoT Integration in Safety Systems: The Future is Here",
      excerpt:
        "Exploring how Internet of Things technology is revolutionizing safety monitoring and emergency response systems.",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Captain India",
      date: "July 4, 2024",
      author: "David Kumar",
      readTime: "12 min read",
    },
    {
      id: 5,
      title: "Emergency Response Protocols: Best Practices for 2024",
      excerpt:
        "Updated guidelines and protocols for effective emergency response in both workplace and residential settings.",
      image:
        "https://images.pexels.com/photos/6195087/pexels-photo-6195087.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Captain India",
      date: "July 3, 2024",
      author: "Lisa Thompson",
      readTime: "7 min read",
    },
    {
      id: 6,
      title: "Building Resilient Workplaces: A Comprehensive Guide",
      excerpt:
        "Strategies for creating safer, more resilient workplace environments that prioritize employee wellbeing.",
      image:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "WorkSafe 24/7",
      date: "July 2, 2024",
      author: "Robert Park",
      readTime: "9 min read",
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            News & Articles
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Stay updated with the latest insights, trends, and innovations in
            safety technology and services
          </motion.p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <motion.div
              className="relative flex-1 max-w-md"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
              />
            </motion.div>

            {/* Category Filters */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-red-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  {category === "all" ? "All Categories" : category}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section ref={blogRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={blogInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                initial={{ opacity: 0, y: 50 }}
                animate={blogInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  y: -10,
                  rotateX: 5,
                }}
              >
                <Link to={`/blog/${post.id}`} className="block">
                  {/* Image */}
                  <div className="relative overflow-hidden h-48">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>

                    {/* Date */}
                    <div className="absolute bottom-4 right-4 text-white text-sm">
                      {post.date}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <motion.h3
                      className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300 line-clamp-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      {post.title}
                    </motion.h3>

                    <motion.p
                      className="text-gray-600 mb-4 leading-relaxed line-clamp-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {post.excerpt}
                    </motion.p>

                    {/* Meta Info */}
                    <motion.div
                      className="flex items-center justify-between text-sm text-gray-500 mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Read More Button */}
                    <motion.div
                      className="flex items-center text-red-600 hover:text-red-700 font-medium group-hover:translate-x-2 transition-all duration-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <span>Read More</span>
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </motion.div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No Articles Found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
