import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C#', 'HTML', 'CSS']
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['Spring Boot', 'Spring Cloud', 'Angular', 'Flask', 'ASP.NET', 'React']
    },
    {
      title: 'Data & ML',
      skills: ['PySpark', 'Pandas', 'scikit-learn', 'Plotly', 'OpenCV']
    },
    {
      title: 'Cloud & DevOps',
      skills: ['GCP', 'Docker', 'Kubernetes', 'Docker Compose', 'Git/GitHub', 'Maven', 'Gradle']
    },
    {
      title: 'Databases & Messaging',
      skills: ['PostgreSQL', 'MySQL', 'SQLite', 'RabbitMQ']
    },
    {
      title: 'Testing & Tools',
      skills: ['JUnit 5', 'Mockito', 'k6']
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="heading-lg reveal">Technical <span className="text-gradient">Skills</span></h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {skillCategories.map((category, index) => (
            <div key={index} className={`reveal reveal-delay-${(index % 3) + 1} glass-card`} style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', color: 'white', marginBottom: '1rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>
                {category.title}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {category.skills.map((skill, i) => (
                  <span key={i} style={{ 
                    background: 'rgba(255, 255, 255, 0.05)', 
                    border: '1px solid var(--glass-border)',
                    color: 'var(--text-primary)', 
                    padding: '0.3rem 0.8rem', 
                    borderRadius: '999px', 
                    fontSize: '0.85rem' 
                  }}>
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
