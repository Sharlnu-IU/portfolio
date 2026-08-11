import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Picture Dictionary – Microservices Platform',
      tech: ['Spring Boot', 'Spring Cloud', 'RabbitMQ', 'Kubernetes', 'Angular'],
      description: [
        'Architected a multi-language visual learning platform across 7 Spring Boot microservices.',
        'Implemented an event-driven analytics pipeline using RabbitMQ with Dead Letter Queue fallback.',
        'Deployed on Minikube with per-service Kubernetes manifests and PostgreSQL; Angular frontend validated with k6 load tests sustaining 1,000 concurrent users.'
      ]
    },
    {
      title: 'Student Course Enrollment System',
      tech: ['Spring Boot', 'Spring Security', 'Docker', 'JUnit 5', 'Mockito'],
      description: [
        'Engineered a course enrollment portal with Spring Security session-based authentication.',
        'Implemented an automated waitlist engine that revalidates and promotes the next eligible student upon a course drop.',
        'Containerized using a multi-stage Docker build with non-root execution and health checks.'
      ]
    },
    {
      title: 'Air crash Visualization Dashboard',
      tech: ['Flask', 'Python', 'scikit-learn', 'Plotly', 'HTML/CSS'],
      description: [
        'Developed and deployed a full-stack interactive data visualization web app analyzing historical air crash records.',
        'Engineered multi-level drill-down analytics with choropleth maps, KDE histograms, and an NLP-powered word cloud.',
        'Deployed to production on Render with dark/light mode toggle and scroll animations.'
      ]
    },
    {
      title: 'Cloud-Native Parallel Image Processing',
      tech: ['GCP Dataproc', 'PySpark', 'OpenCV', 'GCS'],
      description: [
        'Implemented a distributed image processing pipeline on GCP using PySpark and OpenCV.',
        'Benchmarked parallel vs. sequential execution across three dataset sizes on the Caltech-101 dataset.',
        'Achieved a 2.13x speedup on ~2,000 images.'
      ]
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="heading-lg reveal">Featured <span className="text-gradient">Projects</span></h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {projects.map((project, index) => (
            <div key={index} className={`reveal reveal-delay-${(index % 3) + 1} glass-card`} style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'white', marginBottom: '0.5rem' }}>{project.title}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                {project.tech.map((t, i) => (
                  <span key={i} style={{ background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-color)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600 }}>
                    {t}
                  </span>
                ))}
              </div>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', flexGrow: 1 }}>
                {project.description.map((item, i) => (
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

export default Projects;
