import React from 'react';
import { clinicData } from '../data/clinicData';

export default function ClinicGallery() {
  const { gallery } = clinicData;

  return (
    <section className="clinic-gallery-section" id="gallery">
      <div className="container">
        <div className="gallery-grid">
          {gallery.map((item) => (
            <div key={item.id} className="gallery-card">
              <img
                src={item.image}
                alt={item.alt}
                className="gallery-card-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
