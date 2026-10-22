import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ServicesCard from './ServicesCard';

export default function ServicesCarousel({ category, onOpenBooking }) {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentVisibleIndex, setCurrentVisibleIndex] = useState(0);

  const checkScrollState = useCallback(() => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    setCanScrollLeft(scrollLeft > 10);
    // tolerance of 10px for rounding differences
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Calculate approximate current page/index
    const cardWidth = trackRef.current.firstElementChild
      ? trackRef.current.firstElementChild.getBoundingClientRect().width + 28
      : 280;
    const index = Math.round(scrollLeft / cardWidth);
    setCurrentVisibleIndex(index);
  }, []);

  useEffect(() => {
    checkScrollState();
    const track = trackRef.current;
    if (!track) return;

    track.addEventListener('scroll', checkScrollState, { passive: true });
    window.addEventListener('resize', checkScrollState);

    return () => {
      track.removeEventListener('scroll', checkScrollState);
      window.removeEventListener('resize', checkScrollState);
    };
  }, [checkScrollState, category.items]);

  const scroll = (direction) => {
    if (!trackRef.current) return;
    const container = trackRef.current;
    // Scroll by the visible width or 4 cards width
    const scrollAmount = container.clientWidth * 0.85;

    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const totalItems = category.items.length;
  // Show navigation arrows if there are more than 4 items (or more than fit on screen)
  const hasMultipleItems = totalItems > 4;

  return (
    <section
      id={`service-category-${category.id}`}
      className="services-category-block services-carousel-section"
    >
      {/* Category Header with Title, Count, and Arrow Controls */}
      <div className="services-carousel-header">
        <div className="services-carousel-title-group">
          <h3 className="services-category-title">{category.title}</h3>
          <span className="services-category-count">
            {totalItems} {totalItems === 1 ? 'treatment' : 'treatments'}
          </span>
        </div>

        {/* Carousel Navigation Arrows */}
        <div className="services-carousel-controls">
          <button
            type="button"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`services-carousel-arrow services-arrow-prev ${
              !canScrollLeft ? 'arrow-disabled' : ''
            }`}
            aria-label={`Previous ${category.title} treatments`}
            title="Previous treatments"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`services-carousel-arrow services-arrow-next ${
              !canScrollRight ? 'arrow-disabled' : ''
            }`}
            aria-label={`Next ${category.title} treatments`}
            title="Next treatments"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Carousel Track Container (4 cards upfront on desktop) */}
      <div className="services-carousel-viewport">
        <div
          ref={trackRef}
          className="services-carousel-track"
          role="region"
          aria-label={`${category.title} carousel`}
        >
          {category.items.map((item, index) => (
            <div key={item.id} className="services-carousel-slide">
              <ServicesCard
                item={item}
                onOpenBooking={onOpenBooking}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
