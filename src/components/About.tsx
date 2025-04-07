
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="section-subtitle">About Me</h3>
          <h2 className="section-title">Get to know me</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative hidden lg:block">
            <div className="w-full h-[450px] relative">
              <div className="absolute top-0 left-0 w-4/5 h-4/5 bg-blue-100 rounded-lg"></div>
              <div className="absolute bottom-0 right-0 w-4/5 h-4/5 bg-white rounded-lg shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  alt="Boedi Fiqih Web Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4 text-navy-900">Full Stack Developer <span className="text-teal-500">&</span> SEO Specialist</h3>
            
            <p className="text-gray-700 mb-6">
              I'm Boedi Moelya M. Fiqih, a passionate Full Stack Developer and SEO Specialist with extensive experience in creating beautiful, high-performing web applications that rank well in search engines.
            </p>
            
            <p className="text-gray-700 mb-6">
              With expertise in both frontend and backend technologies, I build complete web solutions that not only look great but also perform exceptionally well. My SEO knowledge ensures that websites I develop are optimized for search engines right from the start.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-bold text-navy-900 mb-2">Name:</h4>
                <p className="text-gray-700">Boedi Moelya M. Fiqih</p>
              </div>
              
              <div>
                <h4 className="font-bold text-navy-900 mb-2">Email:</h4>
                <p className="text-gray-700">boedi.fiqih@example.com</p>
              </div>
              
              <div>
                <h4 className="font-bold text-navy-900 mb-2">Location:</h4>
                <p className="text-gray-700">Indonesia</p>
              </div>
              
              <div>
                <h4 className="font-bold text-navy-900 mb-2">Available for:</h4>
                <p className="text-gray-700">Freelance & Full-time</p>
              </div>
            </div>
            
            <Button className="bg-teal-500 hover:bg-teal-600 flex items-center gap-2">
              <FileText size={16} />
              <span>Download CV</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
