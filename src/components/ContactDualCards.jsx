import React from 'react';
import { clinicData } from '../data/clinicData';

function InstagramIcon({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function ContactDualCards({ onOpenBooking }) {
  const { consultation, followUs } = clinicData.contactPage.cards;

  return (
    <section className="contact-dual-cards-section">
      <div className="container contact-dual-cards-container">
        {/* Left Card: Book a Consultation */}
        <div className="contact-card-box consultation-card">
          <h3 className="dual-card-title consultation-title">
            {consultation.title}
          </h3>
          <p className="dual-card-description">
            {consultation.description}
          </p>
          <div className="dual-card-action">
            <button
              onClick={onOpenBooking}
              className="dual-card-btn consultation-btn"
              id="dual-card-book-appointment-btn"
            >
              {consultation.ctaText}
            </button>
          </div>
        </div>

        {/* Right Card: Follow Us */}
        <div className="contact-card-box follow-card">
          <h3 className="dual-card-title follow-title">
            {followUs.title}
          </h3>
          <p className="dual-card-description">
            {followUs.description}
          </p>
          <div className="dual-card-socials">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="Follow Liora on Instagram"
            >
              <InstagramIcon size={28} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="Follow Liora on Facebook"
            >
              <FacebookIcon size={28} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="Connect with Liora on LinkedIn"
            >
              <LinkedinIcon size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
