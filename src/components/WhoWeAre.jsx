import React from 'react';
import { clinicData } from '../data/clinicData';

export default function WhoWeAre() {
  const { whoWeAre } = clinicData;

  return (
    <section className="who-we-are-section" id="about">
      <div className="container who-we-are-container">
        {/* Left Column: Arched/Capsule Portrait */}
        <div className="who-image-column">
          <div className="arched-image-frame">
            <img
              src={whoWeAre.image}
              alt="Radiant healthy skin portrait"
              className="arched-portrait-img"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Column: Title and Narrative Copy */}
        <div className="who-content-column">
          <h2 className="who-heading">{whoWeAre.title}</h2>
          <p className="who-text-paragraph">{whoWeAre.paragraph}</p>
        </div>
      </div>
    </section>
  );
}
