import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend Development',
      items: [
        'React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript',
        'HTML5', 'CSS3', 'Tailwind CSS', 'Material-UI', 'Framer Motion',
        'Styled Components', 'Emotion', 'Chakra UI', 'Storybook',
        'Progressive Web Apps (PWA)', 'Web Components', 'Custom Elements'
      ]
    },
    {
      category: 'Backend Development',
      items: [
        'Node.js', 'Express', 'MongoDB', 'MySQL', 'GraphQL',
        'REST APIs', 'WebSocket', 'Redis', 'Docker', 'Kubernetes',
        'Python (FastAPI)', 'Java (Spring Boot)', 'PHP (Laravel)',
        'Ruby on Rails', 'Firebase', 'Prisma', 'TypeORM'
      ]
    },
    {
      category: 'DevOps & Tools',
      items: [
        'AWS (EC2, S3, Lambda, RDS)', 'Azure (App Service, Functions)',
        'Git', 'GitHub Actions', 'GitLab CI/CD', 'Jenkins',
        'Docker', 'Kubernetes', 'Terraform', 'Ansible',
        'Jest', 'Mocha', 'Chai', 'Cypress', 'Playwright',
        'Postman', 'Insomnia', 'Swagger', 'OpenAPI'
      ]
    },
    {
      category: 'SEO & Analytics',
      items: [
        'Google Analytics 4 (GA4)', 'Google Search Console',
        'SEO Optimization', 'Performance Optimization',
        'Content Strategy', 'Keyword Research',
        'Schema Markup', 'Local SEO', 'Technical SEO',
        'Mobile Optimization', 'Page Speed Insights',
        'Core Web Vitals', 'Lighthouse'
      ]
    },
    {
      category: 'AI & Machine Learning',
      items: [
        'Python (TensorFlow, PyTorch)', 'OpenAI API',
        'Natural Language Processing (NLP)', 'Computer Vision',
        'Chatbot Development', 'Recommendation Systems',
        'Data Visualization (D3.js, Chart.js)',
        'Pandas', 'NumPy', 'Scikit-learn', 'Keras'
      ]
    },
    {
      category: 'Cloud & Infrastructure',
      items: [
        'AWS CloudFormation', 'Azure Resource Manager',
        'Terraform', 'Ansible', 'Pulumi', 'Cloudflare',
        'CDN Optimization', 'Load Balancing',
        'Auto-scaling', 'Serverless Architecture',
        'Container Orchestration', 'Microservices'
      ]
    },
    {
      category: 'Performance & Optimization',
      items: [
        'Web Performance Optimization', 'Image Optimization',
        'Lazy Loading', 'Code Splitting', 'Tree Shaking',
        'Caching Strategies', 'CDN Implementation',
        'Performance Monitoring', 'A/B Testing',
        'Load Testing', 'Stress Testing'
      ]
    },
    {
      category: 'Security & Compliance',
      items: [
        'OWASP Top 10', 'CORS', 'CSRF Protection',
        'JWT Authentication', 'OAuth 2.0', 'OpenID Connect',
        'GDPR Compliance', 'Data Encryption',
        'Security Headers', 'Rate Limiting',
        'API Security', 'Penetration Testing'
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-12"
    >
      <h2 className="text-2xl font-bold text-teal-600 mb-6 text-center">Technical Skills</h2>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-2"
            >
              {skill.items.map((item, idx) => (
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
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
