import React, { useState } from 'react';
import { clinicData } from '../data/clinicData';
import { ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const { testimonials } = clinicData;
  const items = testimonials.items && testimonials.items.length > 0
    ? testimonials.items
    : [
        {
          id: 1,
          quote: testimonials.quote,
          author: testimonials.author,
        },
      ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const currentItem = items[currentIndex] || items[0];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container testimonials-container">
        {/* Left Column: Heading */}
        <div className="testimonials-heading-col">
          <span className="testimonials-eyebrow">{testimonials.badge}</span>
          <h2 className="testimonials-title">
            <span>What our</span>
            <span>clients say</span>
          </h2>
        </div>

        {/* Center Vertical Divider Line */}
        <div className="testimonials-divider-line" aria-hidden="true" />

        {/* Right Column: Double Quotes, Quote with Chevron, Author, 5 Dots */}
        <div className="testimonials-content-col">
          <div className="testimonials-quotes-wrap">
            <svg
              width="45"
              height="39"
              viewBox="0 0 45 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="testimonial-quotes-icon"
              aria-hidden="true"
            >
              <path
                d="M18 2C10 5.5 4.5 13 4.5 22C4.5 29.8 8.8 36 14 36C18.7 36 22.5 32.2 22.5 27.5C22.5 22.8 19.2 19.5 14.8 19.5C12.8 19.5 11 20.6 9.8 22.2C9.5 15.5 12.5 7.5 18 2ZM40 2C32 5.5 26.5 13 26.5 22C26.5 29.8 30.8 36 36 36C40.7 36 44.5 32.2 44.5 27.5C44.5 22.8 41.2 19.5 36.8 19.5C34.8 19.5 33 20.6 31.8 22.2C31.5 15.5 34.5 7.5 40 2Z"
                fill="#0D574A"
              />
            </svg>
          </div>

          <div className="testimonials-quote-row">
            <p className="testimonials-quote-paragraph">
              {currentItem.quote}
            </p>

            <button
              type="button"
              onClick={handleNext}
              className="testimonial-chevron-btn"
              aria-label="Next client testimonial"
              id="testimonial-next-btn"
            >
              <ChevronRight size={24} strokeWidth={2.2} />
            </button>
          </div>

          <div className="testimonials-author-name">{currentItem.author}</div>

          {/* 5 Dots Indicator */}
          <div className="testimonials-dots-wrap" role="tablist" aria-label="Testimonial slides">
            {Array.from({ length: 5 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx % items.length)}
                className={`testimonials-dot ${idx === currentIndex ? 'active' : ''}`}
                aria-label={`Go to testimonial ${idx + 1}`}
                role="tab"
                aria-selected={idx === currentIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

