import React from 'react';
import AboutHero from './AboutHero';
import AboutIntroQuote from './AboutIntroQuote';
import AboutOurStory from './AboutOurStory';
import AboutWhyLiora from './AboutWhyLiora';
import AboutOurValues from './AboutOurValues';
import AboutMissionVision from './AboutMissionVision';
import AboutInteriorGallery from './AboutInteriorGallery';
import AboutExperts from './AboutExperts';
import SanctuaryBanner from './SanctuaryBanner';
import ExperienceBanner from './ExperienceBanner';

export default function AboutPage({ onOpenBooking }) {
  return (
    <div className="about-page-wrapper">
      {/* 1. Hero Banner */}
      <AboutHero />

      {/* 2. Intro Philosophy Quote */}
      <AboutIntroQuote />

      {/* 3. Our Story Section */}
      <AboutOurStory />

      {/* 4. Why Liora Accordion Section */}
      <AboutWhyLiora />

      {/* 5. Our Values Cards Grid */}
      <AboutOurValues />

      {/* 6. Mission & Vision Section */}
      <AboutMissionVision />

      {/* 7. Luxury Clinic Interior Slider */}
      <AboutInteriorGallery />

      {/* 8. Skilled Experts Team Section */}
      <AboutExperts />

      {/* 9. Sanctuary Banner */}
      <SanctuaryBanner onOpenBooking={onOpenBooking} />

      {/* 10. Pre-Footer Experience Banner */}
      <ExperienceBanner onOpenBooking={onOpenBooking} />
    </div>
  );
}
