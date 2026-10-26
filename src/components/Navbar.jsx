import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function Navbar({ onOpenBooking, currentPage = 'contact', onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, item) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = item.label.toLowerCase();

    if (onNavigate) {
      if (target === 'contact') {
        onNavigate('contact');
      } else if (target === 'services') {
        onNavigate('services');
      } else if (target === 'about') {
        onNavigate('about');
      } else if (target === 'home') {
        onNavigate('home');
      } else {
        onNavigate('home', target);
      }
    } else {
      window.location.hash = item.href;
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('home');
    } else {
      window.location.hash = '#home';
    }
  };

  return (
    <header className={`navbar-header ${currentPage === 'contact' ? 'contact-navbar-header' : ''} ${currentPage === 'about' ? 'about-navbar-header' : ''} ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#home" onClick={handleLogoClick} className="navbar-logo" aria-label="LIORA Luxee Wellness Home">
          <img
            src="/assets/Liora wellness logo.png"
            alt="LIORA LUXEE WELLNESS"
            className="navbar-logo-image"
          />
        </a>

        {/* Right side group: Nav links + Book Consultation button */}
        <div className="navbar-right-group">
          <nav className="navbar-nav">
            {clinicData.navigation.map((item) => {
              const isContact = item.label === 'Contact';
              const isContactActive = isContact && currentPage === 'contact';
              const isServicesActive = item.label === 'Services' && currentPage === 'services';
              const isAboutActive = item.label === 'About' && currentPage === 'about';
              const isHomeActive = item.label === 'Home' && currentPage === 'home';

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item)}
                  className={`navbar-link ${isContactActive ? 'contact-nav-active' : ''} ${isHomeActive ? 'home-nav-active' : ''} ${isServicesActive ? 'services-nav-active' : ''} ${isAboutActive ? 'about-nav-active' : ''}`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <button
            onClick={onOpenBooking}
            className="btn-primary-green navbar-cta-btn"
            id="navbar-book-btn"
          >
            Book Consultation
          </button>

          {/* Mobile hamburger */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-inner">
          {clinicData.navigation.map((item) => {
            const isContact = item.label === 'Contact';
            const isContactActive = isContact && currentPage === 'contact';
            const isServicesActive = item.label === 'Services' && currentPage === 'services';
            const isAboutActive = item.label === 'About' && currentPage === 'about';

            return (
              <a
                key={item.label}
                href={item.href}
                className={`mobile-nav-link ${isContactActive ? 'contact-nav-active' : ''} ${isServicesActive ? 'services-nav-active' : ''} ${isAboutActive ? 'about-nav-active' : ''}`}
                onClick={(e) => handleLinkClick(e, item)}
              >
                {item.label}
              </a>
            );
          })}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="btn-primary-green mobile-nav-cta"
          >
            Book Consultation
          </button>
        </div>
      </div>
    </header>
  );
}
