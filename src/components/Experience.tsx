import React from 'react';

type ExperienceItem = {
  title: string;
  org: string;
  location: string;
  date: string;
  bullets: string[];
};

const experiences: ExperienceItem[] = [
  {
    title: 'Graduate Teaching Assistant',
    org: 'Indiana University Luddy School',
    location: 'Bloomington, IN',
    date: 'Jan 2026 – May 2026',
    bullets: [
      'Primary GTA for CSCI-P 532 (Object-Oriented Software Development) focused on enterprise Java and Spring Boot.',
      'Mentored graduate students on SOLID principles, Gang of Four design patterns, and layered architecture.',
      'Reviewed student projects with RESTful APIs, Spring Data JPA, and JUnit 5 / Mockito test suites.',
      'Guided UML modeling (class, sequence, state) and Git collaboration for capstone enterprise projects.',
    ],
  },
  {
    title: 'Undergraduate Teaching Assistant',
    org: 'Indiana University Luddy School',
    location: 'Bloomington, IN',
    date: 'Aug 2025 – Dec 2025',
    bullets: [
      'Mentored students in INFO-I 211 on Python OOP, SQL/SQLite, REST APIs, Flask, and Linux workflows.',
      'Supported lab sessions with hands-on debugging and Git/GitHub collaboration practices.',
      'For CSCI-C 231, reinforced discrete math foundations for cybersecurity — modular arithmetic, probability, and asymmetric crypto (RSA, Diffie–Hellman).',
      'Ran review sessions and evaluated proofs and problem sets before exams.',
    ],
  },
  {
    title: 'Associate Consultant',
    org: 'IQVIA',
    location: 'Bengaluru, India',
    date: 'Jan 2023 – Jul 2024',
    bullets: [
      'Engineered and deployed customized Argus and Cognos application modules across multiple enterprise pharmaceutical client projects, managing complex migrations, version upgrades, and optimized SQL data retrieval workflows with tailored JavaScript UI enhancements.',
      'Spearheaded full-cycle development, validation, and production deployment for new client projects, transitioning from a supportive role under a team lead to owning full-scale project execution.',
      'Owned comprehensive code review and unit testing cycles for feature releases, identifying critical defects early and ensuring high-stability production deployments across sprint cycles.',
      'Collaborated cross-functionally with Product Management, QA, and Engineering leads to scope technical requirements, mitigate development bottlenecks, and ship application enhancements on schedule.',
    ],
  },
  {
    title: 'Associate Software Developer',
    org: 'IQVIA',
    location: 'Bengaluru, India',
    date: 'Jun 2022 – Dec 2022',
    bullets: [
      'Developed and integrated full-stack features across front-end and back-end layers using Java, .NET, and JavaScript, consistently delivering sprint-committed requirements for an internal product codebase.',
      'Built and consumed internal API development endpoints for application workflows, debugging integration issues end-to-end and hardening request/response handling for reliability.',
      'Debugged and resolved front-end defects leveraging HTML and JavaScript, optimizing UI functionality to steadily reduce the QA escalation backlog.',
      'Maintained code quality through peer reviews and version control practices on GitHub, contributing to a consistent and collaborative development workflow.',
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="heading-lg reveal">
          Work <span className="heading-accent">experience</span>
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {experiences.map((exp, index) => (
            <article
              key={`${exp.title}-${exp.date}`}
              className={`reveal reveal-delay-${(index % 3) + 1} surface surface--ruled`}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.35rem',
                      fontWeight: 600,
                    }}
                  >
                    {exp.title}
                  </h3>
                  <p style={{ color: 'var(--accent-color)', fontWeight: 500 }}>
                    {exp.org} · {exp.location}
                  </p>
                </div>
                <span className="meta-pill">{exp.date}</span>
              </div>
              <ul
                style={{
                  paddingLeft: '1.15rem',
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.45rem',
                }}
              >
                {exp.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
