'use client';

import { SITE_CONFIG } from '@/config/site';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import {
  FiActivity,
  FiArrowRight,
  FiCheckCircle,
  FiHeadphones,
  FiList,
  FiMusic,
  FiServer,
  FiShield,
  FiSliders,
  FiUsers,
  FiZap,
} from 'react-icons/fi';
import { FaRecordVinyl } from 'react-icons/fa';
import { GiGuitar, GiViolin } from 'react-icons/gi';

const HERO_STATS = [
  { value: '50 Lakh+', label: 'Total Users' },
  { value: '200+', label: 'Active Servers' },
  { value: '99.4%', label: 'Uptime' },
  { value: '85ms', label: 'Avg Ping' },
];

const HERO_HIGHLIGHTS = [
  {
    title: 'Reliable Sessions',
    text: 'Auto reconnect and stable playback for long listening rooms.',
    icon: FiShield,
  },
  {
    title: 'Fast Controls',
    text: 'Skip, queue, filters, and commands respond without lag.',
    icon: FiZap,
  },
  {
    title: 'Cleaner Audio',
    text: 'Balanced output that stays clear in active voice channels.',
    icon: FiHeadphones,
  },
];

const COMMAND_PREVIEW = [
  { cmd: '!play', desc: 'Play a song or playlist', icon: FiMusic, by: '@nightcorex', time: 'just now' },
  { cmd: '!queue', desc: 'View and organize current queue', icon: FiList, by: '@aryan', time: '12s ago' },
  { cmd: '!lyrics', desc: 'Show lyrics for active track', icon: FiCheckCircle, by: '@riya', time: '26s ago' },
  { cmd: '!filter', desc: 'Enable bass boost/nightcore', icon: FiSliders, by: '@dev', time: '41s ago' },
];

const LIVE_PLAYLIST = [
  {
    title: 'Kesariya - Arijit Singh',
    queuedBy: '@nightcorex',
    durationSec: 288,
    listeners: 11,
    audience: ['NX', 'AR', 'RI', '+8'],
  },
  {
    title: 'Heeriye - Jasleen Royal',
    queuedBy: '@aryan',
    durationSec: 234,
    listeners: 9,
    audience: ['AR', 'KV', 'RI', '+7'],
  },
  {
    title: 'Satranga - Arijit Singh',
    queuedBy: '@riya',
    durationSec: 265,
    listeners: 10,
    audience: ['RI', 'NX', 'DN', '+8'],
  },
  {
    title: 'Apna Bana Le - Arijit Singh',
    queuedBy: '@dev',
    durationSec: 276,
    listeners: 12,
    audience: ['DV', 'AR', 'NX', '+9'],
  },
];

const IMPACT_STATS = [
  { value: '50 Lakh+', label: 'Total Users', icon: FiUsers },
  { value: '200+', label: 'Active Servers', icon: FiServer },
  { value: '99.4%', label: 'Uptime', icon: FiCheckCircle },
  { value: '85ms', label: 'Avg Ping', icon: FiActivity },
];

const WHY_CHOOSE_US = [
  {
    title: 'Consistent Stability',
    text: 'Built for long sessions with reconnect handling so music does not drop in active servers.',
    icon: FiShield,
  },
  {
    title: 'Crisp Audio Output',
    text: 'Clean playback pipeline with balanced levels that feel clear even in busy voice channels.',
    icon: FiHeadphones,
  },
  {
    title: 'Fast Command Response',
    text: 'Lightweight processing keeps queue, skip, and control commands snappy and predictable.',
    icon: FiZap,
  },
];

const FLOATING_MUSIC_ICONS = [
  { icon: FiMusic, className: 'home-float-a' },
  { icon: FiHeadphones, className: 'home-float-b' },
  { icon: FiSliders, className: 'home-float-c' },
  { icon: FiZap, className: 'home-float-d' },
  { icon: FiMusic, className: 'home-float-e' },
  { icon: GiGuitar, className: 'home-float-f' },
  { icon: GiViolin, className: 'home-float-g' },
  { icon: FaRecordVinyl, className: 'home-float-h' },
];

const HERO_COVER_CARDS = [
  { title: 'Top Indian Mix', subtitle: 'Live rotations', image: '/mintone.jpg' },
  { title: 'Chill Queue', subtitle: 'Community picks', image: '/mintone.jpg' },
];

