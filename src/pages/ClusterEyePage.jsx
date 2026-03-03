import React from 'react';
import { Link } from 'react-router-dom';
import {
  Brain, BarChart3, FileText, Zap, Search, Bot,
  RefreshCw, Monitor, TrendingUp, Target, Database,
  ArrowRight, Check,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import FeatureGrid from '../components/FeatureGrid';
import CTASection from '../components/CTASection';
import SectionLabel from '../components/SectionLabel';

const color = 'var(--product-clustereye)';

const aiFeatures = [
  { icon: Brain, title: 'Intelligent Configuration Analysis', desc: 'AI algorithms analyze your database configuration and automatically provide optimization recommendations specific to each database type.' },
  { icon: BarChart3, title: 'Query Performance Visualization', desc: 'Visualize complex query plans, identify bottlenecks, and get index recommendations through AI-assisted execution plan analysis.' },
  { icon: FileText, title: 'Real-Time Log Analysis', desc: 'Analyze database logs in real-time. AI detects potential problems in advance and offers proactive solution recommendations.' },
  { icon: Zap, title: 'Autonomous Query Optimization', desc: 'AI models analyze query structure to suggest performance improvements and optimize database operations automatically.' },
  { icon: Search, title: 'Anomaly Detection & Predictive Analytics', desc: 'ML models learn normal database behavior, detect abnormal activities, and predict future capacity needs.' },
  { icon: Bot, title: 'Self-Learning Database Assistant', desc: 'Advanced ML algorithms learn your database usage habits and offer smarter, customized recommendations over time.' },
];

const clusterFeatures = [
  { icon: RefreshCw, title: 'Automatic Failover', desc: 'When the primary server fails, the system automatically switches to the standby server, ensuring uninterrupted service delivery.' },
  { icon: Monitor, title: 'Real-Time Cluster Monitoring', desc: 'Monitor all cluster nodes from a single dashboard with critical metrics like replication lag, disk usage, and query performance.' },
  { icon: TrendingUp, title: 'Scaling & Management', desc: 'Easily scale your cluster up or down based on your needs. Add, remove, and maintain nodes from the ClusterEye control panel.' },
  { icon: Target, title: 'Capacity Planning', desc: 'Analyzes disk occupancy and reports growth trends. Plan infrastructure investments proactively based on data-driven insights.' },
];

const databases = [
  { name: 'PostgreSQL', available: true },
  { name: 'MSSQL', available: true },
  { name: 'MongoDB', available: true },
  { name: 'ClickHouse', available: true },
  { name: 'Oracle', available: false },
  { name: 'Elastic', available: false },
];

const ClusterEyePage = () => (
  <>
    <PageHero
      logo="/clustereye-logo.png"
      logoAlt="ClusterEye"
      title={<>Database Observability & <span style={{ color }}>Autonomous DBA Platform</span></>}
      subtitle="AI-powered observability for PostgreSQL, MongoDB, MSSQL, and ClickHouse. Autonomous query optimization, predictive anomaly detection, and automated failover — without requiring a dedicated DBA."
    >
      <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', marginTop: 'var(--space-8)', flexWrap: 'wrap' }}>
        <a href="https://www.clustereye.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
          Visit ClusterEye.com <ArrowRight size={16} />
        </a>
        <Link to="/contact" className="btn btn-ghost btn-lg">Request a Demo</Link>
      </div>
    </PageHero>

    {/* Database Support */}
    <section className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
          <SectionLabel>Multi-Database Platform</SectionLabel>
          <h2>All Your Databases on One Platform</h2>
        </div>
        <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
          {databases.map((db, i) => (
            <div key={i} style={{
              padding: 'var(--space-4) var(--space-6)',
              borderRadius: 'var(--card-radius)',
              border: '1px solid var(--border-primary)',
              background: db.available ? 'var(--bg-tertiary)' : 'var(--bg-secondary)',
              opacity: db.available ? 1 : 0.5,
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-3)',
            }}>
              <Database size={16} style={{ color: db.available ? color : 'var(--text-tertiary)' }} />
              <span style={{ fontSize: '0.875rem', fontWeight: 500, color: db.available ? 'var(--text-primary)' : 'var(--text-tertiary)' }}>
                {db.name}
              </span>
              {!db.available && <span style={{ fontSize: '0.6875rem', color: 'var(--text-tertiary)' }}>(Soon)</span>}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* AI-Powered Analytics */}
    <section className="section bg-secondary" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
          <SectionLabel>AI-Powered Analytics</SectionLabel>
          <h2>Autonomous Database Intelligence</h2>
        </div>
        <FeatureGrid features={aiFeatures} columns={3} accentColor={color} />
      </div>
    </section>

    {/* Cluster Control */}
    <section className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
          <SectionLabel>Cluster Control</SectionLabel>
          <h2>Full Control Over Your Database Fleet</h2>
        </div>
        <FeatureGrid features={clusterFeatures} columns={2} accentColor={color} />
      </div>
    </section>

    {/* Advantages */}
    <section className="section bg-secondary" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container" style={{ maxWidth: '720px' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
          <SectionLabel>Advantages</SectionLabel>
          <h2>Why Teams Choose ClusterEye</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          {[
            'Cloud-based architecture — no agent installation required',
            'Web and mobile access from any environment',
            'Unified control over your entire database infrastructure',
            'Proactive problem prevention with intelligent alerting',
            'AI-powered decision support for database operations',
            'Reduced operational load — fraction of a full-time DBA cost',
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', padding: 'var(--space-3) 0' }}>
              <Check size={16} style={{ color: 'var(--signal-green)', flexShrink: 0 }} />
              <span style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTASection
      title="Take Control of Your Database Infrastructure"
      subtitle="See how ClusterEye can reduce your operational burden while improving database reliability."
      primaryText="Visit ClusterEye.com"
      primaryTo="https://www.clustereye.com"
      secondaryText="Talk to Engineering"
      secondaryTo="/contact"
    />
  </>
);

export default ClusterEyePage;
