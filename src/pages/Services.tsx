import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/Services/ServiceCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const services = [
  {
    category: 'Web Development',
    items: [
      {
        title: 'Full Stack Development',
        description: 'Building custom web applications using modern technologies and best practices.',
        technologies: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript'],
        icon: '💻'
      },
      {
        title: 'Progressive Web Apps',
        description: 'Creating fast, reliable, and engaging web applications that work offline.',
        technologies: ['PWA', 'Service Workers', 'Web Manifest', 'Cache API'],
        icon: '📱'
      },
      {
        title: 'Web Performance Optimization',
        description: 'Optimizing website speed and user experience through technical optimization.',
        technologies: ['Core Web Vitals', 'Lighthouse', 'CDN', 'Image Optimization'],
        icon: '⚡'
      }
    ]
  },
  {
    category: 'SEO & Analytics',
    items: [
      {
        title: 'Technical SEO',
        description: 'Implementing technical SEO best practices for better search engine visibility.',
        technologies: ['Schema Markup', 'Sitemaps', 'Mobile Optimization'],
        icon: '🔍'
      },
      {
        title: 'Performance Optimization',
        description: 'Enhancing website speed and user experience through technical optimization.',
        technologies: ['Web Vitals', 'CDN', 'Caching', 'Lazy Loading'],
        icon: '📈'
      },
      {
        title: 'Analytics Implementation',
        description: 'Setting up and configuring analytics tools for data-driven decisions.',
        technologies: ['Google Analytics', 'GA4', 'Event Tracking'],
        icon: '📊'
      }
    ]
  },
  {
    category: 'DevOps & Cloud',
    items: [
      {
        title: 'Cloud Infrastructure',
        description: 'Building and managing cloud-based infrastructure solutions.',
        technologies: ['AWS', 'Azure', 'Terraform', 'Kubernetes'],
        icon: '☁️'
      },
      {
        title: 'CI/CD Pipelines',
        description: 'Implementing continuous integration and deployment workflows.',
        technologies: ['GitHub Actions', 'Jenkins', 'Docker', 'Kubernetes'],
        icon: '🔄'
      },
      {
        title: 'Container Orchestration',
        description: 'Managing containerized applications at scale.',
        technologies: ['Docker', 'Kubernetes', 'Docker Swarm'],
        icon: '📦'
      }
    ]
  },
  {
    category: 'AI & Machine Learning',
    items: [
      {
        title: 'AI Integration',
        description: 'Integrating AI capabilities into web applications.',
        technologies: ['TensorFlow', 'PyTorch', 'OpenAI API'],
        icon: '🤖'
      },
      {
        title: 'Chatbot Development',
        description: 'Creating intelligent chatbots for customer engagement.',
        technologies: ['Natural Language Processing', 'Dialogflow', 'Rasa'],
        icon: '💬'
      },
      {
        title: 'Recommendation Systems',
        description: 'Building personalized recommendation engines.',
        technologies: ['Collaborative Filtering', 'Matrix Factorization'],
        icon: '✨'
      }
    ]
  },
  {
    category: 'Digital Marketing',
    items: [
      {
        title: 'Content Strategy',
        description: 'Developing effective content strategies for better engagement and conversion.',
        technologies: ['SEO', 'Content Marketing', 'Social Media'],
        icon: '📝'
      },
      {
        title: 'SEO Optimization',
        description: 'Improving website visibility and ranking in search engine results.',
        technologies: ['Keyword Research', 'On-page SEO', 'Technical SEO'],
        icon: '🎯'
      },
      {
        title: 'Social Media Integration',
        description: 'Integrating social media platforms into web applications.',
        technologies: ['Facebook API', 'Twitter API', 'Instagram API'],
        icon: '🌐'
      }
    ]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
        >
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-teal-600 mb-12 text-center">My Services</h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: categoryIndex * 0.1
                  }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h2 className="text-2xl font-bold text-teal-600 mb-6">{category.category}</h2>
                  
                  <div className="grid grid-cols-1 gap-6">
                    {category.items.map((service, serviceIndex) => (
                      <motion.div
                        key={serviceIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: serviceIndex * 0.1
                        }}
                        className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-300"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className="text-3xl text-teal-600">{service.icon}</div>
                          <h3 className="text-xl font-semibold">{service.title}</h3>
                        </div>
                        
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.5,
                                delay: techIndex * 0.1
                              }}
                              className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
