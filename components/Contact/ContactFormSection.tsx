'use client';

import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';

const FORMSPREE_ID = 'mjgalopz';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactFormSection() {
  const ref = useReveal();
  const [status, setStatus] = useState<FormStatus>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="contact-section pop-reveal">
      <div className="contact-layout">

        {/* LEFT — Form */}
        <div className="contact-form-side">
          <h2 className="contact-heading">
            Connect With Airiv Infotech To Explore How Our
            Technology Services Can Support Your Business Goals.
          </h2>

          {status === 'success' ? (
            <div className="form-success">
              <p>Thank you! Your message has been sent. We&apos;ll be in touch shortly.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label className="form-label">First Name *</label>
                  <input type="text" name="firstName" placeholder="John" required />
                </div>
                <div className="form-field">
                  <label className="form-label">Last Name *</label>
                  <input type="text" name="lastName" placeholder="Smith" required />
                </div>
              </div>

              <div className="form-field">
                <label className="form-label">Email *</label>
                <input type="email" name="email" placeholder="john@company.com" required />
              </div>

              <div className="form-field">
                <label className="form-label">Subject *</label>
                <input type="text" name="subject" placeholder="How can we help?" required />
              </div>

              <div className="form-field">
                <label className="form-label">Phone Number</label>
                <input type="text" name="phone" placeholder="+1 (555) 000-0000" />
              </div>

              <div className="form-field">
                <label className="form-label">Message</label>
                <textarea name="message" placeholder="Tell us about your project or challenge..." rows={5}></textarea>
              </div>

              <label className="checkboxRow">
                <input type="checkbox" required />
                <span>I agree to the privacy policy and consent to being contacted.</span>
              </label>

              {status === 'error' && (
                <p className="form-error">Something went wrong. Please try again.</p>
              )}

              <button type="submit" className="btn-primary submit-btn" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>

        {/* RIGHT — Map + Address */}
        <div className="contact-map-side">
          <div className="contact-map-card">
            <div className="contact-map-header">
              <div className="contact-map-pin">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="contact-map-label">Our Office</p>
                <p className="contact-map-address">
                  10520 Chapel Hill Rd – 240<br />
                  Morrisville, North Carolina 27560
                </p>
              </div>
            </div>

            <div className="contact-map-embed">
              <iframe
                title="Airiv Infotech Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.1!2d-78.8269!3d35.8326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acf4b2e1c3e1d1%3A0x1!2s10520+Chapel+Hill+Rd+%23240%2C+Morrisville%2C+NC+27560!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="contact-map-actions">
              <a
                href="https://maps.google.com/?q=10520+Chapel+Hill+Rd+240+Morrisville+NC+27560"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-map-btn"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
