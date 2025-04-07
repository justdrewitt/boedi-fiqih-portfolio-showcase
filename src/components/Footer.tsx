import React from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    {
      title: 'About',
      links: [
        { text: 'About Me', href: '/about' },
        { text: 'Experience', href: '/about#experience' },
        { text: 'Education', href: '/about#education' },
        { text: 'Skills', href: '/about#skills' }
      ]
    },
    {
      title: 'Services',
      links: [
        { text: 'Web Development', href: '/services#web-development' },
        { text: 'SEO & Analytics', href: '/services#seo-analytics' },
        { text: 'DevOps', href: '/services#devops' },
        { text: 'AI & ML', href: '/services#ai-ml' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { text: 'Blog', href: '/blog' },
        { text: 'Case Studies', href: '/case-studies' },
        { text: 'FAQ', href: '/faq' },
        { text: 'Pricing', href: '/pricing' }
      ]
    }
  ];

  const socialLinks = [
    { 
      icon: <Github size={20} />, 
      href: 'https://github.com/justdrewitt', 
      tooltip: 'GitHub' 
    },
    { 
      icon: <Linkedin size={20} />, 
      href: 'https://id.linkedin.com/in/moehammadfiqih', 
      tooltip: 'LinkedIn' 
    },
    { 
      icon: <Instagram size={20} />, 
      href: 'https://www.instagram.com/moehammadfiqih/', 
      tooltip: 'Instagram' 
    }
  ];

  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <span className="text-3xl font-bold font-display">BMMF</span>
            <p className="mt-4 max-w-xs text-gray-400">
              Full Stack Web Developer and SEO Specialist helping businesses succeed online with beautiful, high-performing websites.
            </p>
            
            <div className="mt-6 flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.tooltip}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {quickLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-gray-400">
                {section.links.map((link, idx) => (
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
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors duration-300"
                    >
                      {link.text}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Get the latest updates on my projects and insights.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400"> 2025 BMMF. All rights reserved.</p>
              <div className="flex gap-6 text-gray-400">
                <a href="/privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                <a href="/terms" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
