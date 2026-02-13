import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone, ArrowUpRight, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-coffee-50 pt-20 pb-10 border-t border-coffee-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-10">
            {/* Brand */}
            <div>
                <h2 className="text-3xl font-serif font-bold text-coffee-900 mb-6">Beanzo.Cafe</h2>
                <div className="flex gap-4">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-coffee-900 hover:bg-accent hover:text-white transition-colors shadow-sm">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-coffee-900 hover:bg-accent hover:text-white transition-colors shadow-sm">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-coffee-900 hover:bg-accent hover:text-white transition-colors shadow-sm">
                        <Facebook className="w-5 h-5" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-coffee-900 hover:bg-accent hover:text-white transition-colors shadow-sm">
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-coffee-900 hover:bg-accent hover:text-white transition-colors shadow-sm">
                        <Instagram className="w-5 h-5" />
                    </a>
                </div>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 w-full md:w-auto">
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-coffee-900 mb-2">About</h4>
                    <a href="#" className="text-gray-600 hover:text-accent text-sm">Our Story</a>
                    <a href="#" className="text-gray-600 hover:text-accent text-sm">FAQ</a>
                    <a href="#" className="text-gray-600 hover:text-accent text-sm">Careers</a>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-coffee-900 mb-2">Customer Resources</h4>
                    <a href="#" className="text-gray-600 hover:text-accent text-sm">Menu</a>
                    <a href="#" className="text-gray-600 hover:text-accent text-sm">Locations</a>
                    <a href="#" className="text-gray-600 hover:text-accent text-sm">Support</a>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-coffee-900 mb-2">Services</h4>
                    <a href="#" className="text-gray-600 hover:text-accent text-sm">Payment Options</a>
                    <a href="#" className="text-gray-600 hover:text-accent text-sm">Refunds & Exchanges</a>
                    <a href="#" className="text-gray-600 hover:text-accent text-sm">Limitation Of Liability</a>
                </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-4">
                 <div className="flex items-start gap-3 text-sm text-gray-600 max-w-xs">
                    <MapPin className="w-5 h-5 text-accent shrink-0" />
                    <span>Rue Du Dries,50</span>
                 </div>
                 <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Mail className="w-5 h-5 text-accent shrink-0" />
                    <span>beanzo@beanzo.beanzo</span>
                 </div>
                 <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Phone className="w-5 h-5 text-accent shrink-0" />
                    <span>+123456789</span>
                 </div>
            </div>
        </div>

        {/* Newsletter / CTA Box */}
        <div className="bg-[#2C2C2C] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
                <h3 className="text-2xl font-serif text-white font-bold mb-2">Join us as a coffee Maker</h3>
                <p className="text-gray-400 text-sm">We are looking for creative people like you to extend our brand value.</p>
            </div>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-3 rounded-full flex items-center gap-2 transition-all">
                Join Us <ArrowUpRight className="w-4 h-4" />
            </button>
        </div>

        <div className="mt-12 text-center text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Beanzo Coffee Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};