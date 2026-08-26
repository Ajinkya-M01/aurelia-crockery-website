import { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import ProductCard from '../components/ProductCard';
import { brand } from '../data/brand';
import { collections } from '../data/collections';
import { products } from '../data/products';
import heroImg from '../assets/hero_composition_1787763043698.jpg';
import brandImg from '../assets/brand_philosophy_1787763058348.jpg';

// ── Editorial articles (demo modal content) ──────────────────
const articles = [
  {
    id: 1,
    tag: 'Table Setting',
    title: 'A Table Worth Gathering Around',
    excerpt: 'The art of setting a beautiful table is an act of hospitality. It tells your guests they are worth the effort.',
    body: `A beautifully set table is one of the simplest and most meaningful ways to show care. It signals to your guests that they matter — that you have thought about them before they even arrived.\n\nAt AURELIA, we believe that every meal is an opportunity. Whether it's a quiet weekday dinner or a festive gathering, the right tableware transforms the experience. Choose pieces that speak to your aesthetic and let them do the storytelling.\n\nStart with a foundation: a clean tablecloth or bare wood, depending on your mood. Layer dinner plates, side plates and a beautifully folded napkin. Add glassware and simple centrepieces — fresh flowers, a candle, or herbs from your garden. The result is a table worth gathering around.`,
    image: heroImg,
  },
  {
    id: 2,
    tag: 'Buying Guide',
    title: 'Choosing the Right Dinnerware',
    excerpt: 'From porcelain to bone china — a guide to understanding tableware materials and what they mean for your table.',
    body: `Choosing tableware can be daunting. The market is full of options, and the terminology — porcelain, bone china, ceramic, stoneware — can be confusing.\n\nHere's a simple guide:\n\nPorcelain is fired at very high temperatures, making it strong, non-porous and brilliantly white. It's ideal for formal dining and everyday use.\n\nBone china contains bone ash, giving it its characteristic translucency and delicate appearance. It's the finest and most prestigious tableware material in the world.\n\nCeramic and stoneware are more casual, often with a handcrafted feel, and are excellent for everyday use.\n\nAt AURELIA, every collection is curated for both form and function. We recommend starting with a core dinner set and building your collection piece by piece.`,
    image: brandImg,
  },
  {
    id: 3,
    tag: 'Inspiration',
    title: 'Setting the Scene for Celebrations',
    excerpt: 'How to create a celebratory table that feels special without feeling overcrowded or overdone.',
    body: `A celebration calls for something special — but special doesn't have to mean cluttered. The most memorable festive tables are those with a clear point of view, generous candlelight and tableware that elevates every dish it holds.\n\nStart with your anchor: a set of fine dinner plates with a gold rim speaks elegance immediately. Build outward with crystal glasses and simple linen napkins.\n\nFor centrepieces, opt for seasonal flowers in a single neutral vase. Let the tableware take the lead — it's the constant across every course. The food, the company and the light do the rest.\n\nAt AURELIA, our Festive collection is designed exactly for these moments.`,
    image: heroImg,
  },
];

// ── Enquiry form component (reusable) ────────────────────────
function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', business: '', phone: '', email: '',
    requirement: '', quantity: '', message: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="form-success">
        <div className="check-icon">✦</div>
        <h3>Thank you.</h3>
        <p>Our team will get in touch shortly.</p>
      </div>
    );
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="enq-name">Name *</label>
          <input id="enq-name" type="text" placeholder="Your name" required
            value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
        </div>
        <div className="form-group">
          <label htmlFor="enq-business">Business Name</label>
          <input id="enq-business" type="text" placeholder="Company / Store"
            value={form.business} onChange={e => setForm({...form, business: e.target.value})} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="enq-phone">Phone *</label>
          <input id="enq-phone" type="tel" placeholder="+91 98765 43210" required
            value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
        </div>
        <div className="form-group">
          <label htmlFor="enq-email">Email *</label>
          <input id="enq-email" type="email" placeholder="you@example.com" required
            value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="enq-req">Requirement</label>
          <select id="enq-req" value={form.requirement}
            onChange={e => setForm({...form, requirement: e.target.value})}>
            <option value="">Select type</option>
            <option>Dinnerware</option>
            <option>Tea & Coffee</option>
            <option>Serveware</option>
            <option>Corporate Gifting</option>
            <option>Wedding / Event</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="enq-qty">Quantity</label>
          <input id="enq-qty" type="text" placeholder="e.g. 50 sets"
            value={form.quantity} onChange={e => setForm({...form, quantity: e.target.value})} />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="enq-msg">Message</label>
        <textarea id="enq-msg" rows={4} placeholder="Tell us about your requirement…"
          value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
      </div>
      <button type="submit" className="btn-primary" style={{alignSelf:'flex-start'}}>
        Send Enquiry
      </button>
    </form>
  );
}

