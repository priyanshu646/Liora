import React, { useState } from 'react';

export default function ServicesCard({ item, onOpenBooking }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLearnMoreToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded((prev) => !prev);
  };

  return (
    <div
      className={`services-card ${isExpanded ? 'card-expanded' : ''}`}
      onClick={() => onOpenBooking && onOpenBooking(item.title)}
    >
      <div className="services-card-avatar-wrapper">
        <img
          src={item.image}
          alt={item.title}
          className="services-card-avatar"
          loading="lazy"
        />
      </div>

      <h4 className="services-card-title">{item.title}</h4>

      <p className={`services-card-desc ${isExpanded ? 'desc-expanded' : 'desc-truncated'}`}>
        {item.description}
      </p>

      <button
        type="button"
        onClick={handleLearnMoreToggle}
        className="services-card-learn-more"
        aria-expanded={isExpanded}
      >
        {isExpanded ? 'Show Less' : 'Learn More'}
      </button>
    </div>
  );
}
