import React from 'react';
import { clinicData } from '../data/clinicData';

export default function ServicesHero() {
  const { hero } = clinicData.servicesPage;

  return (
    <section className="services-hero-section">
      <div className="services-hero-media">
        <img
          src={hero.image}
          alt="Liora dermatology laser treatment"
          className="services-hero-img"
        />
        <div className="services-hero-gradient-overlay" />
      </div>

      <div className="container services-hero-container">
        <div className="services-hero-content">
          <h1 className="services-hero-title">
            <span className="services-hero-title-regular">{hero.line1}</span>
            <span className="services-hero-title-italic">{hero.line2}</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
