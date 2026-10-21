import React from 'react';
import ContactHero from './ContactHero';
import ContactFormSection from './ContactFormSection';
import ContactInfoSection from './ContactInfoSection';
import ContactFAQSection from './ContactFAQSection';
import ContactDualCards from './ContactDualCards';
import ExperienceBanner from './ExperienceBanner';

export default function ContactPage({ onOpenBooking }) {
  return (
    <div className="contact-page-wrapper">
      {/* 1. Contact Hero */}
      <ContactHero />

      {/* 2. Have questions? Chat with our team & Form */}
      <ContactFormSection />

      {/* 3. Contact Liora Luxee Wellness (3 Info Cards & Location Map) */}
      <ContactInfoSection />

      {/* 4. FAQs: Immerse yourself in luxury & Accordion */}
      <ContactFAQSection />

      {/* 5. Dual Consultation & Follow Us Cards */}
      <ContactDualCards onOpenBooking={onOpenBooking} />

      {/* 6. Begin Your LIORA Experience Banner */}
      <ExperienceBanner onOpenBooking={onOpenBooking} />
    </div>
  );
}
