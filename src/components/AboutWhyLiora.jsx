import React, { useState } from 'react';
import { clinicData } from '../data/clinicData';
import { ChevronUp, ChevronDown } from 'lucide-react';

export default function AboutWhyLiora() {
  const { whyLiora } = clinicData.aboutPage;
  const [openIndex, setOpenIndex] = useState(0); // First item open by default as in PDF

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="about-why-section" id="why-liora">
      <div className="container about-why-container">
        <div className="about-why-grid">
          {/* Left Oval Portrait */}
          <div className="about-why-media">
            <div className="about-why-oval-frame">
              <img
                src={whyLiora.image}
                alt="Liora Radiant Skin & Aesthetic Care"
                className="about-why-img"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Content & Accordion */}
          <div className="about-why-content">
            <div className="about-why-header">
              <span className="about-why-eyebrow">{whyLiora.eyebrow}</span>
              <h2 className="about-why-title italic-serif">{whyLiora.title}</h2>
            </div>

            <div className="about-why-accordion">
              {whyLiora.accordion.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={item.id}
                    className={`about-accordion-item ${isOpen ? 'active' : ''}`}
                  >
                    <button
                      type="button"
                      className="about-accordion-trigger"
                      onClick={() => toggleItem(idx)}
                      aria-expanded={isOpen}
                    >
                      <span className="about-accordion-heading">{item.title}</span>
                      {isOpen ? (
                        <ChevronUp size={24} className="about-accordion-icon" />
                      ) : (
                        <ChevronDown size={24} className="about-accordion-icon" />
                      )}
                    </button>

                    <div
                      className={`about-accordion-body ${isOpen ? 'open' : ''}`}
                      style={{ maxHeight: isOpen ? '200px' : '0px' }}
                    >
                      <p className="about-accordion-text">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
