import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ServicesCard from './ServicesCard';

export default function ServicesCarousel({ category, onOpenBooking }) {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasMovedRef = useRef(false);

  const checkScrollState = useCallback(() => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  useEffect(() => {
    checkScrollState();
    const track = trackRef.current;
    if (!track) return;

    track.addEventListener('scroll', checkScrollState, { passive: true });
    window.addEventListener('resize', checkScrollState);

    let wheelTimeout = null;
    // Convert vertical mouse wheel into horizontal scroll when over carousel
    const handleWheel = (e) => {
      if (track.scrollWidth <= track.clientWidth) return;
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        const { scrollLeft, scrollWidth, clientWidth } = track;
        const atStart = scrollLeft <= 0 && e.deltaY < 0;
        const atEnd = scrollLeft >= scrollWidth - clientWidth - 2 && e.deltaY > 0;
        if (!atStart && !atEnd) {
          e.preventDefault();
          track.scrollLeft += e.deltaY;

          clearTimeout(wheelTimeout);
          wheelTimeout = setTimeout(() => {
            if (!track) return;
            const slide = track.querySelector('.services-carousel-slide');
            if (slide) {
              const gap = parseFloat(window.getComputedStyle(track).gap) || 36;
              const cardStep = slide.offsetWidth + gap;
              const targetIndex = Math.round(track.scrollLeft / cardStep);
              track.scrollTo({ left: targetIndex * cardStep, behavior: 'smooth' });
            }
          }, 120);
        }
      }
    };

    track.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      clearTimeout(wheelTimeout);
      track.removeEventListener('scroll', checkScrollState);
      track.removeEventListener('wheel', handleWheel);
      window.removeEventListener('resize', checkScrollState);
    };
  }, [checkScrollState, category.items]);

  const scroll = (direction) => {
    if (!trackRef.current) return;
    const container = trackRef.current;
    const slide = container.querySelector('.services-carousel-slide');
    if (!slide) return;

    const gap = parseFloat(window.getComputedStyle(container).gap) || 36;
    const cardStep = slide.offsetWidth + gap;
    const currentScroll = container.scrollLeft;
    const currentIndex = Math.round(currentScroll / cardStep);
    const targetIndex = direction === 'left' ? Math.max(0, currentIndex - 1) : currentIndex + 1;

    container.scrollTo({
      left: targetIndex * cardStep,
      behavior: 'smooth',
    });
  };

  const handleMouseDown = (e) => {
    if (!trackRef.current) return;
    if (e.target.closest('button')) return;
    isDraggingRef.current = true;
    hasMovedRef.current = false;
    startXRef.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeftRef.current = trackRef.current.scrollLeft;
    trackRef.current.classList.add('is-dragging');
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.25;
    if (Math.abs(walk) > 4) {
      hasMovedRef.current = true;
    }
    trackRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (!trackRef.current) return;
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      trackRef.current.classList.remove('is-dragging');

      const slide = trackRef.current.querySelector('.services-carousel-slide');
      if (slide) {
        const gap = parseFloat(window.getComputedStyle(trackRef.current).gap) || 36;
        const cardStep = slide.offsetWidth + gap;
        const targetIndex = Math.round(trackRef.current.scrollLeft / cardStep);
        trackRef.current.scrollTo({ left: targetIndex * cardStep, behavior: 'smooth' });
      }
    }
  };

  const handleClickCapture = (e) => {
    if (hasMovedRef.current) {
      e.stopPropagation();
      hasMovedRef.current = false;
    }
  };

  return (
    <section
      id={`service-category-${category.id}`}
      className="services-category-block services-carousel-section"
    >
      {/* Category Header with Title */}
      <div className="services-carousel-header">
        <div className="services-carousel-title-group">
          <h3 className="services-category-title">{category.title}</h3>
        </div>
      </div>

      {/* Carousel Wrapper with an arrow on each side */}
      <div className="services-carousel-wrapper">
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
          <ChevronLeft size={30} strokeWidth={1.8} />
        </button>

        <div className="services-carousel-viewport">
          <div
            ref={trackRef}
            className="services-carousel-track"
            role="region"
            aria-label={`${category.title} carousel`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            onClickCapture={handleClickCapture}
          >
            {category.items.map((item) => (
              <div key={item.id} className="services-carousel-slide">
                <ServicesCard
                  item={item}
                  onOpenBooking={onOpenBooking}
                />
              </div>
            ))}
          </div>
        </div>

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
          <ChevronRight size={30} strokeWidth={1.8} />
        </button>
      </div>
    </section>
  );
}