function formatTime(totalSeconds) {
  const safeSeconds = Math.max(0, totalSeconds);
  const minutes = Math.floor(safeSeconds / 60);
  const seconds = safeSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function getRandomPlaybackStart() {
  const randomTrackIndex = Math.floor(Math.random() * LIVE_PLAYLIST.length);
  const selectedTrack = LIVE_PLAYLIST[randomTrackIndex];
  const startMin = Math.floor(selectedTrack.durationSec * 0.12);
  const startMax = Math.max(startMin + 1, selectedTrack.durationSec - 18);
  const randomStart = Math.floor(Math.random() * (startMax - startMin)) + startMin;

  return {
    trackIndex: randomTrackIndex,
    elapsedSec: randomStart,
  };
}

const INITIAL_PLAYBACK = {
  trackIndex: 0,
  elapsedSec: 96,
};

export default function Home() {
  const [{ trackIndex, elapsedSec }, setPlayback] = useState(INITIAL_PLAYBACK);

  const currentTrack = LIVE_PLAYLIST[trackIndex];

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      setPlayback(getRandomPlaybackStart());
    });

    return () => cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlayback((prev) => {
        const activeTrack = LIVE_PLAYLIST[prev.trackIndex];

        if (prev.elapsedSec >= activeTrack.durationSec - 1) {
          return {
            trackIndex: (prev.trackIndex + 1) % LIVE_PLAYLIST.length,
            elapsedSec: 0,
          };
        }

        return {
          ...prev,
          elapsedSec: prev.elapsedSec + 1,
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const queueTracks = useMemo(() => {
    return Array.from({ length: 3 }, (_, idx) => {
      return LIVE_PLAYLIST[(trackIndex + idx + 1) % LIVE_PLAYLIST.length];
    });
  }, [trackIndex]);

  const progressPercent = (elapsedSec / currentTrack.durationSec) * 100;
  const remainingSec = currentTrack.durationSec - elapsedSec;

  return (
    <main className="home-page">
      <section className="container-main home-hero">
        <div className="home-floating-icons" aria-hidden="true">
          {FLOATING_MUSIC_ICONS.map((item, index) => {
            const Icon = item.icon;

            return (
              <span key={`${item.className}-${index}`} className={`home-float-icon ${item.className}`}>
                <Icon />
              </span>
            );
          })}
        </div>

        <div className="home-hero-panel">
          <div className="home-hero-content">
            <span className="home-kicker">Next-Gen Discord Music Bot</span>
            <h1 className="home-title">
              Your Server, But
              <span className="gradient-text"> Cinematic With Sound</span>
            </h1>
            <p className="home-subtitle">{SITE_CONFIG.description}</p>

            <div className="home-hero-actions">
              <Link href={SITE_CONFIG.bot.inviteUrl} target="_blank" className="home-primary-btn">
                Invite Bot
                <FiArrowRight />
              </Link>
              <Link
                href={SITE_CONFIG.links.discord}
                target="_blank"
                rel="noreferrer"
                className="home-secondary-btn home-discord-btn"
              >
                <FiUsers />
                Join Discord Community
              </Link>
              <Link href="/commands" className="home-secondary-btn home-commands-btn">
                <FiList />
                Explore Commands
                <FiArrowRight />
              </Link>
            </div>

            <div className="home-hero-stats">
              {HERO_STATS.map((stat) => (
                <article key={stat.label} className="home-stat-card">
                  <p className="home-stat-value">{stat.value}</p>
                  <p className="home-stat-label">{stat.label}</p>
                </article>
              ))}
            </div>

            <div className="home-hero-extra">
              <p className="home-hero-extra-title">Why servers keep Nothing active</p>
              <div className="home-hero-covers">
                {HERO_COVER_CARDS.map((item) => (
                  <article key={item.title} className="home-hero-cover-card">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={56}
                      height={56}
                      className="home-hero-cover-image"
                      style={{ width: '56px', height: '56px' }}
                    />
                    <div>
                      <p className="home-hero-cover-title">{item.title}</p>
                      <p className="home-hero-cover-subtitle">{item.subtitle}</p>
                    </div>
                  </article>
                ))}
              </div>
              <div className="home-hero-highlight-grid">
                {HERO_HIGHLIGHTS.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article key={item.title} className="home-hero-highlight-card">
                      <span className="home-hero-highlight-icon" aria-hidden="true"><Icon /></span>
                      <div>
                        <p className="home-hero-highlight-title">{item.title}</p>
                        <p className="home-hero-highlight-text">{item.text}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
              <p className="home-hero-trust-badge">24/7 Running • Auto Recovery • No setup friction</p>
            </div>
          </div>

          <div className="home-hero-preview" aria-hidden="true">
            <div className="home-preview-topbar">
              <span>LIVE SESSION</span>
              <span>#music-lounge</span>
            </div>
            <div className="home-preview-track">
              <p className="home-preview-now">Now Playing</p>
              <div className="home-preview-track-head">
                <Image
                  src="/mintone.jpg"
                  alt="Current track cover"
                  width={54}
                  height={54}
                  className="home-preview-cover"
                  style={{ width: '54px', height: '54px' }}
                />
                <div>
                  <h3>{currentTrack.title}</h3>
                  <p>Queued by {currentTrack.queuedBy}</p>
                </div>
              </div>
              <div className="home-preview-meta">
                <span>{formatTime(elapsedSec)} / {formatTime(currentTrack.durationSec)}</span>
                <span>Queue: {queueTracks.length} tracks</span>
                <span>Volume: 72%</span>
              </div>
              <div className="home-preview-visualizer">
                {Array.from({ length: 20 }).map((_, idx) => (
                  <span
                    key={`wave-${idx}`}
                    className="home-visualizer-bar"
                    style={{ '--bar-index': idx }}
                  ></span>
                ))}
              </div>
              <div className="home-preview-audience">
                <div className="home-preview-avatars">
                  {currentTrack.audience.map((member) => (
                    <span key={member} className="home-preview-avatar">{member}</span>
                  ))}
                </div>
                <p>{currentTrack.listeners} listeners in VC</p>
              </div>
            </div>
            <div className="home-preview-progress">
              <span className="home-preview-dot" style={{ left: `${Math.max(2, Math.min(98, progressPercent))}%` }}></span>
              <span className="home-preview-line"></span>
            </div>
            <div className="home-preview-timeline">
              <span>{formatTime(elapsedSec)}</span>
              <span>-{formatTime(remainingSec)}</span>
            </div>
            <div className="home-preview-queue">
              <p className="home-preview-queue-title">Up Next</p>
              <ul>
                {queueTracks.map((track) => (
                  <li key={track.title}>
                    <span>{track.title}</span>
                    <small>{formatTime(track.durationSec)}</small>
                  </li>
                ))}
              </ul>
            </div>
            <div className="home-preview-commands">
              {COMMAND_PREVIEW.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.cmd} className="home-preview-command-row">
                    <span className="home-preview-command-icon"><Icon /></span>
                    <div>
                      <p>{item.cmd}</p>
                      <small>{item.desc} · {item.by} · {item.time}</small>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="home-impact-wrap" aria-label="Nothing impact metrics">
        <div className="container-main home-impact-grid">
          {IMPACT_STATS.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.label} className="home-impact-card">
                <span className="home-impact-icon" aria-hidden="true"><Icon /></span>
                <p className="home-impact-value">{item.value}</p>
                <p className="home-impact-label">{item.label}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container-main home-why-wrap" aria-label="Why choose Nothing">
        <div className="home-section-heading">
          <span className="home-mini-kicker">Why Choose Us</span>
          <h2>Made For Real Discord Communities</h2>
          <p>Reliable sessions, clean audio quality, and responsive controls that feel natural every day.</p>
        </div>

        <div className="home-why-grid">
          {WHY_CHOOSE_US.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="home-why-card">
                <span className="home-why-icon" aria-hidden="true"><Icon /></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container-main home-cta-wrap">
        <div className="home-cta-panel">
          <h2>Ready To Upgrade Your Server Music Experience?</h2>
          <p>
            Join thousands of servers using Nothing for smooth playback, rich controls,
            and a cleaner community music experience.
          </p>
          <div className="home-cta-actions">
            <Link href="/features" className="home-secondary-btn">
              View Full Features
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

