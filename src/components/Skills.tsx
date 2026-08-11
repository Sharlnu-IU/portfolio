import React from 'react';
import { 
  SiPython, SiJavascript, SiTypescript, SiHtml5, SiCss, 
  SiSpringboot, SiAngular, SiFlask, SiReact, SiPandas, 
  SiScikitlearn, SiPlotly, SiOpencv, SiGooglecloud, 
  SiDocker, SiKubernetes, SiGithub, SiPostgresql, 
  SiMysql, SiSqlite, SiRabbitmq, SiDotnet, SiApachemaven, SiGradle
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';
import { BiTestTube } from 'react-icons/bi';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', icon: <FaJava color="#f89820" /> },
        { name: 'Python', icon: <SiPython color="#3776ab" /> },
        { name: 'JavaScript', icon: <SiJavascript color="#f7df1e" /> },
        { name: 'TypeScript', icon: <SiTypescript color="#3178c6" /> },
        { name: 'C#', icon: <TbBrandCSharp color="#239120" /> },
        { name: 'HTML', icon: <SiHtml5 color="#e34f26" /> },
        { name: 'CSS', icon: <SiCss color="#1572b6" /> }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'Spring Boot', icon: <SiSpringboot color="#6db33f" /> },
        { name: 'Spring Cloud', icon: <SiSpringboot color="#6db33f" /> },
        { name: 'Angular', icon: <SiAngular color="#dd0031" /> },
        { name: 'Flask', icon: <SiFlask color="#ffffff" /> },
        { name: 'ASP.NET', icon: <SiDotnet color="#512bd4" /> },
        { name: 'React', icon: <SiReact color="#61dafb" /> }
      ]
    },
    {
      title: 'Data & ML',
      skills: [
        { name: 'PySpark', icon: <SiPython color="#3776ab" /> },
        { name: 'Pandas', icon: <SiPandas color="#150458" /> },
        { name: 'scikit-learn', icon: <SiScikitlearn color="#f7931e" /> },
        { name: 'Plotly', icon: <SiPlotly color="#3f4f75" /> },
        { name: 'OpenCV', icon: <SiOpencv color="#5c3ee8" /> }
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'GCP', icon: <SiGooglecloud color="#4285f4" /> },
        { name: 'Docker', icon: <SiDocker color="#2496ed" /> },
        { name: 'Kubernetes', icon: <SiKubernetes color="#326ce5" /> },
        { name: 'Docker Compose', icon: <SiDocker color="#2496ed" /> },
        { name: 'Git/GitHub', icon: <SiGithub color="#ffffff" /> },
        { name: 'Maven', icon: <SiApachemaven color="#c71a36" /> },
        { name: 'Gradle', icon: <SiGradle color="#02303a" /> }
      ]
    },
    {
      title: 'Databases & Messaging',
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql color="#336791" /> },
        { name: 'MySQL', icon: <SiMysql color="#4479a1" /> },
        { name: 'SQLite', icon: <SiSqlite color="#003b57" /> },
        { name: 'RabbitMQ', icon: <SiRabbitmq color="#ff6600" /> }
      ]
    },
    {
      title: 'Testing & Tools',
      skills: [
        { name: 'JUnit 5', icon: <BiTestTube color="#25a162" /> },
        { name: 'Mockito', icon: <BiTestTube color="#25a162" /> },
        { name: 'k6', icon: <BiTestTube color="#7d64ff" /> }
      ]
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
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {category.skills.map((skill, i) => (
                  <span key={i} style={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: 'rgba(255, 255, 255, 0.05)', 
                    border: '1px solid var(--glass-border)',
                    color: 'var(--text-primary)', 
                    padding: '0.4rem 0.8rem', 
                    borderRadius: '999px', 
                    fontSize: '0.85rem' 
                  }}>
                    {skill.icon} {skill.name}
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
