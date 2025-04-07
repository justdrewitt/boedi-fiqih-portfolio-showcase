import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      category: 'Full Stack Development',
      courses: [
        {
          title: 'Full Stack Web Development Bootcamp',
          platform: 'Tech Academy Indonesia',
          duration: '2023',
          description: 'Intensive training in full-stack web development with real-world projects using modern technologies.',
          technologies: [
            'React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript',
            'GraphQL', 'REST APIs', 'Docker', 'Kubernetes', 'AWS'
          ]
        },
        {
          title: 'Advanced Full Stack Development',
          platform: 'Udemy',
          duration: '2022',
          description: 'Advanced topics in full-stack development including microservices, serverless architecture, and cloud optimization.',
          technologies: [
            'Microservices', 'Serverless', 'AWS Lambda', 'DynamoDB', 'API Gateway'
          ]
        }
      ]
    },
    {
      category: 'AI & Machine Learning',
      courses: [
        {
          title: 'AI & Machine Learning Bootcamp',
          platform: 'Coursera',
          duration: '2023',
          description: 'Comprehensive training in AI and machine learning with practical projects and case studies.',
          technologies: [
            'Python', 'TensorFlow', 'PyTorch', 'Computer Vision', 'NLP'
          ]
        },
        {
          title: 'Deep Learning Specialization',
          platform: 'DeepLearning.AI',
          duration: '2022',
          description: 'In-depth study of deep learning concepts and implementation using TensorFlow and PyTorch.',
          technologies: [
            'Neural Networks', 'CNN', 'RNN', 'GANs', 'Reinforcement Learning'
          ]
        }
      ]
    },
    {
      category: 'DevOps & Cloud',
      courses: [
        {
          title: 'DevOps & Cloud Engineering Bootcamp',
          platform: 'Udacity',
          duration: '2022',
          description: 'Complete training in DevOps practices and cloud engineering with hands-on projects.',
          technologies: [
            'AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Ansible'
          ]
        },
        {
          title: 'CI/CD & Automation',
          platform: 'Pluralsight',
          duration: '2022',
          description: 'Advanced CI/CD practices and automation techniques for modern development teams.',
          technologies: [
            'GitHub Actions', 'Jenkins', 'CircleCI', 'GitLab CI/CD', 'Docker'
          ]
        }
      ]
    },
    {
      category: 'SEO & Digital Marketing',
      courses: [
        {
          title: 'Advanced SEO & Digital Marketing',
          platform: 'HubSpot Academy',
          duration: '2022',
          description: 'Comprehensive training in SEO, content marketing, and digital marketing strategies.',
          technologies: [
            'SEO Optimization', 'Content Strategy', 'Analytics', 'A/B Testing', 'Performance Optimization'
          ]
        },
        {
          title: 'Technical SEO Masterclass',
          platform: 'Moz Academy',
          duration: '2022',
          description: 'In-depth technical SEO training with practical implementation techniques.',
          technologies: [
            'Technical SEO', 'Performance Optimization', 'Schema Markup', 'Mobile Optimization', 'Core Web Vitals'
          ]
        }
      ]
    },
    {
      category: 'UI/UX & Design',
      courses: [
        {
          title: 'UI/UX Design Bootcamp',
          platform: 'Designlab',
          duration: '2022',
          description: 'Comprehensive training in UI/UX design principles and modern design tools.',
          technologies: [
            'Figma', 'Sketch', 'Adobe XD', 'User Research', 'Prototyping'
          ]
        },
        {
          title: 'Web Performance Optimization',
          platform: 'Google Developers',
          duration: '2022',
          description: 'Advanced web performance optimization techniques and best practices.',
          technologies: [
            'Performance Optimization', 'Web Vitals', 'CDN', 'Caching', 'Lazy Loading'
          ]
        }
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <h2 className="text-2xl font-bold text-teal-600 mb-6">Professional Development</h2>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {education.map((category, categoryIndex) => (
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
            <h3 className="text-xl font-semibold text-teal-600 mb-4">{category.category}</h3>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {category.courses.map((course, courseIndex) => (
                <motion.div
                  key={courseIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: courseIndex * 0.1
                  }}
                  className="mb-6"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl text-teal-600">🎓</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">{course.title}</h4>
                      <p className="text-gray-600 mb-1">{course.platform}</p>
                      <p className="text-gray-500 mb-2">{course.duration}</p>
                    </div>
                  </div>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-4 text-gray-600"
                  >
                    {course.description}
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-wrap gap-2"
                  >
                    {course.technologies.map((tech, idx) => (
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
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Education;
