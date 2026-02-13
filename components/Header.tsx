import React, { useState, useEffect, useRef } from 'react';
import { Search, ShoppingBag, User, Menu, X, Coffee, Sun, Moon, ArrowRight } from 'lucide-react';
import { Link, scroller } from 'react-scroll';
import { products, services } from '../data';
import { Product } from '../types';

interface HeaderProps {
  onProductClick: (product: Product) => void;
}

export const Header: React.FC<HeaderProps> = ({ onProductClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  // Initialize state based on localStorage or system preference immediately
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
        return localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Ensure the DOM matches the state on mount
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDark]);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
        setTimeout(() => {
            searchInputRef.current?.focus();
        }, 100);
    }
  }, [isSearchOpen]);

  // Lock body scroll when search is open
  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isSearchOpen]);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const handleSearchResultClick = (type: 'product' | 'service', item: any) => {
      setIsSearchOpen(false);
      setSearchQuery('');
      
      if (type === 'product') {
          onProductClick(item);
      } else {
          scroller.scrollTo('services', {
              duration: 500,
              smooth: true,
              offset: -100,
          });
      }
  };

  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
  const filteredServices = services.filter(s => s.title.toLowerCase().includes(searchQuery.toLowerCase()));

  // Defined with target IDs instead of hrefs
  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Products', to: 'products' },
    { name: 'Services', to: 'services' },
    { name: 'About', to: 'team' },
    { name: 'Contact', to: 'footer' },
  ];

  return (
    <>
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-coffee-900/95 dark:bg-coffee-950/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
            <div className={`p-2 rounded-full ${isScrolled ? 'bg-accent' : 'bg-coffee-900 dark:bg-coffee-800'}`}>
                <Coffee className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-accent'}`} />
            </div>
            <span className={`font-serif text-2xl font-bold ${isScrolled ? 'text-white' : 'text-coffee-900 dark:text-white'}`}>
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
                isScrolled ? 'text-gray-200' : 'text-coffee-800 dark:text-coffee-100'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-5">
            <button 
                onClick={toggleTheme}
                className={`${isScrolled ? 'text-white' : 'text-coffee-900 dark:text-coffee-100'} hover:text-accent transition-colors`}
                aria-label="Toggle Dark Mode"
            >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
                onClick={() => setIsSearchOpen(true)}
                className={`${isScrolled ? 'text-white' : 'text-coffee-900 dark:text-coffee-100'} hover:text-accent transition-colors`}
            >
                <Search className="w-5 h-5" />
            </button>
            <button className={`${isScrolled ? 'text-white' : 'text-coffee-900 dark:text-coffee-100'} hover:text-accent transition-colors relative`}>
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] w-3 h-3 flex items-center justify-center rounded-full">2</span>
            </button>
            <button className={`${isScrolled ? 'text-white' : 'text-coffee-900 dark:text-coffee-100'} hover:text-accent transition-colors`}>
                <User className="w-5 h-5" />
            </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
            <button 
                onClick={toggleTheme}
                className="text-accent"
            >
                {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
            <button 
                onClick={() => setIsSearchOpen(true)}
                className="text-accent"
            >
                <Search className="w-6 h-6" />
            </button>
            <button 
            className="text-accent"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-coffee-900 dark:bg-coffee-950 text-white shadow-xl py-4 px-6 flex flex-col gap-4 border-t border-coffee-800">
           {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-base font-medium hover:text-accent block py-2 border-b border-coffee-800 dark:border-coffee-900 cursor-pointer"
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

    {/* Search Overlay */}
    {isSearchOpen && (
        <div className="fixed inset-0 z-[60] bg-white/95 dark:bg-coffee-950/95 backdrop-blur-md animate-in fade-in duration-200">
            <div className="max-w-4xl mx-auto px-4 pt-8 md:pt-16 h-full flex flex-col">
                {/* Search Header */}
                <div className="flex items-center gap-4 border-b-2 border-coffee-100 dark:border-coffee-800 pb-4 mb-8">
                    <Search className="w-8 h-8 text-coffee-400 dark:text-coffee-600" />
                    <input 
                        ref={searchInputRef}
                        type="text" 
                        placeholder="Search for coffee, services..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="flex-1 bg-transparent text-2xl md:text-4xl font-serif text-coffee-900 dark:text-white placeholder-coffee-300 dark:placeholder-coffee-700 outline-none"
                    />
                    <button 
                        onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                        className="p-2 hover:bg-coffee-100 dark:hover:bg-coffee-800 rounded-full transition-colors"
                    >
                        <X className="w-8 h-8 text-coffee-900 dark:text-white" />
                    </button>
                </div>

                {/* Search Results */}
                <div className="flex-1 overflow-y-auto pb-8">
                    {searchQuery.length > 0 ? (
                        <div className="space-y-8">
                            {/* Products Section */}
                            {filteredProducts.length > 0 && (
                                <div>
                                    <h3 className="text-sm font-bold text-coffee-500 uppercase tracking-widest mb-4">Products</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {filteredProducts.map(product => (
                                            <div 
                                                key={product.id}
                                                onClick={() => handleSearchResultClick('product', product)}
                                                className="flex items-center gap-4 p-4 rounded-xl hover:bg-coffee-50 dark:hover:bg-coffee-900/50 cursor-pointer transition-colors group"
                                            >
                                                <img src={product.image} alt={product.name} className="w-16 h-16 rounded-lg object-cover" />
                                                <div>
                                                    <h4 className="font-bold text-coffee-900 dark:text-white group-hover:text-accent transition-colors">{product.name}</h4>
                                                    <p className="text-sm text-gray-500">${product.price}</p>
                                                </div>
                                                <ArrowRight className="w-5 h-5 text-gray-300 ml-auto group-hover:text-accent group-hover:translate-x-1 transition-all" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Services Section */}
                            {filteredServices.length > 0 && (
                                <div>
                                    <h3 className="text-sm font-bold text-coffee-500 uppercase tracking-widest mb-4">Services</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {filteredServices.map(service => (
                                            <div 
                                                key={service.id}
                                                onClick={() => handleSearchResultClick('service', service)}
                                                className="flex items-center gap-4 p-4 rounded-xl hover:bg-coffee-50 dark:hover:bg-coffee-900/50 cursor-pointer transition-colors group"
                                            >
                                                <div className="w-12 h-12 rounded-lg bg-coffee-100 dark:bg-coffee-800 flex items-center justify-center text-coffee-600 dark:text-coffee-200">
                                                    <service.icon className="w-6 h-6" />
                                                </div>
                                                <h4 className="font-bold text-coffee-900 dark:text-white group-hover:text-accent transition-colors">{service.title}</h4>
                                                <ArrowRight className="w-5 h-5 text-gray-300 ml-auto group-hover:text-accent group-hover:translate-x-1 transition-all" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {filteredProducts.length === 0 && filteredServices.length === 0 && (
                                <div className="text-center py-10 text-gray-400">
                                    No results found for "{searchQuery}"
                                </div>
                            )}
                        </div>
                    ) : (
                         <div className="text-center py-20 opacity-50">
                            <Coffee className="w-16 h-16 mx-auto mb-4 text-coffee-300" />
                            <p className="text-xl text-coffee-400">Start typing to find your favorite blend...</p>
                         </div>
                    )}
                </div>
            </div>
        </div>
    )}
    </>
  );
};