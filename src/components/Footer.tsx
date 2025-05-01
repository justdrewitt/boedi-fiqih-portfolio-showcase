import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
      title: 'Tentang',
      links: [
        { text: 'Tentang Kami', href: '/about' },
        { text: 'Pengalaman', href: '/about#experience' },
        { text: 'Pendidikan', href: '/about#education' },
        { text: 'Keahlian', href: '/about#skills' }
      ]
    },
    {
      title: 'Layanan',
      links: [
        { text: 'Pengembangan Web', href: '/services#web-development' },
        { text: 'SEO & Analytics', href: '/services#seo-analytics' },
        { text: 'DevOps', href: '/services#devops' },
        { text: 'AI & ML', href: '/services#ai-ml' }
      ]
    },
    {
      title: 'Sumber Daya',
      links: [
        { text: 'Blog', href: '/blog' },
        { text: 'Studi Kasus', href: '/case-studies' },
        { text: 'FAQ', href: '/faq' },
        { text: 'Harga', href: '/pricing' }
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
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-[#f13131] mb-4">Tentang Kami</h3>
            <p className="text-gray-600">
              Kami adalah tim profesional yang berdedikasi untuk memberikan solusi digital terbaik.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.tooltip}
                  className="text-gray-600 hover:text-[#f13131] transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {quickLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-[#f13131] mb-4">{section.title}</h3>
              <ul className="space-y-2">
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
                    <Link
                      to={link.href}
                      className="text-gray-600 hover:text-[#f13131] transition-colors duration-300"
                    >
                      {link.text}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-lg font-semibold text-[#f13131] mb-4">Kontak</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600">
                <Mail size={20} className="mr-2 text-[#f13131]" />
                <a href="mailto:contact@bmmf.site" className="text-gray-600 hover:text-[#f13131] transition-colors duration-300">contact@bmmf.site</a>
              </li>
              <li className="flex items-center text-gray-600">
                <Phone size={20} className="mr-2 text-[#f13131]" />
                <a href="tel:+628567209773" className="text-gray-600 hover:text-[#f13131] transition-colors duration-300">+62 8567209773</a>
              </li>
              <li className="flex items-center text-gray-600">
                <MapPin size={20} className="mr-2 text-[#f13131]" />
                Jakarta, Indonesia
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Bmmf. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
