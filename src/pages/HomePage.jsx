import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Shield, Lock, Cpu, Maximize2, Brain, Globe,
  Check, Layers, Workflow, Server, Key, Radio, Container,
  BarChart3, Fingerprint, Zap, Code2,
} from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import ProductCard from '../components/ProductCard';
import CTASection from '../components/CTASection';
import { products } from '../data/products';

/* ═══════════════════════════════════════════════════════
   Section 1: Hero
   ═══════════════════════════════════════════════════════ */
const Hero = () => (
  <section style={{
    minHeight: 'calc(100vh - var(--nav-height))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  }}>
    {/* Background effects */}
    <div style={{
      position: 'absolute',
      inset: 0,
      backgroundImage: 'radial-gradient(circle, rgba(42,42,60,0.4) 1px, transparent 1px)',
      backgroundSize: '32px 32px',
      opacity: 0.5,
    }} />
    <div style={{
      position: 'absolute',
      top: '15%',
      left: '20%',
      width: '400px',
      height: '400px',
      background: 'radial-gradient(circle, rgba(59,130,246,0.08), transparent 70%)',
      filter: 'blur(60px)',
      pointerEvents: 'none',
    }} />
    <div style={{
      position: 'absolute',
      bottom: '10%',
      right: '15%',
      width: '350px',
      height: '350px',
      background: 'radial-gradient(circle, rgba(139,92,246,0.06), transparent 70%)',
      filter: 'blur(60px)',
      pointerEvents: 'none',
    }} />

    <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1, padding: 'var(--space-16) var(--space-8)' }}>
      <SectionLabel>Infrastructure Control Layer Technologies</SectionLabel>
      <h1 style={{
        fontSize: 'clamp(2.25rem, 5vw, 4rem)',
        fontWeight: 800,
        lineHeight: 1.05,
        marginBottom: 'var(--space-6)',
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto',
        letterSpacing: '-0.02em',
      }}>
        Engineering the Control Plane for{' '}
        <span className="gradient-text">Modern Infrastructure</span>
      </h1>
      <p style={{
        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
        color: 'var(--text-secondary)',
        maxWidth: '580px',
        margin: '0 auto var(--space-8)',
        lineHeight: 1.7,
      }}>
        We build the observability, automation, and control plane systems that production infrastructure demands. Purpose-built. Enterprise-ready. Air-gapped capable.
      </p>
      <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/products" className="btn btn-primary btn-lg">
          Explore Products <ArrowRight size={16} />
        </Link>
        <Link to="/contact" className="btn btn-ghost btn-lg">
          Talk to Engineering
        </Link>
      </div>

      {/* Product indicators */}
      <div style={{
        display: 'flex',
        gap: 'var(--space-8)',
        justifyContent: 'center',
        marginTop: 'var(--space-16)',
        flexWrap: 'wrap',
      }}>
        {products.map(p => (
          <Link key={p.id} to={p.path} style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            color: 'var(--text-tertiary)',
            fontSize: '0.8125rem',
            fontWeight: 500,
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: p.color,
              boxShadow: `0 0 8px ${p.colorHex}40`,
            }} />
            {p.name}
          </Link>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════
   Section 2: Product Ecosystem
   ═══════════════════════════════════════════════════════ */
const ProductEcosystem = () => (
  <section className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
        <SectionLabel>Product Ecosystem</SectionLabel>
        <h2 style={{ marginBottom: 'var(--space-4)' }}>Four Products. One Control Layer.</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '540px', margin: '0 auto', fontSize: '1.0625rem' }}>
          Each product is purpose-built to solve a critical infrastructure challenge. Independent by design, enterprise-grade by default.
        </p>
      </div>
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
);

/* ═══════════════════════════════════════════════════════
   Section 3: Engineering Philosophy
   ═══════════════════════════════════════════════════════ */
const principles = [
  {
    title: 'Protocol-Native Design',
    desc: 'Our products integrate at the protocol level — xDS for proxy management, wire protocols for database observability, X.509 for certificate lifecycle. No abstraction layers that hide complexity.',
    icon: Code2,
  },
  {
    title: 'Production-First Engineering',
    desc: 'Every feature is designed for production environments first. Graceful degradation, deterministic behavior, and operational transparency are non-negotiable.',
    icon: Server,
  },
  {
    title: 'Autonomous, Not Automated',
    desc: 'Automation executes predefined steps. Our systems observe, reason, and act — from autonomous query optimization in ClusterEye to predictive certificate rotation in CertAutoPilot.',
    icon: Brain,
  },
];

