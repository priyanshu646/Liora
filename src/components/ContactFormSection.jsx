import React, { useState } from 'react';
import { clinicData } from '../data/clinicData';
import { CheckCircle2, Send } from 'lucide-react';

export default function ContactFormSection() {
  const { chat } = clinicData.contactPage;

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        surname: '',
        email: '',
        phone: '',
        message: '',
      });
      setTimeout(() => setSubmitted(false), 6000);
    }, 700);
  };

  return (
    <section className="contact-chat-section">
      <div className="container contact-chat-container">
        {/* Left: Chat Heading */}
        <div className="contact-chat-header-col">
          <span className="contact-chat-eyebrow">{chat.eyebrow}</span>
          <h2 className="contact-chat-title">{chat.title}</h2>
        </div>

        {/* Right: Contact Form */}
        <div className="contact-form-col">
          {submitted && (
            <div className="contact-form-success-banner" role="alert">
              <CheckCircle2 size={18} />
              <span>Thank you! Your message has been received. Our wellness team will contact you shortly.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form" id="contact-team-form">
            {/* Row 1: Name & Surname */}
            <div className="form-row-dual">
              <div className="form-field-wrap">
                <input
                  type="text"
                  name="name"
                  id="contact-name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="contact-pill-input"
                  required
                />
              </div>
              <div className="form-field-wrap">
                <input
                  type="text"
                  name="surname"
                  id="contact-surname"
                  value={formData.surname}
                  onChange={handleChange}
                  placeholder="Surname"
                  className="contact-pill-input"
                  required
                />
              </div>
            </div>

            {/* Row 2: Email & Phone Number */}
            <div className="form-row-dual">
              <div className="form-field-wrap">
                <input
                  type="email"
                  name="email"
                  id="contact-email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="contact-pill-input"
                  required
                />
              </div>
              <div className="form-field-wrap">
                <input
                  type="tel"
                  name="phone"
                  id="contact-phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="contact-pill-input"
                  required
                />
              </div>
            </div>

            {/* Row 3: Message Textarea */}
            <div className="form-row-single">
              <div className="form-field-wrap">
                <textarea
                  name="message"
                  id="contact-message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="contact-textarea"
                  required
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="form-submit-wrap">
              <button
                type="submit"
                className="contact-submit-btn"
                id="contact-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <span>Submit</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
