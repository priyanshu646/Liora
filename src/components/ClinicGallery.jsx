import React from 'react';
import { clinicData } from '../data/clinicData';

export default function ClinicGallery() {
  const { gallery } = clinicData;

  // Expected 6 images:
  // Col 1 (left): [0] Rectangle 4 (top), [3] Rectangle 6 (bottom)
  // Col 2 (center, wider): [1] Rectangle 5 (top), [4] Rectangle 7 (bottom)
  // Col 3 (right): [2] Rectangle 8 (top), [5] Rectangle 9 (bottom)

  return (
    <section className="clinic-gallery-section" id="gallery">
      <div className="container clinic-gallery-container">
        <div className="gallery-asymmetric-grid">
          {/* Column 1: Left */}
          <div className="gallery-column gallery-col-left">
            <div className="gallery-card card-top-left">
              <img
                src={gallery[0]?.image || "/assests/Rectangle 4.png"}
                alt={gallery[0]?.alt || "Liora aesthetic treatment suite"}
                className="gallery-card-image"
                loading="lazy"
              />
            </div>
            <div className="gallery-card card-bottom-left">
              <img
                src={gallery[3]?.image || "/assests/Rectangle 6.png"}
                alt={gallery[3]?.alt || "Liora consultation suite"}
                className="gallery-card-image"
                loading="lazy"
              />
            </div>
          </div>

          {/* Column 2: Center (Wider stone desk and luxury treatment suite) */}
          <div className="gallery-column gallery-col-center">
            <div className="gallery-card card-top-center">
              <img
                src={gallery[1]?.image || "/assests/Rectangle 5.png"}
                alt={gallery[1]?.alt || "Liora stone reception desk"}
                className="gallery-card-image"
                loading="lazy"
              />
            </div>
            <div className="gallery-card card-bottom-center">
              <img
                src={gallery[4]?.image || "/assests/Rectangle 7.png"}
                alt={gallery[4]?.alt || "Liora private clinic treatment suite"}
                className="gallery-card-image"
                loading="lazy"
              />
            </div>
          </div>

          {/* Column 3: Right */}
          <div className="gallery-column gallery-col-right">
            <div className="gallery-card card-top-right">
              <img
                src={gallery[2]?.image || "/assests/Rectangle 8.png"}
                alt={gallery[2]?.alt || "Liora lounge and beverage bar"}
                className="gallery-card-image"
                loading="lazy"
              />
            </div>
            <div className="gallery-card card-bottom-right">
              <img
                src={gallery[5]?.image || "/assests/Rectangle 9.png"}
                alt={gallery[5]?.alt || "Liora wood-fluted brand wall"}
                className="gallery-card-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

