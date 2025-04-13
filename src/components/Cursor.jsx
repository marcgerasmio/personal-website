import { useEffect, useState } from 'react';
import React from 'react';

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    // Only show custom cursor on desktop
    if (window.innerWidth < 768) {
      return;
    }

    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const handleLinkHoverEvents = () => {
      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => setLinkHovered(true));
        el.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    addEventListeners();
    handleLinkHoverEvents();

    return () => {
      removeEventListeners();
    };
  }, []);

  if (window.innerWidth < 768) {
    return null;
  }

  return (
    <>
      <div 
        className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 transition-transform duration-150 mix-blend-difference ${
          hidden ? 'opacity-0' : 'opacity-100'
        } ${clicked ? 'scale-75' : ''} ${linkHovered ? 'scale-150' : ''}`}
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
          backgroundColor: 'white',
        }}
      />
      <div 
        className={`fixed top-0 left-0 w-40 h-40 rounded-full pointer-events-none z-40 transition-transform duration-300 ${
          hidden ? 'opacity-0' : 'opacity-20'
        } ${linkHovered ? 'scale-150' : ''}`}
        style={{
          transform: `translate(${position.x - 80}px, ${position.y - 80}px)`,
          backgroundColor: 'white',
          transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
        }}
      />
    </>
  );
}

export default Cursor;
