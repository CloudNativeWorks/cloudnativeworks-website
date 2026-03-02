import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import ProductCard from '../components/ProductCard';
import CTASection from '../components/CTASection';
import { products } from '../data/products';

const ProductsPage = () => (
  <>
    <PageHero
      label="Product Ecosystem"
      title={<>Four Products. One <span className="gradient-text">Control Layer</span>.</>}
      subtitle="Each product addresses a critical infrastructure domain. Purpose-built, independently deployable, and enterprise-grade by default."
    />

    {/* Ecosystem Overview */}
    <section className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Ecosystem narrative */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 'var(--space-4)',
          marginBottom: 'var(--space-16)',
          textAlign: 'center',
        }}>
          {[
            { label: 'Observe', desc: 'See everything', product: 'ClusterEye', color: 'var(--product-clustereye)' },
            { label: 'Route', desc: 'Control traffic', product: 'Elchi', color: 'var(--product-elchi)' },
            { label: 'Ship', desc: 'Deploy safely', product: 'MergePilot', color: 'var(--product-mergepilot)' },
            { label: 'Secure', desc: 'Protect everything', product: 'CertAutoPilot', color: 'var(--product-certautopilot)' },
          ].map((item, i) => (
            <div key={i} style={{ padding: 'var(--space-6)', borderRadius: 'var(--card-radius)', border: '1px solid var(--border-primary)', background: 'var(--bg-tertiary)' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: item.color, margin: '0 auto var(--space-3)', boxShadow: `0 0 12px ${item.color}` }} />
              <p style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '2px' }}>{item.label}</p>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-tertiary)', marginBottom: 'var(--space-2)' }}>{item.desc}</p>
              <p style={{ fontSize: '0.75rem', fontWeight: 500, color: item.color }}>{item.product}</p>
            </div>
          ))}
        </div>

        {/* Product Cards */}
        <div className="grid-2" style={{ maxWidth: '960px', margin: '0 auto' }}>
          {products.map(p => (
            <ProductCard
              key={p.id}
              name={p.name}
              tagline={p.tagline}
              description={p.shortDesc}
              color={p.color}
              icon={p.icon}
              logo={p.logo}
              path={p.path}
            />
          ))}
        </div>
      </div>
    </section>

    <CTASection
      title="Need Help Choosing?"
      subtitle="Our engineering team can help identify which products fit your infrastructure needs."
      primaryText="Talk to Engineering"
      primaryTo="/contact"
    />

    <style>{`
      @media (max-width: 768px) {
        div[style*="grid-template-columns: repeat(4"] {
          grid-template-columns: repeat(2, 1fr) !important;
        }
      }
      @media (max-width: 480px) {
        div[style*="grid-template-columns: repeat(4"] {
          grid-template-columns: 1fr !important;
        }
      }
    `}</style>
  </>
);

export default ProductsPage;
