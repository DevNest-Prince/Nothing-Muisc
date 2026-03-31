import Button from '@/components/Button';
import { SITE_CONFIG } from '@/config/site';
import {
  FiMusic,
  FiList,
  FiSearch,
  FiSliders,
  FiMic,
  FiClock,
  FiUsers,
  FiZap,
  FiRadio,
  FiCheckCircle,
  FiHeadphones,
  FiShield,
  FiCpu,
  FiArrowRight,
} from 'react-icons/fi';

export const metadata = {
  title: 'Features - ' + SITE_CONFIG.name,
  description: 'Discover all the amazing features of Nothing Discord music bot',
};

const TOP_BADGES = [
  { icon: FiHeadphones, label: 'Studio-grade Playback' },
  { icon: FiShield, label: 'Reliable and Safe Sessions' },
  { icon: FiCpu, label: 'Fast Command Response' },
];

const FEATURE_STATS = [
  { label: 'Daily Listeners', value: '5M+' },
  { label: 'Server Sessions', value: '50K+' },
  { label: 'Playback Uptime', value: '99.9%' },
];

const MUSIC_FEATURES = [
  {
    icon: FiMusic,
    title: 'High Quality Audio',
    summary: 'Crisp playback built for Discord voice channels with stable performance and cleaner output.',
    points: [
      '320kbps streaming support',
      'Low-latency voice delivery',
      'Auto volume normalization',
      'Lag-resistant playback engine',
    ],
  },
  {
    icon: FiList,
    title: 'Smart Queue System',
    summary: 'Control what plays next with powerful queue and party-friendly controls.',
    points: [
      'Queue, skip, and jump controls',
      'Loop track or full queue',
      'Shuffle with queue safety',
      'Vote-skip for public channels',
    ],
  },
  {
    icon: FiRadio,
    title: 'Playlist Management',
    summary: 'Save your best mixes and reuse them in seconds across servers.',
    points: [
      'Create unlimited playlists',
      'Import from external links',
      'Shared server playlist mode',
      'One-command playlist start',
    ],
  },
  {
    icon: FiSearch,
    title: 'Music Search',
    summary: 'Find tracks quickly from multiple sources without leaving Discord.',
    points: [
      'Keyword and URL search',
      'YouTube and Spotify support',
      'Top result auto-pick mode',
      'Fast fallback source matching',
    ],
  },
  {
    icon: FiSliders,
    title: 'Audio Filters',
    summary: 'Customize the listening vibe with real-time sound effects.',
    points: [
      'Bass boost and nightcore',
      '8D and reverb presets',
      'Filter stack presets',
      'One-tap filter reset',
    ],
  },
  {
    icon: FiClock,
    title: '24/7 Music Mode',
    summary: 'Keep your station online all day with stable long-session playback.',
    points: [
      'Non-stop radio mode',
      'Auto reconnect on drop',
      'Queue resume after restart',
      'Idle protection options',
    ],
  },
  {
    icon: FiMic,
    title: 'Lyrics and Karaoke',
    summary: 'Show synchronized lyrics so members can sing along in real time.',
    points: [
      'Instant lyrics lookup',
      'Clean embed lyric format',
      'Fast fallback lyric source',
      'Language-friendly support',
    ],
  },
  {
    icon: FiUsers,
    title: 'Server Tools',
    summary: 'Music-focused utility commands for smoother server sessions.',
    points: [
      'Now playing rich embed',
      'Live song progress display',
      'Lyrics lookup command',
      'Session stats and history',
    ],
  },
  {
    icon: FiZap,
    title: 'Fast Performance',
    summary: 'Built for speed so commands respond quickly even in busy servers.',
    points: [
      'Low command latency',
      'Optimized memory usage',
      'Regional voice node routing',
      'Reliable peak-time scaling',
    ],
  },
];

export default function FeaturesPage() {
  return (
    <main className="features-page">
      <section className="container-main features-hero">
        <div className="features-hero-panel">
          <span className="features-kicker">Powerful Music Capabilities</span>
          <h1 className="features-title">Everything Your Discord Server Needs For Premium Music</h1>
          <p className="features-subtitle">
            Nothing gives your community a complete music stack: high-quality playback, smart controls,
            seamless playlists, and reliable performance at scale.
          </p>

          <div className="features-badge-row">
            {TOP_BADGES.map((badge) => {
              const Icon = badge.icon;
              return (
                <div key={badge.label} className="features-badge-chip">
                  <span className="features-badge-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <span>{badge.label}</span>
                </div>
              );
            })}
          </div>

          <div className="features-stats-grid">
            {FEATURE_STATS.map((stat) => (
              <article key={stat.label} className="features-stat-card">
                <p className="features-stat-value">{stat.value}</p>
                <p className="features-stat-label">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-main features-grid-wrap">
        <div className="features-grid">
          {MUSIC_FEATURES.map((feature) => {
            const Icon = feature.icon;

            return (
              <article key={feature.title} className="features-card">
                <div className="features-card-icon" aria-hidden="true">
                  <Icon />
                </div>

                <h2 className="features-card-title">{feature.title}</h2>
                <p className="features-card-summary">{feature.summary}</p>

                <ul className="features-points-list">
                  {feature.points.map((point) => (
                    <li key={point}>
                      <FiCheckCircle className="features-point-check" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container-main features-cta-wrap">
        <div className="features-cta-panel">
          <h2 className="features-cta-title">Ready To Upgrade Your Server Music Experience?</h2>
          <p className="features-cta-text">
            Launch Nothing in your server and instantly unlock smooth playback, queue tools,
            playlists, filters, and smart music controls.
          </p>
          <Button href="/bots" variant="primary" size="lg" className="features-cta-btn">
            Invite Nothing
            <FiArrowRight />
          </Button>
        </div>
      </section>
    </main>
  );
}

