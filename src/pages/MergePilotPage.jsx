import React from 'react';
import { Link } from 'react-router-dom';
import {
  GitMerge, Workflow, Lock, Shield, RotateCcw, Layers,
  ArrowRight, Check,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import FeatureGrid from '../components/FeatureGrid';
import CTASection from '../components/CTASection';
import SectionLabel from '../components/SectionLabel';

const color = 'var(--product-mergepilot)';

const features = [
  { icon: GitMerge, title: 'Automated Merge Workflows', desc: 'Define and enforce merge policies across repositories. Automatic validation, approval routing, and conflict detection.' },
  { icon: Workflow, title: 'Pipeline Orchestration', desc: 'Orchestrate complex multi-stage pipelines with dependency management, parallel execution, and rollback capabilities.' },
  { icon: Lock, title: 'Deterministic Builds', desc: 'Reproducible build outputs with locked dependencies, hermetic execution, and cryptographic verification.' },
  { icon: Shield, title: 'Policy Engine', desc: 'Enforce deployment policies including required approvals, test coverage thresholds, and security scan gates.' },
  { icon: RotateCcw, title: 'Production-Safe Deployments', desc: 'Canary deployments, progressive rollouts, and automatic rollback on failure detection.' },
  { icon: Layers, title: 'Multi-Repository Support', desc: 'Coordinate changes across multiple repositories with atomic cross-repo merge capabilities.' },
];

const useCases = [
  { title: 'Enforce Merge Policies at Scale', desc: 'Standardize how code gets merged across all your repositories. Required approvals, automated checks, and policy gates ensure only production-ready code reaches your main branch.' },
  { title: 'Eliminate Pipeline Flakiness', desc: 'Deterministic pipeline execution means the same inputs always produce the same outputs. No more "it worked on my machine" or non-reproducible builds.' },
  { title: 'Safe Production Deployments', desc: 'Progressive rollouts with automatic health checks. If a canary deployment shows degradation, MergePilot rolls back automatically — before your users notice.' },
];

const MergePilotPage = () => (
  <>
    <PageHero
      logo="/mergepilot-logo.png"
      logoAlt="MergePilot"
      title={<>Deterministic <span style={{ color }}>CI/CD Pipeline Automation</span></>}
      subtitle="Automate merge workflows, enforce pipeline policies, and eliminate manual CI/CD bottlenecks. Deterministic builds. Production-safe deployments."
    >
      <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', marginTop: 'var(--space-8)', flexWrap: 'wrap' }}>
        <a href="https://www.merge-pilot.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
          Visit merge-pilot.com <ArrowRight size={16} />
        </a>
        <Link to="/contact" className="btn btn-ghost btn-lg">Contact Us</Link>
      </div>
    </PageHero>

    {/* Features */}
    <section className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
          <SectionLabel>Core Capabilities</SectionLabel>
          <h2>Pipeline Automation, Engineered Right</h2>
        </div>
        <FeatureGrid features={features} columns={3} accentColor={color} />
      </div>
    </section>

    {/* Use Cases */}
    <section className="section bg-secondary" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
          <SectionLabel>Use Cases</SectionLabel>
          <h2>How Teams Use MergePilot</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          {useCases.map((uc, i) => (
            <div key={i} className="card">
              <h4 style={{ marginBottom: 'var(--space-2)' }}>{uc.title}</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{uc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Key Benefits */}
    <section className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>
        <SectionLabel>Why MergePilot</SectionLabel>
        <h2 style={{ marginBottom: 'var(--space-8)' }}>Ship Faster, Ship Safer</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', textAlign: 'left' }}>
          {[
            'Deterministic pipelines — same inputs, same outputs, every time',
            'Policy-driven merges eliminate manual review bottlenecks',
            'Automatic rollback on deployment failures',
            'Multi-repo coordination for microservices architectures',
            'Full audit trail for compliance and governance',
            'Integrates with existing CI/CD toolchains',
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
      title="Ready to Eliminate Pipeline Bottlenecks?"
      subtitle="See how deterministic pipelines change your deployment workflow."
      primaryText="Visit merge-pilot.com"
      primaryTo="https://www.merge-pilot.com"
      secondaryText="Contact Us"
      secondaryTo="/contact"
    />
  </>
);

export default MergePilotPage;
