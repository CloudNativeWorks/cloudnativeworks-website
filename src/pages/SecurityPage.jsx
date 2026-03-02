import React from 'react';
import {
  Lock, Shield, Eye, FileText, Server, Key,
  Check, ShieldCheck,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import SectionLabel from '../components/SectionLabel';

const securityPrinciples = [
  {
    icon: Lock,
    title: 'Encryption Everywhere',
    desc: 'All data is encrypted at rest and in transit. mTLS between internal components. TLS 1.3 for external connections. No plaintext, ever.',
  },
  {
    icon: Shield,
    title: 'Zero-Trust Architecture',
    desc: 'Every request is authenticated and authorized. No implicit trust between components, even within the same deployment boundary.',
  },
  {
    icon: Eye,
    title: 'Full Audit Logging',
    desc: 'Every state change, every access attempt, every configuration modification is logged with timestamps, actors, and context.',
  },
  {
    icon: FileText,
    title: 'Compliance by Design',
    desc: 'SOC 2 aligned practices, ISO 27001 compatible controls, and GDPR-ready data handling. Compliance is built in, not bolted on.',
  },
  {
    icon: Server,
    title: 'Air-Gapped Deployment',
    desc: 'Every product supports fully air-gapped installation. No phone-home telemetry, no external API dependencies, no cloud connectivity required.',
  },
  {
    icon: Key,
    title: 'RBAC & Multi-Tenancy',
    desc: '4-tier role-based access control with JWT authentication. Tenant isolation at every layer of the application stack.',
  },
];

const complianceItems = [
  'SOC 2 Type II aligned security controls',
  'ISO 27001 compatible information security management',
  'GDPR-compliant data handling and residency',
  'OWASP Top 10 protection via built-in WAF',
  'Complete audit trail for regulatory reporting',
  'Data residency and sovereignty support',
  'Vulnerability disclosure and response program',
  'Regular third-party security assessments',
];

const SecurityPage = () => (
  <>
    <PageHero
      label="Security"
      title={<>Security is Not a Feature. <span className="gradient-text">It's a Foundation.</span></>}
      subtitle="Our security posture is built into every layer of our products — from encrypted data at rest to mTLS between components. Security is an architectural decision, not a checkbox."
    />

    {/* Security Principles */}
    <section className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
          <SectionLabel>Security Principles</SectionLabel>
          <h2>How We Approach Security</h2>
        </div>
        <div className="grid-3">
          {securityPrinciples.map((p, i) => (
            <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <p.icon size={20} style={{ color: 'var(--accent-primary)' }} />
              <h4>{p.title}</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Compliance */}
    <section className="section bg-secondary" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-12)', alignItems: 'center' }}>
          <div>
            <SectionLabel>Compliance</SectionLabel>
            <h2 style={{ marginBottom: 'var(--space-4)' }}>Enterprise Compliance Posture</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.7 }}>
              Our products are designed to support the compliance requirements of enterprises operating in regulated industries.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            {complianceItems.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <Check size={16} style={{ color: 'var(--signal-green)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .bg-secondary .container > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>

    {/* Vulnerability Reporting */}
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
          <ShieldCheck size={24} style={{ color: 'var(--accent-primary)' }} />
        </div>
        <h2 style={{ marginBottom: 'var(--space-4)' }}>Responsible Disclosure</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', lineHeight: 1.7 }}>
          We take security vulnerabilities seriously. If you discover a security issue in any CloudNativeWorks product,
          please contact our security team. We commit to acknowledging reports within 24 hours and providing
          a resolution timeline within 72 hours.
        </p>
      </div>
    </section>

    <CTASection
      title="Questions About Our Security Practices?"
      subtitle="Our engineering team is available to discuss security architecture, compliance, and deployment options."
      primaryText="Contact Security Team"
      primaryTo="/contact"
    />
  </>
);

export default SecurityPage;
