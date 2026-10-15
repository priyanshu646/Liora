import React from 'react';
import { clinicData } from '../data/clinicData';

export default function Testimonials() {
  const { testimonials } = clinicData;

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container testimonials-container">
        {/* Left Column: Heading */}
        <div className="testimonials-heading-col">
          <span className="section-badge-olive">{testimonials.badge}</span>
          <h2 className="testimonials-title">
            <span>What our</span>
            <span>clients say</span>
          </h2>
        </div>

        {/* Right Column: Quotation Mark, Quote, Author */}
        <div className="testimonials-quote-col">
          <div className="quote-mark">“</div>
          <p className="quote-text">{testimonials.quote}</p>
          <div className="quote-author-name">{testimonials.author}</div>
          <div className="quote-slider-indicator">
            <span className="indicator-dot active"></span>
            <span className="indicator-dot"></span>
            <span className="indicator-dot"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
