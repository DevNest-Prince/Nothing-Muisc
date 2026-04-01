import { generateMetadata } from '@/config/metadata';
import { SITE_CONFIG } from '@/config/site';

export const metadata = generateMetadata({
  title: 'About Nothing',
  description: 'Learn about Nothing Discord bot, our mission, and how we build reliable music experiences for communities.',
  path: '/about',
});

export default function AboutPage() {
  const values = [
    {
      title: 'Simplicity',
      description: 'Commands stay clear and predictable so every server member can use the bot in seconds.',
    },
    {
      title: 'Community',
      description: 'Product decisions are guided by user feedback, support discussions, and real server workflows.',
    },
    {
      title: 'Reliability',
      description: 'Playback quality and uptime are treated as core features, not optional upgrades.',
    },
  ];

  const stats = [
    { label: 'Active Users', value: '5M+' },
    { label: 'Discord Servers', value: '4500+' },
    { label: 'Songs Daily', value: '10M+' },
    { label: 'Uptime Target', value: '99.9%' },
  ];

  const technologies = [
    'Discord.js bot framework',
    'Node.js backend services',
    'PostgreSQL data storage',
    'Redis cache layer',
    'Docker container platform',
    'Kubernetes orchestration',
    'Next.js web experience',
    'React UI components',
  ];

  return (
    <div className="about-page">
      <section className="about-hero container-main">
        <div className="about-hero-panel animate-fade-in">
          <span className="about-kicker">Who We Are</span>
          <h1>About Nothing</h1>
          <p>
            We build music tools for Discord communities that want smooth playback, clean controls, and stable
            performance every day.
          </p>

          <div className="about-hero-chips">
            <span>Community First</span>
            <span>Music Focused</span>
            <span>Scale Ready</span>
          </div>
        </div>
      </section>

      <section className="container-main about-main">
        <section className="about-grid-block animate-slide-in">
          <article className="about-panel-card">
            <h2>Our Mission</h2>
            <p>
              Nothing exists to make Discord music sessions simple, powerful, and enjoyable for every server size.
              Great audio and intuitive controls should never be difficult to access.
            </p>
          </article>

          <article className="about-panel-card">
            <h2>Our Story</h2>
            <p>
              The project started when server admins could not find one bot that balanced features and usability. We
              built Nothing to close that gap and deliver dependable playback with clear command design.
            </p>
          </article>
        </section>

        <section className="about-section-card">
          <h2>Core Values</h2>
          <div className="about-values-grid">
            {values.map((value) => (
              <article key={value.title} className="about-value-card">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section-card">
          <h2>By the Numbers</h2>
          <div className="about-stats-grid">
            {stats.map((stat) => (
              <article key={stat.label} className="about-stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section-card">
          <h2>Technology Stack</h2>
          <p className="about-muted">Built on scalable tools designed for low latency and stable voice sessions.</p>
          <div className="about-tech-grid">
            {technologies.map((item) => (
              <div key={item} className="about-tech-item">
                <span></span>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="about-community-card">
          <h2>Join Our Community</h2>
          <p>Be part of growing Discord communities that run daily music sessions with Nothing.</p>
          <div className="about-community-actions">
            <a href="/bots" className="about-cta-btn">
              Add to Discord
            </a>
            <a href={SITE_CONFIG.links.discord} target="_blank" rel="noreferrer" className="about-cta-btn about-cta-outline">
              Join Community
            </a>
          </div>
        </section>
      </section>
    </div>
  );
}

