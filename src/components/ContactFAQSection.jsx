import React, { useState } from 'react';
import { clinicData } from '../data/clinicData';
import { ChevronUp, ChevronDown } from 'lucide-react';

export default function ContactFAQSection() {
  const { faqs } = clinicData.contactPage;
  // Item 1 is open by default as shown in PDF screenshot
  const [openItems, setOpenItems] = useState({ 1: true });

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="contact-faq-section" id="faqs">
      <div className="container contact-faq-container">
        {/* Left Column: Organic Arch/Egg Portrait Graphic */}
        <div className="contact-faq-image-col">
          <div className="faq-illustration-wrapper">
            <img
              src={faqs.image}
              alt="Immerse yourself in luxury at Liora Luxee Wellness"
              className="faq-illustration-img"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Column: FAQs & Accordion */}
        <div className="contact-faq-content-col">
          <div className="faq-header">
            <span className="faq-eyebrow">{faqs.eyebrow}</span>
            <h2 className="faq-title">{faqs.title}</h2>
          </div>

          <div className="faq-accordion-list">
            {faqs.items.map((item) => {
              const isOpen = !!openItems[item.id];
              return (
                <div
                  key={item.id}
                  className={`faq-accordion-item ${isOpen ? 'open' : ''}`}
                >
                  <button
                    className="faq-accordion-trigger"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    id={`faq-trigger-${item.id}`}
                  >
                    <span className="faq-question-text">{item.question}</span>
                    <span className="faq-chevron-icon">
                      {isOpen ? (
                        <ChevronUp size={20} strokeWidth={1.8} />
                      ) : (
                        <ChevronDown size={20} strokeWidth={1.8} />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      className="faq-accordion-body"
                      id={`faq-body-${item.id}`}
                    >
                      <p className="faq-answer-text">{item.answer}</p>
                    </div>
                  )}

                  <div className="faq-divider-line" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
