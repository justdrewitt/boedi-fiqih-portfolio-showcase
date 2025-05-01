import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/Services/ServiceCard';
import Footer from '../components/Footer';
import Seo from '../components/Seo';

const services = [
  {
    category: 'Web Development',
    items: [
      {
        title: 'Full Stack Web Development',
        description: 'Professional full stack web development services for building custom web applications using modern technologies and best practices. Specializing in both frontend and backend development. Learn about full stack developer skills and what web development is all about.',
        technologies: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript'],
        icon: '💻'
      },
      {
        title: 'Progressive Web Apps',
        description: 'Creating fast, reliable, and engaging web applications that work offline. Expert website development for modern businesses. Perfect for web site designers and website coders.',
        technologies: ['PWA', 'Service Workers', 'Web Manifest', 'Cache API'],
        icon: '📱'
      },
      {
        title: 'Web Performance Optimization',
        description: 'Optimizing website speed and user experience through technical optimization. Professional site development and performance tuning by a web specialist.',
        technologies: ['Core Web Vitals', 'Lighthouse', 'CDN', 'Image Optimization'],
        icon: '⚡'
      }
    ]
  },
  {
    category: 'SEO & Analytics',
    items: [
      {
        title: 'Technical SEO Development',
        description: 'Expert SEO developer services implementing technical SEO best practices for better search engine visibility. Full stack SEO services combined with web development expertise.',
        technologies: ['Schema Markup', 'Sitemaps', 'Mobile Optimization'],
        icon: '🔍'
      },
      {
        title: 'Performance Optimization',
        description: 'Enhancing website speed and user experience through technical optimization. Professional stack full development services by an IT full stack developer.',
        technologies: ['Web Vitals', 'CDN', 'Caching', 'Lazy Loading'],
        icon: '📈'
      },
      {
        title: 'Analytics Implementation',
        description: 'Setting up and configuring analytics tools for data-driven decisions. Expert developer for website services by a web specialist.',
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
      <Seo
        title="Web Development & SEO Services - Web Specialist & Full Stack Developer"
        description="Professional web development and SEO services by a web specialist and full stack developer. Specializing in custom website development, SEO optimization, and full stack solutions. Learn about full stack developer courses and what web development is all about."
        url="https://bmmf.site/services"
      />
      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
        >
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-teal-600 mb-12 text-center">Services</h1>
            
            <div className="prose max-w-none mb-12">
              <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
                As a web specialist and full stack developer, I offer comprehensive web development and SEO services to help your business succeed online. Whether you need to understand apa itu web developer, want to learn about full stack developer courses, or need an IT full stack developer, I'm here to help.
              </p>
            </div>
            
            {services.map((category, index) => (
              <div key={index} className="mb-16">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8">{category.category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((service, serviceIndex) => (
                    <ServiceCard
                      key={serviceIndex}
                      title={service.title}
                      description={service.description}
                      technologies={service.technologies}
                      icon={service.icon}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
