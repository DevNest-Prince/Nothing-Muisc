import { generateMetadata } from '@/config/metadata';

export const metadata = generateMetadata({
  title: 'Contact',
  description: 'Contact the Nothing team for support, partnership requests, bug reports, and community help.',
  path: '/contact',
});

export default function ContactLayout({ children }) {
  return children;
}
