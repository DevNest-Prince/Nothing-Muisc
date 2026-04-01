import { SITE_CONFIG } from '@/config/site';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  alternates: {
    canonical: '/',
  },
  keywords: [
    'Discord music bot',
    'Nothing bot',
    'Discord playlist bot',
    'Music bot for Discord server',
  ],
  icons: {
    icon: '/mintone.jpg',
    shortcut: '/mintone.jpg',
    apple: '/mintone.jpg',
  },
  openGraph: {
    type: 'website',
    url: SITE_CONFIG.siteUrl,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.siteUrl}/nothing-share-banner-v2.png?v=20260401`,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} music bot banner`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [`${SITE_CONFIG.siteUrl}/nothing-share-banner-v2.png?v=20260401`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.siteUrl,
      logo: `${SITE_CONFIG.siteUrl}/mintone.jpg`,
      sameAs: [SITE_CONFIG.links.github, SITE_CONFIG.links.discord],
    },
    {
      '@type': 'WebSite',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.siteUrl,
      description: SITE_CONFIG.description,
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
