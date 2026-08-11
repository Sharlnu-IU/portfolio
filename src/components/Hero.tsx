import React from 'react';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="section" style={{ minHeight: '100vh' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
        <span className="reveal" style={{ color: 'var(--accent-color)', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '1rem', display: 'block' }}>
          HELLO, I'M
        </span>
        <h1 className="heading-xl reveal reveal-delay-1" style={{ marginBottom: '1rem' }}>
          Sharath<br />
          <span className="text-gradient">Full-Stack Engineer.</span>
        </h1>
        <p className="reveal reveal-delay-2" style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', marginBottom: '2.5rem' }}>
          I build RESTful microservices, cloud-deployed systems, and scalable web applications. M.S. in Computer Science at Indiana University.
        </p>
        
        <div className="reveal reveal-delay-3" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#projects" className="btn-primary">
            View My Work <FiArrowRight size={20} />
          </a>
          <a href="/Sharath_Resume_2P.pdf" target="_blank" className="btn-outline">
            Download Resume
          </a>
        </div>
        
        <div className="reveal reveal-delay-3" style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem' }}>
          <a href="https://github.com/Sharlnu-IU" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'white'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <FiGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/sharath-iub" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'white'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <FiLinkedin size={24} />
          </a>
          <a href="mailto:sharath.iubcs@gmail.com" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'white'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <FiMail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
