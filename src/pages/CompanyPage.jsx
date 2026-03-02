import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Target, Eye, Cpu } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import SectionLabel from '../components/SectionLabel';

const values = [
  {
    icon: Target,
    title: 'Engineering Depth',
    desc: 'We believe infrastructure software should be built by engineers who understand the protocols, failure modes, and operational realities of production systems.',
  },
  {
    icon: Eye,
    title: 'Operational Transparency',
    desc: 'Our products expose their state. No black boxes. When your on-call engineer needs to understand what happened, our products provide the data they need.',
  },
  {
    icon: Cpu,
    title: 'Purpose Over Feature Count',
    desc: 'We build fewer features that work deeply rather than more features that work superficially. Each product solves a specific infrastructure domain well.',
  },
];

const CompanyPage = () => (
  <>
    <PageHero
      label="Company"
      title={<>Engineering the Control Plane for <span className="gradient-text">Modern Infrastructure</span></>}
      subtitle="CloudNativeWorks is an infrastructure technology company building the control layer for production systems. We are a product company — not an agency, not a consultancy."
    />

    {/* Mission */}
    <section className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-12)' }}>
          <div>
            <SectionLabel>Our Mission</SectionLabel>
            <h2 style={{ marginBottom: 'var(--space-4)' }}>Build Infrastructure That Runs Itself</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Modern infrastructure teams are overwhelmed. Databases need monitoring.
              Proxies need configuration. Certificates expire at 3 AM. Pipelines break on Friday afternoon.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: 'var(--space-4)' }}>
              We build the autonomous systems that handle these operational burdens —
              so your team can focus on building, not firefighting.
            </p>
          </div>
          <div>
            <SectionLabel>What We Are</SectionLabel>
            <h2 style={{ marginBottom: 'var(--space-4)' }}>A Product Company</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              We are not a consultancy that also builds software.
              We are not an agency that builds custom solutions.
              We are engineers who build products that solve infrastructure problems at scale.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: 'var(--space-4)' }}>
              Every product we ship is designed to be deployed independently,
              operate autonomously, and integrate deeply with the infrastructure it manages.
            </p>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .container[style*="max-width: 800px"] > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>

    {/* Values */}
    <section className="section bg-secondary" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
          <SectionLabel>Values</SectionLabel>
          <h2>What Drives Us</h2>
        </div>
        <div className="grid-3">
          {values.map((v, i) => (
            <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'var(--accent-muted)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <v.icon size={20} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <h4>{v.title}</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Location */}
    <section className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '12px',
          background: 'var(--accent-muted)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto var(--space-4)',
        }}>
          <MapPin size={24} style={{ color: 'var(--accent-primary)' }} />
        </div>
        <h2 style={{ marginBottom: 'var(--space-4)' }}>Based in Istanbul</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', lineHeight: 1.7, marginBottom: 'var(--space-2)' }}>
          CloudNativeWorks is headquartered in Istanbul, Turkey — building infrastructure software for global enterprises.
        </p>
        <p style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem' }}>
          Kadikoy, Istanbul
        </p>
      </div>
    </section>

    <CTASection
      title="Let's Build Together"
      subtitle="Interested in our products, partnerships, or joining the team?"
      primaryText="Get in Touch"
      primaryTo="/contact"
      secondaryText="Explore Products"
      secondaryTo="/products"
    />
  </>
);

export default CompanyPage;
