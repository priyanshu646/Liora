import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function AboutInteriorGallery() {
  const { interiorGallery } = clinicData.aboutPage;
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? interiorGallery.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === interiorGallery.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === interiorGallery.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [interiorGallery.length]);

  return (
    <section className="about-gallery-section" id="clinic-spaces">
      <div className="container about-gallery-container">
        <div className="about-gallery-frame">
          {/* Main Slide Image */}
          <div className="about-gallery-slider">
            {interiorGallery.map((slide, idx) => (
              <div
                key={slide.id}
                className={`about-gallery-slide ${idx === currentIndex ? 'active' : ''}`}
                style={{
                  opacity: idx === currentIndex ? 1 : 0,
                  transform: idx === currentIndex ? 'scale(1)' : 'scale(1.03)',
                  transition: 'opacity 0.6s ease, transform 0.6s ease',
                  position: idx === currentIndex ? 'relative' : 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
              >
                <img
                  src={slide.image}
                  alt={slide.alt || slide.title}
                  className="about-gallery-slide-img"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Navigation Controls (< and >) matching PDF mockup */}
          <button
            type="button"
            className="about-gallery-arrow about-gallery-prev"
            onClick={prevSlide}
            aria-label="Previous interior slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            type="button"
            className="about-gallery-arrow about-gallery-next"
            onClick={nextSlide}
            aria-label="Next interior slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Pagination Indicators */}
          <div className="about-gallery-dots">
            {interiorGallery.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                className={`about-gallery-dot ${dotIdx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
