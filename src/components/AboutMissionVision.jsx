import React from 'react';
import { clinicData } from '../data/clinicData';

export default function AboutMissionVision() {
  const { missionVision } = clinicData.aboutPage;

  return (
    <section className="about-mv-section" id="mission-vision">
      <div className="container about-mv-container">
        <div className="about-mv-grid">
          {/* Left / Middle: Staggered Editorial Mission and Vision blocks */}
          <div className="about-mv-text-column">
            {/* Mission Block */}
            <div className="about-mv-block about-mission-block">
              <h2 className="about-mv-title">{missionVision.mission.title}</h2>
              <p className="about-mv-paragraph">{missionVision.mission.text}</p>
            </div>

            {/* Vision Block (staggered slightly to the right & down) */}
            <div className="about-mv-block about-vision-block">
              <h2 className="about-mv-title">{missionVision.vision.title}</h2>
              <p className="about-mv-paragraph">{missionVision.vision.text}</p>
            </div>
          </div>

          {/* Right: Arched Portrait */}
          <div className="about-mv-media-column">
            <div className="about-mv-arch-frame">
              <img
                src={missionVision.image}
                alt="Liora Mission and Vision for Radiant Skin"
                className="about-mv-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
