import { SITE_CONFIG } from './site';

/**
 * Dynamic metadata generator
 * Can be used in any page's metadata export
 */
export function generateMetadata(overrides = {}) {
  return {
    title: overrides.title || SITE_CONFIG.title,
    description: overrides.description || SITE_CONFIG.description,
    keywords: overrides.keywords || [
      'Discord',
      'Music Bot',
      'Nothing Bot',
      'Spotify',
      'YouTube Music',
      'Queue Manager',
    ],
    authors: [{ name: 'Nothing Bot Team' }],
    creator: 'Nothing Bot',
    publisher: 'Nothing Bot',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: overrides.url || 'https://nothing-bot.com',
      siteName: SITE_CONFIG.name,
      title: overrides.ogTitle || SITE_CONFIG.title,
      description: overrides.ogDescription || SITE_CONFIG.description,
      images: overrides.images || [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: SITE_CONFIG.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: overrides.twitterTitle || SITE_CONFIG.title,
      description: overrides.twitterDescription || SITE_CONFIG.description,
      images: overrides.twitterImages || ['/twitter-image.png'],
      creator: '@nothinbotdev',
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: overrides.canonical || 'https://nothing-bot.com',
    },
  };
}

/**
 * URL helper
 */
export function getURL(path = '') {
  return `https://nothing-bot.com${path}`;
}
