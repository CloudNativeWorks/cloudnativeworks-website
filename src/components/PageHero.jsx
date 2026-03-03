import React from 'react';
import SectionLabel from './SectionLabel';

const PageHero = ({ label, title, subtitle, logo, logoAlt, children }) => (
  <section style={{
    padding: 'var(--space-20) 0 var(--space-12)',
    position: 'relative',
    overflow: 'hidden',
  }}>
    {/* Background dot grid */}
    <div style={{
      position: 'absolute',
      inset: 0,
      backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)',
      backgroundSize: '32px 32px',
      opacity: 1,
    }} />
    <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px' }}>
      {logo && (
        <img src={logo} alt={logoAlt || label || ''} style={{
          height: '48px',
          width: 'auto',
          objectFit: 'contain',
          margin: '0 auto var(--space-4)',
        }} />
      )}
      {label && !logo && <SectionLabel>{label}</SectionLabel>}
      <h1 style={{
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 700,
        lineHeight: 1.1,
        marginBottom: 'var(--space-4)',
        letterSpacing: '-0.01em',
      }}>
        {title}
      </h1>
      {subtitle && (
        <p style={{
          fontSize: 'clamp(1rem, 1.3vw, 1.125rem)',
          color: 'var(--text-secondary)',
          lineHeight: 1.7,
          maxWidth: '640px',
          margin: '0 auto',
        }}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  </section>
);

export default PageHero;
