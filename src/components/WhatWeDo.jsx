import React from 'react';
import { clinicData } from '../data/clinicData';

export default function WhatWeDo() {
  const { whatWeDo } = clinicData;

  return (
    <section className="what-we-do-section" id="services">
      <div className="container what-we-do-container">
        {/* Header */}
        <div className="what-we-do-header">
          <span className="section-badge-olive">{whatWeDo.badge}</span>
          <h2 className="section-heading-olive">{whatWeDo.title}</h2>
        </div>

        {/* 4 Circular Treatment Items */}
        <div className="what-we-do-grid">
          {whatWeDo.services.map((item) => (
            <div key={item.id} className="what-we-do-item">
              <div className="circle-image-wrapper">
                <img
                  src={item.image}
                  alt="Dermatology treatment"
                  className="circle-image"
                  loading="lazy"
                />
              </div>

              <h3 className="what-we-do-item-title">
                <span>{item.titleLine1}</span>
                <span>{item.titleLine2}</span>
              </h3>

              <p className="what-we-do-item-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
