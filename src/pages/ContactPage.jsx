import React, { useState } from 'react';
import { Mail, MapPin, Check, X } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionLabel from '../components/SectionLabel';

const ContactPage = () => {
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
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus('success');
        e.target.reset();
        setTimeout(() => setFormStatus(''), 5000);
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHero
        label="Contact"
        title={<>Talk to Our <span className="gradient-text">Engineering Team</span></>}
        subtitle="Whether you're evaluating our products, have technical questions, or want to discuss your infrastructure challenges — we're here to help."
      />

      <section className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 'var(--space-12)' }}>
            {/* Left: Info */}
            <div>
              <h3 style={{ marginBottom: 'var(--space-6)' }}>What to Expect</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                <div>
                  <h4 style={{ fontSize: '0.875rem', marginBottom: 'var(--space-2)' }}>Technical Discussion</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    You'll speak with engineers who understand your infrastructure.
                    No sales scripts — just technical conversation.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.875rem', marginBottom: 'var(--space-2)' }}>Quick Response</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    We aim to respond within one business day. For urgent infrastructure issues, mention it in your message.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.875rem', marginBottom: 'var(--space-2)' }}>No Obligation</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    Initial discussions are always free. We'll help you understand whether our products are the right fit.
                  </p>
                </div>
              </div>

              <div style={{ marginTop: 'var(--space-8)', paddingTop: 'var(--space-6)', borderTop: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                  <MapPin size={16} style={{ color: 'var(--text-tertiary)' }} />
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Kadikoy, Istanbul, Turkey</span>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="card" style={{ padding: 'var(--space-8)' }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <input type="hidden" name="access_key" value="395a02c9-8459-402d-8174-b2e939408bde" />
                <input type="hidden" name="redirect" value="false" />
                <input type="hidden" name="subject" value="New Contact from CloudNativeWorks" />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: 'var(--space-2)' }}>
                      Name
                    </label>
                    <input type="text" name="name" required placeholder="Your name" />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: 'var(--space-2)' }}>
                      Email
                    </label>
                    <input type="email" name="email" required placeholder="you@company.com" />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: 'var(--space-2)' }}>
                    Company
                  </label>
                  <input type="text" name="company" placeholder="Company name (optional)" />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: 'var(--space-2)' }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    placeholder="Tell us about your infrastructure challenges or which products you're interested in..."
                    style={{ resize: 'vertical' }}
                  />
                </div>

                {formStatus === 'success' && (
                  <div style={{
                    padding: 'var(--space-3) var(--space-4)',
                    borderRadius: 'var(--btn-radius)',
                    background: 'rgba(34, 197, 94, 0.1)',
                    border: '1px solid rgba(34, 197, 94, 0.2)',
                    color: 'var(--signal-green)',
                    fontSize: '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)',
                  }}>
                    <Check size={16} />
                    Message sent successfully. We'll get back to you soon.
                  </div>
                )}

                {formStatus === 'error' && (
                  <div style={{
                    padding: 'var(--space-3) var(--space-4)',
                    borderRadius: 'var(--btn-radius)',
                    background: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.2)',
                    color: 'var(--signal-red)',
                    fontSize: '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)',
                  }}>
                    <X size={16} />
                    Something went wrong. Please try again.
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
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .container[style*="max-width: 960px"] > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
          .card form div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
};

export default ContactPage;
