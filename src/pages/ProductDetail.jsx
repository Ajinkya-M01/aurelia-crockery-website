import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import ProductCard from '../components/ProductCard';
import { products, whatsappUrl } from '../data/products';

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const imgRef = useRef(null);

  const product = products.find(p => p.slug === slug);
  const related = products.filter(p => p.id !== product?.id).slice(0, 3);

  // Subtle 3D tilt on pointer move
  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    const frame = el.parentElement;
    const onMove = e => {
      const rect = frame.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      el.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) scale(1.02)`;
    };
    const onLeave = () => { el.style.transform = 'perspective(800px) rotateY(0) rotateX(0) scale(1)'; };
    frame.addEventListener('mousemove', onMove);
    frame.addEventListener('mouseleave', onLeave);
    return () => {
      frame.removeEventListener('mousemove', onMove);
      frame.removeEventListener('mouseleave', onLeave);
    };
  }, [product]);

  if (!product) {
    return (
      <div style={{ padding: '200px 60px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 36, color: 'var(--charcoal)' }}>
          Product not found.
        </h2>
        <Link to="/products" className="btn-secondary" style={{ marginTop: 28, display: 'inline-flex' }}>
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="product-detail page-enter">
      {/* Detail layout */}
      <div className="product-detail-inner">
        {/* Left: Gallery */}
        <div className="product-gallery">
          <img
            ref={imgRef}
            src={product.image}
            alt={product.name}
            className="product-gallery-main"
            style={{ transition: 'transform 0.3s ease' }}
          />
        </div>

        {/* Right: Info */}
        <div className="product-info">
          <Link to="/products" className="back-link">
            ← All Products
          </Link>

          <div className="eyebrow">{product.category}</div>
          <h1>{product.name}</h1>
          <div className="product-info-price">{product.price}</div>
          <p className="product-info-desc">{product.description}</p>

          {/* Specs */}
          <div className="product-specs">
            <h4>Specifications</h4>
            <div className="spec-list">
              {product.specs.map(s => (
                <div key={s.key} className="spec-row">
                  <span className="spec-key">{s.key}</span>
                  <span className="spec-val">{s.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Purchase Actions */}
          <div className="product-actions">
            <a
              href={product.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-amazon"
              aria-label={`Buy ${product.name} on Amazon`}
            >
              <span>🛒</span> Buy on Amazon
            </a>
            <a
              href={product.flipkartUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-flipkart"
              aria-label={`Buy ${product.name} on Flipkart`}
            >
              <span>🛍</span> Buy on Flipkart
            </a>
            <a
              href={whatsappUrl(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              aria-label={`Enquire about ${product.name} on WhatsApp`}
            >
              <span>💬</span> Enquire on WhatsApp
            </a>
          </div>

          <p className="purchase-note">
            * Links open Amazon &amp; Flipkart · Demo prototype only
          </p>
        </div>
      </div>

      {/* Related Products */}
      <section className="related-products" aria-label="You may also like">
        <div className="container">
          <ScrollReveal>
            <div className="section-header" style={{ marginBottom: 48 }}>
              <div className="eyebrow">You May Also Like</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 400, color: 'var(--charcoal)', marginTop: 12 }}>
                Related Pieces
              </h2>
            </div>
          </ScrollReveal>
          <div className="products-grid">
            {related.map((p, i) => (
              <ScrollReveal key={p.id} delay={i + 1}>
                <ProductCard product={p} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
