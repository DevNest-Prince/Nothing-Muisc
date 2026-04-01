import { SITE_CONFIG } from './site';

const DEFAULT_KEYWORDS = [
  'Discord music bot',
  'Nothing bot',
  'Discord bot music',
  'Music commands discord',
  'Discord playlist bot',
  '24/7 music bot',
];

function normalizePath(path = '/') {
  if (!path) {
    return '/';
  }

  return path.startsWith('/') ? path : `/${path}`;
}

function toAbsoluteUrl(path = '/') {
  return `${SITE_CONFIG.siteUrl}${normalizePath(path)}`;
}

/**
 * Dynamic metadata generator
 * Can be used in any page's metadata export
 */
export function generateMetadata(overrides = {}) {
  const currentPath = overrides.path || '/';
  const canonicalUrl = overrides.canonical || toAbsoluteUrl(currentPath);
  const pageTitle = overrides.title || SITE_CONFIG.title;

  return {
    metadataBase: new URL(SITE_CONFIG.siteUrl),
    title: pageTitle,
    description: overrides.description || SITE_CONFIG.description,
    keywords: overrides.keywords || DEFAULT_KEYWORDS,
    authors: [{ name: 'Nothing Bot Team' }],
    creator: 'Nothing Bot',
    publisher: 'Nothing Bot',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: overrides.url || canonicalUrl,
      siteName: SITE_CONFIG.name,
      title: overrides.ogTitle || pageTitle,
      description: overrides.ogDescription || SITE_CONFIG.description,
      images: overrides.images || [
        {
          url: toAbsoluteUrl('/nothing-music-banner.png'),
          width: 1200,
          height: 630,
          alt: `${SITE_CONFIG.name} Discord bot preview`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: overrides.twitterTitle || pageTitle,
      description: overrides.twitterDescription || SITE_CONFIG.description,
      images: overrides.twitterImages || [toAbsoluteUrl('/nothing-music-banner.png')],
      creator: '@nothinbotdev',
    },
    robots: {
      index: !overrides.noIndex,
      follow: !overrides.noIndex,
      googleBot: {
        index: !overrides.noIndex,
        follow: !overrides.noIndex,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

/**
 * URL helper
 */
export function getURL(path = '') {
  return `${SITE_CONFIG.siteUrl}${normalizePath(path)}`;
}
