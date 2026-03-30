import FAQItem from '@/components/FAQItem';
import { FAQ_ITEMS, SITE_CONFIG } from '@/config/site';
import { FiArrowRight, FiHelpCircle, FiMessageCircle } from 'react-icons/fi';

export const metadata = {
  title: 'FAQ - ' + SITE_CONFIG.name,
  description: 'Frequently asked questions about Nothing Discord music bot',
};

export default function FAQPage() {
  return (
    <div className="faq-page">
      <section className="faq-hero container-main">
        <div className="faq-hero-panel animate-fade-in">
          <span className="faq-kicker">Support Center</span>
          <h1>Frequently Asked Questions</h1>
          <p>Find quick answers for setup, commands, playlists, and server-level configuration.</p>

          <div className="faq-hero-chips">
            <span>{FAQ_ITEMS.length} Common Questions</span>
            <span>Fast Troubleshooting</span>
            <span>Community Friendly</span>
          </div>
        </div>
      </section>

      <section className="container-main faq-main">
        <div className="faq-list-shell animate-slide-in">
          <div className="faq-list-head">
            <h2>Popular Questions</h2>
            <p>Expand any question below to see complete answers.</p>
          </div>

          <div className="faq-list-stack">
          {FAQ_ITEMS.map((item) => (
            <FAQItem key={item.id} item={item} />
          ))}
          </div>
        </div>
      </section>

      <section className="container-main faq-support-wrap">
        <div className="faq-support-card">
          <h2>Still Have Questions?</h2>
          <p>
            If you cannot find what you need, contact support directly or join the Discord community for quick help.
          </p>

          <div className="faq-support-actions">
            <a href="/contact" className="faq-cta-btn">
              <FiHelpCircle aria-hidden="true" />
              Contact Support
              <FiArrowRight aria-hidden="true" />
            </a>
            <a href={SITE_CONFIG.links.discord} target="_blank" rel="noreferrer" className="faq-cta-btn faq-cta-outline">
              <FiMessageCircle aria-hidden="true" />
              Join Discord
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

