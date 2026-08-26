import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { brand } from '../data/brand';

const navLinks = [
  { to: '/collections', label: 'Collections' },
  { to: '/products',    label: 'Products' },
  { to: '/for-business', label: 'For Business' },
  { to: '/about',       label: 'About' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Dark navbar for specific pages
  const darkPages = ['/for-business', '/about'];
  const isDark = darkPages.some(p => location.pathname.startsWith(p));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navClass = [
    'navbar',
    scrolled ? 'scrolled' : '',
    isDark ? 'dark' : '',
  ].filter(Boolean).join(' ');

  return (
    <>
      <nav className={navClass} role="navigation" aria-label="Main navigation">
        <Link to="/" className="nav-logo" aria-label="AURELIA Home">
          {brand.name}
        </Link>

        {/* Desktop center links */}
        <div className="nav-center">
          {navLinks.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop right CTA */}
        <div className="nav-right">
          <Link to="/contact" className="btn-nav">
            Contact
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className={`nav-hamburger${menuOpen ? ' open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} role="dialog" aria-modal="true">
        {navLinks.map(l => (
          <NavLink key={l.to} to={l.to} className="nav-link">
            {l.label}
          </NavLink>
        ))}
        <Link to="/contact" className="btn-nav">Contact</Link>
      </div>
    </>
  );
}