// ── Article Modal ─────────────────────────────────────────────
function ArticleModal({ article, onClose }) {
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-box">
        <button className="modal-close" onClick={onClose} aria-label="Close article">✕</button>
        <div className="eyebrow">{article.tag}</div>
        <h2>{article.title}</h2>
        {article.body.split('\n\n').map((para, i) => (
          <p key={i} style={{marginBottom: 16}}>{para}</p>
        ))}
      </div>
    </div>
  );
}

// ── Home Page ─────────────────────────────────────────────────
export default function Home() {
  const navigate = useNavigate();
  const heroImgRef = useRef(null);
  const [activeArticle, setActiveArticle] = useState(null);

  // Subtle mouse-follow parallax on hero image
  useEffect(() => {
    const hero = heroImgRef.current;
    if (!hero) return;
    const onMove = e => {
      const { clientX: x, clientY: y } = e;
      const cx = window.innerWidth / 2, cy = window.innerHeight / 2;
      const dx = (x - cx) / cx, dy = (y - cy) / cy;
      hero.style.transform = `translate(${dx * -8}px, ${dy * -8}px) scale(1.04)`;
    };
    const onLeave = () => { hero.style.transform = 'translate(0,0) scale(1.04)'; };
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div className="page-enter">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero-section" aria-label="Hero">
        <div className="hero-left">
          <div className="hero-eyebrow">
            <span className="eyebrow">{brand.est} · {brand.descriptor}</span>
          </div>
          <h1 className="hero-title">
            THE ART<br />
            OF THE<br />
            <em>TABLE.</em>
          </h1>
          <p className="hero-sub">
            Exclusive tableware curated for beautiful meals, refined spaces
            and memorable occasions.
          </p>
          <div className="hero-ctas">
            <Link to="/collections" className="btn-primary">
              Explore Collection
            </Link>
            <Link to="/for-business" className="btn-secondary">
              For Business
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-img-wrap">
            <img
              ref={heroImgRef}
              src={heroImg}
              alt="Luxury porcelain tableware arrangement"
              className="hero-img-main"
            />
            <span className="hero-label-side">CURATED TABLEWARE</span>
            <div className="hero-float-badge">
              <div className="badge-num">25+</div>
              <div className="badge-label">Years of Curation</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BRAND INTRO ──────────────────────────────────────── */}
      <section className="brand-intro" aria-label="Our Philosophy">
        <div className="brand-intro-img">
          <img src={brandImg} alt="Luxury table setting with gold-rimmed china" loading="lazy" />
        </div>
        <div className="brand-intro-content">
          <ScrollReveal>
            <div className="eyebrow">Our Philosophy</div>
            <div className="gold-divider" />
            <h2>Crafted for tables<br />worth remembering.</h2>
            <p>
              We curate distinctive crockery and tableware for homes, hospitality
              spaces and celebrations. Every collection is selected for its form,
              finish and ability to elevate the everyday.
            </p>
            <div className="brand-years">
              <div className="num">25+</div>
              <div className="txt">Years of<br />Experience</div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── COLLECTIONS ──────────────────────────────────────── */}
      <section className="collections-section" aria-label="Collections">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <div className="eyebrow">The Collections</div>
              <h2>Explore the Collections</h2>
              <p>Distinctive pieces for every kind of table.</p>
            </div>
          </ScrollReveal>
          <div className="collections-grid">
            {collections.map((col, i) => (
              <ScrollReveal key={col.id} delay={i + 1}>
                <div
                  className="collection-card"
                  onClick={() => navigate('/collections')}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${col.title} collection`}
                  onKeyDown={e => e.key === 'Enter' && navigate('/collections')}
                  style={{height:'100%', cursor:'pointer'}}
                >
                  <img src={col.image} alt={col.title} loading="lazy" />
                  <div className="collection-card-content">
                    <div className="col-num">{col.num}</div>
                    <div className="col-title">{col.title}</div>
                    <div className="col-sub">{col.subtitle}</div>
                    <div className="col-arrow">
                      <span>Explore</span>
                      <span aria-hidden="true">→</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ────────────────────────────────── */}
      <section className="products-section" aria-label="Featured Products">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <div className="eyebrow">Featured</div>
              <h2>Selected Pieces</h2>
            </div>
          </ScrollReveal>
          <div className="products-grid">
            {products.filter(p => p.featured).map((p, i) => (
              <ScrollReveal key={p.id} delay={Math.min(i + 1, 3)}>
                <ProductCard product={p} />
              </ScrollReveal>
            ))}
          </div>
          <div style={{textAlign:'center', marginTop: 56}}>
            <ScrollReveal>
              <Link to="/products" className="btn-secondary">View All Products</Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── PREMIUM SHOWCASE ─────────────────────────────────── */}
      <section className="showcase-section" aria-label="Premium Showcase">
        <div className="showcase-left" style={{position:'relative', zIndex:1}}>
          <ScrollReveal>
            <div className="eyebrow">Signature Collection</div>
            <h2>Designed<br />to be<br /><em>noticed.</em></h2>
            <p>
              Our premium dinnerware is crafted for those who believe a table
              should be as beautiful as the food upon it.
            </p>
            <Link to="/products/royal-ivory-dinner-set" className="btn-ghost">
              View Product
            </Link>
          </ScrollReveal>
        </div>
        <div className="showcase-right" style={{position:'relative', zIndex:1}}>
          <div className="showcase-img-frame">
            <img
              src={products[0].image}
              alt="Royal Ivory Dinner Set"
              loading="lazy"
            />
            <div className="showcase-spec spec-top-left">24 PIECES</div>
            <div className="showcase-spec spec-top-right">PORCELAIN</div>
            <div className="showcase-spec spec-bot-left">6 PERSON SET</div>
            <div className="showcase-spec spec-bot-right">DISHWASHER SAFE</div>
          </div>
        </div>
      </section>

      {/* ── ART OF THE TABLE ─────────────────────────────────── */}
      <section className="editorial-section" aria-label="The Art of the Table">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <div className="eyebrow">Journal</div>
              <h2>The Art of the Table</h2>
            </div>
          </ScrollReveal>
          <div className="editorial-grid">
            {articles.map((a, i) => (
              <ScrollReveal key={a.id} delay={i + 1}>
                <article
                  className="editorial-card"
                  onClick={() => setActiveArticle(a)}
                  role="button"
                  tabIndex={0}
                  aria-label={a.title}
                  onKeyDown={e => e.key === 'Enter' && setActiveArticle(a)}
                >
                  <div className="editorial-card-img">
                    <img src={a.image} alt={a.title} loading="lazy" />
                  </div>
                  <div className="editorial-card-body">
                    <div className="eyebrow">{a.tag}</div>
                    <h3>{a.title}</h3>
                    <p>{a.excerpt}</p>
                    <span className="read-more">Read More →</span>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOR BUSINESS ─────────────────────────────────────── */}
      <section className="business-section" aria-label="For Business">
        <div className="container">
          <div className="business-inner">
            <div className="business-left" style={{position:'relative', zIndex:1}}>
              <ScrollReveal>
                <div className="eyebrow">For Business</div>
                <h2>Crockery for<br />hospitality &amp; events.</h2>
                <p>
                  From boutique cafés to luxury hotels, weddings and corporate
                  gifting, we help businesses find tableware that fits their
                  space, style and standards.
                </p>
                <Link to="/for-business" className="btn-ghost">
                  Discuss Your Requirement →
                </Link>
              </ScrollReveal>
            </div>
            <div className="business-cards" style={{position:'relative', zIndex:1}}>
              {[
                { icon: '🏨', title: 'Hotels & Restaurants', desc: 'Fine dining and hospitality tableware at scale.' },
                { icon: '☕', title: 'Cafés & Hospitality', desc: 'Casual to refined — sets that suit every style.' },
                { icon: '💍', title: 'Weddings & Events', desc: 'Stunning table settings for unforgettable occasions.' },
                { icon: '🎁', title: 'Corporate Gifting', desc: 'Premium crockery as a gift that is remembered.' },
              ].map((bc, i) => (
                <ScrollReveal key={bc.title} delay={i + 1}>
                  <div className="business-card">
                    <div className="bc-icon">{bc.icon}</div>
                    <div className="bc-title">{bc.title}</div>
                    <div className="bc-desc">{bc.desc}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BULK ENQUIRY ─────────────────────────────────────── */}
      <section className="enquiry-section" aria-label="Bulk Enquiry">
        <div className="container">
          <div className="enquiry-inner">
            <div className="enquiry-left">
              <ScrollReveal>
                <div className="eyebrow">Bulk Orders</div>
                <h2>Planning something bigger?</h2>
                <div className="gold-divider" />
                <p>
                  Tell us what you need and our team will help you find
                  the right collection.
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal>
              <EnquiryForm />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── ABOUT STATS ──────────────────────────────────────── */}
      <section className="about-stats-section" aria-label="About AURELIA">
        <div className="container">
          <div className="about-stats-inner">
            <div className="about-text">
              <ScrollReveal>
                <div className="eyebrow">Who We Are</div>
                <h2>More than crockery.<br />A way of setting the scene.</h2>
                <div className="gold-divider" />
                <p>
                  Since 1998, AURELIA has curated exceptional tableware from
                  the world's finest makers. Our collections span everyday
                  porcelain to heirloom-quality bone china.
                </p>
                <p>
                  We believe that a beautiful table creates meaningful moments —
                  and that the right tableware belongs in every home and
                  hospitality space.
                </p>
                <Link to="/about" className="btn-secondary" style={{marginTop:28, display:'inline-flex'}}>
                  Our Story
                </Link>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={2}>
              <div className="stats-grid">
                {[
                  { num: '25+', label: 'Years' },
                  { num: '500+', label: 'Collections' },
                  { num: '1000+', label: 'Customers' },
                ].map(s => (
                  <div key={s.label} className="stat-box">
                    <div className="stat-num">{s.num}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Modal */}
      {activeArticle && (
        <ArticleModal article={activeArticle} onClose={() => setActiveArticle(null)} />
      )}
    </div>
  );
}
