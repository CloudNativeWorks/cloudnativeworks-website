import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield, Layers, RefreshCw, Container, FileText, Heart,
  Users, Hash, Bot, BarChart3, Zap, Search,
  ArrowRight, Check, Minus,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import FeatureGrid from '../components/FeatureGrid';
import CTASection from '../components/CTASection';
import SectionLabel from '../components/SectionLabel';

const color = 'var(--product-elchi)';

const features = [
  { icon: Shield, title: 'Web Application Firewall (WAF)', desc: 'Built-in WAF with OWASP Core Rule Set (CRS) for advanced security protection against common web attacks.' },
  { icon: Layers, title: '3-Process Distributed Architecture', desc: 'Scalable architecture with UI, API, and Worker processes for enterprise-grade performance and reliability.' },
  { icon: RefreshCw, title: 'Full xDS Protocol Support', desc: 'Comprehensive support for ADS, CDS, EDS, LDS, RDS, and VHDS protocols built on go-control-plane.' },
  { icon: Container, title: 'Kubernetes Auto-Discovery', desc: 'Automatic discovery and integration with Kubernetes endpoints for seamless service mesh management.' },
  { icon: FileText, title: 'Scenario Workflows & Templates', desc: 'Pre-built workflows and templates for common configurations to accelerate deployment and reduce errors.' },
  { icon: Heart, title: 'Health Monitoring & Auto-Recovery', desc: 'Continuous health monitoring with automatic recovery mechanisms to ensure high availability.' },
  { icon: Users, title: 'Enterprise Multi-Tenancy', desc: '4-Tier RBAC system (Owner, Admin, Editor, Viewer) with JWT authentication for secure multi-tenant environments.' },
  { icon: Hash, title: 'Multi-Version Envoy Support', desc: 'Support for Envoy versions 1.27 to 1.35+ with version-based routing capabilities.' },
  { icon: Bot, title: 'AI-Powered Configuration Analysis', desc: 'Intelligent configuration analysis and automated log troubleshooting via OpenRouter AI integration.' },
  { icon: BarChart3, title: 'Advanced Metrics Visualization', desc: 'Comprehensive metrics visualization using ECharts with VictoriaMetrics integration.' },
  { icon: Zap, title: 'Proto-to-UI Auto-Generation', desc: 'Automatically generate UI forms from protobuf definitions for rapid development.' },
  { icon: Search, title: 'Audit Logging & Compliance', desc: 'Complete audit trail and compliance tracking for enterprise governance requirements.' },
];

const comparisonRows = [
  { feature: 'Operating Model', competitor: 'Active-Passive', elchi: 'Active-Active across all proxies' },
  { feature: 'High Availability', competitor: 'Standard resilience, single point of failure risk', elchi: 'High resilience with seamless operations' },
  { feature: 'Architecture', competitor: 'Hardware-limited processor and memory', elchi: 'Horizontally scalable, no hardware constraints' },
  { feature: 'Capacity Expansion', competitor: 'Costly hardware upgrades required', elchi: 'Fast resource scaling at minimum cost' },
  { feature: 'SSL/WAF Performance', competitor: 'CPU bottleneck under load', elchi: 'Distributed load across instances' },
  { feature: 'Throughput', competitor: 'Fixed limits per hardware box', elchi: 'Linear scaling with infrastructure' },
];

const ElchiPage = () => (
  <>
    <PageHero
      logo="/elchi-logo.png"
      logoAlt="Elchi"
      title={<>Enterprise Proxy Management for <span style={{ color }}>Envoy at Scale</span></>}
      subtitle="Centralized control plane for Envoy proxy fleets. 3-process distributed architecture, full xDS protocol support, WAF with OWASP CRS, and Kubernetes auto-discovery."
    >
      <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', marginTop: 'var(--space-8)', flexWrap: 'wrap' }}>
        <a href="https://elchi.io" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
          Visit Elchi.io <ArrowRight size={16} />
        </a>
        <Link to="/contact" className="btn btn-ghost btn-lg">Request a Demo</Link>
      </div>
    </PageHero>

    {/* Key Features */}
    <section className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
          <SectionLabel>Key Features</SectionLabel>
          <h2>Enterprise-Grade Envoy Management</h2>
        </div>
        <FeatureGrid features={features} columns={3} accentColor={color} />
      </div>
    </section>

    {/* Enterprise Benefits */}
    <section className="section bg-secondary" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
          <SectionLabel>Enterprise Benefits</SectionLabel>
          <h2>Why Enterprises Choose Elchi</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          {[
            { title: 'Reduced Total Cost of Ownership', desc: 'Eliminates high upfront investment, expensive annual licensing, and hardware refresh cycles of traditional appliance-based load balancers.' },
            { title: 'True Horizontal Scalability', desc: 'Expand traffic capacity by deploying additional Envoy instances — no hardware limits, no chassis constraints.' },
            { title: 'Active-Active Architecture', desc: 'Maximum throughput and reliability across all Envoy proxies, unlike legacy Active-Passive failover designs.' },
            { title: 'Superior Performance Under Load', desc: 'Avoids CPU saturation during intensive SSL offloading by distributing the load across multiple instances.' },
            { title: 'Unlimited Throughput Potential', desc: 'Throughput scales elastically with your infrastructure. No licensing penalties, no performance ceilings.' },
          ].map((b, i) => (
            <div key={i} className="card">
              <h4 style={{ marginBottom: 'var(--space-2)' }}>{b.title}</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Comparison Table */}
    <section className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
          <SectionLabel>Comparison</SectionLabel>
          <h2>Elchi vs. Traditional Load Balancers</h2>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
                <th style={{ padding: 'var(--space-4)', textAlign: 'left', color: 'var(--text-tertiary)', fontSize: '0.8125rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Feature</th>
                <th style={{ padding: 'var(--space-4)', textAlign: 'left', color: 'var(--text-tertiary)', fontSize: '0.8125rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Traditional</th>
                <th style={{ padding: 'var(--space-4)', textAlign: 'left', color, fontSize: '0.8125rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Elchi</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <td style={{ padding: 'var(--space-4)', fontWeight: 500, color: 'var(--text-primary)', fontSize: '0.875rem' }}>{row.feature}</td>
                  <td style={{ padding: 'var(--space-4)', color: 'var(--text-tertiary)', fontSize: '0.875rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Minus size={14} style={{ color: 'var(--signal-red)', opacity: 0.7 }} />
                      {row.competitor}
                    </span>
                  </td>
                  <td style={{ padding: 'var(--space-4)', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Check size={14} style={{ color: 'var(--signal-green)' }} />
                      {row.elchi}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <CTASection
      title="Modernize Your Proxy Infrastructure"
      subtitle="See how Elchi can replace your legacy load balancer appliances with a modern, scalable control plane."
      primaryText="Visit Elchi.io"
      primaryTo="https://elchi.io"
      secondaryText="Talk to Engineering"
      secondaryTo="/contact"
    />
  </>
);

export default ElchiPage;