const EngineeringPhilosophy = () => (
  <section className="section bg-secondary" style={{ borderTop: '1px solid var(--border-subtle)' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-12)', alignItems: 'start' }}>
        <div>
          <SectionLabel>Engineering Philosophy</SectionLabel>
          <h2 style={{ marginBottom: 'var(--space-4)' }}>
            Built by Engineers, for Engineers
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', lineHeight: 1.7 }}>
            We don't wrap APIs around existing tools and call it a product. Every CloudNativeWorks system is designed from first principles — from the protocol layer up. We build control planes, not dashboards.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
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
    </div>
    <style>{`
      @media (max-width: 768px) {
        .section.bg-secondary .container > div {
          grid-template-columns: 1fr !important;
        }
      }
    `}</style>
  </section>
);

/* ═══════════════════════════════════════════════════════
   Section 4: Infrastructure DNA
   ═══════════════════════════════════════════════════════ */
const techStack = [
  'Kubernetes', 'Envoy', 'PostgreSQL', 'MongoDB', 'MSSQL', 'ClickHouse',
  'gRPC', 'xDS', 'X.509', 'Prometheus', 'CI/CD', 'Service Mesh', 'mTLS',
];

const InfrastructureDNA = () => (
  <section className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
    <div className="container" style={{ textAlign: 'center' }}>
      <SectionLabel>Infrastructure DNA</SectionLabel>
      <h2 style={{ marginBottom: 'var(--space-8)' }}>The Stack We Operate In</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'var(--space-3)',
        justifyContent: 'center',
        maxWidth: '720px',
        margin: '0 auto var(--space-8)',
      }}>
        {techStack.map(tech => (
          <span key={tech} className="badge-neutral badge" style={{ fontSize: '0.8125rem' }}>
            {tech}
          </span>
        ))}
      </div>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', fontStyle: 'italic' }}>
        We don't just integrate with infrastructure. We are infrastructure.
      </p>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════
   Section 5: Why CloudNativeWorks
   ═══════════════════════════════════════════════════════ */
const differentiators = [
  { icon: Lock, title: 'Air-Gapped Capable', desc: 'Every product supports fully air-gapped deployment. No phone-home telemetry, no external dependencies. Your infrastructure stays yours.' },
  { icon: Shield, title: 'Enterprise-Grade from Day One', desc: 'RBAC, multi-tenancy, audit logging, and compliance reporting are core features — not premium add-ons bolted on after the fact.' },
  { icon: Cpu, title: 'Purpose-Built, Not Assembled', desc: 'We don\'t aggregate open-source tools behind a UI. Each product is engineered from the ground up for its specific infrastructure domain.' },
  { icon: Maximize2, title: 'Horizontal Scalability', desc: 'Distributed architectures that scale linearly. No single points of failure, no hardware ceilings, no license-per-node pricing.' },
  { icon: Brain, title: 'AI Where It Matters', desc: 'AI-powered capabilities embedded at the operational layer — anomaly detection, query optimization, predictive maintenance. Not chatbot gimmicks.' },
  { icon: Globe, title: 'Open-Core Philosophy', desc: 'Core functionality available as open source. Enterprise features for organizations that need compliance, support, and advanced capabilities.' },
];

