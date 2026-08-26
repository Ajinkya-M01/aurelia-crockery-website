import { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const businessCategories = [
  {
    icon: '🏨',
    title: 'Hotels & Restaurants',
    desc: 'From boutique properties to five-star establishments, we supply premium tableware that elevates the dining experience and reflects your brands standards.',
  },
  {
    icon: '☕',
    title: 'Cafés & Hospitality',
    desc: 'Beautiful tableware isnt just for fine dining. Our café range offers refined pieces that make every cup of coffee feel considered.',
  },
  {
    icon: '💍',
    title: 'Weddings & Events',
    desc: 'We work with event planners and couples to source the perfect tableware for weddings, receptions and special occasions — in any quantity.',
  },
  {
    icon: '🎁',
    title: 'Corporate Gifting',
    desc: 'Premium crockery makes an exceptional corporate gift. We offer curated sets with custom packaging, delivered on time and at scale.',
  },
];

function BusinessEnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', company: '', phone: '', email: '',
    type: '', quantity: '', message: '',
  });
  const set = key => e => setForm(f => ({ ...f, [key]: e.target.value }));

  if (submitted) {
    return (
      <div className="form-success" style={{ color: 'var(--ivory)' }}>
        <div className="check-icon">✦</div>
        <h3 style={{ color: 'var(--ivory)' }}>Thank you.</h3>
        <p style={{ color: 'rgba(245,241,232,0.6)' }}>Our team will get in touch shortly.</p>
      </div>
    );
  }

  return (
    <form className="enquiry-form" onSubmit={e => { e.preventDefault(); setSubmitted(true); }} noValidate
      style={{ '--ivory': '#F5F1E8' }}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="biz-name" style={{ color: 'rgba(245,241,232,0.5)' }}>Name *</label>
          <input id="biz-name" type="text" placeholder="Your name" required
            value={form.name} onChange={set('name')}
            style={{ background: 'rgba(245,241,232,0.06)', borderColor: 'rgba(245,241,232,0.12)', color: 'var(--ivory)' }} />
        </div>
        <div className="form-group">
          <label htmlFor="biz-company" style={{ color: 'rgba(245,241,232,0.5)' }}>Company</label>
          <input id="biz-company" type="text" placeholder="Business name"
            value={form.company} onChange={set('company')}
            style={{ background: 'rgba(245,241,232,0.06)', borderColor: 'rgba(245,241,232,0.12)', color: 'var(--ivory)' }} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="biz-phone" style={{ color: 'rgba(245,241,232,0.5)' }}>Phone *</label>
          <input id="biz-phone" type="tel" placeholder="+91 98765 43210" required
            value={form.phone} onChange={set('phone')}
            style={{ background: 'rgba(245,241,232,0.06)', borderColor: 'rgba(245,241,232,0.12)', color: 'var(--ivory)' }} />
        </div>
        <div className="form-group">
          <label htmlFor="biz-email" style={{ color: 'rgba(245,241,232,0.5)' }}>Email *</label>
          <input id="biz-email" type="email" placeholder="you@company.com" required
            value={form.email} onChange={set('email')}
            style={{ background: 'rgba(245,241,232,0.06)', borderColor: 'rgba(245,241,232,0.12)', color: 'var(--ivory)' }} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="biz-type" style={{ color: 'rgba(245,241,232,0.5)' }}>Business Type</label>
          <select id="biz-type" value={form.type} onChange={set('type')}
            style={{ background: 'rgba(245,241,232,0.06)', borderColor: 'rgba(245,241,232,0.12)', color: form.type ? 'var(--ivory)' : 'rgba(245,241,232,0.3)' }}>
            <option value="">Select type</option>
            <option>Hotel / Restaurant</option>
            <option>Café / Bistro</option>
            <option>Wedding / Events</option>
            <option>Corporate</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="biz-qty" style={{ color: 'rgba(245,241,232,0.5)' }}>Quantity Required</label>
          <input id="biz-qty" type="text" placeholder="e.g. 100 sets"
            value={form.quantity} onChange={set('quantity')}
            style={{ background: 'rgba(245,241,232,0.06)', borderColor: 'rgba(245,241,232,0.12)', color: 'var(--ivory)' }} />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="biz-msg" style={{ color: 'rgba(245,241,232,0.5)' }}>Message</label>
        <textarea id="biz-msg" rows={4} placeholder="Tell us about your requirement…"
          value={form.message} onChange={set('message')}
          style={{ background: 'rgba(245,241,232,0.06)', borderColor: 'rgba(245,241,232,0.12)', color: 'var(--ivory)' }} />
      </div>
      <button type="submit" className="btn-gold" style={{ alignSelf: 'flex-start' }}>
        Send Enquiry →
      </button>
    </form>
  );
}

export default function ForBusiness() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="business-page-hero" aria-label="For Business hero">
        <ScrollReveal>
          <div className="eyebrow" style={{ marginBottom: 20 }}>For Business</div>
          <h1>Built for businesses<br />that care about the table.</h1>
          <p>
            Premium tableware for hotels, restaurants, cafés, weddings
            and corporate gifting. Supplied at scale, without compromise.
          </p>
        </ScrollReveal>
      </section>

      {/* Categories */}
      <section className="business-categories" aria-label="Business categories">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <div className="eyebrow">What We Offer</div>
              <h2>Tableware for every business need.</h2>
            </div>
          </ScrollReveal>
          <div className="business-category-grid">
            {businessCategories.map((cat, i) => (
              <ScrollReveal key={cat.title} delay={i + 1}>
                <div className="business-cat-card">
                  <div className="business-cat-icon">{cat.icon}</div>
                  <h3 className="business-cat-title">{cat.title}</h3>
                  <p className="business-cat-desc">{cat.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why AURELIA for business */}
      <section style={{ padding: 'var(--section-pad)', background: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <ScrollReveal>
              <div className="eyebrow">Why AURELIA</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,3vw,48px)', fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.15, margin: '16px 0 24px' }}>
                The tableware partner your business deserves.
              </h2>
              <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--taupe)', lineHeight: 1.8, marginBottom: 16 }}>
                We understand that businesses need reliability as much as beauty.
                That's why we offer consistent quality, bulk availability,
                and a dedicated account team for hospitality partners.
              </p>
              <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--taupe)', lineHeight: 1.8, marginBottom: 32 }}>
                Our collections are designed to last through commercial dishwasher
                cycles without losing their finish, and our pricing reflects the
                volume you need.
              </p>
              <Link to="/contact" className="btn-secondary">
                Get in Touch →
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                {[
                  { num: '50+', label: 'Hotel Partners' },
                  { num: '200+', label: 'Events Catered' },
                  { num: '10,000+', label: 'Pieces Supplied' },
                  { num: '48hr', label: 'Typical Response' },
                ].map(s => (
                  <div key={s.label} className="stat-box" style={{ background: 'var(--ivory)' }}>
                    <div className="stat-num">{s.num}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Business Enquiry Form */}
      <section className="business-enquiry" aria-label="Business enquiry">
        <div className="container">
          <ScrollReveal>
            <div className="eyebrow">Get In Touch</div>
            <h2>Discuss Your Requirement</h2>
            <p>
              Complete the form below and our business team will
              respond within 48 hours.
            </p>
          </ScrollReveal>
          <div className="business-form-wrap">
            <ScrollReveal delay={1}>
              <BusinessEnquiryForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
