import React from 'react';

const ElchiDetail = () => {
    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
            <style>{`
                @media (max-width: 768px) {
                    .container {
                        padding: 0 1rem !important;
                    }
                    img {
                        max-width: 100%;
                        height: auto !important;
                    }
                }
            `}</style>
            <div className="container">
                {/* Hero Section */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <img src="https://www.elchi.io/logo.png" alt="Elchi.io" style={{ height: '60px', marginBottom: '2rem' }} />
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                        Enterprise Envoy Proxy Management Platform <br />
                        <span className="gradient-text">3-Process Architecture</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: '#94a3b8', maxWidth: '800px', margin: '0 auto' }}>
                        Enterprise-grade Envoy proxy management with distributed architecture, K8s discovery, multi-tenancy, intelligent automation, and comprehensive xDS support
                    </p>
                </div>

                {/* What is Elchi */}
                <section className="glass-panel" style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>What is Elchi?</h2>
                    <p style={{ color: '#cbd5e1', lineHeight: 1.8 }}>
                        Elchi is an enterprise-grade Envoy proxy management platform with a 3-process distributed architecture (UI, API, Worker).
                        It provides comprehensive features including intelligent configuration analysis via OpenRouter AI integration (bring your own API key),
                        Kubernetes auto-discovery, multi-tenancy with 4-tier RBAC, full xDS protocol support, automated health monitoring,
                        and Web Application Firewall (WAF) with OWASP CRS. Designed for managing Envoy proxies at scale with modern UI and intelligent automation.
                    </p>
                </section>

                {/* Key Features */}
                <section className="glass-panel" style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Key Features</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        {[
                            { icon: '🛡️', title: 'Web Application Firewall (WAF)', desc: 'Built-in WAF with OWASP Core Rule Set (CRS) for advanced security protection against common web attacks.' },
                            { icon: '🏗️', title: '3-Process Distributed Architecture', desc: 'Scalable architecture with UI, API, and Worker processes for enterprise-grade performance and reliability.' },
                            { icon: '🔄', title: 'Full xDS Protocol Support', desc: 'Comprehensive support for ADS, CDS, EDS, LDS, RDS, and VHDS protocols built on go-control-plane.' },
                            { icon: '☸️', title: 'Kubernetes Auto-Discovery', desc: 'Automatic discovery and integration with Kubernetes endpoints for seamless service mesh management.' },
                            { icon: '📋', title: 'Scenario Workflows & Templates', desc: 'Pre-built workflows and templates for common configurations to accelerate deployment and reduce errors.' },
                            { icon: '💚', title: 'Health Monitoring & Auto-Recovery', desc: 'Continuous health monitoring with automatic recovery mechanisms to ensure high availability.' },
                            { icon: '👥', title: 'Enterprise Multi-Tenancy', desc: '4-Tier RBAC system (Owner, Admin, Editor, Viewer) with JWT authentication for secure multi-tenant environments.' },
                            { icon: '🔢', title: 'Multi-Version Envoy Support', desc: 'Support for Envoy versions 1.27 to 1.35+ with version-based routing capabilities.' },
                            { icon: '🤖', title: 'AI-Powered Configuration Analysis', desc: 'Intelligent configuration analysis and automated log troubleshooting via OpenRouter AI integration (BYOK).' },
                            { icon: '📊', title: 'Advanced Metrics Visualization', desc: 'Comprehensive metrics visualization using ECharts with VictoriaMetrics integration.' },
                            { icon: '⚡', title: 'Proto-to-UI Auto-Generation', desc: 'Automatically generate UI forms from protobuf definitions for rapid development.' },
                            { icon: '🔍', title: 'Audit Logging & Compliance', desc: 'Complete audit trail and compliance tracking for enterprise governance requirements.' }
                        ].map((feature, idx) => (
                            <div key={idx} style={{ padding: '1.5rem', background: 'white', borderRadius: '0.5rem', border: '1px solid var(--card-border)', boxShadow: '0 2px 4px var(--shadow-color)' }}>
                                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{feature.icon}</div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--accent-color)' }}>{feature.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Enterprise Benefits */}
                <section className="glass-panel" style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Enterprise Benefits</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {[
                            { title: 'Reduced Total Cost of Ownership (TCO)', desc: 'Traditional enterprise load balancer appliances come with high upfront investment, expensive annual licensing, and hardware refresh cycles. Elchi eliminates these costs by providing a software-defined, centrally managed control plane for Envoy.' },
                            { title: 'True Horizontal Scalability', desc: 'Many appliance-based load balancing solutions cannot scale linearly. Elchi enables you to expand traffic capacity simply by deploying additional Envoy instances — no hardware limits, no chassis constraints.' },
                            { title: 'Active-Active Architecture by Design', desc: 'Legacy load balancers often rely on Active-Passive failover, leaving valuable hardware capacity unused. Elchi\'s control plane supports Active-Active deployments across all Envoy proxies, delivering maximum throughput and reliability.' },
                            { title: 'Superior Performance Under High Traffic Loads', desc: 'Physical load balancer appliances frequently struggle with CPU bottlenecks during intensive SSL offloading. By leveraging Envoy\'s modern, optimized data plane and distributing the load across multiple instances, Elchi avoids CPU saturation and maintains stable performance even during traffic spikes.' },
                            { title: 'Unlimited Throughput Potential', desc: 'Instead of being restricted by the fixed throughput limits of hardware boxes, Elchi allows throughput to scale elastically with your infrastructure. Add more Envoy nodes and scale linearly — with no licensing penalties and no performance ceilings.' }
                        ].map((benefit, idx) => (
                            <div key={idx} style={{ padding: '1.5rem', background: 'white', borderRadius: '0.5rem', border: '1px solid var(--card-border)', boxShadow: '0 2px 4px var(--shadow-color)' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--accent-color)' }}>{benefit.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Comparison Table */}
                <section className="glass-panel" style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Compare & Differences</h2>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid var(--card-border)' }}>
                                    <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--accent-color)' }}>Feature</th>
                                    <th style={{ padding: '1rem', textAlign: 'left', color: '#94a3b8' }}>Competitor Solutions</th>
                                    <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--accent-color)' }}>Elchi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { feature: 'Operating Model', competitor: 'Active - Passive', elchi: 'Active - Active - Active\nWhatever capacity you need' },
                                    { feature: 'High Availability (HA)', competitor: 'Standard Resilience (Higher risk of a single point of failure)', elchi: 'High Resilience (Ensures more robust and seamless operations)' },
                                    { feature: 'Architectural Constraint', competitor: 'Hardware-based (Limited processor and memory resources)', elchi: 'Horizontally Scalable Architecture provides enhanced hardware capacity' },
                                    { feature: 'Capacity Expansion', competitor: 'Requires difficult and costly hardware upgrades', elchi: 'Delivers fast resource scaling at minimum cost when capacity is insufficient' },
                                    { feature: 'Processor-Intensive Services', competitor: 'CPU intensity can be a bottleneck for services like SSL/WAF', elchi: 'Correctly and quickly addresses the needs of processor-intensive services (SSL, WAF)' },
                                    { feature: 'Network Limitation', competitor: 'Restricted by the fixed network connections and speeds of the underlying hardware', elchi: 'Unlimited growth potential due to the Horizontally Scalable Architecture' },
                                    { feature: 'Throughput Increase', competitor: 'Difficult to increase throughput without hardware changes', elchi: 'Throughput capacity scales linearly with every new piece of hardware added' }
                                ].map((row, idx) => (
                                    <tr key={idx} style={{ borderBottom: '1px solid var(--card-border)' }}>
                                        <td style={{ padding: '1rem', color: 'var(--text-color)', fontWeight: 600 }}>{row.feature}</td>
                                        <td style={{ padding: '1rem', color: '#94a3b8' }}>{row.competitor}</td>
                                        <td style={{ padding: '1rem', color: '#cbd5e1', fontWeight: 500 }}>{row.elchi}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* CTA */}
                <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                    <a href="https://elchi.io" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                        Visit Elchi.io →
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ElchiDetail;
