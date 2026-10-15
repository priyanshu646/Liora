import React, { useState } from 'react';
import { clinicData } from '../data/clinicData';
import { Eye, X } from 'lucide-react';

export default function ClinicGallery() {
  const { gallery } = clinicData;
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <section className="clinic-gallery-section" id="gallery">
      <div className="container">
        <div className="gallery-grid">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="gallery-card"
              onClick={() => setActivePhoto(item)}
            >
              <img
                src={item.image}
                alt={item.caption}
                className="gallery-card-image"
                loading="lazy"
              />
              <div className="gallery-card-overlay">
                <span className="gallery-card-caption">{item.caption}</span>
                <span className="gallery-view-icon"><Eye size={20} /></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="gallery-lightbox" onClick={() => setActivePhoto(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close-btn"
              onClick={() => setActivePhoto(null)}
              aria-label="Close image"
            >
              <X size={24} />
            </button>
            <img
              src={activePhoto.image}
              alt={activePhoto.caption}
              className="lightbox-img"
            />
            <p className="lightbox-caption">{activePhoto.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}
