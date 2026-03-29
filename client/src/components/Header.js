'use client';

import Link from 'next/link';
import { SITE_CONFIG } from '@/config/site';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
      <div className="container-main">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg group-hover:shadow-purple-600/50 transition-shadow">
              Ø
            </div>
            <span className="text-xl font-bold gradient-text hidden sm:inline">Nothing</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {SITE_CONFIG.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-slate-300 hover:text-purple-400 transition-colors duration-200 text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2 md:gap-4">
            <Link
              href={SITE_CONFIG.bot.inviteUrl}
              target="_blank"
              className="btn btn-primary text-sm md:text-base hidden sm:flex"
            >
              Add to Discord
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-slate-700 animate-fade-in">
            <div className="flex flex-col gap-3 pt-4">
              {SITE_CONFIG.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-slate-300 hover:text-purple-400 transition-colors px-4 py-2 rounded hover:bg-slate-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={SITE_CONFIG.bot.inviteUrl}
                target="_blank"
                className="btn btn-primary w-full justify-center mt-2"
              >
                Add to Discord
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
