'use client';

import SectionHeader from '@/components/SectionHeader';
import Button from '@/components/Button';
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
    <>
      <section className="section gradient-bg container-main">
        <SectionHeader title="Get in Touch" subtitle="Have questions or feedback? We'd love to hear from you" />
      </section>

      <section className="section container-main max-w-3xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div className="card">
            <h3 className="mb-4">📧 Email</h3>
            <p className="text-slate-400 mb-3">Send us an email anytime</p>
            <a href="mailto:support@nothing-bot.com" className="text-purple-400 hover:text-purple-300">
              support@nothing-bot.com
            </a>
          </div>

          <div className="card">
            <h3 className="mb-4">💬 Discord</h3>
            <p className="text-slate-400 mb-3">Join our support server</p>
            <a href={SITE_CONFIG.links.discord} target="_blank" className="text-purple-400 hover:text-purple-300">
              Join Server →
            </a>
          </div>

          <div className="card">
            <h3 className="mb-4">🐙 GitHub</h3>
            <p className="text-slate-400 mb-3">Report issues or contribute</p>
            <a href={SITE_CONFIG.links.github} target="_blank" className="text-purple-400 hover:text-purple-300">
              View Repository →
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card">
          <h2 className="mb-6">Send us a Message</h2>

          {submitted ? (
            <div className="bg-green-900/30 border border-green-700/50 text-green-100 p-6 rounded-lg text-center animate-fade-in">
              <h3 className="font-bold mb-2">✓ Message Sent!</h3>
              <p>Thank you for reaching out. We'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
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
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
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
                <label className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
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
                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
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

              <button type="submit" className="btn btn-primary w-full">
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section section-alt container-main">
        <SectionHeader title="Other Ways to Connect" subtitle="Explore other resources" />

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Button href="/docs" variant="secondary" size="lg">
            📚 Read Documentation
          </Button>
          <Button href="/faq" variant="secondary" size="lg">
            ❓ View FAQ
          </Button>
          <Button href={SITE_CONFIG.links.github} target="_blank" variant="secondary" size="lg">
            🐙 GitHub Issues
          </Button>
          <Button href={SITE_CONFIG.links.discord} target="_blank" variant="secondary" size="lg">
            💬 Discord Server
          </Button>
        </div>
      </section>
    </>
  );
}
