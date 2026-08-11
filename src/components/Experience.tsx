import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Associate Consultant',
      company: 'IQVIA',
      location: 'Bengaluru, India',
      date: 'Jan 2023 - Jul 2024',
      description: [
        'Engineered and deployed customized Argus and Cognos application modules across multiple enterprise pharmaceutical client projects.',
        'Spearheaded full-cycle development, validation, and production deployment for new client projects.',
        'Owned comprehensive code review and unit testing cycles for feature releases, identifying critical defects early.',
        'Collaborated cross-functionally with Product Management, QA, and Engineering leads to scope technical requirements.',
      ]
    },
    {
      title: 'Associate Software Developer',
      company: 'IQVIA',
      location: 'Bengaluru, India',
      date: 'Jun 2022 - Dec 2022',
      description: [
        'Developed and integrated full-stack features across front-end and back-end layers using Java, .NET, and JavaScript.',
        'Built and consumed internal API development endpoints for application workflows.',
        'Debugged and resolved front-end defects leveraging HTML and JavaScript, optimizing UI functionality.',
        'Maintained code quality through peer reviews and version control practices on GitHub.',
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="heading-lg reveal">Work <span className="text-gradient">Experience</span></h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experiences.map((exp, index) => (
            <div key={index} className={`reveal reveal-delay-${(index % 3) + 1} glass-card`} style={{ borderLeft: '4px solid var(--accent-color)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', color: 'white' }}>{exp.title}</h3>
                  <p style={{ color: 'var(--accent-color)', fontWeight: 500 }}>{exp.company} &bull; {exp.location}</p>
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  {exp.date}
                </div>
              </div>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
