import React, { useState } from 'react';

const Contact = () => {
    const [formStatus, setFormStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus('');

        const formData = new FormData(e.target);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setFormStatus('success');
                e.target.reset();
                setTimeout(() => setFormStatus(''), 5000);
            } else {
                setFormStatus('error');
            }
        } catch (error) {
            setFormStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

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
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {/* Web3Forms Access Key */}
                        <input type="hidden" name="access_key" value="395a02c9-8459-402d-8174-b2e939408bde" />

                        {/* Optional: Redirect after submission */}
                        <input type="hidden" name="redirect" value="false" />

                        {/* Optional: Custom subject */}
                        <input type="hidden" name="subject" value="New Contact Form Submission from CloudNativeWorks" />

                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                                style={{
                                    flex: 1,
                                    minWidth: '200px',
                                    padding: '1rem',
                                    borderRadius: '0.5rem',
                                    border: '1px solid var(--card-border)',
                                    background: 'white',
                                    color: 'var(--text-color)',
                                    outline: 'none'
                                }}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                                style={{
                                    flex: 1,
                                    minWidth: '200px',
                                    padding: '1rem',
                                    borderRadius: '0.5rem',
                                    border: '1px solid var(--card-border)',
                                    background: 'white',
                                    color: 'var(--text-color)',
                                    outline: 'none'
                                }}
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="Message"
                            rows="5"
                            required
                            style={{
                                padding: '1rem',
                                borderRadius: '0.5rem',
                                border: '1px solid var(--card-border)',
                                background: 'white',
                                color: 'var(--text-color)',
                                outline: 'none',
                                resize: 'vertical'
                            }}
                        ></textarea>

                        {/* Status Messages */}
                        {formStatus === 'success' && (
                            <div style={{
                                padding: '1rem',
                                borderRadius: '0.5rem',
                                background: '#d4edda',
                                color: '#155724',
                                border: '1px solid #c3e6cb'
                            }}>
                                ✓ Message sent successfully! We'll get back to you soon.
                            </div>
                        )}

                        {formStatus === 'error' && (
                            <div style={{
                                padding: '1rem',
                                borderRadius: '0.5rem',
                                background: '#f8d7da',
                                color: '#721c24',
                                border: '1px solid #f5c6cb'
                            }}>
                                ✗ Something went wrong. Please try again.
                            </div>
                        )}

                        <button
                            type="submit"
                            className="btn btn-primary"
                            style={{ alignSelf: 'flex-start' }}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>

                <footer style={{ marginTop: '5rem', color: '#64748b', fontSize: '0.9rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '0.5rem' }}>
                        Fenerbahçe Mah. İğrip Sk. No: 13 İç Kapı No: 1<br />
                        Kadıköy / İstanbul
                    </p>
                    <p>&copy; {new Date().getFullYear()} CloudNativeWorks. All rights reserved.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
