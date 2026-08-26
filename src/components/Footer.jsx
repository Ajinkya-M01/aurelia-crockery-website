import { Link } from 'react-router-dom';
import { brand } from '../data/brand';

const footerNav = {
  Collections: [
    { label: 'Dinnerware', to: '/collections' },
    { label: 'Tea & Coffee', to: '/collections' },
    { label: 'Serveware', to: '/collections' },
    { label: 'Premium', to: '/collections' },
    { label: 'Festive', to: '/collections' },
  ],
  Shop: [
    { label: 'All Products', to: '/products' },
    { label: 'Featured Pieces', to: '/products' },
    { label: 'New Arrivals', to: '/products' },
  ],
  Company: [
    { label: 'About AURELIA', to: '/about' },
    { label: 'For Business', to: '/for-business' },
    { label: 'Contact', to: '/contact' },
    { label: 'Bulk Enquiry', to: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand column */}
          <div>
            <div className="footer-brand-logo">{brand.name}</div>
            <div className="footer-brand-tag">{brand.taglineShort}</div>
            <p className="footer-brand-desc">{brand.description}</p>
          </div>

          {/* Nav columns */}
          {Object.entries(footerNav).map(([heading, links]) => (
            <div key={heading} className="footer-col">
              <h4>{heading}</h4>
              <ul>
                {links.map(l => (
                  <li key={l.label}>
                    <Link to={l.to}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} {brand.name}. All rights reserved. Demo prototype.
          </p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
