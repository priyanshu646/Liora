import React from 'react';
import { clinicData } from '../data/clinicData';

export default function AboutExperts() {
  const { experts } = clinicData.aboutPage;

  return (
    <section className="about-experts-section" id="experts">
      <div className="container about-experts-container">
        {/* Section Heading */}
        <div className="about-experts-header">
          <h2 className="about-experts-title italic-serif">{experts.title}</h2>
        </div>

        {/* 4 Expert Cards Row */}
        <div className="about-experts-grid">
          {experts.team.map((member) => (
            <div key={member.id} className="about-expert-card">
              {/* Arched Portrait Frame */}
              <div className="about-expert-photo-frame">
                <img
                  src={member.image}
                  alt={member.name}
                  className="about-expert-img"
                  loading="lazy"
                />
              </div>

              {/* Expert Info */}
              <div className="about-expert-details">
                <h3 className="about-expert-name">{member.name}</h3>
                <p className="about-expert-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
