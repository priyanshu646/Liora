import React from 'react';
import { clinicData } from '../data/clinicData';
import ContactMap from './ContactMap';

export default function ContactInfoSection() {
  const { info } = clinicData.contactPage;

  return (
    <section className="contact-info-map-section" id="location-section">
      <div className="container">
        {/* Ivory Framed Container */}
        <div className="contact-ivory-box">
          {/* Header */}
          <div className="contact-info-header">
            <span className="contact-info-eyebrow">{info.eyebrow}</span>
            <h2 className="contact-info-title">{info.title}</h2>
          </div>

          {/* Grid: 3 Info Cards on Left, Map on Right */}
          <div className="contact-info-grid">
            {/* Left Column: Info Cards */}
            <div className="contact-cards-col">
              {info.cards.map((card, idx) => (
                <div key={card.label} className={`contact-info-card card-${idx + 1}`}>
                  <span className="info-card-label">{card.label}</span>
                  {card.href ? (
                    <a href={card.href} className="info-card-value-link">
                      {card.value}
                    </a>
                  ) : (
                    <span className="info-card-value-text">{card.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Right Column: Map with Location */}
            <div className="contact-map-col">
              <ContactMap />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
