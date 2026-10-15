import React from 'react';
import { clinicData } from '../data/clinicData';

export default function ExperienceBanner({ onOpenBooking }) {
  const { experience } = clinicData;

  return (
    <section className="experience-banner-section">
      <div className="container experience-container">
        <h2 className="experience-title">{experience.heading}</h2>
        <p className="experience-subtitle">{experience.subheading}</p>
      </div>
    </section>
  );
}
