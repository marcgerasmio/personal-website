import { useState, useEffect, useRef } from 'react';
import React from "react";

function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
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
  
    const testimonials = [
      {
        id: 1,
        name: "Ma'am J.",
        role: "Internship Supervisor",
        company: "Navigatu TBI",
        text: "Resourceful and can able to work with less supervision. Able to deliver output beyond expectations. Can easily adapt in learning frameworks."
      },
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      
      return () => clearInterval(interval);
    }, [testimonials.length]);
  
    return (
      <section 
        id="testimonials" 
        ref={sectionRef}
        className="md:py-12 opacity-0 transition-opacity duration-1000"
        style={{ background: 'var(--bg-alt-color)' }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              Client Testimonials
              <span className="absolute -bottom-2 left-0 w-full h-1" 
                    style={{ background: 'linear-gradient(to right, #7c3aed, #3b82f6)' }}></span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark-text-gray">
              Here's what my clients have to say about working with me.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 text-6xl opacity-50"
                 style={{ color: 'rgba(124, 58, 237, 0.3)' }}>
              "
            </div>
            <div className="absolute -bottom-10 -right-10 w-20 h-20 text-6xl opacity-50 rotate-180"
                 style={{ color: 'rgba(124, 58, 237, 0.3)' }}>
              "
            </div>
            
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="rounded-2xl p-8 md:p-10 shadow-xl" style={{ background: 'var(--card-bg-color)' }}>
                      <p className="text-gray-600 dark-text-gray text-lg mb-8 italic">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="flex items-center">
                        <div>
                          <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                          <p className="text-gray-500 dark-text-gray">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className="w-3 h-3 rounded-full transition-all duration-300"
                  style={{
                    background: activeIndex === index ? '#7c3aed' : 'var(--dot-bg-color)',
                    width: activeIndex === index ? '2rem' : '0.75rem'
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Testimonials;