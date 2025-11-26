import React from 'react';

const ElchiDetail = () => {
    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
            <div className="container">
                {/* Hero Section */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <img src="https://www.elchi.io/logo.png" alt="Elchi.io" style={{ height: '60px', marginBottom: '2rem' }} />
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                        Next-Generation Enterprise Resilience <br />
                        <span className="gradient-text">and Scalability</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: '#94a3b8', maxWidth: '800px', margin: '0 auto' }}>
                        Modern, high-performance Envoy Control Plane for centralized management
                    </p>
                </div>

                {/* What is Elchi */}
                <section className="glass-panel" style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>What is Elchi?</h2>
                    <p style={{ color: '#cbd5e1', lineHeight: 1.8 }}>
                        Elchi is a modern, high-performance Envoy Control Plane and centralized management platform
                        designed to simplify and standardize the configuration and operation of Envoy Proxy environments.
                        It enables organizations to deploy, manage, validate, and distribute Envoy configurations from a
                        single, secure, and intuitive web interface.
                    </p>
                </section>

                {/* Key Features */}
                <section className="glass-panel" style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Key Features</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        {[
                            { icon: '🎯', title: 'Centralized Envoy Management', desc: 'Manage all Envoy Proxy configurations — Listeners, Clusters, Endpoints, Routes, Filters — from a unified UI.' },
                            { icon: '✅', title: 'Real-Time Configuration Validation', desc: 'Dual-layer validation (frontend + backend) prevents misconfigurations from reaching production.' },
                            { icon: '🔄', title: 'Full xDS Protocol Support', desc: 'Built on go-control-plane, Elchi delivers dynamic and incremental configuration updates to all Envoy components.' },
                            { icon: '📝', title: 'Save & Publish Workflow', desc: 'Safely save, review, test, and publish configuration changes — designed for enterprise release governance.' },
                            { icon: '🏗️', title: 'Project-Based Architecture', desc: 'Isolate configurations by team or environment (Production / Staging / Test) to avoid conflicts and ensure safe collaboration.' },
                            { icon: '⚡', title: 'Proto-Driven UI Generation', desc: 'Upload your protobuf files and Elchi automatically generates UI forms based on proto definitions.' },
                            { icon: '📊', title: 'Dependency Graph Visualization', desc: 'Visual traffic and configuration mapping allows teams to instantly understand service relationships and configuration flow.' },
                            { icon: '🤖', title: 'Lightweight Agent Support', desc: 'An optional Go-based Agent collects metadata, status information, and ensures reliable configuration distribution.' }
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
