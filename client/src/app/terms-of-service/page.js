import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | Nothing',
  description: 'Terms of Service for Nothing Discord music bot website.',
};

export default function TermsOfServicePage() {
  const trustItems = [
    {
      title: 'Fair Usage',
      text: 'Use Nothing responsibly and avoid abuse, spam, or harmful behavior in servers.',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
    },
    {
      title: 'Reliable Service',
      text: 'We work toward strong uptime and quality, with transparent handling of incidents and maintenance.',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      ),
    },
    {
      title: 'Transparent Updates',
      text: 'If terms change, we update this page so you always know what applies.',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="17 2 22 2 22 7"></polyline>
          <line x1="16" y1="8" x2="22" y2="2"></line>
        </svg>
      ),
    },
  ];

  const sections = [
    {
      title: '1. Acceptance of Terms',
      text: 'By using the Nothing website or bot-related services, you agree to these Terms of Service and all applicable laws. If you do not agree, please discontinue usage.',
      points: [
        'You must use the service in compliance with Discord policies and local regulations.',
        'You are responsible for how the service is used inside your own server.',
      ],
    },
    {
      title: '2. Allowed and Prohibited Activities',
      text: 'Nothing is built for music and community value. We do not allow abuse or attempts to disrupt the service.',
      points: [
        'No bot abuse, API abuse, reverse engineering, or unauthorized automated scraping.',
        'No harassment, hateful content, illegal activity, or intentional service disruption.',
      ],
    },
    {
      title: '3. Service Availability and Features',
      text: 'Features may evolve over time for quality, security, and performance improvements.',
      points: [
        'Some functions may be changed, limited, or removed without prior notice.',
        'Temporary downtime can happen due to maintenance, provider issues, or platform limits.',
      ],
    },
    {
      title: '4. Intellectual Property',
      text: 'The branding, interface, and original content of Nothing are protected. Third-party trademarks remain property of their respective owners.',
      points: [
        'Do not copy, rebrand, or redistribute Nothing assets without permission.',
        'Use of music services is subject to each provider policy and rights model.',
      ],
    },
    {
      title: '5. Limitation of Liability',
      text: 'Nothing is provided on an as-is and as-available basis. We are not liable for indirect losses, business interruption, or data loss caused by external factors.',
      points: [
        'You should maintain your own backups or moderation records where needed.',
        'We are not responsible for third-party platform outages or policy changes.',
      ],
    },
    {
      title: '6. Changes and Contact',
      text: 'We may update these terms periodically. Continued usage after updates indicates acceptance of revised terms.',
      points: [
        'Current version is always available on this page.',
        'Questions can be submitted through our contact channels.',
      ],
    },
  ];

  return (
    <main className="legal-page legal-page-terms">
      <section className="container-main legal-hero">
        <div className="legal-hero-panel">
          <span className="legal-kicker">Legal</span>
          <h1 className="legal-title">Terms of Service</h1>
          <p className="legal-subtitle">
            These terms define the rules, responsibilities, and protections for using Nothing.
          </p>
          <div className="legal-meta-row">
            <span className="legal-meta-chip">Effective: March 30, 2026</span>
            <span className="legal-meta-chip">Applies to Web + Bot Services</span>
          </div>
        </div>
      </section>

      <section className="container-main legal-content">
        <div className="legal-trust-grid">
          {trustItems.map((item) => (
            <article key={item.title} className="legal-trust-card">
              <div className="legal-icon" aria-hidden="true">
                {item.icon}
              </div>
              <h2 className="legal-card-title">{item.title}</h2>
              <p className="legal-card-text">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="legal-sections-stack">
          {sections.map((section) => (
            <article key={section.title} className="legal-section-card">
              <h2 className="legal-section-title">{section.title}</h2>
              <p className="legal-section-text">{section.text}</p>
              <ul className="legal-points-list">
                {section.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <article className="legal-contact-card">
          <h2 className="legal-section-title">Need Clarification?</h2>
          <p className="legal-section-text">
            Reach out on the <Link href="/contact" className="legal-inline-link">Contact page</Link> if you have any questions about these terms.
          </p>
        </article>
      </section>
    </main>
  );
}
