import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import Philosophy from './components/Philosophy';
import WhatWeDo from './components/WhatWeDo';
import ClinicGallery from './components/ClinicGallery';
import Testimonials from './components/Testimonials';
import SanctuaryBanner from './components/SanctuaryBanner';
import ExperienceBanner from './components/ExperienceBanner';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import ContactPage from './components/ContactPage';
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/AboutPage';

export default function App() {
  // Defaults to 'home' page
  const [currentPage, setCurrentPage] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  useEffect(() => {
    // Check initial hash if user loaded with #home, #services, #contact, or #about
    const initialHash = window.location.hash.replace('#', '').toLowerCase();
    if (initialHash === 'about') {
      setCurrentPage('about');
    } else if (initialHash === 'services') {
      setCurrentPage('services');
    } else if (initialHash === 'contact') {
      setCurrentPage('contact');
    } else if (initialHash === 'home' || initialHash === 'franchise') {
      setCurrentPage('home');
    }

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'about') {
        setCurrentPage('about');
      } else if (hash === 'services') {
        setCurrentPage('services');
      } else if (hash === 'contact') {
        setCurrentPage('contact');
      } else if (hash === 'home' || hash === 'franchise') {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page, sectionId) => {
    setCurrentPage(page);
    window.location.hash = `#${sectionId || page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (sectionId && page === 'home') {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div className="liora-app">
      {/* Navigation Bar */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      <main>
        {currentPage === 'about' ? (
          <AboutPage onOpenBooking={handleOpenBooking} />
        ) : currentPage === 'contact' ? (
          <ContactPage onOpenBooking={handleOpenBooking} />
        ) : currentPage === 'services' ? (
          <ServicesPage onOpenBooking={handleOpenBooking} />
        ) : (
          <>
            {/* 1. Hero Section */}
            <Hero onOpenBooking={handleOpenBooking} />

            {/* 2. Who We Are Section */}
            <WhoWeAre onOpenBooking={handleOpenBooking} />

            {/* 3. Our Philosophy Section */}
            <Philosophy onOpenBooking={handleOpenBooking} />

            {/* 4. What We Do Section */}
            <WhatWeDo onOpenBooking={handleOpenBooking} />

            {/* 5. Luxury Clinic Interior Gallery */}
            <ClinicGallery />

            {/* 6. Client Testimonials Section */}
            <Testimonials />

            {/* 7. Sanctuary Banner ("A moment to pause. A ritual to restore.") */}
            <SanctuaryBanner onOpenBooking={handleOpenBooking} />

            {/* 8. Pre-Footer Experience Banner */}
            <ExperienceBanner onOpenBooking={handleOpenBooking} />
          </>
        )}
      </main>

      {/* 9. Site Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Consultation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
      />
    </div>
  );
}
