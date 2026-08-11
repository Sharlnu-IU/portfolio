import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="heading-lg reveal">About <span className="text-gradient">Me</span></h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          <div className="reveal reveal-delay-1 glass-card">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>Background</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              I am a Full-stack software engineer with 2+ years of enterprise experience at IQVIA and currently pursuing my M.S. in Computer Science at Indiana University Bloomington.
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              My expertise lies in building RESTful microservices and cloud-deployed systems using Java, Spring Boot, Python, and Angular/TypeScript. I have hands-on experience across containerized deployments and data/ML tooling.
            </p>
          </div>
          
          <div className="reveal reveal-delay-2 glass-card">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>Education</h3>
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: 'var(--accent-color)' }}>Indiana University Bloomington</h4>
              <p style={{ color: 'white', fontWeight: 500 }}>Master of Science, Computer Science</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Aug 2024 - May 2026 | GPA: 3.76/4.0</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--accent-color)' }}>Visvesvaraya Technological University</h4>
              <p style={{ color: 'white', fontWeight: 500 }}>Bachelor of Engineering, ISE</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Aug 2018 - Jul 2022 | GPA: 8.59/10.0</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
