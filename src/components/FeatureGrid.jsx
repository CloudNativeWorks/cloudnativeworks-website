import React from 'react';

const FeatureGrid = ({ features, columns = 3, accentColor }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: 'var(--space-6)',
  }}>
    {features.map((feature, i) => (
      <div key={i} className="card" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
      }}>
        {feature.icon && (
          <feature.icon size={20} style={{ color: accentColor || 'var(--accent-primary)' }} />
        )}
        <h4 style={{ fontSize: '0.9375rem' }}>{feature.title}</h4>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{feature.desc}</p>
      </div>
    ))}
    <style>{`
      @media (max-width: 1024px) {
        div[style*="grid-template-columns: repeat(3"] {
          grid-template-columns: repeat(2, 1fr) !important;
        }
        div[style*="grid-template-columns: repeat(4"] {
          grid-template-columns: repeat(2, 1fr) !important;
        }
      }
      @media (max-width: 640px) {
        div[style*="grid-template-columns: repeat(2"] {
          grid-template-columns: 1fr !important;
        }
        div[style*="grid-template-columns: repeat(3"] {
          grid-template-columns: 1fr !important;
        }
        div[style*="grid-template-columns: repeat(4"] {
          grid-template-columns: 1fr !important;
        }
      }
    `}</style>
  </div>
);

export default FeatureGrid;
