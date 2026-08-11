import React from 'react';
import { FiMail, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section" style={{ minHeight: '70vh' }}>
      <div className="container" style={{ maxWidth: '720px' }}>
        <h2 className="heading-lg reveal">
          Get in <span className="heading-accent">touch</span>
        </h2>

        <p
          className="reveal reveal-delay-1"
          style={{
            color: 'var(--text-secondary)',
            fontSize: '1.1rem',
            marginBottom: '2.5rem',
            maxWidth: '36rem',
          }}
        >
          Actively seeking Full-Time Software Engineering (SWE / SDE) roles. Always open to
          discussing software engineering, cloud infrastructure, AI/ML, distributed systems, or
          anything across the broader tech landscape.
        </p>

        <div
          className="reveal reveal-delay-2"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
            marginBottom: '2.5rem',
          }}
        >
          <a
            href="mailto:sharath.iubcs@gmail.com"
            className="surface"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              textDecoration: 'none',
              padding: '1.15rem 1.35rem',
            }}
          >
            <FiMail size={22} color="var(--accent-color)" />
            <div>
              <div style={{ fontWeight: 600 }}>Email</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                sharath.iubcs@gmail.com
              </div>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/sharath-iub"
            target="_blank"
            rel="noreferrer"
            className="surface"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              textDecoration: 'none',
              padding: '1.15rem 1.35rem',
            }}
          >
            <FiLinkedin size={22} color="var(--accent-color)" />
            <div>
              <div style={{ fontWeight: 600 }}>LinkedIn</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                linkedin.com/in/sharath-iub
              </div>
            </div>
          </a>

          <a
            href="https://github.com/Sharlnu-IU"
            target="_blank"
            rel="noreferrer"
            className="surface"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              textDecoration: 'none',
              padding: '1.15rem 1.35rem',
            }}
          >
            <FiGithub size={22} color="var(--accent-color)" />
            <div>
              <div style={{ fontWeight: 600 }}>GitHub</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                github.com/Sharlnu-IU
              </div>
            </div>
          </a>
        </div>

        <div className="reveal reveal-delay-3">
          <a href="./Sharath_Resume_2P.pdf" target="_blank" rel="noreferrer" className="btn-primary">
            <FiDownload size={18} /> Download resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
