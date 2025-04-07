import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  technologies: string[];
  icon: string;
}

const ServiceCard = ({ title, description, technologies, icon }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="text-4xl text-teal-600">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceCard;
