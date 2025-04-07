
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-commerce Website',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    description: 'A responsive e-commerce platform built with React, Node.js and MongoDB, featuring product filtering, cart functionality, and payment integration.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    description: 'A professionally designed portfolio website showcasing client work and services offered. Built with React and styled with Tailwind CSS.',
    technologies: ['React', 'Tailwind CSS', 'Vite', 'TypeScript'],
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 3,
    title: 'SEO Dashboard',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    description: 'A comprehensive SEO analytics dashboard that tracks rankings, backlinks, and performance metrics. Integrates with Google Analytics and Search Console.',
    technologies: ['React', 'Chart.js', 'GA4 API', 'Search Console API'],
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 4,
    title: 'Content Management System',
    category: 'Backend',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    description: 'A custom CMS built for content creators with robust SEO features, rich text editing, and media management capabilities.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'Alpine.js', 'Tailwind CSS'],
    demoLink: '#',
    codeLink: '#',
  },
];

const ProjectCard = ({ project }) => {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-lg">
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex space-x-3">
            <a 
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-navy-900 p-2 rounded-full hover:bg-teal-500 hover:text-white transition-colors"
            >
              <ExternalLink size={18} />
            </a>
            <a 
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-navy-900 p-2 rounded-full hover:bg-teal-500 hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
      <CardContent className="p-5">
        <div className="mb-2">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
            {project.category}
          </span>
        </div>
        <h3 className="text-lg font-bold text-navy-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2">
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
        </div>
      </CardContent>
    </Card>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Frontend', 'Backend', 'Full Stack', 'SEO'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="section-subtitle">My Work</h3>
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-gray-700">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                variant={filter === category ? "default" : "outline"}
                className={filter === category 
                  ? "bg-teal-500 hover:bg-teal-600" 
                  : "border-teal-500 text-navy-900 hover:bg-teal-500 hover:text-white"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-teal-500 hover:bg-teal-600">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
