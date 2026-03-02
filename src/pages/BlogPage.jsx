import React from 'react';
import { Calendar, User, Tag } from 'lucide-react';
import PageHero from '../components/PageHero';
import blogPosts from '../data/blog-posts.json';

const categoryColors = {
  'Engineering': 'var(--accent-primary)',
  'Product Updates': 'var(--product-mergepilot)',
  'Infrastructure Insights': 'var(--product-clustereye)',
  'Case Studies': 'var(--product-certautopilot)',
};

const BlogPage = () => (
  <>
    <PageHero
      label="Blog"
      title={<>Engineering <span className="gradient-text">Insights</span></>}
      subtitle="Deep technical content on infrastructure, observability, automation, and the engineering decisions behind our products."
    />

    <section className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          {blogPosts.map(post => (
            <article key={post.id} className="card card-interactive" style={{
              cursor: 'default',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginBottom: 'var(--space-3)', flexWrap: 'wrap' }}>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  color: categoryColors[post.category] || 'var(--text-tertiary)',
                  padding: 'var(--space-1) var(--space-3)',
                  borderRadius: '100px',
                  background: `color-mix(in srgb, ${categoryColors[post.category] || 'var(--text-tertiary)'} 12%, transparent)`,
                  border: `1px solid color-mix(in srgb, ${categoryColors[post.category] || 'var(--text-tertiary)'} 20%, transparent)`,
                }}>
                  {post.category}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                  <Calendar size={12} />
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-2)' }}>{post.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{post.excerpt}</p>
              <div style={{ marginTop: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                <User size={12} />
                {post.author}
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 'var(--space-12)', color: 'var(--text-tertiary)', fontSize: '0.875rem' }}>
          More posts coming soon.
        </div>
      </div>
    </section>
  </>
);

export default BlogPage;
