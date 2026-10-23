import React from 'react';
import { clinicData } from '../data/clinicData';

function InstagramIcon({ size = 26 }) {
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

function FacebookIcon({ size = 26 }) {
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

function LinkedinIcon({ size = 26 }) {
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

export default function ServicesTripleCards({ onOpenBooking }) {
  const { card1, card2, card3 } = clinicData.servicesPage.tripleCards;

  return (
    <section className="services-triple-section">
      <div className="container services-triple-container">
        {/* Card 1: Not sure where to start? */}
        <div className="services-triple-card card-start">
          <h3 className="triple-card-heading-serif">
            <span>{card1.titleLine1}</span>
            <span>{card1.titleLine2}</span>
          </h3>
          <p className="triple-card-desc">{card1.description}</p>
          <div className="triple-card-action">
            <button
              onClick={onOpenBooking}
              className="btn-primary-green triple-card-btn"
              id="services-book-appointment-btn"
            >
              {card1.ctaText}
            </button>
          </div>
        </div>

        {/* Card 2: Prefer to talk? */}
        <div className="services-triple-card card-talk">
          <h3 className="triple-card-heading-bold">{card2.title}</h3>

          <div className="triple-talk-pills">
            <a
              href={card2.phoneHref}
              className="talk-pill-btn"
              aria-label="Call Liora"
            >
              {card2.phone}
            </a>
            <a
              href={card2.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="talk-pill-btn"
              aria-label="WhatsApp Liora"
            >
              {card2.whatsapp}
            </a>
            <a
              href={card2.emailHref}
              className="talk-pill-btn talk-pill-email"
              aria-label="Email Liora"
            >
              {card2.email}
            </a>
          </div>

          <span className="triple-timings-note">{card2.timings}</span>
        </div>

        {/* Card 3: Follow Us */}
        <div className="services-triple-card card-follow">
          <h3 className="triple-card-heading-bold">{card3.title}</h3>
          <p className="triple-card-desc">{card3.description}</p>

          <div className="triple-social-icons">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="services-social-link"
              aria-label="Instagram"
            >
              <InstagramIcon size={26} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="services-social-link"
              aria-label="Facebook"
            >
              <FacebookIcon size={26} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="services-social-link"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={26} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
