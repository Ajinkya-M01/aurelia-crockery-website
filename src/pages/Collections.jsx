import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { collections } from '../data/collections';

const allTags = ['All', ...collections.map(c => c.tag)];

export default function Collections() {
  const navigate = useNavigate();
  const [activeTag, setActiveTag] = useState('All');

  const filtered = activeTag === 'All'
    ? collections
    : collections.filter(c => c.tag === activeTag);

  return (
    <div className="page-enter">
      <section className="page-hero" aria-label="Collections hero">
        <h1>Collections</h1>
        <p>Explore our curated world of tableware.</p>
      </section>

      <section className="collections-page-grid" aria-label="Browse collections">
        <div className="container">
          <ScrollReveal>
            <div className="filter-bar" role="group" aria-label="Filter collections">
              {allTags.map(tag => (
                <button
                  key={tag}
                  className={`filter-btn${activeTag === tag ? ' active' : ''}`}
                  onClick={() => setActiveTag(tag)}
                  aria-pressed={activeTag === tag}
                >
                  {tag}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="collections-page-list">
            {filtered.map((col, i) => (
              <ScrollReveal key={col.id} delay={Math.min(i + 1, 3)}>
                <div
                  className="collection-page-card"
                  onClick={() => navigate('/products')}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${col.title} collection`}
                  onKeyDown={e => e.key === 'Enter' && navigate('/products')}
                >
                  <img src={col.image} alt={col.title} loading="lazy" />
                  <div className="collection-page-card-content">
                    <div className="col-num">{col.num}</div>
                    <div className="col-title" style={{fontSize: 26}}>{col.title}</div>
                    <div className="col-sub">{col.subtitle}</div>
                    <div className="col-arrow">
                      Browse Products <span>→</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
