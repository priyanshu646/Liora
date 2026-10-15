import React from 'react';
import { clinicData } from '../data/clinicData';
import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  const { footer } = clinicData;

  return (
    <footer className="site-footer" id="contact">
      {/* Background Watermark Motif */}
      <div className="footer-watermark" aria-hidden="true">
        <svg viewBox="0 0 300 300" className="watermark-svg">
          <ellipse cx="150" cy="150" rx="120" ry="140" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="36" />
          <ellipse cx="150" cy="150" rx="60" ry="70" fill="rgba(255, 255, 255, 0.04)" />
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
              <span className="contact-icon"><MapPin size={17} /></span>
              <span>{footer.address}</span>
            </div>

            <div className="footer-contact-item">
              <span className="contact-icon"><Phone size={17} /></span>
              <a href={`tel:${footer.phone.replace(/\s+/g, '')}`}>{footer.phone}</a>
            </div>

            <div className="footer-contact-item">
              <span className="contact-icon"><Mail size={17} /></span>
              <a href={`mailto:${footer.email}`}>{footer.email}</a>
            </div>

            <div className="footer-contact-item">
              <span className="contact-icon"><Clock size={17} /></span>
              <span>{footer.timings}</span>
            </div>

            <div className="footer-contact-item">
              <span className="contact-icon"><Calendar size={17} /></span>
              <span>{footer.days}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Navigation Links */}
        <div className="footer-nav-col">
          <ul className="footer-nav-list">
            {footer.navLinks.map((link) => (
              <li key={link.label} className="footer-nav-item">
                <a href={link.href} className="footer-nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="footer-consultation-prompt">
            <p className="footer-prompt-text">Ready to experience personalized luxury skincare?</p>
            <button
              onClick={onOpenBooking}
              className="btn-primary-green footer-cta"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Sub-footer Copyright */}
      <div className="sub-footer">
        <div className="container sub-footer-container">
          <p>© {new Date().getFullYear()} LIORA Luxee Wellness. All rights reserved.</p>
          <div className="sub-footer-links">
            <a href="#privacy">Privacy Policy</a>
            <span>•</span>
            <a href="#terms">Terms of Sanctuary</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
