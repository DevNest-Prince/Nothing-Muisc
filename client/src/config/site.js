// Site configuration - centralized constants
export const SITE_CONFIG = {
  name: 'Nothing',
  title: 'Nothing - Discord Music Bot',
  description: 'Experience the ultimate Discord music bot with Crystal clear audio, AI recommendations, and advanced playlist management.',
  tagline: 'The Perfect Discord Music Companion',
  version: '1.0.0',
  
  // URLs
  links: {
    github: 'https://github.com/yourusername/nothing-bot',
    discord: 'https://discord.gg/BUgMbcGXGP',
    support: 'https://support.nothing-bot.com',
    docs: '/docs',
    api: 'https://api.nothing-bot.com',
    hostingPartner: 'https://glacierhosting.in/',
  },
  
  // Bot settings
  bot: {
    prefix: '!',
    inviteUrl: 'https://discord.com/oauth2/authorize?client_id=1234592539324059709&permissions=414530792793&integration_type=0&scope=bot+applications.commands',
  },
  
  // Navigation
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/features' },
    { label: 'Commands', href: '/commands' },
    { label: 'Bots', href: '/bots' },
    { label: 'Docs', href: '/docs' },
    { label: 'FAQ', href: '/faq' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
};

// Features data
export const FEATURES = [
  {
    id: 1,
    title: 'Crystal Clear Audio',
    description: 'High-quality 320kbps audio streaming from multiple sources including YouTube, Spotify, and more.',
    icon: '',
  },
  {
    id: 2,
    title: 'Smart Playlist Management',
    description: 'Create, share, and collaborate on playlists with your server members in real-time.',
    icon: '',
  },
  {
    id: 3,
    title: 'AI Recommendations',
    description: 'Get personalized music recommendations based on your listening habits and preferences.',
    icon: '',
  },
  {
    id: 4,
    title: 'Advanced Search',
    description: 'Powerful search functionality across multiple music providers and services.',
    icon: '',
  },
  {
    id: 5,
    title: 'Queue Management',
    description: 'Full control over your music queue with skip, loop, shuffle, and more.',
    icon: '',
  },
  {
    id: 6,
    title: 'Lyrics Display',
    description: 'View real-time lyrics for the currently playing track directly in Discord.',
    icon: '',
  },
];

// Commands data
export const COMMANDS = [
  {
    name: 'play',
    aliases: ['p'],
    category: 'Music',
    description: 'Play a song or playlist',
    usage: '!play <song name or URL>',
  },
  {
    name: 'skip',
    aliases: ['s', 'next'],
    category: 'Music',
    description: 'Skip the current song',
    usage: '!skip',
  },
  {
    name: 'stop',
    aliases: ['leave'],
    category: 'Music',
    description: 'Stop playing and disconnect from voice channel',
    usage: '!stop',
  },
  {
    name: 'pause',
    aliases: ['hold'],
    category: 'Music',
    description: 'Pause the current song',
    usage: '!pause',
  },
  {
    name: 'resume',
    aliases: ['r'],
    category: 'Music',
    description: 'Resume the paused song',
    usage: '!resume',
  },
  {
    name: 'queue',
    aliases: ['q'],
    category: 'Music',
    description: 'Show the music queue',
    usage: '!queue [page]',
  },
  {
    name: 'nowplaying',
    aliases: ['np', 'current'],
    category: 'Music',
    description: 'Show the currently playing song',
    usage: '!nowplaying',
  },
  {
    name: 'playlist',
    aliases: ['pl'],
    category: 'Playlist',
    description: 'Create or manage playlists',
    usage: '!playlist create <name>',
  },
  {
    name: 'volume',
    aliases: ['vol'],
    category: 'Settings',
    description: 'Set the bot volume (0-100%)',
    usage: '!volume <0-100>',
  },
  {
    name: 'lyrics',
    aliases: ['ly'],
    category: 'Information',
    description: 'Get lyrics for the current song',
    usage: '!lyrics',
  },
];

// Discord Bots data
export const DISCORD_BOTS = [
  {
    id: 1,
    name: 'Nothing Music',
    type: 'Free',
    description: 'Free music bot with crystal clear audio, smart playlist management, and extensive music source support. Perfect for servers looking for a reliable music experience.',
    features: ['Music Streaming', 'Playlist Management', 'High-quality Audio', 'Multiple Sources'],
    inviteUrl: 'https://discord.com/oauth2/authorize?client_id=1234592539324059709&permissions=414530792793&integration_type=0&scope=bot+applications.commands',
  },
  {
    id: 2,
    name: 'Nothing Canary',
    type: 'Free + Premium',
    description: 'Hybrid music bot offering both free and premium features. Canary is our testing ground for new features and improvements before they go live.',
    features: ['Music Streaming', 'Beta Features', 'Premium Options', 'Early Access'],
    inviteUrl: 'https://discord.com/oauth2/authorize?client_id=1131938711639183363&permissions=414530792793&integration_type=0&scope=bot+applications.commands',
  },
  {
    id: 3,
    name: 'Nothing Prime',
    type: 'Premium',
    description: 'Premium music bot with advanced features, priority support, and exclusive functionality. Get the ultimate music experience with enhanced capabilities.',
    features: ['Premium Audio', 'Priority Support', 'Advanced Playlists', 'No Limits'],
    inviteUrl: 'https://discord.com/oauth2/authorize?client_id=1254639840213991537&permissions=414530792793&integration_type=0&scope=bot+applications.commands',
  },
  {
    id: 4,
    name: 'Flame',
    type: 'All-in-One',
    description: 'Ultimate all-in-one security and moderation bot. Features the fastest antinuke protection, comprehensive security measures, and powerful moderation tools for your server.',
    features: ['Antinuke Protection', 'Security Suite', 'Moderation Tools', 'Fast Responses'],
    inviteUrl: 'https://discord.com/oauth2/authorize?client_id=1259218811131793479&permissions=414530792793&integration_type=0&scope=bot+applications.commands',
  },
];

// FAQ data
export const FAQ_ITEMS = [
  {
    id: 1,
    question: 'How do I invite Nothing to my Discord server?',
    answer: 'You can invite Nothing using our official invite link. Just click the "Add to Discord" button on the home page, and follow the authorization steps.',
  },
  {
    id: 2,
    question: 'What music sources does Nothing support?',
    answer: 'Nothing supports YouTube, Spotify, SoundCloud, Apple Music, and many other platforms. You can search and play music from all these sources.',
  },
  {
    id: 3,
    question: 'Can I create custom playlists?',
    answer: 'Yes! You can create unlimited playlists, share them with server members, and collaborate in real-time.',
  },
  {
    id: 4,
    question: 'Is Nothing free to use?',
    answer: 'Yes, Nothing is completely free! All features are available to everyone. We also have a premium tier with additional features.',
  },
  {
    id: 5,
    question: 'How do I report bugs or suggest features?',
    answer: 'You can report bugs or suggest features on our GitHub repository or contact us through our support server.',
  },
  {
    id: 6,
    question: 'Can I customize Nothing for my server?',
    answer: 'Yes! You can customize volume, prefix, language, and many other settings. Use the settings command to configure.',
  },
];
