
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com/' },
  ];

  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0">
            <span className="text-3xl font-bold font-display">Boedi<span className="text-teal-500">Fiqih</span></span>
            <p className="mt-4 max-w-xs text-gray-400">
              Full Stack Web Developer and SEO Specialist helping businesses succeed online with beautiful, high-performing websites.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full text-white hover:bg-teal-500 transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-teal-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Jakarta, Indonesia</li>
              <li>boedi.fiqih@example.com</li>
              <li>+62 123 456 7890</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p className="flex items-center justify-center gap-1">
            &copy; {currentYear} Boedi Moelya M. Fiqih. All rights reserved. Made with <Heart size={14} className="text-teal-500" /> in Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
