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
        <svg viewBox="0 0 380 450" className="watermark-svg" fill="none">
          <ellipse
            cx="220"
            cy="240"
            rx="150"
            ry="200"
            stroke="rgba(212, 177, 163, 0.45)"
            strokeWidth="48"
          />
          <circle
            cx="210"
            cy="150"
            r="38"
            fill="rgba(212, 177, 163, 0.45)"
          />
        </svg>
      </div>

      <div className="container footer-container">
        {/* Left Column: Brand & Details */}
        <div className="footer-brand-col">
          <div className="footer-logo">
            <span className="footer-logo-title">{footer.brand}</span>
            <span className="footer-logo-subtitle">{footer.brandSub}</span>
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
