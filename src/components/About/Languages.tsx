import React from 'react';
import { motion } from 'framer-motion';

const Languages = () => {
  const languages = [
    {
      name: 'English',
      proficiency: 'Fluent',
      level: 80
    },
    {
      name: 'Indonesian',
      proficiency: 'Native',
      level: 100
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-12"
    >
      <h2 className="text-2xl font-bold text-teal-600 mb-6 text-center">Languages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {languages.map((lang, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">{lang.name}</h3>
            <p className="text-gray-600 mb-4">{lang.proficiency}</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-teal-600 h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${lang.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Languages;
