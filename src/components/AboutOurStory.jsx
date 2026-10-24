import React from 'react';
import { clinicData } from '../data/clinicData';

export default function AboutOurStory() {
  const { ourStory } = clinicData.aboutPage;

  return (
    <section className="about-our-story-section" id="about-story">
      <div className="container about-story-container">
        <div className="about-story-grid">
          {/* Left Text Column */}
          <div className="about-story-content">
            <h2 className="about-story-title italic-serif">{ourStory.title}</h2>
            <p className="about-story-text">{ourStory.paragraph}</p>
          </div>

          {/* Right Reception Photo */}
          <div className="about-story-media">
            <div className="about-story-image-wrap">
              <img
                src={ourStory.image}
                alt="Liora Luxee Wellness Reception Suite"
                className="about-story-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
