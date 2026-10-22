import React, { useState, useEffect, useRef, useCallback } from 'react';
import { clinicData } from '../data/clinicData';
import ServicesHero from './ServicesHero';
import ServicesHeader from './ServicesHeader';
import ServicesCarousel from './ServicesCarousel';
import ServicesTripleCards from './ServicesTripleCards';
import ExperienceBanner from './ExperienceBanner';

export default function ServicesPage({ onOpenBooking }) {
  const { categories } = clinicData.servicesPage;
  const [activeCategory, setActiveCategory] = useState('laser');
  const isClickingRef = useRef(false);
  const clickTimerRef = useRef(null);

  const handleSelectCategory = useCallback((categoryId) => {
    setActiveCategory(categoryId);
    isClickingRef.current = true;
    if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
    clickTimerRef.current = setTimeout(() => {
      isClickingRef.current = false;
    }, 850);
  }, []);

  useEffect(() => {
    // If the user starts scrolling manually via mousewheel or touch, cancel clicking lock immediately
    const cancelClickLock = () => {
      isClickingRef.current = false;
      if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
    };

    window.addEventListener('wheel', cancelClickLock, { passive: true });
    window.addEventListener('touchmove', cancelClickLock, { passive: true });

    return () => {
      window.removeEventListener('wheel', cancelClickLock);
      window.removeEventListener('touchmove', cancelClickLock);
      if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
    };
  }, []);

  useEffect(() => {
    const categoryIds = ['laser', 'skin', 'hair', 'body', 'injectables', 'wellness'];
    let ticking = false;

    const handleScroll = () => {
      if (isClickingRef.current) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.pageYOffset || document.documentElement.scrollTop;

          // If the user is scrolled near top (Hero banner or intro header), reset to 'laser'
          if (scrollY < 420) {
            setActiveCategory('laser');
            ticking = false;
            return;
          }

          // If user has reached the bottom of the page, keep the last category active
          const scrollPosition = window.innerHeight + scrollY;
          if (scrollPosition >= document.documentElement.scrollHeight - 80) {
            setActiveCategory('wellness');
            ticking = false;
            return;
          }

          // Trigger line below the fixed navbar
          const triggerPoint = 160;
          let currentCat = 'laser';

          for (const id of categoryIds) {
            const el = document.getElementById(`service-category-${id}`);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= triggerPoint) {
                currentCat = id;
              }
            }
          }

          setActiveCategory((prev) => (prev !== currentCat ? currentCat : prev));
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="services-page-wrapper">
      {/* 1. Hero Banner: Man receiving laser treatment */}
      <ServicesHero />

      {/* 2. Intro Section: Our Services heading and filter pills */}
      <ServicesHeader
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* 3. Categorized Treatment Cards with 4-upfront Carousels & Arrow Controls */}
      <div className="services-categories-container container">
        {categories.map((cat) => (
          <ServicesCarousel
            key={cat.id}
            category={cat}
            onOpenBooking={onOpenBooking}
          />
        ))}
      </div>

      {/* 4. Triple Cards: Not sure where to start / Prefer to talk / Follow Us */}
      <ServicesTripleCards onOpenBooking={onOpenBooking} />

      {/* 5. Pre-Footer Experience Banner */}
      <ExperienceBanner onOpenBooking={onOpenBooking} />
    </div>
  );
}
