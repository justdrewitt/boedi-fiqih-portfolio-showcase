import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Briefcase, 
  User, 
  Settings, 
  Mail, 
  Menu, 
  X,
  Search,
  Moon,
  Sun
} from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/', icon: <Home size={20} /> },
  { name: 'Projects', href: '/projects', icon: <Briefcase size={20} /> },
  { name: 'About', href: '/about', icon: <User size={20} /> },
  { name: 'Services', href: '/services', icon: <Settings size={20} /> },
  { name: 'Contact', href: '/contact', icon: <Mail size={20} /> },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-navy-900 shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2"
        >
          <span className="text-2xl font-bold text-navy-900 dark:text-white font-display">
            BMMF
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="px-4 py-2 text-sm font-medium hover:text-teal-500 transition-colors flex items-center space-x-2 group"
            >
              <span className="text-gray-600 dark:text-gray-300 group-hover:text-teal-500 transition-colors">
                {link.icon}
              </span>
              <span className="text-gray-600 dark:text-gray-300 group-hover:text-teal-500 transition-colors">
                {link.name}
              </span>
            </Link>
          ))}
          
          {/* Search button */}
          <button 
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-navy-800 transition-colors"
          >
            <Search className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </button>

          {/* Theme toggle */}
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-navy-800 transition-colors"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            ) : (
              <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            )}
          </button>

          <Button 
            className="bg-teal-500 hover:bg-teal-600 text-white dark:text-white px-6 py-2"
          >
            <Link to="/contact">Hire Me</Link>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          ) : (
            <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed left-0 right-0 top-[calc(var(--header-height,60px))] bg-white dark:bg-navy-900 shadow-lg transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
        } z-40`}
      >
        <div className="container mx-auto py-4 px-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={toggleMenu}
                className="flex items-center space-x-4 px-4 py-3 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-navy-800 hover:text-teal-500 transition-all duration-200"
              >
                <span className="text-teal-500">{link.icon}</span>
                <span className="font-medium">{link.name}</span>
              </Link>
            ))}

            <div className="h-px bg-gray-200 dark:bg-gray-700 my-2"></div>

            {/* Search button */}
            <button 
              onClick={toggleMenu}
              className="flex items-center space-x-4 px-4 py-3 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-navy-800 hover:text-teal-500 transition-all duration-200"
            >
              <span className="text-teal-500">
                <Search className="h-5 w-5" />
              </span>
              <span className="font-medium">Search</span>
            </button>

            {/* Theme toggle */}
            <button 
              onClick={() => {
                toggleDarkMode();
                toggleMenu();
              }}
              className="flex items-center space-x-4 px-4 py-3 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-navy-800 hover:text-teal-500 transition-all duration-200"
            >
              <span className="text-teal-500">
                {isDarkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </span>
              <span className="font-medium">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>

            <div className="pt-4">
              <Button 
                className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 flex items-center justify-center space-x-2"
                onClick={toggleMenu}
              >
                <Mail className="h-4 w-4" />
                <span>Hire Me</span>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;