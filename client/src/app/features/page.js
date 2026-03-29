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
} from 'react-icons/fi';

export const metadata = {
  title: 'Features - ' + SITE_CONFIG.name,
  description: 'Discover all the amazing features of Nothing Discord music bot',
};

const MUSIC_FEATURES = [
  {
    icon: FiMusic,
    title: 'HIGH QUALITY AUDIO',
    summary: 'Crisp playback built for Discord voice channels with stable performance.',
    points: [
      '320kbps streaming support',
      'Low-latency voice delivery',
      'Auto volume normalization',
      'Lag-resistant playback engine',
    ],
  },
  {
    icon: FiList,
    title: 'SMART QUEUE SYSTEM',
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
    title: 'PLAYLIST MANAGEMENT',
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
    title: 'MUSIC SEARCH',
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
    title: 'AUDIO FILTERS',
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
    title: '24/7 MUSIC MODE',
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
    title: 'LYRICS AND KARAOKE',
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
    title: 'SERVER TOOLS',
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
    title: 'FAST PERFORMANCE',
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
    <>
      <section className="section section-alt container-main mt-10 md:mt-14 pt-32 md:pt-36">
        <div className="text-center mb-12">
          <p className="text-orange-400 uppercase tracking-[0.2em] text-xs md:text-sm font-semibold mb-4">
            Powerful Music Capabilities
          </p>
          <h1 className="mb-4 leading-tight">Advanced Music Features For Your Server</h1>
          <p className="text-zinc-400 max-w-3xl mx-auto text-base md:text-lg">
            Nothing gives your Discord community everything needed to play, control, and enjoy music without friction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {MUSIC_FEATURES.map((feature) => {
            const Icon = feature.icon;

            return (
            <div key={feature.title} className="card">
              <div className="w-9 h-9 rounded-md border border-orange-400/40 bg-orange-500/10 flex items-center justify-center text-orange-300 text-base mb-4">
                <Icon />
              </div>

              <h3 className="mb-3 text-xl md:text-2xl">{feature.title}</h3>
              <p className="text-zinc-400 mb-4">{feature.summary}</p>

              <ul className="space-y-2">
                {feature.points.map((point) => (
                  <li key={point} className="text-zinc-300 text-sm flex items-start gap-2">
                    <FiCheckCircle className="text-orange-400 mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="section container-main text-center">
        <h2 className="mb-6">Ready To Power Your Music Server?</h2>
        <p className="text-lg text-zinc-300 mb-8 max-w-2xl mx-auto">
          Add Nothing now and unlock a clean, fast, and premium Discord music experience for your community.
        </p>
        <Button href={SITE_CONFIG.bot.inviteUrl} variant="primary" size="lg">
          Add to Discord
        </Button>
      </section>
    </>
  );
}

