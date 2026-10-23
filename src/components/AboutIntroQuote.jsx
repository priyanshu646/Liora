import React from 'react';
import { clinicData } from '../data/clinicData';

export default function AboutIntroQuote() {
  const { introQuote } = clinicData.aboutPage;

  return (
    <section className="about-intro-section">
      <div className="container about-intro-container">
        <div className="about-intro-card">
          <p className="about-intro-paragraph">
            {introQuote.text}
          </p>
        </div>
      </div>
    </section>
  );
}
