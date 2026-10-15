import React, { useState } from 'react';
import { clinicData } from '../data/clinicData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const { testimonials } = clinicData;
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.items.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials.items[currentIndex];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container testimonials-container">
        {/* Left Column: Heading */}
        <div className="testimonials-heading-col">
          <span className="section-badge">{testimonials.badge}</span>
          <h2 className="testimonials-title">
            What our<br />clients say
          </h2>
        </div>

        {/* Right Column: Large quote block */}
        <div className="testimonials-quote-col">
          {/* Large decorative quotation mark */}
          <div className="quote-mark">“</div>

          <div className="quote-body-wrapper">
            <p className="quote-text">{current.quote}</p>
            <div className="quote-author-info">
              <span className="quote-author-name">{current.author}</span>
              {current.designation && (
                <span className="quote-author-role">{current.designation}</span>
              )}
            </div>

            {/* Slider Navigation */}
            <div className="testimonials-controls">
              <div className="testimonials-dots">
                {testimonials.items.map((_, idx) => (
                  <button
                    key={idx}
                    className={`dot-indicator ${idx === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
              <div className="testimonials-arrows">
                <button
                  className="arrow-btn"
                  onClick={prevSlide}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  className="arrow-btn"
                  onClick={nextSlide}
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
