import React from 'react';
import HeroSimulation from './HeroSimulation';

const Hero = () => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '80px'
        }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '400px',
                height: '400px',
                background: 'var(--primary-color)',
                filter: 'blur(150px)',
                opacity: 0.2,
                borderRadius: '50%',
                zIndex: -1
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '10%',
                width: '300px',
                height: '300px',
                background: 'var(--secondary-color)',
                filter: 'blur(150px)',
                opacity: 0.2,
                borderRadius: '50%',
                zIndex: -1
            }}></div>

            <div className="container" style={{ zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4rem', textAlign: 'center' }}>
                <div>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                        Empowering Your <br />
                        <span className="gradient-text">Cloud Native Journey</span>
                    </h1>
                    <p style={{ fontSize: '1.125rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                        CloudNativeWorks delivers cutting-edge consultancy and software solutions to modernize your infrastructure and accelerate innovation.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <a href="#products" className="btn btn-primary">Explore Products</a>
                        <a href="#contact" className="btn" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', color: 'var(--text-color)' }}>Contact Us</a>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <HeroSimulation />
                </div>
            </div>

            <style>{`
                @media (max-width: 968px) {
                    .container {
                        grid-template-columns: 1fr !important;
                        text-align: center !important;
                    }
                    .container > div:first-child {
                        text-align: center !important;
                        margin-bottom: 3rem;
                    }
                    .container > div:first-child p {
                        margin-left: auto;
                        margin-right: auto;
                    }
                    .container > div:first-child div {
                        justify-content: center;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
