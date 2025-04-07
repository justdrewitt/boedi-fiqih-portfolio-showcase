import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-navy-900 font-display">Boedi<span className="text-teal-500">Fiqih</span></span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="px-4 py-2 text-sm font-medium hover:text-teal-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button className="ml-4 bg-teal-500 hover:bg-teal-600">
            <Link to="/contact">Hire Me</Link>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile menu */}
        <nav className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="container py-4 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={toggleMenu}
                className="px-4 py-2 text-sm font-medium hover:text-teal-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button className="mt-2 bg-teal-500 hover:bg-teal-600">
              <Link to="/contact" onClick={toggleMenu}>Hire Me</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
