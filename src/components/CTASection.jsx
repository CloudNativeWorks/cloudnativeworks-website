import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = ({
  title = "Ready to Take Control of Your Infrastructure?",
  subtitle = "Talk to our engineering team about your infrastructure challenges.",
  primaryText = "Schedule a Technical Discussion",
  primaryTo = "/contact",
  secondaryText,
  secondaryTo,
  secondaryExternal = false,
}) => (
  <section style={{
    padding: 'var(--space-20) 0',
    background: 'var(--bg-secondary)',
    borderTop: '1px solid var(--border-subtle)',
    borderBottom: '1px solid var(--border-subtle)',
  }}>
    <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
      <h2 style={{ marginBottom: 'var(--space-4)' }}>{title}</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-8)', fontSize: '1.0625rem' }}>{subtitle}</p>
      <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to={primaryTo} className="btn btn-primary btn-lg">{primaryText}</Link>
        {secondaryText && (
          secondaryExternal ? (
            <a href={secondaryTo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-lg">{secondaryText}</a>
          ) : (
            <Link to={secondaryTo} className="btn btn-ghost btn-lg">{secondaryText}</Link>
          )
        )}
      </div>
    </div>
  </section>
);

export default CTASection;
