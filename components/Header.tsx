import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, User, Menu, X, Coffee } from 'lucide-react';
import { Link } from 'react-scroll';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Defined with target IDs instead of hrefs
  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Products', to: 'products' },
    { name: 'Services', to: 'services' },
    { name: 'About', to: 'team' },
    { name: 'Contact', to: 'footer' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-coffee-900/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
            <div className={`p-2 rounded-full ${isScrolled ? 'bg-accent' : 'bg-coffee-900'}`}>
                <Coffee className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-accent'}`} />
            </div>
            <span className={`font-serif text-2xl font-bold ${isScrolled ? 'text-white' : 'text-coffee-900'}`}>
                Beanzo
            </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={`text-sm font-medium transition-colors hover:text-accent cursor-pointer ${
                isScrolled ? 'text-gray-200' : 'text-coffee-800'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-5">
            <button className={`${isScrolled ? 'text-white' : 'text-coffee-900'} hover:text-accent transition-colors`}>
                <Search className="w-5 h-5" />
            </button>
            <button className={`${isScrolled ? 'text-white' : 'text-coffee-900'} hover:text-accent transition-colors relative`}>
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] w-3 h-3 flex items-center justify-center rounded-full">2</span>
            </button>
            <button className={`${isScrolled ? 'text-white' : 'text-coffee-900'} hover:text-accent transition-colors`}>
                <User className="w-5 h-5" />
            </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-accent"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-coffee-900 text-white shadow-xl py-4 px-6 flex flex-col gap-4">
           {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-base font-medium hover:text-accent block py-2 border-b border-coffee-800 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex gap-4 pt-2">
            <Search className="w-5 h-5" />
            <ShoppingBag className="w-5 h-5" />
            <User className="w-5 h-5" />
          </div>
        </div>
      )}
    </header>
  );
};