const WhyCloudNativeWorks = () => (
  <section className="section bg-secondary" style={{ borderTop: '1px solid var(--border-subtle)' }}>
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
        <SectionLabel>Why CloudNativeWorks</SectionLabel>
        <h2>What Sets Us Apart</h2>
      </div>
      <div className="grid-3">
        {differentiators.map((d, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'var(--accent-muted)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <d.icon size={20} style={{ color: 'var(--accent-primary)' }} />
            </div>
            <h4>{d.title}</h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════
   Section 6: Enterprise Readiness
   ═══════════════════════════════════════════════════════ */
const enterpriseFeatures = [
  'Multi-tenant architecture with 4-tier RBAC',
  'Full audit logging and compliance reporting',
  'Air-gapped and on-premises deployment support',
  'SSO and LDAP integration',
  'High-availability with automated failover',
  'Zero-trust networking compatible',
  'SLA-backed enterprise support',
  'Data residency and sovereignty compliance',
];

const EnterpriseReadiness = () => (
  <section className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-12)', alignItems: 'center' }}>
        <div>
          <SectionLabel>Enterprise Readiness</SectionLabel>
          <h2 style={{ marginBottom: 'var(--space-4)' }}>Production-Grade by Default</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-8)', fontSize: '1.0625rem' }}>
            Built for environments where downtime is not an option.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            {enterpriseFeatures.map((f, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <Check size={16} style={{ color: 'var(--signal-green)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            width: '100%',
            maxWidth: '360px',
            aspectRatio: '1',
            borderRadius: 'var(--card-radius)',
            border: '1px solid var(--border-primary)',
            background: 'var(--bg-tertiary)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--space-4)',
          }}>
            <Shield size={48} style={{ color: 'var(--accent-primary)', opacity: 0.8 }} />
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>Enterprise Ready</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginTop: '4px' }}>SOC 2 Aligned &middot; Air-Gapped &middot; On-Prem</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style>{`
      @media (max-width: 768px) {
        .section .container > div[style*="grid-template-columns: 1fr 1fr"] {
          grid-template-columns: 1fr !important;
        }
      }
    `}</style>
  </section>
);

/* ═══════════════════════════════════════════════════════
   Section 7: Security & Compliance (Brief)
   ═══════════════════════════════════════════════════════ */
const securityHighlights = [
  { icon: Lock, label: 'End-to-End Encryption' },
  { icon: Fingerprint, label: 'SOC 2 Aligned Practices' },
  { icon: Shield, label: 'OWASP CRS Built-In' },
];

const SecurityBrief = () => (
  <section className="section bg-secondary" style={{ borderTop: '1px solid var(--border-subtle)' }}>
    <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
      <SectionLabel>Security & Compliance</SectionLabel>
      <h2 style={{ marginBottom: 'var(--space-4)' }}>Security is Not a Feature. It's a Foundation.</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-8)', fontSize: '1.0625rem' }}>
        Our security posture is built into every layer of our products — from encrypted data at rest to mTLS between components.
      </p>
      <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap', marginBottom: 'var(--space-8)' }}>
        {securityHighlights.map((s, i) => (
          <div key={i} className="card" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-3)',
            padding: 'var(--space-4) var(--space-6)',
          }}>
            <s.icon size={18} style={{ color: 'var(--accent-primary)' }} />
            <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-primary)' }}>{s.label}</span>
          </div>
        ))}
      </div>
      <Link to="/security" style={{ fontSize: '0.875rem', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
        Read Our Security Practices <ArrowRight size={14} />
      </Link>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════
   Section 8: Technical Capabilities
   ═══════════════════════════════════════════════════════ */
const capabilities = [
  { icon: Layers, title: 'xDS Protocol Support', desc: 'Full ADS, CDS, EDS, LDS, RDS, VHDS' },
  { icon: BarChart3, title: 'Database Wire Protocols', desc: 'Native PostgreSQL, MongoDB, MSSQL monitoring' },
  { icon: Key, title: 'Certificate Management', desc: 'X.509, ACME, custom CA support' },
  { icon: Container, title: 'Kubernetes Native', desc: 'CRDs, Operators, auto-discovery' },
  { icon: Radio, title: 'Observability Stack', desc: 'Prometheus, VictoriaMetrics, ECharts' },
  { icon: Brain, title: 'AI/ML Integration', desc: 'Anomaly detection, query optimization' },
  { icon: Zap, title: 'gRPC & Protobuf', desc: 'Proto-to-UI generation, efficient wire format' },
  { icon: Workflow, title: 'WAF & Security', desc: 'OWASP CRS, rate limiting, mTLS' },
];

const TechnicalCapabilities = () => (
  <section className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
        <SectionLabel>Technical Capabilities</SectionLabel>
        <h2>Deep Infrastructure Integration</h2>
      </div>
      <div className="grid-4">
        {capabilities.map((c, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <c.icon size={20} style={{ color: 'var(--accent-primary)' }} />
            <h4 style={{ fontSize: '0.9375rem' }}>{c.title}</h4>
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-tertiary)', lineHeight: 1.6 }}>{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════
   HomePage
   ═══════════════════════════════════════════════════════ */
const HomePage = () => (
  <>
    <Hero />
    <ProductEcosystem />
    <EngineeringPhilosophy />
    <InfrastructureDNA />
    <WhyCloudNativeWorks />
    <EnterpriseReadiness />
    <SecurityBrief />
    <TechnicalCapabilities />
    <CTASection />
  </>
);

export default HomePage;
