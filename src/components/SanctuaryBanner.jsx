import React from 'react';
import { clinicData } from '../data/clinicData';

export default function SanctuaryBanner({ onOpenBooking }) {
  const { sanctuary } = clinicData;

  return (
    <section className="sanctuary-section">
      {/* Exact PDF background pattern */}
      <div className="sanctuary-pattern-bg">
        <img
          src="/assets/sanctuary_pattern.png"
          alt=""
          className="sanctuary-pattern-img"
          aria-hidden="true"
        />
      </div>

      <div className="container sanctuary-container">
        {/* Outer framed floating border */}
        <div className="sanctuary-outer-frame">
          {/* Inner solid white card */}
          <div className="sanctuary-white-card">
            <h2 className="sanctuary-title">
              <span className="sanctuary-italic-line">{sanctuary.line1}</span>
              <span className="sanctuary-italic-line">{sanctuary.line2}</span>
            </h2>

            <p className="sanctuary-subtitle">
              Book your session today and let our amazing<br />
              experience be your sanctuary for a balanced life.
            </p>

            <div className="sanctuary-cta-wrap">
              <button
                onClick={onOpenBooking}
                className="sanctuary-book-btn"
                id="sanctuary-book-btn"
              >
                {sanctuary.ctaText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
