import React from 'react';
import { clinicData } from '../data/clinicData';

export default function AboutOurValues() {
  const { ourValues } = clinicData.aboutPage;

  return (
    <section className="about-values-section" id="our-values">
      <div className="container about-values-container">
        {/* Section Header */}
        <div className="about-values-header">
          <span className="about-values-eyebrow">{ourValues.eyebrow}</span>
          <h2 className="about-values-title italic-serif">{ourValues.title}</h2>
        </div>

        {/* 2x2 Grid of Rounded Pill Cards */}
        <div className="about-values-grid">
          {ourValues.values.map((val) => (
            <div key={val.id} className="about-value-card">
              <h3 className="about-value-card-title">{val.title}</h3>
              <p className="about-value-card-desc">{val.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
