import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="heading-lg reveal">
          About <span className="heading-accent">me</span>
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          <div className="reveal reveal-delay-1 surface">
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.35rem',
                marginBottom: '1rem',
                fontWeight: 600,
              }}
            >
              Background
            </h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Full-stack software engineer with 2+ years of enterprise experience at IQVIA,
              shipping Argus and Cognos modules for pharmaceutical clients — leading migrations,
              optimizing SQL workflows, and owning delivery from development through production.
              Holding a Master’s degree in Computer Science from Indiana University Bloomington,
              I specialize in distributed backend systems, microservices architecture, and cloud
              deployment. My core stack spans Java, Spring Boot, Python, TypeScript, REST APIs,
              Docker, Kubernetes, and relational/NoSQL databases.
            </p>
          </div>

          <div className="reveal reveal-delay-2 surface">
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.35rem',
                marginBottom: '1rem',
                fontWeight: 600,
              }}
            >
              Education
            </h3>
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: 'var(--accent-color)', fontWeight: 600 }}>
                Indiana University Bloomington
              </h4>
              <p style={{ fontWeight: 500 }}>Master of Science, Computer Science</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Aug 2024 – May 2026 · GPA 3.76/4.0
              </p>
            </div>
            <div>
              <h4 style={{ color: 'var(--accent-color)', fontWeight: 600 }}>
                Visvesvaraya Technological University
              </h4>
              <p style={{ fontWeight: 500 }}>Bachelor of Engineering, Information Science</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Aug 2018 – Jul 2022 · GPA 8.59/10.0
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
