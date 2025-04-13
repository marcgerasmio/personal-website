import { useEffect, useState } from 'react';
import React from "react";


function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-50" style={{ background: 'var(--bg-color)' }}>
      <div className="text-4xl md:text-6xl font-bold mb-8 relative">
        <span className="gradient-text">Welcome!</span>
      </div>
      
      <div className="w-64 h-1 bg-gray-200 dark-bg-gray rounded-full overflow-hidden">
        <div 
          className="h-full transition-all duration-300 ease-out"
          style={{ 
            width: `${progress}%`,
            background: 'linear-gradient(to right, #7c3aed, #3b82f6)'
          }}
        ></div>
      </div>
      
      <div className="mt-4 text-gray-500 dark-text-gray">
        Loading... {progress}%
      </div>
    </div>
  );
}

export default LoadingScreen;
