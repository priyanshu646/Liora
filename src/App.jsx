import React, { useState } from 'react';
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

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  return (
    <div className="liora-app">
      {/* Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main>
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
      </main>

      {/* 9. Site Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Interactive Consultation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
      />
    </div>
  );
}
