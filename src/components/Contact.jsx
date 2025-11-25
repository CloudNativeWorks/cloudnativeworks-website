import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                    Ready to <span className="gradient-text">Transform</span> Your Business?
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginBottom: '3rem' }}>
                    Contact us today to discuss how CloudNativeWorks can help you achieve your technology goals.
                </p>

                <div className="glass-panel" style={{ padding: '3rem' }}>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <input
                                type="text"
                                placeholder="Name"
                                style={{
                                    flex: 1,
                                    padding: '1rem',
                                    borderRadius: '0.5rem',
                                    border: '1px solid var(--glass-border)',
                                    background: 'rgba(15, 23, 42, 0.5)',
                                    color: 'white',
                                    outline: 'none'
                                }}
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                style={{
                                    flex: 1,
                                    padding: '1rem',
                                    borderRadius: '0.5rem',
                                    border: '1px solid var(--glass-border)',
                                    background: 'rgba(15, 23, 42, 0.5)',
                                    color: 'white',
                                    outline: 'none'
                                }}
                            />
                        </div>
                        <textarea
                            placeholder="Message"
                            rows="5"
                            style={{
                                padding: '1rem',
                                borderRadius: '0.5rem',
                                border: '1px solid var(--glass-border)',
                                background: 'rgba(15, 23, 42, 0.5)',
                                color: 'white',
                                outline: 'none',
                                resize: 'vertical'
                            }}
                        ></textarea>
                        <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>Send Message</button>
                    </form>
                </div>

                <footer style={{ marginTop: '5rem', color: '#64748b', fontSize: '0.9rem' }}>
                    <p>&copy; {new Date().getFullYear()} CloudNativeWorks. All rights reserved.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
