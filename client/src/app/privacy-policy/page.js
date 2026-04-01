import Link from 'next/link';
import { generateMetadata } from '@/config/metadata';

export const metadata = generateMetadata({
  title: 'Privacy Policy',
  description: 'Read the Nothing privacy policy to understand data handling, retention, and user rights.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  const privacyItems = [
    {
      title: 'Collection Transparency',
      text: 'We only collect information required to operate, secure, and improve the service.',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 16v-4"></path>
          <path d="M12 8h.01"></path>
        </svg>
      ),
    },
    {
      title: 'Purpose-Limited Use',
      text: 'Data is used for reliability, abuse prevention, diagnostics, and support operations only.',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12h18"></path>
          <path d="M12 3v18"></path>
        </svg>
      ),
    },
    {
      title: 'User Control',
      text: 'You can request access, correction, or deletion of your personal data at any time.',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 6L9 17l-5-5"></path>
        </svg>
      ),
    },
  ];

  const sections = [
    {
      title: '1. What We Collect',
      text: 'Depending on your interaction with Nothing, we may process basic account identifiers, command usage data, error logs, and contact requests submitted by you.',
      points: [
        'Technical logs may include timestamps, route usage, and device/browser metadata.',
        'Support messages may include content you send directly to our team.',
      ],
    },
    {
      title: '2. Why We Collect It',
      text: 'Information is processed only to keep services stable, secure, and useful for communities using Nothing.',
      points: [
        'Detect abuse, rate-limit suspicious traffic, and resolve service errors.',
        'Improve product quality and respond to user support requests.',
      ],
    },
    {
      title: '3. Data Sharing and Third Parties',
      text: 'We do not sell personal information. Limited sharing can occur with infrastructure providers required to run the service.',
      points: [
        'Service providers are used for hosting, monitoring, and uptime management.',
        'Shared data is restricted to operational necessity and legal obligations.',
      ],
    },
    {
      title: '4. Retention and Security',
      text: 'We keep data only for as long as necessary and apply safeguards to reduce unauthorized access risk.',
      points: [
        'Operational logs are retained for troubleshooting and abuse prevention windows.',
        'Internal access is limited to authorized personnel with defined responsibilities.',
      ],
    },
    {
      title: '5. Your Rights and Requests',
      text: 'You may request data access, correction, portability, or deletion based on applicable law and platform limitations.',
      points: [
        'Identity verification may be required before processing sensitive requests.',
        'Some data may be retained when legally required or needed for security records.',
      ],
    },
    {
      title: '6. Policy Updates',
      text: 'This policy may evolve as our systems and legal obligations change. Material updates are reflected on this page.',
      points: [
        'Latest version date appears on this page for transparency.',
        'Continued use after updates indicates acceptance of revised policy terms.',
      ],
    },
  ];

  return (
    <main className="legal-page legal-page-privacy">
      <section className="container-main legal-hero">
        <div className="legal-hero-panel">
          <span className="legal-kicker">Legal</span>
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-subtitle">
            A clear summary of what data we collect, how we use it, and the choices you have.
          </p>
          <div className="legal-meta-row">
            <span className="legal-meta-chip">Last Updated: March 30, 2026</span>
            <span className="legal-meta-chip">No Sale of Personal Data</span>
          </div>
        </div>
      </section>

      <section className="container-main legal-content">
        <div className="legal-trust-grid">
          {privacyItems.map((item) => (
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
          <h2 className="legal-section-title">Privacy Requests</h2>
          <p className="legal-section-text">
            For data access or deletion requests, use the <Link href="/contact" className="legal-inline-link">Contact page</Link> and include enough detail for verification.
          </p>
        </article>
      </section>
    </main>
  );
}
