'use client';

import Link from 'next/link';
import { DISCORD_BOTS, SITE_CONFIG } from '@/config/site';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const botLogos = {
    'Nothing Music': '/Nothing%201%20logo.png',
    'Nothing Canary': '/Nothing%20Canary%20logo.png',
    'Nothing Prime': '/Nothing%20Prime%20logo.webp',
    'Flame': '/Flame%20logo.png',
  };

  return (
    <header className="sticky top-0 z-50 pt-2 md:pt-3">
      <div className="container-main">
        <nav className="navbar-shell">
          <div className="navbar-brand-wrap">
            <Link href="/" className="navbar-brand" onClick={() => setMobileMenuOpen(false)}>
              <span className="navbar-logo" aria-hidden="true">
                <img src="/mintone.jpg" alt="" className="navbar-logo-image" />
              </span>
              <span className="navbar-name">NOTHING</span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {SITE_CONFIG.navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`navbar-link ${isActive ? 'navbar-link-active' : ''}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <div className="navbar-invite-dropdown" suppressHydrationWarning>
              <button type="button" className="navbar-btn navbar-btn-invite" aria-label="Open bot invite options">
                <span>Invite Bot</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M6 9L12 15L18 9"></path>
                </svg>
              </button>

              <div className="navbar-invite-menu" suppressHydrationWarning>
                {DISCORD_BOTS.map((bot) => (
                  <a
                    key={bot.id}
                    href={bot.inviteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="navbar-invite-item"
                  >
                    <span className="navbar-invite-bot">
                      <img src={botLogos[bot.name]} alt="" className="navbar-invite-bot-logo" aria-hidden="true" />
                      <strong>{bot.name}</strong>
                    </span>
                    <span>{bot.type}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden navbar-menu-btn"
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden mt-3 navbar-mobile animate-fade-in">
            <div className="flex flex-col gap-2 p-3">
              {SITE_CONFIG.navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`navbar-mobile-link ${isActive ? 'navbar-mobile-link-active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="mt-2">
                <div className="navbar-mobile-invite-list" suppressHydrationWarning>
                  <span className="navbar-mobile-invite-label">Invite A Bot</span>
                  {DISCORD_BOTS.map((bot) => (
                    <a
                      key={bot.id}
                      href={bot.inviteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="navbar-mobile-invite-item"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="navbar-mobile-invite-bot">
                        <img src={botLogos[bot.name]} alt="" className="navbar-mobile-invite-bot-logo" aria-hidden="true" />
                        <strong>{bot.name}</strong>
                      </span>
                      <span>{bot.type}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
