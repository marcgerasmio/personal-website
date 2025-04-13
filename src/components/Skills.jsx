import { useEffect, useRef } from 'react';
import React from "react";

function Skills() {
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
  
    const skills = [
      { name: "HTML", level: 90, icon: "html5" },
      { name: "JavaScript", level: 90, icon: "javascript" },
      { name: "Tailwind CSS", level: 80, icon: "tailwind" },
      { name: "React", level: 85, icon: "react" },
      { name: "Laravel", level: 80, icon: "laravel" },
      { name: "Supabase", level: 90, icon: "supabase" },
      { name: "Git", level: 85, icon: "git" },
      { name: "Capacitor.Js", level: 79, icon: "capacitor" },
      { name: "React-Native", level: 50, icon: "react" },
      { name: "Wix", level: 70, icon: "wix" },
      { name: "Wordpress", level: 70, icon: "wordpress" },
      { name: "Figma", level: 70, icon: "figma" },
    ];
  
    return (
      <section 
        id="skills" 
        ref={sectionRef}
        className="py-20 md:py-32 opacity-0 transition-opacity duration-1000"
        style={{ background: 'var(--bg-color)' }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              My Skills
              <span className="absolute -bottom-2 left-0 w-full h-1" 
                    style={{ background: 'linear-gradient(to right, #7c3aed, #3b82f6)' }}></span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark-text-gray">
              I've worked with a variety of technologies in the web development world.
              Here are my main areas of expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="rounded-xl p-6 shadow-lg hover-shadow-xl transition-all duration-300 hover-translate-y-2"
                style={{ 
                  background: 'var(--card-bg-color)',
                  animationDelay: `${index * 0.1}s` 
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white"
                       style={{ background: 'linear-gradient(to bottom right, #7c3aed, #3b82f6)' }}>
                    <span className="text-lg font-bold">{skill.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-semibold ml-4">{skill.name}</h3>
                </div>
                
                <div className="w-full rounded-full h-2.5" style={{ background: 'var(--progress-bg)' }}>
                  <div 
                    className="h-2.5 rounded-full progress-bar"
                    style={{ 
                      width: `${skill.level}%`, 
                      background: 'linear-gradient(to right, #7c3aed, #3b82f6)',
                      animationDelay: `${index * 0.1}s` 
                    }}
                  ></div>
                </div>
                <div className="mt-2 text-right text-sm text-gray-500 dark-text-gray">
                  {skill.level}%
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="col-span-2 md:col-span-1 rounded-xl p-6 shadow-lg" style={{ background: 'var(--card-bg-color)' }}>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#7c3aed' }}>1+</h3>
              <p className="text-gray-600 dark-text-gray">Years of Experience</p>
            </div>
            <div className="col-span-2 md:col-span-1 rounded-xl p-6 shadow-lg" style={{ background: 'var(--card-bg-color)' }}>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#3b82f6' }}>10+</h3>
              <p className="text-gray-600 dark-text-gray">Projects Completed</p>
            </div>
            <div className="col-span-2 md:col-span-1 rounded-xl p-6 shadow-lg" style={{ background: 'var(--card-bg-color)' }}>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#7c3aed' }}>10+</h3>
              <p className="text-gray-600 dark-text-gray">Happy Clients</p>
            </div>
            <div className="col-span-2 md:col-span-1 rounded-xl p-6 shadow-lg" style={{ background: 'var(--card-bg-color)' }}>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#3b82f6' }}>5+</h3>
              <p className="text-gray-600 dark-text-gray">Technologies Mastered</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Skills;
  