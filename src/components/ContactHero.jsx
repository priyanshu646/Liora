import React from 'react';
import { clinicData } from '../data/clinicData';

export default function ContactHero() {
  const { hero } = clinicData.contactPage;

  return (
    <section className="contact-hero-section">
      <div className="contact-hero-banner">
        {/* Right Image Container */}
        <div className="contact-hero-image-wrapper">
          <img
            src={hero.image}
            alt="Rediscover your Radiance & Peace at Liora Luxee Wellness"
            className="contact-hero-face-img"
            loading="eager"
          />
        </div>

        {/* Left Text Block */}
        <div className="container contact-hero-container">
          <div className="contact-hero-content">
            <h1 className="contact-hero-title">
              <span className="contact-hero-line-1">{hero.line1}</span>
              <span className="contact-hero-line-2">{hero.line2}</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
