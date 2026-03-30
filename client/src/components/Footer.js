'use client';

import Link from 'next/link';
import { SITE_CONFIG } from '@/config/site';
import { getCurrentYear } from '@/utils/helpers';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="footer-container">
      <div className="container-main">
        {/* Premium CTA Section */}
        <div className="footer-cta-section">
          <div className="footer-cta-card">
            <div className="footer-cta-content">
              <h3 className="footer-cta-title">Ready to Transform Your Discord?</h3>
              <p className="footer-cta-text">Add Nothing to your server and experience premium music streaming.</p>
            </div>
            <Link href={SITE_CONFIG.bot.inviteUrl} target="_blank" className="footer-cta-btn">
              <span>Invite Now</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"></path>
              </svg>
            </Link>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="footer-main-grid">
          {/* Brand & Newsletter */}
          <div className="footer-column footer-brand-col">
            <div className="footer-brand">
              <div className="footer-brand-logo">
                <img src="/mintone.jpg" alt="Nothing logo" className="w-full h-full object-cover" />
              </div>
              <span className="footer-brand-name">NOTHING</span>
            </div>
            <p className="footer-brand-desc">The perfect Discord music bot companion. Crystal clear audio, smart playlists, and AI recommendations.</p>

            <a
              href={SITE_CONFIG.links.hostingPartner}
              target="_blank"
              rel="noreferrer"
              className="footer-hosting-partner"
              aria-label="Glacier Hosting"
            >
              <span className="footer-hosting-logo-wrap" aria-hidden="true">
                <img src="/glacier-hosting-logo.svg" alt="" className="footer-hosting-logo" />
              </span>
              <span className="footer-hosting-copy">
                <span className="footer-hosting-label">Hosting Partner</span>
                <span className="footer-hosting-name">Glacier Hosting</span>
              </span>
            </a>
            
            <div className="footer-newsletter">
              <label className="footer-label">Subscribe for Updates</label>
              <form onSubmit={handleSubscribe} className="footer-email-form">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="footer-email-input"
                  required
                />
                <button type="submit" className="footer-email-btn">
                  {subscribed ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                    </svg>
                  ) : (
                    <span>→</span>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Product Links */}
          <div className="footer-column">
            <h4 className="footer-heading">Product</h4>
            <ul className="footer-links">
              <li>
                <Link href="/features" className="footer-link">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/commands" className="footer-link">
                  Commands
                </Link>
              </li>
              <li>
                <Link href="/docs" className="footer-link">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/faq" className="footer-link">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="footer-column">
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li>
                <Link href="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link href={SITE_CONFIG.links.github} target="_blank" className="footer-link">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href={SITE_CONFIG.links.api} target="_blank" className="footer-link">
                  API
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Links */}
          <div className="footer-column">
            <h4 className="footer-heading">Community</h4>
            <ul className="footer-links">
              <li>
                <Link href={SITE_CONFIG.links.discord} target="_blank" className="footer-link">
                  Discord Server
                </Link>
              </li>
              <li>
                <Link href={SITE_CONFIG.links.support} target="_blank" className="footer-link">
                  Support
                </Link>
              </li>
              <li>
                <a href="https://twitter.com/nothingbot" target="_blank" className="footer-link">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" className="footer-link">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {getCurrentYear()} Nothing Bot. All rights reserved.
            </p>
            <div className="footer-legal-links">
              <Link href="/privacy-policy" className="footer-legal-link">Privacy Policy</Link>
              <span className="footer-legal-sep">•</span>
              <Link href="/terms-of-service" className="footer-legal-link">Terms of Service</Link>
            </div>
          </div>
          <div className="footer-socials">
            <a href={SITE_CONFIG.links.discord} target="_blank" className="footer-social-icon" aria-label="Discord">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0c-.163-.386-.397-.875-.609-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.042-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.294.075.075 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.062 0a.075.075 0 0 1 .079.009c.12.098.246.198.373.294a.077.077 0 0 1-.007.128 12.299 12.299 0 0 1-1.873.892.076.076 0 0 0-.041.107c.359.698.77 1.364 1.225 1.994a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.057c.5-4.761-.838-8.9-3.549-12.57a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-.965-2.157-2.156 0-1.193.948-2.157 2.157-2.157 1.211 0 2.176.964 2.157 2.157 0 1.19-.946 2.157-2.157 2.157zm7.975 0c-1.183 0-2.157-.965-2.157-2.156 0-1.193.948-2.157 2.157-2.157 1.211 0 2.176.964 2.157 2.157 0 1.19-.946 2.157-2.157 2.157z"></path>
              </svg>
            </a>
            <a href={SITE_CONFIG.links.github} target="_blank" className="footer-social-icon" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

