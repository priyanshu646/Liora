import React from 'react';
import { clinicData } from '../data/clinicData';
import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const { footer } = clinicData;

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    const target = link.label.toLowerCase();
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
      window.location.hash = link.href;
    }
  };

  return (
    <footer className="site-footer" id="footer-contact">
      {/* Background Watermark Oval Motif on right side */}
      <div className="footer-watermark" aria-hidden="true">
        <img
          src="/assests/Footer icon.png"
          alt=""
          className="watermark-img"
        />
      </div>

      <div className="container footer-container">
        {/* Left Column: Brand & Details */}
        <div className="footer-brand-col">
          <div className="footer-logo">
            <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('home'); }} className="footer-logo-link" aria-label="LIORA Luxee Wellness Home">
              <img
                src="/assests/Liora wellness logo.png"
                alt="LIORA LUXEE WELLNESS"
                className="footer-logo-image"
              />
            </a>
          </div>

          <div className="footer-contact-list">
            <div className="footer-contact-item">
              <span className="contact-icon"><MapPin size={16} /></span>
              <span>{footer.address}</span>
            </div>

            <div className="footer-contact-item">
              <span className="contact-icon"><Phone size={16} /></span>
              <a href={`tel:${footer.phone.replace(/\s+/g, '')}`}>{footer.phone}</a>
            </div>

            <div className="footer-contact-item">
              <span className="contact-icon"><Mail size={16} /></span>
              <a href={`mailto:${footer.email}`}>{footer.email}</a>
            </div>

            <div className="footer-contact-item">
              <span className="contact-icon"><Clock size={16} /></span>
              <span>{footer.timings}</span>
            </div>

            <div className="footer-contact-item">
              <span className="contact-icon"><Calendar size={16} /></span>
              <span>{footer.days}</span>
            </div>
          </div>
        </div>

        {/* Center / Right Column: Vertical Navigation Links */}
        <div className="footer-nav-col">
          <ul className="footer-nav-list">
            {footer.navLinks.map((link) => (
              <li key={link.label} className="footer-nav-item">
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  className="footer-nav-link"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
