import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function ContactMap() {
  const { map } = clinicData.contactPage.info;

  return (
    <div className="contact-map-wrapper">
      <div className="contact-map-container" id="clinic-location-map">
        {/* Live Interactive Google Map */}
        <iframe
          title="Liora Luxee Wellness Defence Colony Map"
          src={map.embedUrl}
          className="contact-map-iframe"
          loading="lazy"
          allowFullScreen
        />

        {/* Map Bottom Information Strip */}
        <div className="contact-map-bottom-bar">
          <div className="map-bottom-info">
            <MapPin size={15} className="bottom-pin-icon" />
            <span className="bottom-location-text">
              D-28, Defence Colony, New Delhi
            </span>
          </div>
          <a
            href={map.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="map-bottom-link"
          >
            <span>Open in Google Maps</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}
