import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { brand } from '../data/brand';

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  if (submitted) {
    return (
      <div className="form-success">
        <div className="check-icon">✦</div>
        <h3>Thank you.</h3>
        <p>We'll be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form className="enquiry-form" onSubmit={e => { e.preventDefault(); setSubmitted(true); }} noValidate>
      <div className="form-group">
        <label htmlFor="ct-name">Name *</label>
        <input id="ct-name" type="text" placeholder="Your name" required
          value={form.name} onChange={set('name')} />
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="ct-email">Email *</label>
          <input id="ct-email" type="email" placeholder="you@example.com" required
            value={form.email} onChange={set('email')} />
        </div>
        <div className="form-group">
          <label htmlFor="ct-phone">Phone</label>
          <input id="ct-phone" type="tel" placeholder="+91 98765 43210"
            value={form.phone} onChange={set('phone')} />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="ct-msg">Message *</label>
        <textarea id="ct-msg" rows={5} placeholder="How can we help you?" required
          value={form.message} onChange={set('message')} />
      </div>
      <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
        Send Message
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <div className="contact-page page-enter">
      <div className="contact-inner">
        {/* Info Panel */}
        <div className="contact-info">
          <ScrollReveal>
            <div className="eyebrow" style={{ color: 'var(--gold)' }}>Get in Touch</div>
            <h1>Visit Our Store</h1>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <div className="contact-detail">
              <div className="label">Address</div>
              <div className="value">{brand.address}</div>
            </div>

            <div className="contact-detail">
              <div className="label">Phone</div>
              <div className="value">
                <a href={`tel:${brand.phone}`}>{brand.phone}</a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="label">Email</div>
              <div className="value">
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="label">WhatsApp</div>
              <div className="value">
                <a
                  href={`https://wa.me/${brand.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hi, I would like to know more about AURELIA tableware.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp →
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="label">Opening Hours</div>
              <div className="value">{brand.hours}</div>
            </div>

            {/* Map placeholder */}
            <div className="map-placeholder">
              <div>
                <div style={{ fontSize: 28, marginBottom: 8 }}>📍</div>
                <div>123 Luxury Avenue<br />Pune, Maharashtra</div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Contact form */}
        <div className="contact-form-area">
          <ScrollReveal>
            <div className="eyebrow">Send a Message</div>
            <h2>How Can We Help?</h2>
            <div className="gold-divider" />
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
