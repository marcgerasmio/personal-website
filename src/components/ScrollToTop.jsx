import { useState, useEffect } from 'react';
import React from "react";

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
  
    // Show button when page is scrolled down
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    // Set the top coordinate to 0
    // Make scrolling smooth
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    useEffect(() => {
      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
  
    return (
      <div className="fixed bottom-5 right-5 z-50">
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full shadow-lg hover-scale-110 transition-all duration-300"
            style={{ background: '#7c3aed', color: 'white' }}
            aria-label="Scroll to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
        )}
      </div>
    );
  }
  
  export default ScrollToTop;
  