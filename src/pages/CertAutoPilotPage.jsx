import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck, RefreshCw, Bell, FileText, Building2, Server,
  ArrowRight, Check, AlertTriangle,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import FeatureGrid from '../components/FeatureGrid';
import CTASection from '../components/CTASection';
import SectionLabel from '../components/SectionLabel';

const color = 'var(--product-certautopilot)';

const features = [
  { icon: ShieldCheck, title: 'Automated Certificate Issuance', desc: 'Automatic provisioning of SSL/TLS certificates from multiple CAs including ACME-compatible providers and internal PKI.' },
  { icon: RefreshCw, title: 'Lifecycle Rotation', desc: 'Proactive certificate rotation before expiration with zero-downtime deployment across your infrastructure.' },
  { icon: Bell, title: 'Expiration Prevention', desc: 'Real-time monitoring with multi-channel alerting. Prevent outages caused by expired certificates.' },
  { icon: FileText, title: 'Compliance Audit Trails', desc: 'Complete audit logging of all certificate operations for SOC 2, ISO 27001, and regulatory compliance.' },
  { icon: Building2, title: 'Multi-CA Support', desc: 'Manage certificates from Let\'s Encrypt, DigiCert, internal CAs, and custom certificate authorities from a single control plane.' },
  { icon: Server, title: 'Infrastructure Integration', desc: 'Native integration with Kubernetes, load balancers, CDNs, and cloud providers for automated certificate deployment.' },
];

const CertAutoPilotPage = () => (
  <>
    <PageHero
      logo="/certautopilot-logo.png"
      logoAlt="CertAutoPilot"
      title={<>Certificate Lifecycle Management <span style={{ color }}>on Autopilot</span></>}
      subtitle="Automated certificate issuance, rotation, and revocation. Never let an expired certificate cause an outage again. Compliance-ready audit trails included."
    >
      <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', marginTop: 'var(--space-8)', flexWrap: 'wrap' }}>
        <a href="https://www.certautopilot.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
          Visit certautopilot.com <ArrowRight size={16} />
        </a>
        <Link to="/contact" className="btn btn-ghost btn-lg">Contact Us</Link>
      </div>
    </PageHero>

    {/* The Problem */}
    <section className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
          <SectionLabel>The Problem</SectionLabel>
          <h2>Certificate Outages Are Preventable</h2>
        </div>
        <div className="card" style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 'var(--space-4)',
          borderLeft: '3px solid var(--signal-amber)',
        }}>
          <AlertTriangle size={24} style={{ color: 'var(--signal-amber)', flexShrink: 0, marginTop: '2px' }} />
          <div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.9375rem' }}>
              Expired certificates are one of the most common — and most preventable — causes of production outages.
              Manual certificate management doesn't scale. Spreadsheet tracking breaks down.
              CertAutoPilot automates the entire certificate lifecycle so your team can focus on what matters.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="section bg-secondary" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
          <SectionLabel>Core Capabilities</SectionLabel>
          <h2>End-to-End Certificate Automation</h2>
        </div>
        <FeatureGrid features={features} columns={3} accentColor={color} />
      </div>
    </section>

    {/* How It Works */}
    <section className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container" style={{ maxWidth: '720px' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
          <SectionLabel>How It Works</SectionLabel>
          <h2>From Issuance to Rotation, Automated</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          {[
            { step: '01', title: 'Discover', desc: 'CertAutoPilot scans your infrastructure to discover all existing certificates, their issuers, and expiration dates.' },
            { step: '02', title: 'Monitor', desc: 'Continuous monitoring with configurable alert thresholds. Get notified weeks before any certificate expires.' },
            { step: '03', title: 'Automate', desc: 'Automatic renewal and rotation with zero-downtime deployment to your servers, load balancers, and CDNs.' },
            { step: '04', title: 'Audit', desc: 'Every certificate operation is logged with full audit trails for compliance reporting and governance.' },
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: `color-mix(in srgb, ${color} 15%, transparent)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                color,
              }}>
                {s.step}
              </div>
              <div>
                <h4 style={{ marginBottom: 'var(--space-1)' }}>{s.title}</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="section bg-secondary" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>
        <SectionLabel>Benefits</SectionLabel>
        <h2 style={{ marginBottom: 'var(--space-8)' }}>Certificates on Autopilot</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', textAlign: 'left' }}>
          {[
            'Zero certificate-related outages',
            'Automated compliance with SOC 2, ISO 27001',
            'Support for multiple Certificate Authorities',
            'Native Kubernetes and cloud provider integration',
            'Real-time dashboard with complete certificate inventory',
            'Multi-channel alerting (Slack, email, PagerDuty, webhooks)',
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
              <Check size={16} style={{ color: 'var(--signal-green)', flexShrink: 0 }} />
              <span style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTASection
      title="Stop Tracking Certificates in Spreadsheets"
      subtitle="Automate your certificate lifecycle with CertAutoPilot."
      primaryText="Visit certautopilot.com"
      primaryTo="https://www.certautopilot.com"
      secondaryText="Contact Us"
      secondaryTo="/contact"
    />
  </>
);

export default CertAutoPilotPage;
