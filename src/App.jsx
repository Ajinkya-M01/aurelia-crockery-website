import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar    from './components/Navbar';
import Footer    from './components/Footer';
import Home         from './pages/Home';
import Collections  from './pages/Collections';
import Products     from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import ForBusiness  from './pages/ForBusiness';
import About        from './pages/About';
import Contact      from './pages/Contact';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"              element={<Home />} />
          <Route path="/collections"   element={<Collections />} />
          <Route path="/products"      element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/for-business"  element={<ForBusiness />} />
          <Route path="/about"         element={<About />} />
          <Route path="/contact"       element={<Contact />} />
          {/* Catch-all → home */}
          <Route path="*"             element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
