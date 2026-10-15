import React from 'react';
import { clinicData } from '../data/clinicData';

export default function WhoWeAre({ onOpenBooking }) {
  const { whoWeAre } = clinicData;

  return (
    <section className="who-we-are-section" id="about">
      <div className="container who-we-are-container">
        {/* Left Column: Arched Radiant Portrait */}
        <div className="who-image-column">
          <div className="arched-image-frame">
            <img
              src={whoWeAre.image}
              alt="Radiant healthy skin at Liora Luxee Wellness"
              className="arched-portrait-img"
              loading="lazy"
            />
            <div className="arched-glow-aura"></div>
          </div>
        </div>

        {/* Right Column: Narrative Copy */}
        <div className="who-content-column">
          <h2 className="who-heading">{whoWeAre.subtitle}</h2>
          
          <div className="who-paragraphs">
            {whoWeAre.paragraphs.map((p, idx) => (
              <p key={idx} className="who-text-paragraph">
                {p}
              </p>
            ))}
          </div>

          {/* Quick metric highlights */}
          <div className="who-stats-row">
            {whoWeAre.stats.map((stat, idx) => (
              <div key={idx} className="who-stat-item">
                <span className="who-stat-num">{stat.number}</span>
                <span className="who-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
