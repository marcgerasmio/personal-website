import { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import React from "react";


function Hero() {
    const heroRef = useRef(null);
    
    useEffect(() => {
      const handleMouseMove = (e) => {
        if (!heroRef.current) return;
        
        const { clientX, clientY } = e;
        const { width, height, left, top } = heroRef.current.getBoundingClientRect();
        
        const x = (clientX - left) / width;
        const y = (clientY - top) / height;
        
        heroRef.current.style.setProperty('--mouse-x', x);
        heroRef.current.style.setProperty('--mouse-y', y);
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
  
    return (
      <section 
        id="home" 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: 'radial-gradient(circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), rgba(129, 90, 255, 0.15), transparent 40%)',
        }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full animate-float"
              style={{
                background: 'linear-gradient(to bottom right, rgba(124, 58, 237, 0.1), rgba(59, 130, 246, 0.1))',
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 15}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
        
        <div className="container px-4 md:px-6 z-10">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 inline-block relative">
              <span className="text-sm font-medium px-4 py-2 rounded-full" 
                    style={{ 
                      background: 'rgba(124, 58, 237, 0.1)',
                      color: '#7c3aed'
                    }}>
                Full Stack Developer
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="gradient-text">Marc Dominic Gerasmio</span>
            </h1>
            
            <p className="max-w-2xl text-lg md:text-xl mb-8 leading-relaxed text-gray-600 dark-text-gray">
            Let’s bring your vision to life with modern technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="px-6 py-3 rounded-full text-white font-medium shadow-lg hover-shadow-xl transition-all duration-300 hover-scale-105 cursor-pointer"
                style={{ background: 'linear-gradient(to right, #7c3aed, #3b82f6)' }}
              >
                View My Work
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="px-6 py-3 rounded-full font-medium shadow-lg hover-shadow-xl transition-all duration-300 hover-scale-105 cursor-pointer border"
                style={{ 
                  background: 'var(--bg-color)',
                  color: 'var(--text-color)',
                  borderColor: 'var(--border-color)'
                }}
              >
                Contact Me
              </Link>
            </div>
            
            <div className="mt-16 flex items-center gap-4">
              <span className="text-gray-500 dark-text-gray">Scroll Down</span>
              <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{ borderColor: 'var(--border-color)' }}>
                <div className="w-1.5 h-1.5 rounded-full mt-2 animate-scroll-down" style={{ background: 'var(--border-color)' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Hero;
  