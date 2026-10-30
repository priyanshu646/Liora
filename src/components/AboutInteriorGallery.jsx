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

  return (
    <section className="about-gallery-section" id="clinic-spaces">
      <div className="container about-gallery-container">
        {/* Previous Chevron Button (Small, sleek luxury chevron) */}
        <button
          type="button"
          className="about-gallery-arrow about-gallery-prev"
          onClick={prevSlide}
          aria-label="Previous interior slide"
        >
          <svg
            className="gallery-chevron-svg gallery-chevron-small"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M8 2L2 9L8 16"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="about-gallery-frame">
          {/* Main Slide Image */}
          <div className="about-gallery-slider">
            {interiorGallery.map((slide, idx) => (
              <div
                key={slide.id}
                className={`about-gallery-slide ${idx === currentIndex ? 'active' : ''}`}
              >
                <img
                  src={slide.image}
                  alt={slide.alt || slide.title}
                  className="about-gallery-slide-img"
                  loading={idx === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
          {/* Pagination Indicators inside the frame at the bottom */}
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

        {/* Next Chevron Button (Little big, prominent luxury chevron) */}
        <button
          type="button"
          className="about-gallery-arrow about-gallery-next"
          onClick={nextSlide}
          aria-label="Next interior slide"
        >
          <svg
            className="gallery-chevron-svg gallery-chevron-small"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M2 2L8 9L2 16"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
