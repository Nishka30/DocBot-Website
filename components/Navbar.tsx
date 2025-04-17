"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, Stethoscope } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToDemo = (e: React.MouseEvent) => {
    e.preventDefault();
    const demoSection = document.getElementById('book-demo-section');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu if open
    }
  };

  const navItems = [
    { name: 'Products & Services', href: '/products' },
    { name: 'About DocBot', href: '/about' },
    { name: 'AI Assistant', href: '/ai-assistant' },
    { name: 'Use Cases', href: '/use-cases' },
    { name: 'Wall of Love', href: '/testimonials' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/10 backdrop-blur-lg shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2 group">
              <Stethoscope className={`h-8 w-8 transition-colors duration-200 ${
                scrolled ? 'text-blue-400' : 'text-blue-300'
              }`} />
              <span className={`text-xl font-bold transition-colors duration-200 ${
                scrolled ? 'text-white' : 'text-white'
              } group-hover:text-blue-400`}>DocBot</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`transition-colors duration-200 ${
                  scrolled 
                    ? 'text-white/80 hover:text-white'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
            <button 
              onClick={scrollToDemo}
              className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white px-4 py-2 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
            >
              Book Demo
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-400 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/10 backdrop-blur-lg border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button 
                onClick={scrollToDemo}
                className="w-full mt-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white px-4 py-2 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
              >
                Book Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;