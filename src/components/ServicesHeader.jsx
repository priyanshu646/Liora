import React from 'react';
import { clinicData } from '../data/clinicData';

export default function ServicesHeader({ activeCategory, onSelectCategory }) {
  const { header } = clinicData.servicesPage;
  // The 6 pills from the PDF
  const filterTabs = [
    { id: 'laser', label: 'Laser' },
    { id: 'skin', label: 'Skin' },
    { id: 'hair', label: 'Hair' },
    { id: 'body', label: 'Body' },
    { id: 'injectables', label: 'Injectables' },
    { id: 'wellness', label: 'Wellness' },
  ];

  const handleTabClick = (categoryId) => {
    onSelectCategory(categoryId);
    const element = document.getElementById(`service-category-${categoryId}`);
    if (element) {
      const yOffset = -90; // account for fixed navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="services-intro-section">
      <div className="container services-intro-container">
        <span className="services-intro-subtitle">{header.subtitle}</span>
        <h2 className="services-intro-title">{header.title}</h2>
        <p className="services-intro-desc">{header.description}</p>

        {/* 6 Category Filter Pills */}
        <div className="services-tabs-bar" role="tablist" aria-label="Treatment categories">
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => handleTabClick(tab.id)}
                className={`services-pill-tab ${isActive ? 'active-pill' : ''}`}
                id={`pill-tab-${tab.id}`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
