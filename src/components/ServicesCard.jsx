import React from 'react';

export default function ServicesCard({ item, onOpenBooking }) {
  return (
    <div className="services-card">
      <div className="services-card-avatar-wrapper">
        <img
          src={item.image}
          alt={item.title}
          className="services-card-avatar"
          loading="lazy"
        />
      </div>

      <h4 className="services-card-title">{item.title}</h4>

      <p className="services-card-desc">
        {item.description}
      </p>

      <button
        type="button"
        onClick={() => onOpenBooking && onOpenBooking(item.title)}
        className="services-card-learn-more"
      >
        Learn More
      </button>
    </div>
  );
}
