import { SITE_CONFIG } from '@/config/site';

export const metadata = {
  title: 'Documentation - ' + SITE_CONFIG.name,
  description: 'Complete documentation for Nothing Discord music bot',
};

export default function DocsPage() {
  const quickStart = [
    {
      step: '01',
      title: 'Invite the Bot',
      detail:
        'Add Nothing to your Discord server with the required permissions and complete the OAuth prompt.',
      action: {
        label: 'Add to Discord',
        href: SITE_CONFIG.bot.inviteUrl,
      },
    },
    {
      step: '02',
      title: 'Join Voice Channel',
      detail: 'Enter any voice channel, then run a music command so the bot joins automatically.',
      code: '!play song name',
    },
    {
      step: '03',
      title: 'Control Playback',
      detail: 'Use queue and playback commands to skip, pause, reorder songs, and manage sessions.',
      code: '!queue | !skip | !pause',
    },
  ];

  const permissionList = ['Send Messages', 'Embed Links', 'Connect', 'Speak', 'Manage Messages'];

  return (
    <div className="docs-page">
      <section className="docs-hero container-main">
        <div className="docs-hero-panel animate-fade-in">
          <span className="docs-kicker">Official Docs</span>
          <h1>Documentation</h1>
          <p>
            Complete setup guide, command workflow, and server configuration tips for the Nothing music bot.
          </p>

          <div className="docs-hero-chips">
            <span>Fast Setup</span>
            <span>Admin Ready</span>
            <span>Voice Optimized</span>
          </div>
        </div>
      </section>

      <section className="container-main docs-main">
        <section className="docs-block docs-intro-block animate-slide-in">
          <div>
            <h2>Quick Start</h2>
            <p>
              Follow these three steps to get music running in less than two minutes. Use the default prefix{' '}
              <code>{SITE_CONFIG.bot.prefix}</code> unless your server has a custom setup.
            </p>
          </div>

          <div className="docs-timeline">
            {quickStart.map((item) => (
              <article key={item.step} className="docs-step-card">
                <span className="docs-step-number">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>

                {item.code && <code>{item.code}</code>}

                {item.action && (
                  <a href={item.action.href} target="_blank" rel="noreferrer" className="docs-cta-btn">
                    {item.action.label}
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="docs-grid-block">
          <article className="docs-panel-card">
            <h2>Server Configuration</h2>
            <p>
              Admins can customize prefix behavior, command scope, and moderation-friendly playback controls.
            </p>

            <div className="docs-inline-code">
              Default prefix
              <code>{SITE_CONFIG.bot.prefix}</code>
            </div>

            <p className="docs-muted-text">Use admin commands to set channel rules and command permissions by role.</p>
          </article>

          <article className="docs-panel-card">
            <h2>Required Permissions</h2>
            <p>Make sure these permissions are enabled for smooth playback and command responses.</p>
            <ul className="docs-permission-list">
              {permissionList.map((permission) => (
                <li key={permission}>{permission}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="docs-grid-block docs-feature-grid">
          <article className="docs-panel-card">
            <h3>Playlist Workflow</h3>
            <p>Build playlists, save queue states, and share sets across your community channels.</p>
            <code>!playlist create chill-vibes</code>
          </article>

          <article className="docs-panel-card">
            <h3>Queue Management</h3>
            <p>Reorder, remove, and inspect tracks while the session is running without interrupting music.</p>
            <code>!queue | !move 3 1 | !remove 2</code>
          </article>

          <article className="docs-panel-card">
            <h3>AI Recommendations</h3>
            <p>Discover matching tracks based on current listening and server activity patterns.</p>
            <code>!recommend</code>
          </article>
        </section>

        <section className="docs-grid-block">
          <article className="docs-panel-card docs-alert-warning">
            <h3>Bot not playing audio?</h3>
            <p>
              Confirm both you and the bot are in the same voice channel and verify the bot can speak in that channel.
            </p>
          </article>

          <article className="docs-panel-card docs-alert-info">
            <h3>Command not responding?</h3>
            <p>
              Some commands are role-restricted. Ask your server admin to review channel overrides and permission
              hierarchy.
            </p>
          </article>
        </section>

        <section className="docs-support-card">
          <h2>Need More Help?</h2>
          <p>Join support or check FAQs for troubleshooting examples and setup guides.</p>

          <div className="docs-support-actions">
            <a href={SITE_CONFIG.links.discord} target="_blank" rel="noreferrer" className="docs-cta-btn">
              Join Support Server
            </a>
            <a href="/faq" className="docs-cta-btn docs-cta-outline">
              View FAQ
            </a>
          </div>
        </section>
      </section>
    </div>
  );
}

