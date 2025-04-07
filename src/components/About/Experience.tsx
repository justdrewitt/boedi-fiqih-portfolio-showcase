import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer & SEO Specialist',
      company: 'Digital Agency Indonesia',
      duration: '2023 - Present',
      location: 'Jakarta, Indonesia',
      description: 'Leading the development team in creating high-performance web applications and implementing advanced SEO strategies for enterprise clients.',
      responsibilities: [
        'Architecting scalable web applications using modern JavaScript frameworks',
        'Implementing advanced SEO strategies and technical optimizations',
        'Leading a team of developers and SEO specialists',
        'Developing custom CMS solutions for enterprise clients',
        'Optimizing website performance and user experience',
        'Creating and implementing SEO strategies for international markets',
        'Managing technical SEO audits and optimizations',
        'Developing and maintaining RESTful APIs',
        'Implementing CI/CD pipelines and DevOps practices',
        'Mentoring junior developers and conducting code reviews'
      ],
      technologies: [
        'React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB',
        'AWS', 'Docker', 'Kubernetes', 'GraphQL', 'REST APIs',
        'SEO Optimization', 'Performance Optimization', 'CI/CD',
        'Git', 'Jest', 'PostgreSQL', 'Redis', 'Prisma'
      ]
    },
    {
      title: 'Technical Lead & SEO Manager',
      company: 'E-commerce Platform',
      duration: '2022 - 2023',
      location: 'Jakarta, Indonesia',
      description: 'Managed technical development and SEO strategy for a large-scale e-commerce platform, focusing on performance optimization and user experience.',
      responsibilities: [
        'Leading technical development team and SEO strategy',
        'Optimizing website performance and scalability',
        'Implementing SEO best practices for e-commerce',
        'Managing product catalog and search functionality',
        'Developing and maintaining API integrations',
        'Implementing A/B testing and analytics',
        'Managing technical SEO audits and optimizations',
        'Developing mobile-first responsive designs',
        'Implementing CDN and caching strategies',
        'Leading cross-functional teams'
      ],
      technologies: [
        'Vue.js', 'Nuxt.js', 'Node.js', 'MongoDB', 'Redis',
        'AWS', 'Docker', 'Kubernetes', 'Elasticsearch', 'Algolia',
        'SEO Optimization', 'Performance Optimization', 'A/B Testing',
        'Git', 'Jest', 'PostgreSQL', 'TypeScript', 'GraphQL'
      ]
    },
    {
      title: 'Senior Frontend Developer & SEO Specialist',
      company: 'Tech Startup',
      duration: '2021 - 2022',
      location: 'Jakarta, Indonesia',
      description: 'Developed high-performance web applications and implemented SEO strategies for a fast-growing tech startup.',
      responsibilities: [
        'Developing responsive web applications',
        'Implementing SEO best practices',
        'Optimizing website performance',
        'Creating reusable UI components',
        'Implementing PWA features',
        'Managing version control and deployments',
        'Conducting code reviews',
        'Mentoring junior developers',
        'Implementing A/B testing',
        'Analyzing website performance metrics'
      ],
      technologies: [
        'React', 'Next.js', 'TypeScript', 'Tailwind CSS',
        'Storybook', 'Jest', 'Cypress', 'Git',
        'SEO Optimization', 'Performance Optimization',
        'PWA', 'Web Components', 'Custom Elements'
      ]
    },
    {
      title: 'Frontend Developer & SEO Specialist',
      company: 'Digital Marketing Agency',
      duration: '2020 - 2021',
      location: 'Jakarta, Indonesia',
      description: 'Developed and optimized web applications while implementing SEO strategies for clients across various industries.',
      responsibilities: [
        'Developing responsive websites',
        'Implementing SEO best practices',
        'Optimizing website performance',
        'Creating landing pages and campaigns',
        'Analyzing website metrics',
        'Implementing A/B testing',
        'Managing version control',
        'Conducting SEO audits',
        'Creating technical documentation',
        'Participating in team meetings'
      ],
      technologies: [
        'React', 'Vue.js', 'HTML5', 'CSS3', 'JavaScript',
        'SEO Optimization', 'Performance Optimization',
        'Google Analytics', 'Git', 'Jest',
        'Webpack', 'Babel', 'ESLint'
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <h2 className="text-2xl font-bold text-teal-600 mb-6">Professional Experience</h2>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl text-teal-600">💼</div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                <p className="text-gray-600 mb-1">{exp.company}</p>
                <p className="text-gray-500 mb-2">{exp.duration}</p>
                <p className="text-gray-500 mb-2">{exp.location}</p>
              </div>
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-gray-600"
            >
              {exp.description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-2 mb-4"
            >
              <h4 className="text-lg font-semibold text-teal-600 mb-2">Key Responsibilities</h4>
              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="list-disc list-inside text-gray-600 space-y-1"
              >
                {exp.responsibilities.map((resp, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: idx * 0.1
                    }}
                  >
                    {resp}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              {exp.technologies.map((tech, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.1
                  }}
                  className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Experience;
