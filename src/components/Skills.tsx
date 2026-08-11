import React from 'react';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C#', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks & libraries',
    skills: [
      'Spring Boot',
      'Spring Cloud',
      'Angular',
      'Flask',
      'ASP.NET',
      'React',
    ],
  },
  {
    title: 'Data & ML',
    skills: ['PySpark', 'Pandas', 'scikit-learn', 'Plotly', 'OpenCV'],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      'GCP (Dataproc, GCS)',
      'Docker',
      'Kubernetes',
      'Docker Compose',
      'Git/GitHub',
      'Maven',
      'Gradle',
    ],
  },
  {
    title: 'Data stores & messaging',
    skills: ['PostgreSQL', 'MySQL', 'SQLite', 'RabbitMQ'],
  },
  {
    title: 'Testing',
    skills: ['JUnit 5', 'Mockito', 'k6'],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="heading-lg reveal">
          Technical <span className="heading-accent">skills</span>
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.15rem',
          }}
        >
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`reveal reveal-delay-${(index % 3) + 1} surface`}
              style={{ padding: '1.35rem 1.5rem' }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  marginBottom: '0.85rem',
                  paddingBottom: '0.5rem',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                {category.title}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {category.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
