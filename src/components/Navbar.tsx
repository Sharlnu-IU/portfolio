import React, { useState, useEffect } from 'react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = [...navLinks.map((l) => l.href.slice(1)), 'contact'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="container navbar__inner">
          <a href="#" className="navbar__logo">
            Sharath
          </a>

          <nav className="navbar__links" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`navbar__link ${
                  activeSection === link.href.slice(1) ? 'navbar__link--active' : ''
                }`}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn-primary navbar__cta">
              Contact
            </a>
          </nav>

          <button
            className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className="navbar__burger-bar" />
            <span className="navbar__burger-bar" />
            <span className="navbar__burger-bar" />
          </button>
        </div>
      </header>

      <div
        className={`navbar__overlay ${menuOpen ? 'navbar__overlay--open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <nav
        className={`navbar__drawer ${menuOpen ? 'navbar__drawer--open' : ''}`}
        aria-label="Mobile navigation"
      >
        <div className="navbar__drawer-header">
          <button
            className="navbar__drawer-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <ul className="navbar__drawer-links">
          {navLinks.map((link, i) => (
            <li key={link.name} style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}>
              <a
                href={link.href}
                className={`navbar__drawer-link ${
                  activeSection === link.href.slice(1) ? 'navbar__drawer-link--active' : ''
                }`}
                onClick={handleLinkClick}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-primary navbar__drawer-cta" onClick={handleLinkClick}>
          Contact
        </a>
      </nav>
    </>
  );
};

export default Navbar;
