import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProductCard = ({ name, tagline, description, color, icon: Icon, logo, path }) => (
  <Link to={path} className="card card-interactive" style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-4)',
    borderLeft: `3px solid ${color}`,
    textDecoration: 'none',
    cursor: 'pointer',
  }}>
    {logo ? (
      <img src={logo} alt={`${name} logo`} style={{ height: '32px', width: 'auto', objectFit: 'contain', alignSelf: 'flex-start' }} />
    ) : (
      <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '10px',
        background: `color-mix(in srgb, ${color} 15%, transparent)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Icon size={20} style={{ color }} />
      </div>
    )}
    <div>
      <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-1)' }}>{name}</h3>
      <p style={{ fontSize: '0.8125rem', color: 'var(--text-tertiary)', fontWeight: 500 }}>{tagline}</p>
    </div>
    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7, flex: 1 }}>
      {description}
    </p>
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color, fontSize: '0.875rem', fontWeight: 500 }}>
      Learn more <ArrowRight size={14} />
    </div>
  </Link>
);

export default ProductCard;
