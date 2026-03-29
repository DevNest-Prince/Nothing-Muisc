'use client';

import Link from 'next/link';
import { SITE_CONFIG } from '@/config/site';
import { getCurrentYear } from '@/utils/helpers';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="container-main py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden ring-1 ring-orange-400/35">
                <img src="/mintone.jpg" alt="Nothing logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-lg font-bold gradient-text">Nothing</span>
            </div>
            <p className="text-zinc-400 text-sm">The perfect Discord music bot companion.</p>
          </div>

          {/* Links - Product */}
          <div>
            <h4 className="font-bold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-zinc-400 hover:text-orange-400 transition-colors text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/commands" className="text-zinc-400 hover:text-orange-400 transition-colors text-sm">
                  Commands
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-zinc-400 hover:text-orange-400 transition-colors text-sm">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href={SITE_CONFIG.bot.inviteUrl} target="_blank" className="text-zinc-400 hover:text-orange-400 transition-colors text-sm">
                  Add Bot
                </Link>
              </li>
            </ul>
          </div>

          {/* Links - Resources */}
          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-zinc-400 hover:text-orange-400 transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-orange-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-orange-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href={SITE_CONFIG.links.github} target="_blank" className="text-zinc-400 hover:text-orange-400 transition-colors text-sm">
                  GitHub
                </Link>
              </li>
            </ul>
          </div>

          {/* Links - Community */}
          <div>
            <h4 className="font-bold text-white mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <Link href={SITE_CONFIG.links.discord} target="_blank" className="text-zinc-400 hover:text-orange-400 transition-colors text-sm">
                  Discord Server
                </Link>
              </li>
              <li>
                <Link href={SITE_CONFIG.links.support} target="_blank" className="text-zinc-400 hover:text-orange-400 transition-colors text-sm">
                  Support
                </Link>
              </li>
              <li>
                <a href="https://twitter.com/yourhandle" className="text-zinc-400 hover:text-orange-400 transition-colors text-sm">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800 pt-8">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-zinc-500 text-sm">
              (c) {getCurrentYear()} Nothing Bot. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

