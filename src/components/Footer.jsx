import React from 'react';
import { clinicData } from '../data/clinicData';
import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';

export default function Footer() {
  const { footer } = clinicData;

  return (
    <footer className="site-footer" id="contact">
      {/* Background Watermark Oval Motif on right side */}
      <div className="footer-watermark" aria-hidden="true">
        <svg viewBox="0 0 320 400" className="watermark-svg" fill="none">
          <path
            d="M 160,20 C 60,60 60,340 160,380 C 260,340 260,60 160,20 Z"
            stroke="rgba(255, 255, 255, 0.12)"
            strokeWidth="38"
          />
          <ellipse
            cx="160"
            cy="200"
            rx="45"
            ry="75"
            fill="rgba(255, 255, 255, 0.06)"
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
                <a href={link.href} className="footer-nav-link">
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
