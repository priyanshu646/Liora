import React from 'react';
import { clinicData } from '../data/clinicData';

export default function Philosophy({ onOpenBooking }) {
  const { philosophy } = clinicData;

  return (
    <section className="philosophy-section" id="philosophy">
      <div className="container philosophy-container">
        {/* Section Header */}
        <div className="philosophy-header">
          <span className="section-badge-olive">{philosophy.badge}</span>
          <h2 className="section-heading-olive">{philosophy.title}</h2>
        </div>

        {/* 3 Philosophy Cards */}
        <div className="philosophy-cards-grid">
          {philosophy.cards.map((card) => (
            <div key={card.id} className="philosophy-card">
              <h3 className="philosophy-card-title">{card.title}</h3>
              <p className="philosophy-card-text">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Right-aligned "Find more" pill button */}
        <div className="philosophy-action-wrap">
          <button
            onClick={onOpenBooking}
            className="btn-find-more"
            id="philosophy-find-more-btn"
          >
            {philosophy.ctaText}
          </button>
        </div>
      </div>
    </section>
  );
}
