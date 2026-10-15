import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function Navbar({ onOpenBooking }) {
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

  return (
    <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo - clean "LIORA" as in PDF header */}
        <a href="#home" className="navbar-logo">
          <span className="navbar-brand-name">LIORA</span>
        </a>

        {/* Right side group: Nav links + Book Consultation button */}
        <div className="navbar-right-group">
          <nav className="navbar-nav">
            {clinicData.navigation.map((item) => (
              <a key={item.label} href={item.href} className="navbar-link">
                {item.label}
              </a>
            ))}
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
          {clinicData.navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
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
