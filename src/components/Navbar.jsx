import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import React from "react";


function Navbar({ darkMode, toggleDarkMode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'py-2 shadow-md backdrop-blur' 
            : 'py-4'
        }`}
        style={{ 
          background: scrolled 
            ? (darkMode ? 'rgba(17, 24, 39, 0.9)' : 'rgba(255, 255, 255, 0.9)') 
            : 'transparent'
        }}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold relative group">
            <span className="gradient-text">Marc Gerasmio</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ background: 'linear-gradient(to right, #7c3aed, #3b82f6)' }}></span>
          </a>
        
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 ml-2 rounded-md transition-colors duration-300"
            style={{ background: darkMode ? 'rgba(31, 41, 55, 0.5)' : 'rgba(243, 244, 246, 0.5)' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            )}
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {['home', 'about', 'skills', 'projects', 'testimonials', 'contact'].map((item) => (
              <Link 
                key={item}
                to={item} 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} 
                className="relative px-4 py-2 text-sm font-medium capitalize cursor-pointer transition-colors duration-300 nav-link"
                activeClass="active-nav-link"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
        
        {/* Mobile navigation */}
        <div 
          className={`fixed inset-0 z-40 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
          style={{ background: darkMode ? '#111827' : '#ffffff' }}
        >
          <div className="flex flex-col items-center justify-center h-full">
            {['home', 'about', 'skills', 'projects', 'testimonials', 'contact'].map((item, index) => (
              <Link 
                key={item}
                to={item} 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} 
                className="py-4 text-2xl font-medium capitalize cursor-pointer transition-colors duration-300 mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </header>
    );
  }
  
  export default Navbar;
  