'use client';

import { DISCORD_BOTS, SITE_CONFIG } from '@/config/site';
import BotCard from '@/components/BotCard';

export default function BotsPage() {
  const freeBots = DISCORD_BOTS.filter((bot) => bot.type.includes('Free')).length;
  const premiumBots = DISCORD_BOTS.filter((bot) => bot.type.includes('Premium')).length;

  return (
    <div className="bots-page">
      <section className="bots-hero container-main">
        <div className="bots-hero-panel animate-fade-in">
          <div className="bots-hero-copy">
            <span className="bots-kicker">Nothing Ecosystem</span>
            <h1>Pick The Right Bot For Your Server</h1>
            <p>
              Music, premium performance, and fast protection tools, all in one lineup. Start with free bots or scale with
              premium power.
            </p>

            <div className="bots-hero-actions">
              <a href={SITE_CONFIG.links.discord} target="_blank" rel="noopener noreferrer" className="bots-hero-btn bots-hero-btn-ghost">
                Join Support
              </a>
            </div>

            <div className="bots-hero-stats">
              <div className="bots-stat-chip">
                <strong>4500+</strong>
                <span>Active Servers</span>
              </div>
              <div className="bots-stat-chip">
                <strong>{freeBots}</strong>
                <span>Free Options</span>
              </div>
              <div className="bots-stat-chip">
                <strong>{premiumBots}</strong>
                <span>Premium Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bots-grid container-main">
        <div className="bots-container">
          {DISCORD_BOTS.map((bot) => (
            <BotCard key={bot.id} bot={bot} />
          ))}
        </div>
      </section>

      <section className="bots-cta container-main">
        <div className="bots-cta-grid">
          <div className="cta-content">
            <h2>Launch In Under 1 Minute</h2>
            <p>
              Invite the bot, run the setup command, and start using music, moderation, or security features instantly.
            </p>
            <div className="cta-points" suppressHydrationWarning>
              <span className="cta-point-chip">1. Pick a bot from cards above</span>
              <span className="cta-point-chip">2. Authorize in your server</span>
              <span className="cta-point-chip">3. Run setup command</span>
            </div>
          </div>

          <div className="bots-support-card">
            <span className="bots-kicker">Need Setup Help?</span>
            <h3>Join The Support Server</h3>
            <p>Get quick setup help, premium guidance, and latest bot updates directly from our team.</p>
            <a href={SITE_CONFIG.links.discord} target="_blank" rel="noopener noreferrer" className="bots-support-link">
              Open Support Server
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
