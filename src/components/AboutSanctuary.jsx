import React from 'react';

export default function AboutSanctuary({ onOpenBooking }) {
  return (
    <section className="about-sanctuary-section" id="sanctuary">
      <div className="container about-sanctuary-container">
        <div className="about-sanctuary-card-wrapper">
          <img
            src="/assets/about/exact_sanctuary_section_200dpi.png"
            alt="LIORA - A moment to pause. A ritual to restore."
            className="about-sanctuary-exact-img"
            loading="lazy"
          />

          {/* Interactive button positioned seamlessly over the Book Consultation button in the image */}
          <button
            type="button"
            onClick={onOpenBooking}
            className="about-sanctuary-interactive-btn"
            id="about-sanctuary-book-btn"
            aria-label="Book Consultation"
          >
            Book Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
