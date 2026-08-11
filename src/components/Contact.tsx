import React from 'react';
import { FiMail, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section" style={{ minHeight: '80vh' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
        <h2 className="heading-lg reveal">Let's <span className="text-gradient">Connect</span></h2>
        
        <p className="reveal reveal-delay-1" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem' }}>
          I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="reveal reveal-delay-2" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
          <a href="mailto:sharath.iubcs@gmail.com" className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', flex: '1 1 200px', textDecoration: 'none', color: 'white' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.2)', padding: '1rem', borderRadius: '50%', color: 'var(--accent-color)' }}>
              <FiMail size={32} />
            </div>
            <span style={{ fontWeight: 600 }}>Email Me</span>
          </a>
          
          <a href="https://linkedin.com/in/sharath-iub" target="_blank" rel="noreferrer" className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', flex: '1 1 200px', textDecoration: 'none', color: 'white' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.2)', padding: '1rem', borderRadius: '50%', color: 'var(--accent-color)' }}>
              <FiLinkedin size={32} />
            </div>
            <span style={{ fontWeight: 600 }}>LinkedIn</span>
          </a>
          
          <a href="https://github.com/Sharlnu-IU" target="_blank" rel="noreferrer" className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', flex: '1 1 200px', textDecoration: 'none', color: 'white' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.2)', padding: '1rem', borderRadius: '50%', color: 'var(--accent-color)' }}>
              <FiGithub size={32} />
            </div>
            <span style={{ fontWeight: 600 }}>GitHub</span>
          </a>
        </div>
        
        <div className="reveal reveal-delay-3 glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', padding: '3rem 2rem', background: 'var(--accent-gradient)', borderColor: 'transparent' }}>
          <h3 style={{ fontSize: '1.75rem', color: 'white' }}>Grab My Resume</h3>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Get a detailed overview of my experience, skills, and education.</p>
          <a href="/Sharath_Resume_2P.pdf" target="_blank" className="btn-primary" style={{ background: 'white', color: 'var(--bg-base)', boxShadow: '0 4px 15px rgba(255,255,255,0.2)' }}>
            <FiDownload size={20} /> Download PDF
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
