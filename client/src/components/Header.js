'use client';

import Link from 'next/link';
import { SITE_CONFIG } from '@/config/site';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 pt-4 md:pt-6">
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
            <Link href={SITE_CONFIG.bot.inviteUrl} target="_blank" className="navbar-btn navbar-btn-light">
              Invite Bot
            </Link>
            <Link href="/contact" className="navbar-btn navbar-btn-red">
              Login
            </Link>
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
              <div className="grid grid-cols-2 gap-2 mt-2">
                <Link
                  href={SITE_CONFIG.bot.inviteUrl}
                  target="_blank"
                  className="navbar-btn navbar-btn-light justify-center"
                >
                  Invite
                </Link>
                <Link href="/contact" className="navbar-btn navbar-btn-red justify-center">
                  Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
