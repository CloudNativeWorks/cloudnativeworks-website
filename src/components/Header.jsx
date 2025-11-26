import React, { useState, useEffect } from 'react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showProductsDropdown, setShowProductsDropdown] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            padding: '1rem 0',
            transition: 'all 0.3s ease',
            background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
            backdropFilter: scrolled ? 'blur(10px)' : 'blur(5px)',
            borderBottom: scrolled ? '1px solid rgba(0,0,0,0.08)' : 'none',
            boxShadow: scrolled ? '0 2px 8px rgba(0,0,0,0.1)' : 'none'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none', color: 'inherit' }}>
                    CloudNative<span className="gradient-text">Works</span>
                </a>
                <nav>
                    <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem', margin: 0, padding: 0 }}>
                        <li
                            style={{ position: 'relative' }}
                            onMouseEnter={() => setShowProductsDropdown(true)}
                            onMouseLeave={() => setShowProductsDropdown(false)}
                        >
                            <a href="#products" style={{ cursor: 'pointer', paddingBottom: '0.5rem', display: 'inline-block' }}>Products ▾</a>
                            {showProductsDropdown && (
                                <div style={{
                                    position: 'absolute',
                                    top: '100%',
                                    left: 0,
                                    background: 'white',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(0,0,0,0.08)',
                                    borderRadius: '0.5rem',
                                    padding: '0.5rem 0',
                                    minWidth: '150px',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                    zIndex: 1001
                                }}>
                                    <a href="/elchi" style={{
                                        display: 'block',
                                        padding: '0.75rem 1.5rem',
                                        transition: 'background 0.2s ease',
                                        cursor: 'pointer',
                                        textDecoration: 'none',
                                        color: '#2c3e50'
                                    }}
                                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,107,53,0.1)'}
                                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                                    >Elchi</a>
                                    <a href="/clustereye" style={{
                                        display: 'block',
                                        padding: '0.75rem 1.5rem',
                                        transition: 'background 0.2s ease',
                                        cursor: 'pointer',
                                        textDecoration: 'none',
                                        color: '#2c3e50'
                                    }}
                                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,107,53,0.1)'}
                                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                                    >Clustereye</a>
                                </div>
                            )}
                        </li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
