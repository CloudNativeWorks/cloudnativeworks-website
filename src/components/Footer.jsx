import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-secondary)' }}>
      <div className="container" style={{ padding: 'var(--space-16) var(--space-8) var(--space-8)' }}>
        {/* Footer Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 'var(--space-8)', marginBottom: 'var(--space-12)' }}>
          {/* Brand Column */}
          <div>
            <Link to="/" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'none' }}>
              CloudNative<span style={{ color: 'var(--accent-primary)' }}>Works</span>
            </Link>
            <p style={{ marginTop: 'var(--space-4)', color: 'var(--text-tertiary)', fontSize: '0.875rem', lineHeight: 1.6, maxWidth: '280px' }}>
              Engineering the Control Plane for Modern Infrastructure. Purpose-built products for observability, automation, and control.
            </p>
          </div>

          {/* Products Column */}
          <div>
            <h4 style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 'var(--space-4)' }}>
              Products
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <Link to="/products/clustereye" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', textDecoration: 'none' }}>ClusterEye</Link>
              <Link to="/products/elchi" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', textDecoration: 'none' }}>Elchi</Link>
              <Link to="/products/mergepilot" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', textDecoration: 'none' }}>MergePilot</Link>
              <Link to="/products/certautopilot" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', textDecoration: 'none' }}>CertAutoPilot</Link>
            </nav>
          </div>

          {/* Company Column */}
          <div>
            <h4 style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 'var(--space-4)' }}>
              Company
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <Link to="/engineering" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', textDecoration: 'none' }}>Engineering</Link>
              <Link to="/security" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', textDecoration: 'none' }}>Security</Link>
              <Link to="/solutions" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', textDecoration: 'none' }}>Solutions</Link>
              <Link to="/company" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', textDecoration: 'none' }}>About</Link>
              <Link to="/blog" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', textDecoration: 'none' }}>Blog</Link>
            </nav>
          </div>

          {/* Connect Column */}
          <div>
            <h4 style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 'var(--space-4)' }}>
              Connect
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <Link to="/contact" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', textDecoration: 'none' }}>Contact</Link>
              <a href="https://github.com/cloudnativeworks" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', textDecoration: 'none' }}>GitHub</a>
              <a href="https://linkedin.com/company/cloudnativeworks" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', textDecoration: 'none' }}>LinkedIn</a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: 'var(--space-6)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'var(--space-4)',
        }}>
          <p style={{ color: 'var(--text-tertiary)', fontSize: '0.8125rem' }}>
            &copy; {year} CloudNativeWorks. All rights reserved.
          </p>
          <p style={{ color: 'var(--text-tertiary)', fontSize: '0.8125rem' }}>
            Istanbul, Turkey
          </p>
        </div>
      </div>

      {/* Responsive footer grid */}
      <style>{`
        @media (max-width: 768px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
