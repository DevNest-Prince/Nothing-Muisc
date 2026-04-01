import { generateMetadata } from '@/config/metadata';

export const metadata = generateMetadata({
  title: 'Bots',
  description: 'Compare Nothing bot lineup and choose the best Discord bot for music, moderation, and security.',
  path: '/bots',
});

export default function BotsLayout({ children }) {
  return children;
}
