import { useState, useEffect, useRef } from 'react';
import React from "react";


function Projects() {
    const [activeFilter, setActiveFilter] = useState('all');
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
  
    const projects = [
      {
        id: 1,
        title: "Navigatu Platform",
        description: "Platform that is designed for Navigatu TBI to streamline the management of personnel, incubatees, and mentors. It offers an intuitive interface for tracking activities, managing profiles, and facilitating communication between stakeholders. ",
        image: "ojt.jpg",
        category: "web",
        tags: ["React", "FetchAPI", "Laravel"],
        liveUrl: "#",
        githubUrl: "#"
      },
      {
        id: 2,
        title: "Dinagat UI",
        description: "Web and mobile UI for a local government unit in Dinagat Islands, Philippines",
        image: "dinagatUI.jpg",
        category: "ui",
        tags: ["Figma"],
        liveUrl: "#",
        githubUrl: "#"
      },
      {
        id: 3,
        title: "AssessMate",
        description: "App that allows users to capture handwritten essays using their device’s camera and intelligently analyzes the content to determine if the response aligns with the given question. Powered by OpenAI and handwriting recognition, the app offers instant feedback on relevance, helping students improve their writing and stay on topic",
        image: "asessmate.jpg",
        category: "app",
        tags: ["React", "Supabase", "OpenAI", "OCR", "Capacitor.Js"],
        liveUrl: "#",
        githubUrl: "#"
      },
      {
        id: 4,
        title: "GeoRent",
        description: "Designed and implemented a comprehensive car dealership system with a dynamic user interface and backend services. The platform includes location-based features, allowing users to locate dealerships and view available vehicles on an interactive map",
        image: "georent.jpg",
        category: "app",
        tags: ["React", "Supabase", "Leaflet", "Capacitor.Js"],
        liveUrl: "#",
        githubUrl: "#"
      },
      {
        id: 5,
        title: "NCIP Profiling System",
        description: "Built a survey profiling system designed for both online and offline use, featuring seamless data collection, offline storage capabilities, and mobile support. The system ensures reliable performance across platforms and environments, making it ideal for fieldwork and remote data gathering",
        image: "ncip.jpg",
        category: "web",
        tags: ["React", "Supabase", "IndexedDB", "Capacitor.Js"],
        liveUrl: "#",
        githubUrl: "#"
      },
      {
        id: 6,
        title: "E-Commerce System",
        description: "Developed an e-commerce system that extends the operations of a physical store into an online platform. The system enables customers to browse products, place orders, and make payments with ease, while synchronizing inventory and sales data between the physical and digital storefronts to ensure a consistent and efficient shopping experience. ",
        image: "ecom.jpg",
        category: "web",
        tags: ["React", "Strapi", "Paypal Sandbox"],
        liveUrl: "#",
        githubUrl: "#"
      },
    ];
  
    const filteredProjects = activeFilter === 'all' 
      ? projects 
      : projects.filter(project => project.category === activeFilter);
  
    return (
      <section 
        id="projects" 
        ref={sectionRef}
        className="md:py-12 opacity-0 transition-opacity duration-1000"
        style={{ background: 'var(--bg-color)' }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              My Projects
              <span className="absolute -bottom-2 left-0 w-full h-1" 
                    style={{ background: 'linear-gradient(to right, #7c3aed, #3b82f6)' }}></span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark-text-gray">
              Here are some of my recent projects. Each one was built with care and attention to detail.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {['all', 'web', 'app', 'ui'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
                  style={{
                    background: activeFilter === filter 
                      ? 'linear-gradient(to right, #7c3aed, #3b82f6)' 
                      : 'var(--button-bg-color)',
                    color: activeFilter === filter ? 'white' : 'var(--text-color)'
                  }}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="rounded-xl overflow-hidden shadow-lg hover-shadow-xl transition-all duration-500 group"
                style={{ 
                  background: 'var(--card-bg-color)',
                  animationDelay: `${index * 0.1}s`,
                  transform: activeFilter === 'all' || project.category === activeFilter ? 'scale(1)' : 'scale(0.8)',
                  opacity: activeFilter === 'all' || project.category === activeFilter ? 1 : 0,
                  transition: 'all 0.5s ease-in-out',
                }}
              >
                <div className="relative overflow-hidden h-60">
                  <img 
                    src={project.image || "/placeholder.svg"} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover-scale-110"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover-opacity-100 transition-opacity duration-300 flex items-end"
                       style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}>
                    <div className="p-6 w-full">
                      <div className="flex gap-4 justify-end">
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.slice(0, 5).map((tag) => (
                      <span key={tag} className="px-2 py-1 rounded-md text-xs font-medium"
                            style={{ 
                              background: 'rgba(124, 58, 237, 0.1)',
                              color: '#7c3aed'
                            }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark-text-gray mb-4 text-justify">
                    {project.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark-text-gray capitalize">
                      {project.category} Project
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Projects;