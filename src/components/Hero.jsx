import React from 'react';
import { clinicData } from '../data/clinicData';

export default function Hero({ onOpenBooking }) {
  const { hero } = clinicData;

  return (
    <section className="hero-section" id="home">
      <div className="hero-background-wrapper">
        <img
          src={hero.image}
          alt="Liora Luxee Wellness treatment"
          className="hero-bg-image"
          loading="eager"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-content-container">
        <div className="hero-text-block">
          <p className="hero-eyebrow">{hero.eyebrow}</p>
          <h1 className="hero-title">
            <span className="hero-italic-highlight">{hero.highlight}</span>
            <span className="hero-clinic-name">{hero.clinicName}</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
