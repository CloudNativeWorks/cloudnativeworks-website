import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Network, GitMerge, ShieldCheck, ArrowRight, Layers } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import SectionLabel from '../components/SectionLabel';

const solutions = [
  {
    icon: Database,
    color: 'var(--product-clustereye)',
    title: 'Observability at Scale',
    desc: 'Gain deep visibility into your database infrastructure. Monitor PostgreSQL, MongoDB, MSSQL, and ClickHouse clusters from a single platform with AI-powered anomaly detection and autonomous optimization.',
    product: 'ClusterEye',
    productPath: '/products/clustereye',
    capabilities: ['Multi-database monitoring', 'AI-powered query optimization', 'Predictive anomaly detection', 'Automated failover management'],
  },
  {
    icon: Network,
    color: 'var(--product-elchi)',
    title: 'Traffic Management & Proxy Control',
    desc: 'Take control of your Envoy proxy fleet with a centralized management plane. Route traffic intelligently, enforce security policies, and scale your proxy infrastructure without hardware constraints.',
    product: 'Elchi',
    productPath: '/products/elchi',
    capabilities: ['Envoy fleet management', 'Full xDS protocol support', 'WAF with OWASP CRS', 'Kubernetes auto-discovery'],
  },
  {
    icon: GitMerge,
    color: 'var(--product-mergepilot)',
    title: 'Pipeline Automation',
    desc: 'Eliminate manual CI/CD bottlenecks with deterministic pipeline orchestration. Enforce merge policies, automate deployments, and ensure production safety with built-in rollback capabilities.',
    product: 'MergePilot',
    productPath: '/products/mergepilot',
    capabilities: ['Deterministic builds', 'Policy-driven merges', 'Progressive rollouts', 'Multi-repo coordination'],
  },
  {
    icon: ShieldCheck,
    color: 'var(--product-certautopilot)',
    title: 'Certificate & Compliance Automation',
    desc: 'Automate the entire certificate lifecycle — from issuance to rotation. Prevent certificate-related outages and maintain compliance with automated audit trails.',
    product: 'CertAutoPilot',
    productPath: '/products/certautopilot',
    capabilities: ['Automated certificate rotation', 'Multi-CA management', 'Compliance audit trails', 'Expiration prevention'],
  },
];

const SolutionsPage = () => (
  <>
    <PageHero
      label="Solutions"
      title={<>Infrastructure Solutions for <span className="gradient-text">Every Layer</span></>}
      subtitle="From database observability to certificate management, CloudNativeWorks products address the critical operational challenges of modern infrastructure."
    />

    <section className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
          {solutions.map((sol, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--space-8)',
              alignItems: 'start',
              padding: 'var(--space-8)',
              borderRadius: 'var(--card-radius)',
              border: '1px solid var(--border-primary)',
              background: 'var(--bg-tertiary)',
            }}>
              <div>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: `color-mix(in srgb, ${sol.color} 15%, transparent)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-4)',
                }}>
                  <sol.icon size={20} style={{ color: sol.color }} />
                </div>
                <h3 style={{ marginBottom: 'var(--space-3)' }}>{sol.title}</h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
                  {sol.desc}
                </p>
                <Link to={sol.productPath} style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: sol.color,
                }}>
                  Explore {sol.product} <ArrowRight size={14} />
                </Link>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 'var(--space-2)' }}>
                  Key Capabilities
                </p>
                {sol.capabilities.map((cap, j) => (
                  <div key={j} style={{
                    padding: 'var(--space-3) var(--space-4)',
                    borderRadius: '8px',
                    border: '1px solid var(--border-subtle)',
                    background: 'var(--bg-secondary)',
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                  }}>
                    {cap}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Full Control Plane */}
    <section className="section bg-secondary" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
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
          <Layers size={24} style={{ color: 'var(--accent-primary)' }} />
        </div>
        <h2 style={{ marginBottom: 'var(--space-4)' }}>Full Infrastructure Control Plane</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', lineHeight: 1.7 }}>
          Deploy all four products together for a unified infrastructure control layer. Observe your databases, manage your proxy fleet, automate your pipelines, and secure your certificates — all from a single vendor with consistent enterprise-grade quality.
        </p>
      </div>
    </section>

    <CTASection />

    <style>{`
      @media (max-width: 768px) {
        div[style*="grid-template-columns: 1fr 1fr"][style*="padding: var(--space-8)"] {
          grid-template-columns: 1fr !important;
        }
      }
    `}</style>
  </>
);

export default SolutionsPage;
