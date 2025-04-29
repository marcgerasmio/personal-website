"use client"
import React from "react";
import { useState, useRef, useEffect } from "react"

function Contact() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
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
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      }, 1500);
    };
  
    return (
      <section 
        id="contact" 
        ref={sectionRef}
        className="md:py-12 opacity-0 transition-opacity duration-1000"
        style={{ background: 'var(--bg-color)' }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-full h-1" 
                    style={{ background: 'linear-gradient(to right, #7c3aed, #3b82f6)' }}></span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark-text-gray">
              Have a project in mind or want to collaborate? Feel free to reach out to me.
            </p>
          </div>
          
          <div className="flex justify-center items-centermax-w-5xl mx-auto">
            <div className="rounded-2xl p-8 shadow-lg" style={{ background: 'var(--card-bg-color)' }}>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                       style={{ 
                         background: 'rgba(124, 58, 237, 0.1)',
                         color: '#7c3aed'
                       }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600 dark-text-gray">0963 8333 714</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                       style={{ 
                         background: 'rgba(124, 58, 237, 0.1)',
                         color: '#7c3aed'
                       }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600 dark-text-gray">dominicgerasmio@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                       style={{ 
                         background: 'rgba(124, 58, 237, 0.1)',
                         color: '#7c3aed'
                       }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-gray-600 dark-text-gray">Butuan, Philippines</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-4">Follow Me</h4>
                <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/marc.gerasmio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                  style={{ 
                    background: 'var(--social-bg-color)',
                    color: 'var(--social-text-color)'
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.675 0h-21.35C.594 0 0 .593 0 1.326v21.348C0 23.407.594 24 1.326 24h11.495v-9.294H9.691V11.01h3.13V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.696h-3.12V24h6.116C23.406 24 24 23.407 24 22.674V1.326C24 .593 23.406 0 22.675 0z"/>
                  </svg>
                </a>

                  <a 
                    href="https://www.linkedin.com/in/marc-dominic-gerasmio-951b242a8/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                    style={{ 
                      background: 'var(--social-bg-color)',
                      color: 'var(--social-text-color)'
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a 
                  href="https://www.instagram.com/makoooyyy_/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                  style={{ 
                    background: 'var(--social-bg-color)',
                    color: 'var(--social-text-color)'
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.4.6.2 1.1.5 1.6 1s.8 1 .9 1.6c.2.5.3 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.4-.2.6-.5 1.1-1 1.6s-1 .8-1.6.9c-.5.2-1.2.3-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.4-.6-.2-1.1-.5-1.6-1s-.8-1-.9-1.6c-.2-.5-.3-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.4.2-.6.5-1.1 1-1.6s1-.8 1.6-.9c.5-.2 1.2-.3 2.4-.4C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 0 5.7 0 4.7.2 3.9.5 3.1.8 2.3 1.3 1.6 2.1.8 2.9.3 3.7.1 4.5-.2 5.3 0 6.3 0 7.6 0 8.9 0 9.3 0 12s0 3.1.1 4.4c.1 1.3.3 2.3.5 3.1.2.8.7 1.6 1.4 2.4.7.7 1.5 1.2 2.4 1.4.8.2 1.8.4 3.1.5C8.9 24 9.3 24 12 24s3.1 0 4.4-.1c1.3-.1 2.3-.3 3.1-.5.8-.2 1.6-.7 2.4-1.4.7-.7 1.2-1.5 1.4-2.4.2-.8.4-1.8.5-3.1.1-1.3.1-1.7.1-4.4s0-3.1-.1-4.4c-.1-1.3-.3-2.3-.5-3.1-.2-.8-.7-1.6-1.4-2.4-.7-.7-1.5-1.2-2.4-1.4-.8-.2-1.8-.4-3.1-.5C15.1 0 14.7 0 12 0z"/>
                    <path d="M12 5.8c-3.4 0-6.2 2.8-6.2 6.2S8.6 18.2 12 18.2s6.2-2.8 6.2-6.2S15.4 5.8 12 5.8zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/>
                    <circle cx="18.4" cy="5.6" r="1.44"/>
                  </svg>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Contact;
  