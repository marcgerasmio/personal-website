import { useEffect, useRef } from 'react';
import React from "react";
function About() {
    const sectionRef = useRef(null);
    
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        },
        { threshold: 0.1 }
      );
      
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
      
      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, []);
  
    return (
      <section 
        id="about" 
        ref={sectionRef}
        className="py-20 md:py-32 opacity-0 transition-opacity duration-1000"
        style={{ background: 'var(--bg-alt-color)' }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform hover-scale-105 transition-transform duration-500">
                <img 
                  src="profile.jpg" 
                  alt="Profile" 
                  className="w-full h-auto object-cover"
                />
                
                {/* Overlay with gradient */}
                <div className="absolute inset-0 mix-blend-overlay" 
                     style={{ background: 'linear-gradient(to top right, rgba(124, 58, 237, 0.2), rgba(59, 130, 246, 0.2))' }}></div>
              </div>
              
              {/* Background elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-lg -z-10" 
                   style={{ background: 'rgba(124, 58, 237, 0.2)' }}></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-lg -z-10"
                   style={{ background: 'rgba(59, 130, 246, 0.2)' }}></div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
                About Me
                <span className="absolute -bottom-2 left-0 w-1/2 h-1" 
                      style={{ background: 'linear-gradient(to right, #7c3aed, #3b82f6)' }}></span>
              </h2>
              
              <p className="text-gray-600 dark-text-gray mb-6 leading-relaxed">
                A full-stack developer with a love for creating beautiful, functional websites and applications. With several years of experience in web development, I've worked on a variety of projects from small business websites to complex web applications.
              </p>
              
              <p className="text-gray-600 dark-text-gray mb-8 leading-relaxed">
                My journey in web development began when I built my first website for a college internship. Since then, I've been constantly learning and improving my skills to stay up-to-date with the latest technologies and best practices in the industry.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: '#7c3aed' }}></div>
                  <span className="font-medium">Name:</span>
                  <span className="text-gray-600 dark-text-gray">Marc Dominic L. Gerasmio</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: '#7c3aed' }}></div>
                  <span className="font-medium">Email:</span>
                  <span className="text-gray-600 dark-text-gray">dominicgerasmio@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: '#7c3aed' }}></div>
                  <span className="font-medium">Location:</span>
                  <span className="text-gray-600 dark-text-gray">Butuan, Philippines</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: '#7c3aed' }}></div>
                  <span className="font-medium">Availability:</span>
                  <span className="text-gray-600 dark-text-gray">Freelance/Full-time</span>
                </div>
              </div>
              
              <a 
                href="CV_GERASMIO.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium shadow-lg hover-shadow-xl transition-all duration-300 hover-scale-105"
                style={{ background: 'linear-gradient(to right, #7c3aed, #3b82f6)' }}
              >
                Download Resume
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default About;
  