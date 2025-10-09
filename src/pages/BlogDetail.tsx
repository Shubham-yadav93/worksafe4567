
import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {Calendar, User, Clock, ArrowLeft, ChevronLeft, ChevronRight, Facebook, Twitter, Linkedin, MessageCircleDashed as MessageCircle, Mail} from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const BlogDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  // Blog posts data (same as in Blog.tsx)
  const blogPosts = [
    {
      id: 1,
      title: 'Senior Citizen Counselling: A Comprehensive Approach to Mental Health',
      excerpt: 'Exploring innovative methods to provide mental health support for elderly citizens through technology and personalized care.',
      image: 'https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'Senior Citizen Safety',
      date: 'July 6, 2024',
      author: 'Dr. Sarah Johnson',
      readTime: '8 min read',
      content: {
        introduction: 'Loneliness is a significant issue among senior citizens, impacting their mental and physical health profoundly. As individuals age, they often face circumstances that contribute to feelings of isolation, underscoring the importance of addressing this issue to enhance their overall well-being.',
        sections: [
          {
            title: 'Causes of Loneliness',
            content: 'Several factors contribute to loneliness among seniors. The loss of a spouse or close friends, retirement from work, and adult children moving away from home can diminish their social circle significantly. Physical limitations such as mobility issues or chronic illnesses may also restrict their ability to engage in social activities, further exacerbating feelings of loneliness and isolation.'
          },
          {
            title: 'Health Implications',
            content: 'The impact of loneliness on senior health cannot be understated. Research shows that chronic loneliness can lead to depression, anxiety, cognitive decline, and even physical health problems such as cardiovascular disease and weakened immune system. Addressing loneliness is therefore crucial for maintaining both mental and physical health in older adults.'
          },
          {
            title: 'Professional Support Solutions',
            content: 'Professional support is essential for seniors experiencing chronic loneliness. Counseling and therapy can help them address underlying emotions and develop coping strategies to manage feelings of isolation. Support groups specifically designed for seniors provide a safe space to share experiences, receive empathy, and build supportive relationships with peers facing similar challenges.'
          }
        ],
        conclusion: 'Loneliness is a pervasive issue among senior citizens, profoundly affecting their mental and physical health. By promoting social engagement, leveraging technology, and providing professional support through counseling and community resources, society can significantly enhance the quality of life for seniors. Addressing loneliness ensures that older adults remain connected, active, and valued members of their communities.'
      }
    },
    {
      id: 2,
      title: 'Senior Citizens Staying Alone: Addressing Modern Family Challenges',
      excerpt: 'Understanding the unique challenges faced by elderly individuals living alone while their children work abroad.',
      image: 'https://images.pexels.com/photos/3768114/pexels-photo-3768114.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'Senior Citizen Safety',
      date: 'July 6, 2024',
      author: 'Michael Chen',
      readTime: '6 min read',
      content: {
        introduction: 'In today\'s globalized world, many senior citizens find themselves living alone as their children pursue careers abroad. This modern family dynamic presents unique challenges that require innovative solutions and community support.',
        sections: [
          {
            title: 'The Modern Family Dilemma',
            content: 'Economic opportunities and career advancement often lead younger generations to relocate internationally, leaving elderly parents behind. This separation, while economically beneficial for families, creates emotional and practical challenges for seniors who must navigate daily life independently.'
          },
          {
            title: 'Technology as a Bridge',
            content: 'Modern technology offers unprecedented opportunities to maintain family connections across distances. Video calling, messaging apps, and smart home devices can help bridge the physical gap between seniors and their distant children, providing both communication and safety monitoring capabilities.'
          },
          {
            title: 'Community Support Systems',
            content: 'Building robust community support networks is essential for seniors living alone. Neighborhood watch programs, regular check-ins from local volunteers, and community centers offering social activities can provide the social interaction and support that distant family members cannot always provide.'
          },
        ],
        conclusion: 'While the challenge of seniors living alone due to global family dispersion is complex, combining technology solutions with strong community support systems can help ensure that elderly individuals maintain their independence while staying connected and safe.'
      }
    },
    {
      id: 3,
      title: 'Workplace Mental Health: Revolutionary AI-Powered Solutions',
      excerpt: 'How artificial intelligence is transforming workplace mental health initiatives and employee wellbeing programs.',
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'WorkSafe 24/7',
      date: 'July 5, 2024',
      author: 'Emma Rodriguez',
      readTime: '10 min read',
      content: {
        introduction: 'Artificial intelligence is revolutionizing how organizations approach workplace mental health, offering personalized, scalable solutions that can identify, prevent, and address mental health challenges before they become critical issues.',
        sections: [
          {
            title: 'AI-Driven Early Detection',
            content: 'Advanced AI algorithms can analyze patterns in employee behavior, communication, and productivity to identify early signs of mental health struggles. This proactive approach allows organizations to intervene before issues escalate, providing timely support and resources to employees who need them most.'
          },
          {
            title: 'Personalized Wellness Programs',
            content: 'AI enables the creation of highly personalized wellness programs that adapt to individual employee needs, preferences, and risk factors. Machine learning algorithms can recommend specific interventions, from stress management techniques to counseling resources, based on each employee\'s unique profile and circumstances.'
          },
          {
            title: 'Real-Time Support Systems',
            content: 'AI-powered chatbots and virtual assistants provide 24/7 mental health support, offering immediate assistance during crisis situations and ongoing guidance for stress management. These systems can escalate to human professionals when necessary while providing consistent, accessible support.'
          }
        ],
        conclusion: 'The integration of AI in workplace mental health represents a paradigm shift toward proactive, personalized care. As these technologies continue to evolve, they promise to create healthier, more supportive work environments that prioritize employee wellbeing alongside productivity.'
      }
    },
    {
      id: 4,
      title: 'IoT Integration in Safety Systems: The Future is Here',
      excerpt: 'Exploring how Internet of Things technology is revolutionizing safety monitoring and emergency response systems.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'Technology',
      date: 'July 4, 2024',
      author: 'David Kumar',
      readTime: '12 min read',
      content: {
        introduction: 'The Internet of Things (IoT) is transforming safety systems across industries, creating interconnected networks of sensors and devices that provide real-time monitoring, predictive analytics, and automated emergency response capabilities.',
        sections: [
          {
            title: 'Smart Sensor Networks',
            content: 'IoT-enabled sensor networks can monitor environmental conditions, detect anomalies, and trigger automated responses in real-time. From air quality sensors in workplaces to motion detectors in senior living facilities, these systems provide continuous monitoring that human oversight alone cannot match.'
          },
          {
            title: 'Predictive Safety Analytics',
            content: 'By analyzing data from multiple IoT devices, AI systems can predict potential safety hazards before they occur. This predictive capability allows organizations to implement preventive measures, reducing the likelihood of accidents and improving overall safety outcomes.'
          },
          {
            title: 'Automated Emergency Response',
            content: 'IoT systems can automatically initiate emergency protocols when safety thresholds are exceeded. From automatically calling emergency services to activating safety equipment, these systems can respond faster than human operators, potentially saving lives in critical situations.'
          }
        ],
        conclusion: 'IoT integration in safety systems represents the future of proactive safety management. As these technologies become more sophisticated and accessible, they will continue to enhance our ability to protect people and prevent accidents across all sectors of society.'
      }
    },
    {
      id: 5,
      title: 'Emergency Response Protocols: Best Practices for 2024',
      excerpt: 'Updated guidelines and protocols for effective emergency response in both workplace and residential settings.',
      image: 'https://images.pexels.com/photos/6195087/pexels-photo-6195087.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'Safety Tips',
      date: 'July 3, 2024',
      author: 'Lisa Thompson',
      readTime: '7 min read',
      content: {
        introduction: 'Effective emergency response protocols are essential for minimizing harm and saving lives during crisis situations. Updated guidelines for 2024 incorporate lessons learned from recent events and advances in emergency management technology.',
        sections: [
          {
            title: 'Communication Systems',
            content: 'Modern emergency response relies heavily on robust communication systems that can function even during infrastructure failures. Multi-channel communication strategies, including mobile apps, emergency broadcast systems, and social media platforms, ensure that critical information reaches all stakeholders quickly and reliably.'
          },
          {
            title: 'Training and Preparedness',
            content: 'Regular training exercises and preparedness drills are fundamental to effective emergency response. Updated protocols emphasize scenario-based training that simulates real-world conditions, helping responders develop the skills and confidence needed to act decisively during actual emergencies.'
          },
          {
            title: 'Technology Integration',
            content: 'Integration of modern technologies, including GPS tracking, drone surveillance, and AI-powered decision support systems, enhances emergency response capabilities. These tools provide real-time situational awareness and help responders make informed decisions quickly.'
          }
        ],
        conclusion: 'Effective emergency response requires a combination of well-designed protocols, regular training, and modern technology. By staying current with best practices and continuously improving response capabilities, organizations can better protect their people and communities.'
      }
    },
    {
      id: 6,
      title: 'Building Resilient Workplaces: A Comprehensive Guide',
      excerpt: 'Strategies for creating safer, more resilient workplace environments that prioritize employee wellbeing.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'WorkSafe 24/7',
      date: 'July 2, 2024',
      author: 'Robert Park',
      readTime: '9 min read',
      content: {
        introduction: 'Building resilient workplaces requires a holistic approach that addresses physical safety, mental health, and organizational culture. This comprehensive guide outlines strategies for creating environments where employees can thrive even in challenging circumstances.',
        sections: [
          {
            title: 'Physical Safety Infrastructure',
            content: 'A resilient workplace begins with robust physical safety infrastructure. This includes proper ventilation systems, emergency exits, safety equipment, and regular maintenance protocols. Modern workplaces also incorporate smart building technologies that can monitor and respond to safety threats automatically.'
          },
          {
            title: 'Mental Health Support Systems',
            content: 'Employee mental health is equally important as physical safety. Resilient workplaces provide comprehensive mental health support, including counseling services, stress management programs, and policies that promote work-life balance. Creating a culture where mental health discussions are normalized and supported is crucial.'
          },
          {
            title: 'Organizational Culture and Leadership',
            content: 'Leadership plays a critical role in building workplace resilience. Leaders must model safe behaviors, communicate openly about challenges, and empower employees to take ownership of safety and wellbeing initiatives. A culture of continuous improvement and learning from incidents helps organizations become more resilient over time.'
          }
        ],
        conclusion: 'Building resilient workplaces is an ongoing process that requires commitment from all organizational levels. By investing in physical infrastructure, mental health support, and positive organizational culture, companies can create environments where employees feel safe, supported, and empowered to do their best work.'
      }
    }
  ]

  const currentPost = blogPosts.find(post => post.id === parseInt(id || '1'))
  const currentIndex = blogPosts.findIndex(post => post.id === parseInt(id || '1'))
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  if (!currentPost) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <Link to="/blog" className="text-red-600 hover:text-red-700 font-medium">
            ← Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  const socialShareButtons = [
    { 
      icon: Facebook, 
      name: 'Facebook', 
      color: 'bg-blue-600 hover:bg-blue-700',
      url: "https://www.facebook.com/WorkSafe247"
    },
    { 
      icon: Twitter, 
      name: 'Twitter', 
      color: 'bg-blue-400 hover:bg-blue-500',
      url: "https://x.com/WorkSafe24_7"
    },
    { 
      icon: Linkedin, 
      name: 'LinkedIn', 
      color: 'bg-blue-700 hover:bg-blue-800',
      url: "https://www.linkedin.com/company/worksafe247/"
    },
    { 
      icon: MessageCircle, 
      name: 'Instagram', 
      color: 'bg-pink-500 hover:bg-pink-600',
      url: "https://www.instagram.com/worksafe24_7?igsh=eWFvZ3RwZXB4aG9x"
    },
    { 
      icon: Mail, 
      name: 'Email', 
      color: 'bg-gray-600 hover:bg-gray-700',
      url: `mailto:?subject=${encodeURIComponent(currentPost.title)}&body=${encodeURIComponent('Check out this article: ' + window.location.href)}`
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={currentPost.image}
            alt={currentPost.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                to="/blog"
                className="inline-flex items-center text-white/80 hover:text-white transition-colors duration-300 mb-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
              
              <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm mb-6">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full font-medium">
                  {currentPost.category}
                </span>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{currentPost.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>{currentPost.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{currentPost.readTime}</span>
                </div>
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {currentPost.title}
            </motion.h1>

            <motion.p
              className="text-xl text-white/90 leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {currentPost.excerpt}
            </motion.p>
          </div>
        </div>

        {/* Decorative curved bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48V0h1200v120z" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* Social Share Buttons */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-gray-600 font-medium">Share this article:</span>
            {socialShareButtons.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-white font-medium transition-all duration-300 ${social.color}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <social.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Introduction */}
            <motion.div
              className="text-xl text-gray-700 leading-relaxed mb-12 font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {currentPost.content.introduction}
            </motion.div>

            {/* Content Sections */}
            {currentPost.content.sections.map((section, index) => (
              <motion.div
                key={index}
                className="mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-6">
                  {section.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}

            {/* Conclusion */}
            <motion.div
              className="bg-gray-50 p-8 rounded-2xl border-l-4 border-red-600"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {currentPost.content.conclusion}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Between Posts */}
      <section className="py-12 bg-gray-50 border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {prevPost ? (
              <motion.div
                className="flex-1 mr-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link
                  to={`/blog/${prevPost.id}`}
                  className="group block p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center text-red-600 mb-2">
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">PREVIOUS</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300 line-clamp-2">
                    {prevPost.title}
                  </h3>
                </Link>
              </motion.div>
            ) : (
              <div className="flex-1 mr-4" />
            )}

            {nextPost ? (
              <motion.div
                className="flex-1 ml-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link
                  to={`/blog/${nextPost.id}`}
                  className="group block p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-right"
                >
                  <div className="flex items-center justify-end text-red-600 mb-2">
                    <span className="text-sm font-medium">NEXT</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300 line-clamp-2">
                    {nextPost.title}
                  </h3>
                </Link>
              </motion.div>
            ) : (
              <div className="flex-1 ml-4" />
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default BlogDetail
