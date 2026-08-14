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
    title: 'Associate Consultant (Software Engineer)',
    org: 'IQVIA',
    location: 'Bengaluru, India',
    date: 'Jan 2023 – Jul 2024',
    bullets: [
      'Managed complex system migrations and version upgrades for Argus and Cognos modules across 4+ pharma client projects, optimizing SQL workflows to reduce query latency by ~20% while delivering custom JavaScript UI enhancements.',
      'Spearheaded end-to-end development, validation, and production deployments for 3 major client projects, taking full ownership from architecture scoping to final release with zero critical post-launch downtime.',
      'Owned unit testing cycles and code validation for feature releases, identifying critical defects pre-production to ensure high-stability deployments across client environments.',
      'Collaborated cross-functionally with Product Management, QA, and Engineering leads to refine technical requirements, resolving technical bottlenecks to maintain a 95%+ on-time delivery rate across sprint cycles.',
    ],
  },
  {
    title: 'Associate Software Developer',
    org: 'IQVIA',
    location: 'Bengaluru, India',
    date: 'Jun 2022 – Dec 2022',
    bullets: [
      'Built and integrated full-stack features using Java, .NET, and JavaScript, delivering 100% of sprint-committed tasks for a high-traffic internal product codebase.',
      'Engineered and consumed internal REST API endpoints, hardening request/response error handling and reducing end-to-end API integration bugs by ~25%.',
      'Diagnosed and resolved 20+ front-end defects using JavaScript and HTML, driving a 15% reduction in the QA escalation backlog.',
      'Maintained team code quality standards by leveraging Git version control, participating in GitHub PR reviews, and running CI/CD build pipelines across sprint cycles.',
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
