import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <article
      className="product-card"
      onClick={() => navigate(`/products/${product.slug}`)}
      role="button"
      tabIndex={0}
      aria-label={`View ${product.name}`}
      onKeyDown={e => e.key === 'Enter' && navigate(`/products/${product.slug}`)}
    >
      <div className="product-card-img">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
      </div>
      <div className="product-card-body">
        <div className="product-cat">{product.category}</div>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-meta">{product.material} · {product.pieces}</div>
        <div className="product-price">{product.price}</div>
        <div className="product-link">
          View Product <span aria-hidden="true">→</span>
        </div>
      </div>
    </article>
  );
}
