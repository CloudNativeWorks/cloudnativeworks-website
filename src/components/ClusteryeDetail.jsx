import React from 'react';

const ClusteryeDetail = () => {
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
                    <img src="/clustereye-logo.png" alt="ClusterEye" style={{ height: '60px', marginBottom: '2rem' }} />
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                        Database Monitoring and <br />
                        <span className="gradient-text">Management Platform</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: '#94a3b8', maxWidth: '800px', margin: '0 auto' }}>
                        Monitor and manage your MSSQL, MongoDB, and PostgreSQL databases with AI-powered analytics and intelligent agent technology
                    </p>
                </div>

                {/* What is ClusterEye */}
                <section className="glass-panel" style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>What is ClusterEye?</h2>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                        ClusterEye is an AI-powered database monitoring and management platform that enables comprehensive observation,
                        analysis, and optimization of modern databases. Supporting MSSQL, MongoDB, and PostgreSQL, ClusterEye provides
                        intelligent configuration analysis, query performance optimization, real-time log analysis, and automated cluster
                        management with failover capabilities. Built with cloud-based architecture and intelligent agent technology.
                    </p>
                </section>

                {/* Database Support */}
                <section className="glass-panel" style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>All Your Database Products on the Same Platform</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {[
                            { name: 'Microsoft SQL', desc: 'Get unmatched stability, scalability, and security with ClusterEye\'s MSSQL alternative, plus enhanced performance, fast bug fixes, and enterprise-level features.', available: true },
                            { name: 'PostgreSQL', desc: 'ClusterEye provides cluster resource management, query management, and master node selection for Postgre DB. This all features without any cost or restrictions.', available: true },
                            { name: 'MongoDB', desc: 'ClusterEye provides cluster resource management, query management, and master node selection for MongoDB. This all features without any cost or restrictions.', available: true },
                            { name: 'Oracle', desc: 'Coming in the new version', available: false },
                            { name: 'Elastic', desc: 'Coming in the new version', available: false }
                        ].map((db, idx) => (
                            <div key={idx} style={{
                                padding: '1.5rem',
                                background: db.available ? 'white' : 'var(--bg-secondary)',
                                borderRadius: '0.5rem',
                                border: `1px solid ${db.available ? 'var(--card-border)' : 'var(--card-border)'}`,
                                opacity: db.available ? 1 : 0.6,
                                boxShadow: db.available ? '0 2px 4px var(--shadow-color)' : 'none'
                            }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--secondary-color)' }}>
                                    ClusterEye for {db.name}
                                </h3>
                                <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>{db.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* AI-Powered Analytics */}
                <section className="glass-panel" style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>AI-Powered Analytics</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {[
                            { icon: '🧠', title: 'Intelligent Configuration and Best Practice Analysis', desc: 'AI algorithms analyze your database configuration and automatically provide the best configuration recommendations. Get automatic optimization recommendations specific to each database type (MSSQL, MongoDB, PostgreSQL).' },
                            { icon: '📊', title: 'Query Performance Analysis and Visualization', desc: 'Visualize complex query plans and instantly identify bottlenecks with AI-assisted analysis. Get index recommendations and query optimizations by automatically analyzing execution plans.' },
                            { icon: '📝', title: 'Real-Time Log Analysis', desc: 'Analyze MongoDB and PostgreSQL logs in real-time. AI algorithms detect potential problems in advance and offer proactive solution recommendations. Automatically classify exception cases and see solutions to similar problems.' },
                            { icon: '⚡', title: 'Query Optimization with Artificial Intelligence', desc: 'AI models analyze query structure to suggest performance improvements and optimize database operations.' },
                            { icon: '🔍', title: 'Anomaly Detection and Predictive Analytics', desc: 'AI models learn normal database behavior and quickly detect abnormal activities. Enable proactive planning by predicting future capacity needs and prevent potential performance issues.' },
                            { icon: '🤖', title: 'Self-Learning Database Assistant', desc: 'Thanks to advanced machine learning algorithms, ClusterEye learns your database usage habits and offers smarter recommendations over time. Get customized, proactive improvement recommendations for each database.' }
                        ].map((feature, idx) => (
                            <div key={idx} style={{ padding: '1.5rem', background: 'white', borderRadius: '0.5rem', border: '1px solid var(--card-border)', display: 'flex', gap: '1rem', boxShadow: '0 2px 4px var(--shadow-color)' }}>
                                <div style={{ fontSize: '2rem', flexShrink: 0 }}>{feature.icon}</div>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--secondary-color)' }}>{feature.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* PostgreSQL Cluster Control */}
                <section className="glass-panel" style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Take Full Control of Your Database Cluster</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {[
                            { icon: '🔄', title: 'Automatic Failover', desc: 'Gain automatic failover capabilities not natively available in PostgreSQL. When the primary server fails, the system automatically switches to the standby server, ensuring uninterrupted service delivery.' },
                            { icon: '📊', title: 'Real-Time Cluster Monitoring', desc: 'Monitor all cluster nodes from a single dashboard. View critical metrics like replication lag, disk usage, and query performance in real-time.' },
                            { icon: '📈', title: 'Scaling and Management', desc: 'Easily scale your cluster up or down based on your needs. Add, remove, and maintain nodes from the ClusterEye control panel.' },
                            { icon: '🎯', title: 'PostgreSQL Cluster Control', desc: 'Easily manage and monitor your database clusters with ClusterEye\'s comprehensive control panel and automation features.' }
                        ].map((feature, idx) => (
                            <div key={idx} style={{ padding: '1.5rem', background: 'white', borderRadius: '0.5rem', border: '1px solid var(--card-border)', boxShadow: '0 2px 4px var(--shadow-color)' }}>
                                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{feature.icon}</div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--secondary-color)' }}>{feature.title}</h3>
                                <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Features */}
                <section className="glass-panel" style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Monitor, Automate and Accelerate All Database Processes</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {[
                            { icon: '🤖', title: 'ClusterEye Automation', desc: 'The first cloud-based, open-source platform to automate database deployment and management, delivering high-performance, cost-effective solutions with no vendor lock-in. ClusterEye adapts to your organization\'s ITSM processes and tools.' },
                            { icon: '📊', title: 'Monitoring, Management and Reporting', desc: 'ClusterEye helps you quickly identify and resolve critical performance issues by providing daily analysis, performance analysis, comprehensive observability, monitoring and management of databases. You can report your inventory and alarms daily/weekly/monthly in the periods you specify and receive notifications.' },
                            { icon: '🧠', title: 'AI Consultant', desc: 'ClusterEye AI Advisor provides you with query optimization, structural optimization, and solution suggestions for problems in alarms.' },
                            { icon: '🔍', title: 'Anomaly Detection', desc: 'Analyzes and captures performance changes on the database or non-routine situations in queries.' },
                            { icon: '📈', title: 'Capacity Planner', desc: 'It analyzes the disk occupancy status of the database and reports growth trends. This allows you to analyze disk occupancy issues in advance and organize the right investment time for growth plans.' }
                        ].map((feature, idx) => (
                            <div key={idx} style={{ padding: '1.5rem', background: 'white', borderRadius: '0.5rem', border: '1px solid var(--card-border)', display: 'flex', gap: '1rem', boxShadow: '0 2px 4px var(--shadow-color)' }}>
                                <div style={{ fontSize: '2rem', flexShrink: 0 }}>{feature.icon}</div>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--secondary-color)' }}>{feature.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Advantages */}
                <section className="glass-panel" style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Advantages</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                        {[
                            'Flexible monitoring with no installation required with cloud-based architecture',
                            'Web-Mobile Access from any environment',
                            'Control over the entire structure from the interface',
                            'Proactive problem prevention with automatic alarm and notification system',
                            'AI-powered decision support',
                            'Increased operational efficiency for technical teams'
                        ].map((advantage, idx) => (
                            <div key={idx} style={{ padding: '1rem', background: 'white', borderRadius: '0.5rem', border: '1px solid var(--card-border)', display: 'flex', gap: '0.75rem', alignItems: 'flex-start', boxShadow: '0 2px 4px var(--shadow-color)' }}>
                                <span style={{ color: 'var(--secondary-color)', fontSize: '1.2rem', flexShrink: 0 }}>✓</span>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{advantage}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Use Cases */}
                <section className="glass-panel" style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Areas of Use</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[
                            'Multi-database monitoring in microservices architectures',
                            'Detection of application performance problems',
                            'Centralized management of database operations'
                        ].map((useCase, idx) => (
                            <div key={idx} style={{ padding: '1rem', background: 'white', borderRadius: '0.5rem', border: '1px solid var(--card-border)', boxShadow: '0 2px 4px var(--shadow-color)' }}>
                                <p style={{ color: 'var(--text-secondary)', margin: 0 }}>{useCase}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Services */}
                <section className="glass-panel" style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>ClusterEye Services</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {[
                            { title: 'Support', desc: 'Empower your team with expert support whenever they need it. Comprehensive, responsive and cost-effective' },
                            { title: 'Monitoring Service', desc: '24/7/365 database management at a fraction of the cost of a full-time DBA' },
                            { title: 'Consulting', desc: 'Onsite or remote consultants to assist with architecture, design, deployment, configuration and maintenance tailored to your needs' }
                        ].map((service, idx) => (
                            <div key={idx} style={{ padding: '1.5rem', background: 'white', borderRadius: '0.5rem', border: '1px solid var(--card-border)', boxShadow: '0 2px 4px var(--shadow-color)' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--secondary-color)' }}>{service.title}</h3>
                                <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Access */}
                <section className="glass-panel" style={{ marginBottom: '3rem', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Access Your Databases Anytime, Anywhere</h2>
                    <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <div style={{ padding: '2rem', background: 'white', borderRadius: '0.5rem', border: '1px solid var(--card-border)', minWidth: '200px', boxShadow: '0 2px 4px var(--shadow-color)' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📱</div>
                            <p style={{ color: 'var(--text-color)', fontWeight: 600 }}>Mobile Application</p>
                        </div>
                        <div style={{ padding: '2rem', background: 'white', borderRadius: '0.5rem', border: '1px solid var(--card-border)', minWidth: '200px', boxShadow: '0 2px 4px var(--shadow-color)' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌐</div>
                            <p style={{ color: 'var(--text-color)', fontWeight: 600 }}>Web Browsers</p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                    <a href="https://clustereye.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                        Visit ClusterEye.com →
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ClusteryeDetail;
