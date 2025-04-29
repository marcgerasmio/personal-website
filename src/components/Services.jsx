import { useEffect, useRef } from 'react';
import React from "react";


function Services() {
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
  
    const services = [
      {
        title: "Web Development",
        description: "Build responsive, modern websites that ensures responsiveness and provide an excellent user experience.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
        )
      },
      {
        title: "E-Commerce Solutions",
        description: "Build custom e-commerce websites that help you sell your products online.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        )
      },
      {
        title: "UI/UX Design",
        description: "I design intuitive user interfaces and experiences that are both visually appealing and functional.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
            <path d="M2 2l7.586 7.586"></path>
            <circle cx="11" cy="11" r="2"></circle>
          </svg>
        )
      },
      {
        title: "Mobile Development",
        description: "Create a responsive, user-friendly mobile application that provide seamless experience in Android.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16"></path>
            <path d="M1 21h22"></path>
            <path d="M8 9h1"></path>
            <path d="M8 13h1"></path>
            <path d="M8 17h1"></path>
            <path d="M15 9h1"></path>
            <path d="M15 13h1"></path>
            <path d="M15 17h1"></path>
          </svg>
        )
      },
    ];
  
    return (
      <section 
        id="services" 
        ref={sectionRef}
        className="py-10 md:py-12 opacity-0 transition-opacity duration-1000"
        style={{ background: 'var(--bg-alt-color)' }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              My Services
              <span className="absolute -bottom-2 left-0 w-full h-1" 
                    style={{ background: 'linear-gradient(to right, #7c3aed, #3b82f6)' }}></span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark-text-gray">
              I offer a wide range of services to help you build and grow your online presence.
              Here's what I can do for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="rounded-xl p-8 shadow-lg hover-shadow-xl transition-all duration-300 hover-translate-y-2 group"
                style={{ 
                  background: 'var(--card-bg-color)',
                  animationDelay: `${index * 0.1}s` 
                }}
              >
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover-text-white transition-all duration-300"
                     style={{ 
                       background: 'rgba(124, 58, 237, 0.1)',
                       color: '#7c3aed'
                     }}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 dark-text-gray">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Services;
  