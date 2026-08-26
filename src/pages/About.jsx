import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import brandImg from '../assets/brand_philosophy_1787763058348.jpg';
import heroImg  from '../assets/hero_composition_1787763043698.jpg';

const pillars = [
  { num: '01', title: 'Curation', desc: 'Every piece we stock is selected by hand. We work with makers whose standards match our own.' },
  { num: '02', title: 'Quality', desc: 'We source only from established producers with proven craftsmanship. No compromises on material or finish.' },
  { num: '03', title: 'Hospitality', desc: 'Our deepest roots are in hospitality. We understand what a professional kitchen and a guest-facing table both demand.' },
  { num: '04', title: 'Experience', desc: 'Twenty-five years of experience means we anticipate your needs before you articulate them.' },
];

export default function About() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="about-hero" aria-label="About AURELIA">
        <ScrollReveal>
          <div className="eyebrow" style={{ marginBottom: 20 }}>Est. 1998</div>
          <h1>More than crockery.<br /><em style={{ fontStyle: 'italic', color: 'var(--burgundy)' }}>A way of setting the scene.</em></h1>
          <div className="gold-divider center" />
          <p>
            Twenty-five years of curating the world's finest tableware
            for homes, hotels and memorable occasions.
          </p>
        </ScrollReveal>
      </section>

      {/* Our Story */}
      <section className="about-story" aria-label="Our Story">
        <div className="about-story-img">
          <img src={brandImg} alt="Beautifully set dining table" loading="lazy" />
        </div>
        <div className="about-story-content">
          <ScrollReveal>
            <div className="eyebrow">Our Story</div>
            <h2>From a single store to a curated world.</h2>
            <div className="gold-divider" />
            <p>
              AURELIA began in 1998 with a simple belief: that the objects we
              eat from shape the experience of eating. Our founder, with a
              background in hospitality and a passion for craft, opened a
              small showroom in Pune dedicated to exceptional tableware.
            </p>
            <p>
              Over twenty-five years, that belief has only deepened. We now
              carry over five hundred collections from makers across the world,
              each chosen for its form, its finish, and its ability to make
              a table feel like an occasion.
            </p>
            <p>
              What hasn't changed is the standard. Every piece in our collection
              is something we would be proud to serve from ourselves.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="about-pillars" aria-label="Our philosophy">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <div className="eyebrow">What We Stand For</div>
              <h2>Our Philosophy</h2>
            </div>
          </ScrollReveal>
          <div className="pillars-grid">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.num} delay={i + 1}>
                <div className="pillar-card">
                  <div className="pillar-num">{p.num}</div>
                  <div className="pillar-title">{p.title}</div>
                  <p className="pillar-desc">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: 'var(--charcoal)', padding: 'var(--section-pad)' }} aria-label="AURELIA in numbers">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <ScrollReveal>
              <div className="eyebrow" style={{ color: 'var(--gold)' }}>AURELIA by Numbers</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,3vw,48px)', fontWeight: 400, color: 'var(--ivory)', lineHeight: 1.15, margin: '16px 0 24px' }}>
                A quarter century of beautiful tables.
              </h2>
              <p style={{ fontSize: 14, fontWeight: 300, color: 'rgba(245,241,232,0.55)', lineHeight: 1.8, marginBottom: 32, maxWidth: 440 }}>
                These are not just numbers. Each represents a customer, a collection,
                a meal, and a memory made more beautiful by the right tableware.
              </p>
              <Link to="/products" className="btn-ghost">Explore Products</Link>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                {[
                  { num: '25+', label: 'Years' },
                  { num: '500+', label: 'Collections' },
                  { num: '1000+', label: 'Customers' },
                  { num: '50+', label: 'Hospitality Partners' },
                ].map(s => (
                  <div key={s.label} className="stat-box" style={{ background: 'rgba(245,241,232,0.04)', border: '1px solid rgba(245,241,232,0.06)' }}>
                    <div className="stat-num" style={{ color: 'var(--gold)' }}>{s.num}</div>
                    <div className="stat-label" style={{ color: 'rgba(245,241,232,0.4)' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why AURELIA CTA */}
      <section style={{ padding: 'var(--section-pad)', background: 'var(--ivory)', textAlign: 'center' }}>
        <div className="container">
          <ScrollReveal>
            <div className="eyebrow">Why AURELIA</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px,4vw,64px)', fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.05, margin: '20px 0 24px' }}>
              The table is where life happens.
            </h2>
            <div className="gold-divider center" />
            <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--taupe)', lineHeight: 1.8, maxWidth: 520, margin: '0 auto 40px' }}>
              We believe that beautiful tableware is not a luxury — it is a way
              of showing care for the people you share a meal with.
              That's why AURELIA exists.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/collections" className="btn-primary">Explore Collections</Link>
              <Link to="/contact" className="btn-secondary">Contact Us</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
