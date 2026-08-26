import { useState, useMemo } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const categories = ['All', ...new Set(products.map(p => p.category))];

export default function Products() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('default');

  const filtered = useMemo(() => {
    let list = [...products];

    if (category !== 'All') list = list.filter(p => p.category === category);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.material.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }
    if (sort === 'price-asc')  list.sort((a, b) => a.priceNum - b.priceNum);
    if (sort === 'price-desc') list.sort((a, b) => b.priceNum - a.priceNum);
    if (sort === 'name-asc')   list.sort((a, b) => a.name.localeCompare(b.name));

    return list;
  }, [query, category, sort]);

  return (
    <div className="page-enter">
      <section className="page-hero" aria-label="Products hero">
        <h1>Our Products</h1>
        <p>Fine tableware curated for every kind of table.</p>
      </section>

      <section className="products-page" aria-label="Product catalogue">
        <div className="container">
          <ScrollReveal>
            {/* Controls */}
            <div className="products-page-controls">
              <div className="search-input-wrap">
                <span className="search-icon" aria-hidden="true">⌕</span>
                <input
                  id="product-search"
                  type="search"
                  placeholder="Search products…"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  aria-label="Search products"
                />
              </div>

              <div className="filter-bar" style={{margin:0}} role="group" aria-label="Filter by category">
                {categories.map(cat => (
                  <button
                    key={cat}
                    className={`filter-btn${category === cat ? ' active' : ''}`}
                    onClick={() => setCategory(cat)}
                    aria-pressed={category === cat}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <select
                id="product-sort"
                className="sort-select"
                value={sort}
                onChange={e => setSort(e.target.value)}
                aria-label="Sort products"
              >
                <option value="default">Sort: Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A–Z</option>
              </select>
            </div>
          </ScrollReveal>

          {/* Product Grid */}
          <div className="products-page-grid">
            {filtered.length === 0 ? (
              <div className="no-results">
                No products match your search.
              </div>
            ) : (
              filtered.map((p, i) => (
                <ScrollReveal key={p.id} delay={Math.min(i + 1, 3)}>
                  <ProductCard product={p} />
                </ScrollReveal>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
