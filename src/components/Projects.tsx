import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'E-commerce Website',
    category: 'Full Stack',
    image: '/assets/images/ecom.webp',
    description: 'A responsive e-commerce platform built with React, Node.js and MongoDB, featuring product filtering, cart functionality, and payment integration.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    category: 'Frontend',
    image: '/assets/images/porto.webp',
    description: 'A professionally designed portfolio website showcasing client work and services offered. Built with React and styled with Tailwind CSS.',
    technologies: ['React', 'Tailwind CSS', 'Vite', 'TypeScript'],
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 3,
    title: 'SEO Dashboard',
    category: 'SEO',
    image: '/assets/images/dashboard.webp',
    description: 'A comprehensive SEO analytics dashboard that tracks rankings, backlinks, and performance metrics. Integrates with Google Analytics and Search Console.',
    technologies: ['React', 'Chart.js', 'GA4 API', 'Search Console API'],
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 4,
    title: 'Content Management System',
    category: 'Backend',
    image: '/assets/images/cms.webp',
    description: 'A custom CMS built for content creators with robust SEO features, rich text editing, and media management capabilities.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'Alpine.js', 'Tailwind CSS'],
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 5,
    title: 'AI Chatbot Assistant',
    category: 'AI',
    image: '/assets/images/assisten.webp',
    description: 'An intelligent chatbot using OpenAI GPT-4 that provides natural language responses and integrates with various APIs for enhanced functionality.',
    technologies: ['OpenAI GPT-4', 'Node.js', 'Express', 'MongoDB', 'Socket.IO'],
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 6,
    title: 'Mobile App for Fitness Tracking',
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    description: 'A cross-platform fitness tracking app built with React Native that helps users monitor their workouts and track progress.',
    technologies: ['React Native', 'Expo', 'Firebase', 'Redux', 'TypeScript'],
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 7,
    title: 'Social Media Analytics Platform',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    description: 'A platform that analyzes social media data to provide insights about brand performance and audience engagement.',
    technologies: ['React', 'Python', 'Django', 'PostgreSQL', 'D3.js'],
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 8,
    title: 'Real-time Stock Trading Dashboard',
    category: 'Finance',
    image: '/assets/images/trading.webp',
    description: 'A real-time stock trading dashboard with live market data, portfolio tracking, and automated trading features.',
    technologies: ['React', 'Node.js', 'WebSocket', 'Chart.js', 'Redis'],
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 9,
    title: 'AI-Powered Content Generator',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
    description: 'An AI-powered content generation tool that creates high-quality blog posts, articles, and social media content.',
    technologies: ['OpenAI API', 'Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 10,
    title: 'Blockchain Voting System',
    category: '/assets/images/blogcain.webp',
    image: '/assets/images/blogcain.webp',
    description: 'A secure blockchain-based voting system that ensures transparency and prevents fraud in elections.',
    technologies: ['Solidity', 'React', 'Web3.js', 'Ethereum', 'Truffle'],
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 11,
    title: 'AI Image Generator',
    category: 'AI',
    image: '/assets/images/aigenerator.webp',
    description: 'An AI-powered image generation tool using DALL-E that creates unique images from text descriptions.',
    technologies: ['DALL-E API', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 12,
    title: 'E-Learning Platform',
    category: 'Education',
    image: '/assets/images/elearning.webp',
    description: 'A comprehensive e-learning platform with course management, video lectures, and interactive quizzes.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'WebRTC', 'Redis'],
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 13,
    title: 'AI-Powered Resume Builder',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
    description: 'An AI-powered resume builder that generates professional resumes based on user input and job requirements.',
    technologies: ['OpenAI API', 'React', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 14,
    title: 'Digital Marketing Dashboard',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    description: 'A comprehensive marketing analytics dashboard that tracks campaigns across multiple channels.',
    technologies: ['React', 'Python', 'Django', 'PostgreSQL', 'Chart.js', 'Google Analytics API'],
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 15,
    title: 'AI-Powered Customer Support',
    category: 'AI',
    image: '/assets/images/support.webp',
    description: 'An AI-powered customer support system that handles inquiries, provides solutions, and routes complex issues.',
    technologies: ['OpenAI API', 'Node.js', 'Express', 'MongoDB', 'Socket.IO'],
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 16,
    title: 'Smart Agriculture System',
    category: 'IoT',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    description: 'An IoT-based smart agriculture system that monitors soil moisture, temperature, and provides automated irrigation.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'ESP32', 'MQTT', 'Arduino'],
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 17,
    title: 'AI-Powered Job Matching',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
    description: 'An AI-powered job matching platform that connects candidates with suitable job opportunities based on skills and preferences.',
    technologies: ['OpenAI API', 'React', 'Node.js', 'MongoDB', 'Elasticsearch'],
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 18,
    title: 'Blockchain Supply Chain',
    category: 'Blockchain',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
    description: 'A blockchain-based supply chain management system that ensures transparency and traceability of products.',
    technologies: ['Solidity', 'React', 'Web3.js', 'Ethereum', 'IPFS'],
    demoLink: '#',
    codeLink: '#',
  },
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden group transition-all duration-300 hover:shadow-lg">
        <div className="relative overflow-hidden h-75">
          <motion.img 
            src={project.image}
            alt={project.title}
            className="w-full h-75 object-fit-cover transition-transform duration-500 group-hover:scale-110"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div className="flex space-x-3">
              <motion.a 
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-navy-900 p-2 rounded-full hover:bg-teal-500 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <ExternalLink size={18} />
              </motion.a>
              <motion.a 
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-navy-900 p-2 rounded-full hover:bg-teal-500 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Github size={18} />
              </motion.a>
            </div>
          </div>
        </div>
        <CardContent className="p-5">
          <motion.div 
            className="mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
              {project.category}
            </span>
          </motion.div>
          <motion.h3 
            className="text-lg font-bold text-navy-900 mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {project.title}
          </motion.h3>
          <motion.p 
            className="text-gray-600 text-sm mb-3 line-clamp-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            {project.description}
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span key={index} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                +{project.technologies.length - 3}
              </span>
            )}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Frontend', 'Backend', 'Full Stack', 'SEO', 'AI', 'Mobile', 'Finance', 'Blockchain', 'IoT', 'Education', 'Marketing'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h3 className="section-subtitle">My Work</h3>
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-gray-700">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                  filter === category 
                    ? 'bg-teal-500 hover:bg-teal-600' 
                    : 'border-teal-500 text-navy-900 hover:bg-teal-500 hover:text-white'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="col-span-full text-center py-12"
            >
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </motion.div>
          )}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            className="bg-teal-500 hover:bg-teal-600"
            asChild
          >
            <a href="/projects">View All Projects</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
