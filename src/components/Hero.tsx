
import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 to-white"
        aria-hidden="true"
      />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <h2 className="text-blue-600 font-semibold text-lg">Hello, I'm</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 font-display leading-tight">
              Boedi Moelya M. Fiqih
            </h1>
            <p className="text-xl text-gray-700">
              <span className="text-teal-500 font-semibold">Full Stack Web Developer</span> &amp; <span className="text-orange-500 font-semibold">SEO Specialist</span> who creates high-performing, beautiful digital experiences.
            </p>

            <div className="flex space-x-4 pt-4">
              <Button className="bg-teal-500 hover:bg-teal-600 px-8">
                <a href="#contact">Hire Me</a>
              </Button>
              <Button variant="outline" className="border-teal-500 text-navy-900 hover:bg-teal-500 hover:text-white">
                <a href="#projects">See My Work</a>
              </Button>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-teal-500 transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-teal-500 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-teal-500 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-teal-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-orange-500 rounded-full opacity-20"></div>
            <div className="relative bg-white p-4 rounded-2xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Boedi Fiqih - Web Developer" 
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-gray-500 hover:text-teal-500 transition-colors">
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
