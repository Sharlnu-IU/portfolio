import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 99,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '3.5rem',
        height: '3.5rem',
        borderRadius: '50%',
        background: 'var(--accent-gradient)',
        color: 'white',
        border: 'none',
        boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
      aria-label="Back to top"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.6)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.4)';
      }}
    >
      <FiArrowUp size={24} />
    </button>
  );
};

export default BackToTop;
