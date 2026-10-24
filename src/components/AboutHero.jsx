import React from 'react';
import { clinicData } from '../data/clinicData';

export default function AboutHero() {
  const { hero } = clinicData.aboutPage;

  return (
    <section className="about-hero-section">
      <div className="container about-hero-container">
        {/* Left Typography Block */}
        <div className="about-hero-text-wrap">
          <h1 className="about-hero-title">
            <span className="about-hero-line1">{hero.line1}</span>
            <span className="about-hero-line2 italic-serif">{hero.line2}</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
