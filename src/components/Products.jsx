import React from 'react';

const ProductCard = ({ title, description, link, color, logo }) => (
    <div className="glass-panel" style={{ flex: 1, minWidth: '300px', transition: 'transform 0.3s ease' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            {logo && <img src={logo} alt={`${title} logo`} style={{ height: '40px', width: 'auto' }} />}
            <h3 style={{ fontSize: '1.5rem', margin: 0, color: color }}>{title}</h3>
        </div>
        <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: color, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            Visit Website <span>&rarr;</span>
        </a>
    </div>
);

const Products = () => {
    return (
        <section id="products" className="section">
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>
                    Our <span className="gradient-text">Products</span>
                </h2>
                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                    <ProductCard
                        title="Elchi.io"
                        description="Enterprise Envoy Proxy Management Platform with 3-process distributed architecture, K8s discovery, multi-tenancy, intelligent automation, and comprehensive xDS support. Free and open-source."
                        link="https://elchi.io"
                        color="var(--accent-color)"
                        logo="https://www.elchi.io/logo.png"
                    />
                    <ProductCard
                        title="Clustereye.com"
                        description="AI-powered database monitoring and management platform for MSSQL, MongoDB, and PostgreSQL with intelligent analytics, cluster control, and automated failover capabilities."
                        link="https://clustereye.com"
                        color="var(--secondary-color)"
                        logo="https://www.clustereye.com/clustereye_logo.png"
                    />
                </div>
            </div>
        </section>
    );
};

export default Products;
