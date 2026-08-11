import React from 'react';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="section" style={{ minHeight: '100vh', paddingTop: '7rem' }}>
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        <p
          className="reveal"
          style={{
            color: 'var(--accent-color)',
            fontWeight: 600,
            fontSize: '0.95rem',
            letterSpacing: '0.04em',
            marginBottom: '1rem',
          }}
        >
          Software Engineer · United States
        </p>

        <h1 className="heading-xl reveal reveal-delay-1" style={{ marginBottom: '1.25rem' }}>
          Hi, I'm Sharath.
        </h1>

        <p
          className="reveal reveal-delay-2"
          style={{
            color: 'var(--text-secondary)',
            fontSize: 'clamp(1.1rem, 2.4vw, 1.35rem)',
            maxWidth: '36rem',
            marginBottom: '1rem',
            lineHeight: 1.55,
          }}
        >
          I build reliable backend and full-stack systems — Java/Spring Boot microservices,
          Python services, and cloud-deployed applications. Ex-IQVIA software engineer with an
          M.S. in Computer Science from Indiana University Bloomington.
        </p>

        <p
          className="reveal reveal-delay-2"
          style={{
            color: 'var(--text-primary)',
            fontWeight: 500,
            marginBottom: '2.25rem',
            fontSize: '1rem',
          }}
        >
          Actively seeking Full-Stack & Software Engineering (SWE / SDE) roles
        </p>

        <div
          className="reveal reveal-delay-3"
          style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}
        >
          <a href="#projects" className="btn-primary">
            Projects <FiArrowRight size={18} />
          </a>
          <a href="./Sharath_Resume_2P.pdf" target="_blank" rel="noreferrer" className="btn-outline">
            Resume
          </a>
        </div>

        <div
          className="reveal reveal-delay-3"
          style={{ display: 'flex', gap: '1.25rem', marginTop: '2.75rem' }}
        >
          <a
            href="https://github.com/Sharlnu-IU"
            target="_blank"
            rel="noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <FiGithub size={22} />
          </a>
          <a
            href="https://linkedin.com/in/sharath-iub"
            target="_blank"
            rel="noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={22} />
          </a>
          <a
            href="mailto:sharath.iubcs@gmail.com"
            className="social-link"
            aria-label="Email"
          >
            <FiMail size={22} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
