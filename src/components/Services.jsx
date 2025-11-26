import React from 'react';

const ServiceItem = ({ title, description }) => (
    <div style={{ marginBottom: '2rem' }}>
        <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-color)' }}>{title}</h4>
        <p style={{ color: '#94a3b8' }}>{description}</p>
    </div>
);

const Services = () => {
    return (
        <section id="services" className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                            Expert <span className="gradient-text">Consultancy</span>
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginBottom: '2rem' }}>
                            We help businesses navigate the complex landscape of cloud native technologies. Our experts provide tailored solutions to meet your specific needs.
                        </p>
                        <a href="#contact" className="btn btn-primary">Get in Touch</a>
                    </div>
                    <div className="glass-panel" style={{ flex: 1, minWidth: '300px' }}>
                        <ServiceItem
                            title="Cloud Architecture Design"
                            description="Scalable, secure, and cost-effective cloud infrastructure design tailored to your business goals."
                        />
                        <ServiceItem
                            title="DevOps & CI/CD Automation"
                            description="Streamline your development lifecycle with robust CI/CD pipelines and DevOps best practices."
                        />
                        <ServiceItem
                            title="Kubernetes Management"
                            description="Expert management and optimization of Kubernetes clusters for high availability and performance."
                        />
                        <ServiceItem
                            title="Microservices Migration"
                            description="Seamless migration of legacy applications to modern microservices architectures."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
