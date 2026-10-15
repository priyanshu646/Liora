import React from 'react';
import { clinicData } from '../data/clinicData';

export default function SanctuaryBanner({ onOpenBooking }) {
  const { sanctuary } = clinicData;

  return (
    <section className="sanctuary-section">
      {/* Decorative Arch Pattern Background */}
      <div className="sanctuary-pattern-bg" aria-hidden="true">
        <svg className="pattern-svg" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="arch-pattern" width="160" height="120" patternUnits="userSpaceOnUse">
              <path
                d="M 20,60 C 20,25 60,25 60,60 C 60,95 20,95 20,60 Z M 100,60 C 100,25 140,25 140,60 C 140,95 100,95 100,60 Z"
                fill="none"
                stroke="#D6C8BB"
                strokeWidth="10"
                strokeLinecap="round"
                opacity="0.45"
              />
              <circle cx="80" cy="20" r="14" fill="#DFD2C5" opacity="0.4" />
              <circle cx="80" cy="100" r="14" fill="#DFD2C5" opacity="0.4" />
              <path
                d="M 60,0 C 60,20 100,20 100,0 M 60,120 C 60,100 100,100 100,120"
                fill="none"
                stroke="#D6C8BB"
                strokeWidth="8"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#arch-pattern)" />
        </svg>
      </div>

      <div className="container sanctuary-container">
        <div className="sanctuary-card-content">
          <h2 className="sanctuary-title">
            <span>A moment to pause.</span>
            <span>A ritual to restore.</span>
          </h2>

          <p className="sanctuary-subtitle">
            {sanctuary.subtitle}
          </p>

          <div className="sanctuary-cta-wrap">
            <button
              onClick={onOpenBooking}
              className="btn-primary-green sanctuary-btn"
              id="sanctuary-book-btn"
            >
              {sanctuary.ctaText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
