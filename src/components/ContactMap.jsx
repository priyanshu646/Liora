import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink, Layers, ZoomIn, ZoomOut, Compass } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function ContactMap() {
  const [isLiveMap, setIsLiveMap] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [showTooltip, setShowTooltip] = useState(true);

  const { map } = clinicData.contactPage.info;

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.2, 1.8));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.2, 0.8));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  return (
    <div className="contact-map-wrapper">
      <div className="contact-map-container" id="clinic-location-map">
        {/* Toggle between Exact PDF Styled Map and Live Google Map */}
        {isLiveMap ? (
          <iframe
            title="Liora Luxee Wellness Defence Colony Map"
            src={map.embedUrl}
            className="contact-map-iframe"
            loading="lazy"
            allowFullScreen
          />
        ) : (
          <div className="contact-map-viewport">
            <div
              className="contact-map-image-layer"
              style={{
                transform: `scale(${zoomLevel})`,
                transformOrigin: '53% 40%',
              }}
            >
              <img
                src={map.staticMapImg}
                alt="Map of Defence Colony New Delhi showing Liora Luxee Wellness location"
                className="contact-map-image"
              />

              {/* Interactive Location Pin on Defence Colony */}
              <div
                className="contact-map-pin-hotspot"
                onClick={() => setShowTooltip(!showTooltip)}
                title="Liora Luxee Wellness - Defence Colony"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setShowTooltip(!showTooltip);
                  }
                }}
              >
                {/* Radar pulse rings */}
                <span className="pin-pulse-ring ring-1"></span>
                <span className="pin-pulse-ring ring-2"></span>

                {/* Pin Head */}
                <div className="pin-marker-glow">
                  <MapPin className="pin-marker-icon" size={28} />
                </div>
              </div>

              {/* Clinic Detail Popover / Tooltip */}
              {showTooltip && (
                <div className="contact-map-tooltip">
                  <div className="tooltip-header">
                    <span className="tooltip-badge">Clinic Location</span>
                    <button
                      className="tooltip-close-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowTooltip(false);
                      }}
                      aria-label="Close popup"
                    >
                      ×
                    </button>
                  </div>
                  <h4 className="tooltip-title">LIORA LUXEE WELLNESS</h4>
                  <p className="tooltip-address">{map.address}</p>
                  <div className="tooltip-actions">
                    <a
                      href={map.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tooltip-btn-directions"
                    >
                      <Navigation size={13} />
                      <span>Get Directions</span>
                    </a>
                    <a
                      href="tel:+919999900000"
                      className="tooltip-btn-call"
                    >
                      <span>Call Us</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Map Top Bar Controls */}
        <div className="contact-map-controls-top">
          <button
            onClick={() => setIsLiveMap(!isLiveMap)}
            className="map-control-btn map-mode-toggle"
            title={isLiveMap ? "Switch to Styled Map" : "Switch to Live Interactive Map"}
          >
            <Layers size={15} />
            <span>{isLiveMap ? "Styled View" : "Live Map"}</span>
          </button>
        </div>

        {/* Map Zoom Controls (on Styled view) */}
        {!isLiveMap && (
          <div className="contact-map-controls-right">
            <button
              onClick={handleZoomIn}
              className="map-control-btn icon-only"
              title="Zoom In"
              aria-label="Zoom in"
            >
              <ZoomIn size={16} />
            </button>
            <button
              onClick={handleZoomOut}
              className="map-control-btn icon-only"
              title="Zoom Out"
              aria-label="Zoom out"
            >
              <ZoomOut size={16} />
            </button>
            <button
              onClick={handleResetZoom}
              className="map-control-btn icon-only"
              title="Reset View"
              aria-label="Reset view"
            >
              <Compass size={16} />
            </button>
          </div>
        )}

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
