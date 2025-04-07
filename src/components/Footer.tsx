import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { 
      name: 'Home', 
      href: '/', 
      description: 'Back to the homepage' 
    },
    { 
      name: 'About', 
      href: '/about', 
      description: 'Learn more about me' 
    },
    { 
      name: 'Projects', 
      href: '/projects', 
      description: 'View my work portfolio' 
    },
    { 
      name: 'Services', 
      href: '/services', 
      description: 'What I offer' 
    },
    { 
      name: 'Contact', 
      href: '/contact', 
      description: 'Get in touch' 
    },
  ];

  const socialLinks = [
    { 
      icon: <Github size={20} />, 
      href: 'https://github.com/', 
      tooltip: 'GitHub' 
    },
    { 
      icon: <Linkedin size={20} />, 
      href: 'https://linkedin.com/', 
      tooltip: 'LinkedIn' 
    },
    { 
      icon: <Twitter size={20} />, 
      href: 'https://twitter.com/', 
      tooltip: 'Twitter' 
    },
  ];

  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <span className="text-3xl font-bold font-display">BMMF</span>
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
                  className="bg-gray-800 p-2 rounded-full text-white hover:bg-teal-500 transition-colors group"
                  title={link.tooltip}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index} className="group">
                  <Link 
                    to={link.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-teal-500 transition-colors group-hover:pl-2"
                    title={link.description}
                  >
                    <span className="w-4 h-px bg-gray-400 group-hover:bg-teal-500 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <span className="text-teal-500">📍</span>
                Jakarta, Indonesia
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal-500">📧</span>
                contact@bmmf.site
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal-500">📱</span>
                +62 856-7209-773
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal-500">⏰</span>
                Mon - Fri: 9:00 AM - 6:00 PM
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Get the latest updates on my projects and insights.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 rounded-l-md text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-teal-500 rounded-r-md hover:bg-teal-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
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
