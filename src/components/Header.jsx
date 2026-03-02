import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Database, Network, GitMerge, ShieldCheck } from 'lucide-react';

const productItems = [
  { name: 'ClusterEye', desc: 'Database Observability & Autonomous DBA', path: '/products/clustereye', icon: Database, logo: '/clustereye-logo.png', color: 'var(--product-clustereye)' },
  { name: 'Elchi', desc: 'Enterprise Proxy Management', path: '/products/elchi', icon: Network, logo: '/elchi-logo.png', color: 'var(--product-elchi)' },
  { name: 'MergePilot', desc: 'CI/CD Pipeline Automation', path: '/products/mergepilot', icon: GitMerge, logo: '/mergepilot-logo.png', color: 'var(--product-mergepilot)' },
  { name: 'CertAutoPilot', desc: 'Certificate Lifecycle Management', path: '/products/certautopilot', icon: ShieldCheck, logo: '/certautopilot-logo.png', color: 'var(--product-certautopilot)' },
];

const navItems = [
  { label: 'Solutions', path: '/solutions' },
  { label: 'Engineering', path: '/engineering' },
  { label: 'Security', path: '/security' },
  { label: 'Company', path: '/company' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileProductsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
    fontSize: '0.875rem',
    fontWeight: 500,
    transition: 'color 0.2s ease',
    textDecoration: 'none',
    padding: '0.5rem 0',
  });

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: 'var(--nav-height)',
        display: 'flex',
        alignItems: 'center',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(10, 10, 15, 0.9)' : 'rgba(10, 10, 15, 0.6)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          {/* Logo */}
          <Link to="/" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            CloudNative<span style={{ color: 'var(--accent-primary)' }}>Works</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)' }}>
            {/* Products Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setShowProducts(true)}
              onMouseLeave={() => setShowProducts(false)}
            >
              <button style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                background: 'none',
                border: 'none',
                color: location.pathname.startsWith('/products') ? 'var(--text-primary)' : 'var(--text-secondary)',
                fontSize: '0.875rem',
                fontWeight: 500,
                cursor: 'pointer',
                padding: '0.5rem 0',
                fontFamily: 'var(--font-main)',
                transition: 'color 0.2s ease',
              }}>
                Products
                <ChevronDown size={14} style={{ transition: 'transform 0.2s', transform: showProducts ? 'rotate(180deg)' : 'rotate(0)' }} />
              </button>

              {/* Dropdown */}
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                left: '-16px',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-primary)',
                borderRadius: 'var(--card-radius)',
                padding: 'var(--space-3)',
                minWidth: '320px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                opacity: showProducts ? 1 : 0,
                visibility: showProducts ? 'visible' : 'hidden',
                transform: showProducts ? 'translateY(0)' : 'translateY(-8px)',
                transition: 'all 0.2s ease',
                pointerEvents: showProducts ? 'auto' : 'none',
              }}>
                <Link to="/products" style={{
                  display: 'block',
                  padding: '0.625rem 0.75rem',
                  borderRadius: '8px',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'all 0.15s ease',
                  marginBottom: '4px',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-elevated)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                >
                  All Products
                </Link>
                <div style={{ height: '1px', background: 'var(--border-subtle)', margin: '4px 0' }} />
                {productItems.map((item) => (
                  <Link key={item.path} to={item.path} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.625rem 0.75rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    transition: 'all 0.15s ease',
                  }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-elevated)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      overflow: 'hidden',
                    }}>
                      <img src={item.logo} alt={item.name} style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>{item.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginTop: '1px' }}>{item.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {navItems.map(item => (
              <NavLink key={item.path} to={item.path} style={navLinkStyle}>
                {item.label}
              </NavLink>
            ))}

            <Link to="/contact" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8125rem' }}>
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              color: 'var(--text-primary)',
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.6)',
            zIndex: 998,
          }}
        />
      )}

      {/* Mobile Drawer */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '85%',
        maxWidth: '320px',
        height: '100vh',
        background: 'var(--bg-secondary)',
        borderLeft: '1px solid var(--border-primary)',
        transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s ease',
        zIndex: 999,
        padding: 'calc(var(--nav-height) + var(--space-4)) var(--space-6) var(--space-6)',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-2)',
      }}>
        {/* Mobile Products Section */}
        <div>
          <button
            onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              fontSize: '1rem',
              fontWeight: 600,
              padding: '0.75rem 0',
              cursor: 'pointer',
              fontFamily: 'var(--font-main)',
            }}
          >
            Products
            <ChevronDown size={16} style={{ transition: 'transform 0.2s', transform: mobileProductsOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
          </button>
          {mobileProductsOpen && (
            <div style={{ paddingLeft: 'var(--space-4)', display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
              <Link to="/products" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', padding: '0.5rem 0', textDecoration: 'none', fontWeight: 500 }}>
                All Products
              </Link>
              {productItems.map((item) => (
                <Link key={item.path} to={item.path} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--text-secondary)',
                  fontSize: '0.875rem',
                  padding: '0.5rem 0',
                  textDecoration: 'none',
                }}>
                  <img src={item.logo} alt={item.name} style={{ width: '18px', height: '18px', objectFit: 'contain' }} />
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {navItems.map(item => (
          <Link key={item.path} to={item.path} style={{
            color: 'var(--text-primary)',
            fontSize: '1rem',
            fontWeight: 600,
            padding: '0.75rem 0',
            textDecoration: 'none',
            borderTop: '1px solid var(--border-subtle)',
          }}>
            {item.label}
          </Link>
        ))}

        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 'var(--space-4)', marginTop: 'var(--space-2)' }}>
          <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            Contact
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  );
};

export default Header;
