import { generateMetadata } from '@/config/metadata';

export const metadata = generateMetadata({
  title: 'Commands',
  description: 'Browse Nothing bot command reference with categories, usage examples, and quick search.',
  path: '/commands',
  noIndex: true,
});

export default function CommandsLayout({ children }) {
  return children;
}
