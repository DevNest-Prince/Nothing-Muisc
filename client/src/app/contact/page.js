'use client';

import { SITE_CONFIG } from '@/config/site';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const contactCards = [
    {
      title: 'Email',
      subtitle: 'Send questions any time',
      href: 'mailto:support@nothing-bot.com',
      label: 'support@nothing-bot.com',
    },
    {
      title: 'Discord',
      subtitle: 'Live community support',
      href: SITE_CONFIG.links.discord,
      label: 'Join Server',
      external: true,
    },
    {
      title: 'GitHub',
      subtitle: 'Report issues or contribute',
      href: SITE_CONFIG.links.github,
      label: 'View Repository',
      external: true,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, you would send this data to a backend service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero container-main">
        <div className="contact-hero-panel animate-fade-in">
          <span className="contact-kicker">Reach Out</span>
          <h1>Get in Touch</h1>
          <p>Questions, suggestions, or partnership requests. Send us a message and we will reply soon.</p>

          <div className="contact-hero-chips">
            <span>Support Team</span>
            <span>Fast Response</span>
            <span>Community Driven</span>
          </div>
        </div>
      </section>

      <section className="container-main contact-main">
        <div className="contact-card-grid animate-slide-in">
          {contactCards.map((card) => (
            <article key={card.title} className="contact-info-card">
              <h3>{card.title}</h3>
              <p>{card.subtitle}</p>
              <a href={card.href} target={card.external ? '_blank' : undefined} rel={card.external ? 'noreferrer' : undefined}>
                {card.label}
              </a>
            </article>
          ))}
        </div>

        <section className="contact-form-shell">
          <h2>Send a Message</h2>
          <p>Tell us what you need and include as much context as possible.</p>

          {submitted ? (
            <div className="contact-success animate-fade-in">
              <h3>Message Sent</h3>
              <p>Thank you for reaching out. We will get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form-grid">
              <div className="contact-two-col">
                <div>
                  <label className="contact-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="contact-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="contact-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div>
                <label className="contact-label">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows="5"
                  required
                  className="resize-none"
                ></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">
                Send Message
              </button>
            </form>
          )}
        </section>
      </section>

      <section className="container-main contact-links-wrap">
        <div className="contact-links-card">
          <h2>Other Ways to Connect</h2>
          <p>Browse docs, open issues, or chat with the community.</p>
          <div className="contact-links-grid">
            <a href="/docs" className="contact-link-btn">Read Documentation</a>
            <a href="/faq" className="contact-link-btn">View FAQ</a>
            <a href={SITE_CONFIG.links.github} target="_blank" rel="noreferrer" className="contact-link-btn">GitHub Issues</a>
            <a href={SITE_CONFIG.links.discord} target="_blank" rel="noreferrer" className="contact-link-btn">Discord Server</a>
          </div>
        </div>
      </section>
    </div>
  );
}

