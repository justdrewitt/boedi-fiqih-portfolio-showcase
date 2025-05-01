import React from 'react';
import { motion } from 'framer-motion';
import Experience from '../components/About/Experience';
import Education from '../components/About/Education';
import Skills from '../components/About/Skills';
import Languages from '../components/About/Languages';
import Footer from '../components/Footer';
import Seo from '../components/Seo';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Seo
        title="About Me - Web Specialist & Full Stack Developer"
        description="I am a web specialist and full stack developer with expertise in website design and development. As an IT full stack developer, I create modern web applications and provide full stack developer courses. Learn about full stack developer skills and what web development is all about."
        url="https://bmmf.site/about"
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
            <h1 className="text-4xl font-bold text-teal-600 mb-12 text-center">About Me</h1>
            
            <div className="prose max-w-none mb-12">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                As a web specialist and full stack developer, I specialize in creating modern, responsive websites that are optimized for search engines. With expertise in both web development and SEO, I help businesses establish a strong online presence through custom website development and search engine optimization. As a web site designer and developer for website projects, I understand the complete web stack and what it takes to build successful web applications.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                Whether you're looking to understand apa itu web developer, need an IT full stack developer, or want to learn about full stack developer courses, I'm here to help. I combine full stack SEO expertise with website coding skills to create comprehensive solutions. As one of the leading website coders, I can help you understand what stack full development means and how it can benefit your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Experience />
              <Education />
            </div>

            <Skills />
            <Languages />
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
