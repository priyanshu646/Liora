import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, Calendar, Clock, User, Phone, Mail } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: 'Hydra Glow Infusion',
    date: '',
    time: '11:00 AM',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // simulate auto-close or allow manual close
    }, 3000);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={22} />
        </button>

        {!submitted ? (
          <div>
            <div className="modal-header">
              <span className="modal-eyebrow">
                <Sparkles size={14} className="sparkle-icon" /> Bespoke Consultation
              </span>
              <h3 className="modal-title">Book Your LIORA Experience</h3>
              <p className="modal-desc">
                Select your preferred ritual and our concierge will contact you within 2 business hours to confirm your private sanctuary suite.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label className="form-label">
                  <User size={15} /> Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Natasha Kapoor"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    <Phone size={15} /> Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <Mail size={15} /> Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="natasha@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Preferred Treatment</label>
                <select
                  value={formData.treatment}
                  onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                  className="form-select"
                >
                  <option value="Hydra Glow Infusion">Hydra Glow Infusion (Clinical Skincare)</option>
                  <option value="Collagen Laser Renewal">Collagen Laser Renewal</option>
                  <option value="Cellular Detox Therapy">Cellular Detox Therapy</option>
                  <option value="Sculpt & Lift Architecture">Sculpt & Lift Architecture</option>
                  <option value="Comprehensive Skin Consultation">Comprehensive Skin Consultation</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    <Calendar size={15} /> Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <Clock size={15} /> Time Slot
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="form-select"
                  >
                    <option value="10:00 AM">10:00 AM - 11:30 AM</option>
                    <option value="12:00 PM">12:00 PM - 01:30 PM</option>
                    <option value="02:30 PM">02:30 PM - 04:00 PM</option>
                    <option value="04:30 PM">04:30 PM - 06:00 PM</option>
                    <option value="06:30 PM">06:30 PM - 08:00 PM</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary-green modal-submit-btn"
              >
                Confirm Consultation Request
              </button>
            </form>
          </div>
        ) : (
          <div className="modal-success-state">
            <CheckCircle size={56} className="success-icon" />
            <h3 className="success-title">Consultation Requested</h3>
            <p className="success-desc">
              Thank you, <strong>{formData.name}</strong>. Our clinical concierge at Defence Colony has received your request for <strong>{formData.treatment}</strong>.
            </p>
            <p className="success-sub">We will reach out to you via WhatsApp / Phone shortly.</p>
            <button
              onClick={handleReset}
              className="btn-primary-green"
              style={{ marginTop: '1.5rem' }}
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
