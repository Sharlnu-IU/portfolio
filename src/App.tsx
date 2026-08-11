import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            entry.target.classList.remove('active');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );

    revealElements.forEach((el) => revealOnScroll.observe(el));

    return () => {
      revealElements.forEach((el) => revealOnScroll.unobserve(el));
    };
  }, []);

  return (
    <>
      <div className="bg-mesh" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <BackToTop />
      <footer className="site-footer">
        <div className="site-footer__links">
          <a
            href="https://github.com/Sharlnu-IU"
            target="_blank"
            rel="noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <FiGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/sharath-iub"
            target="_blank"
            rel="noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href="mailto:sharath.iubcs@gmail.com"
            className="social-link"
            aria-label="Email"
          >
            <FiMail size={20} />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Sharath. Built with React & Vite.</p>
      </footer>
    </>
  );
}

export default App;
