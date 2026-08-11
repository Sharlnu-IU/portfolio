import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="back-to-top"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 99,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '3rem',
        height: '3rem',
        borderRadius: '0.35rem',
        background: 'var(--accent-color)',
        color: '#FFFEFB',
        border: 'none',
        boxShadow: '0 8px 20px rgba(27, 42, 74, 0.2)',
        cursor: 'pointer',
        transition:
          'opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1), transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.92)',
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
      aria-label="Back to top"
      onMouseEnter={(e) => {
        if (!isVisible) return;
        e.currentTarget.style.transform = 'translateY(-4px) scale(1.03)';
        e.currentTarget.style.boxShadow = '0 12px 28px rgba(27, 42, 74, 0.28)';
      }}
      onMouseLeave={(e) => {
        if (!isVisible) return;
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(27, 42, 74, 0.2)';
      }}
    >
      <FiArrowUp size={20} />
    </button>
  );
};

export default BackToTop;
