import React from 'react';
import { motion } from 'framer-motion';
import Experience from '../components/About/Experience';
import Education from '../components/About/Education';
import Skills from '../components/About/Skills';
import Languages from '../components/About/Languages';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
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
