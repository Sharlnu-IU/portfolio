import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealOnScroll.observe(el));
    
    return () => {
      revealElements.forEach(el => revealOnScroll.unobserve(el));
    };
  }, []);

  return (
    <>
      <div className="bg-mesh"></div>
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
      <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid var(--glass-border)', color: 'var(--text-secondary)' }}>
        <p>&copy; {new Date().getFullYear()} Sharath. Built with React & Vite.</p>
      </footer>
    </>
  );
}

export default App;
