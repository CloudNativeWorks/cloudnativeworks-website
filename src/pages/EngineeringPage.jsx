import React from 'react';
import { Code2, Server, Brain, Layers, Shield, Zap, GitBranch, Database } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import SectionLabel from '../components/SectionLabel';

const principles = [
  {
    icon: Code2,
    title: 'Protocol-Native Design',
    desc: 'We integrate at the protocol level. xDS for proxy management, database wire protocols for observability, X.509 for certificate lifecycle, gRPC for inter-service communication. No abstraction layers that hide the complexity your team needs to understand.',
  },
  {
    icon: Server,
    title: 'Production-First Engineering',
    desc: 'Every feature is designed for production environments first. Graceful degradation under failure, deterministic behavior under load, and operational transparency at every layer. We don\'t ship features that only work in demos.',
  },
  {
    icon: Brain,
    title: 'Autonomous, Not Automated',
    desc: 'Automation executes predefined steps. Our systems observe, reason, and act. ClusterEye autonomously optimizes queries. CertAutoPilot predicts rotation schedules. This is intelligence embedded at the operational layer — not a chatbot bolted on top.',
  },
  {
    icon: Layers,
    title: 'Distributed by Default',
    desc: 'Every product is built with distributed systems principles from the ground up. No single points of failure, horizontal scalability without architectural limits, and eventually consistent state management where it matters.',
  },
  {
    icon: Shield,
    title: 'Security as Architecture',
    desc: 'Security is not a feature layer — it\'s an architectural decision. mTLS between components, encrypted data at rest, RBAC at every API boundary, and audit logging that captures every state change.',
  },
  {
    icon: Zap,
    title: 'Operational Transparency',
    desc: 'Our products expose their internal state. Health endpoints, structured logging, Prometheus metrics, and detailed audit trails. When something goes wrong at 3 AM, your on-call engineer should understand what happened in minutes, not hours.',
  },
];

const techStack = [
  { category: 'Languages', items: ['Go', 'TypeScript', 'Python'] },
  { category: 'Protocols', items: ['gRPC', 'xDS', 'X.509/ACME', 'Database Wire Protocols'] },
  { category: 'Infrastructure', items: ['Kubernetes', 'Envoy', 'Prometheus', 'VictoriaMetrics'] },
  { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MSSQL', 'ClickHouse'] },
  { category: 'AI/ML', items: ['Anomaly Detection', 'Query Optimization', 'Predictive Analytics'] },
  { category: 'Security', items: ['mTLS', 'OWASP CRS', 'JWT/RBAC', 'Audit Logging'] },
];

const EngineeringPage = () => (
  <>
    <PageHero
      label="Engineering"
      title={<>Built by Engineers, <span className="gradient-text">for Engineers</span></>}
      subtitle="We don't wrap APIs around existing tools and call it a product. Every CloudNativeWorks system is designed from first principles — from the protocol layer up."
    />

    {/* Engineering Principles */}
    <section className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
          <SectionLabel>Engineering Principles</SectionLabel>
          <h2>How We Build</h2>
        </div>
        <div className="grid-2" style={{ maxWidth: '960px', margin: '0 auto' }}>
          {principles.map((p, i) => (
            <div key={i} style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'var(--accent-muted)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <p.icon size={18} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <div>
                <h4 style={{ marginBottom: 'var(--space-2)' }}>{p.title}</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Technology Stack */}
    <section className="section bg-secondary" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
          <SectionLabel>Technology Stack</SectionLabel>
          <h2>What We Build With</h2>
        </div>
        <div className="grid-3" style={{ maxWidth: '960px', margin: '0 auto' }}>
          {techStack.map((ts, i) => (
            <div key={i}>
              <h4 style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 'var(--space-3)' }}>
                {ts.category}
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                {ts.items.map((item, j) => (
                  <span key={j} className="badge badge-neutral">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Open Source */}
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
          <GitBranch size={24} style={{ color: 'var(--accent-primary)' }} />
        </div>
        <h2 style={{ marginBottom: 'var(--space-4)' }}>Open-Core Philosophy</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', lineHeight: 1.7 }}>
          We believe in open source. Core product functionality is available to the community.
          Enterprise features — RBAC, multi-tenancy, compliance reporting, and dedicated support —
          are available for organizations that need them. We grow by building trust, not by creating lock-in.
        </p>
      </div>
    </section>

    <CTASection
      title="Want to Go Deeper?"
      subtitle="Read our engineering blog or talk to our team about how we build infrastructure systems."
      primaryText="Talk to Engineering"
      primaryTo="/contact"
      secondaryText="Read the Blog"
      secondaryTo="/blog"
    />
  </>
);

export default EngineeringPage;
