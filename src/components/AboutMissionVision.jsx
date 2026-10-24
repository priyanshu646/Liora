import React from 'react';
import { clinicData } from '../data/clinicData';

export default function AboutMissionVision() {
  const { missionVision } = clinicData.aboutPage;

  return (
    <section className="about-mv-section" id="mission-vision">
      <div className="container about-mv-container">
        <div className="about-mv-grid">
          {/* Left Column: Mission & Vision */}
          <div className="about-mv-text-column">
            {/* Mission Block */}
            <div className="about-mv-block about-mission-block">
              <h2 className="about-mv-title italic-serif">{missionVision.mission.title}</h2>
              <p className="about-mv-paragraph">{missionVision.mission.text}</p>
            </div>

            {/* Vision Block */}
            <div className="about-mv-block about-vision-block">
              <h2 className="about-mv-title italic-serif">{missionVision.vision.title}</h2>
              <p className="about-mv-paragraph">{missionVision.vision.text}</p>
            </div>
          </div>

          {/* Right Column: Oval Portrait */}
          <div className="about-mv-media-column">
            <div className="about-mv-oval-frame">
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
