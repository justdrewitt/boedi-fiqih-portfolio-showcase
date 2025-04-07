
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container flex items-center justify-between">
        <a href="#home" className="flex items-center">
          <span className="text-2xl font-bold text-navy-900 font-display">Boedi<span className="text-teal-500">Fiqih</span></span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-medium hover:text-teal-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button className="ml-4 bg-teal-500 hover:bg-teal-600">
            <a href="#contact">Hire Me</a>
          </Button>
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-navy-900 hover:text-teal-500 transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-md absolute left-0 w-full">
          <div className="container py-4 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={toggleMenu}
                className="px-4 py-2 text-sm font-medium hover:text-teal-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button className="mt-2 bg-teal-500 hover:bg-teal-600">
              <a href="#contact" onClick={toggleMenu}>Hire Me</a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
