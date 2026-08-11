import React from 'react';
import { FiArrowUpRight, FiExternalLink, FiGithub } from 'react-icons/fi';

type Project = {
  title: string;
  tech: string[];
  problem: string;
  built: string[];
  proof: string;
  github: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: 'Picture Dictionary — Microservices Platform',
    tech: ['Spring Boot', 'Spring Cloud', 'RabbitMQ', 'Kubernetes', 'Angular'],
    problem:
      'Need a multi-language visual learning platform that stays modular under load and keeps analytics reliable.',
    built: [
      'Architected seven Spring Boot microservices with Spring Cloud Gateway routing and a Config Server.',
      'Event-driven analytics via RabbitMQ: Vocab Service publishes view events; Analytic Service aggregates with DLQ fallback.',
      'Deployed on Minikube with per-service Kubernetes manifests and PostgreSQL; Angular frontend load-tested with k6.',
    ],
    proof: 'Sustained 1,000 concurrent users against defined SLA thresholds in k6 tests.',
    github: 'https://github.com/Sharlnu-IU/Picture-Dictionary',
  },
  {
    title: 'Student Course Enrollment System',
    tech: ['Spring Boot', 'Spring Security', 'Docker', 'JUnit 5', 'Mockito'],
    problem:
      'Course portals need safe enrollment rules — prerequisites, credits, conflicts — plus fair waitlist promotion.',
    built: [
      'Session-based Spring Security auth with a three-layer validation pipeline for prerequisites, credit limits, and schedule conflicts.',
      'Automated waitlist engine that revalidates and promotes the next eligible student when a seat opens.',
      'Multi-stage Docker image with non-root execution and health checks.',
    ],
    proof: 'Covered with 18 JUnit 5 and Mockito unit tests.',
    github: 'https://github.com/Sharlnu-IU/Student-Course-Scheduler',
  },
  {
    title: 'Air Crash Visualization Dashboard',
    tech: ['Flask', 'Python', 'scikit-learn', 'Plotly', 'Mapbox'],
    problem:
      'Historical air crash data is hard to explore without multi-level visual drill-downs.',
    built: [
      'Full-stack interactive dashboard for historical air crash records.',
      'Choropleth maps, Mapbox heatmaps, KDE histograms, and an NLP-powered word cloud.',
      'Multi-page Flask architecture with dark/light mode and scroll animations, deployed on Render.',
    ],
    proof: 'Live production deployment on Render.',
    github: 'https://github.com/Sharlnu-IU/Aircrash_Vizualization',
    live: 'https://aircrash-vizualization.onrender.com/',
  },
  {
    title: 'Cloud-Native Parallel Image Processing',
    tech: ['GCP Dataproc', 'PySpark', 'OpenCV', 'GCS'],
    problem:
      'Sequential image pipelines do not scale; need measured parallel speedups on real clusters.',
    built: [
      'Distributed pipeline on GCP: PySpark jobs on a multi-worker Dataproc cluster reading/writing via GCS.',
      'OpenCV grayscale conversion in parallel across Caltech-101 dataset sizes.',
      'Benchmarked parallel vs sequential to show when parallelism pays off — and when overhead dominates.',
    ],
    proof: '2.13× speedup on ~2,000 images (1.43 vs 3.04 min).',
    github: 'https://github.com/Sharlnu-IU/ECC_IPP',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="heading-lg reveal">
          Selected <span className="heading-accent">projects</span>
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '1.5rem',
          }}
        >
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`reveal reveal-delay-${(index % 3) + 1} case`}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  marginBottom: '0.75rem',
                  lineHeight: 1.25,
                }}
              >
                {project.title}
              </h3>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.4rem',
                  marginBottom: '1rem',
                }}
              >
                {project.tech.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>

              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.95rem',
                  marginBottom: '0.85rem',
                }}
              >
                <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Problem. </strong>
                {project.problem}
              </p>

              <ul
                style={{
                  paddingLeft: '1.15rem',
                  color: 'var(--text-secondary)',
                  fontSize: '0.95rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                  flexGrow: 1,
                  marginBottom: '1rem',
                }}
              >
                {project.built.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <p
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: 'var(--accent-color)',
                  marginBottom: '1.25rem',
                }}
              >
                {project.proof}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: 'auto' }}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="link-quiet"
                >
                  <FiGithub size={16} /> GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="link-quiet"
                  >
                    <FiExternalLink size={16} /> Live demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginTop: '2.75rem' }}>
          <a
            href="https://github.com/Sharlnu-IU?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            All repositories on GitHub <FiArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
