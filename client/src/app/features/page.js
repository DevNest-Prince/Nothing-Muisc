import FeatureGrid from '@/components/FeatureGrid';
import SectionHeader from '@/components/SectionHeader';
import Button from '@/components/Button';
import { SITE_CONFIG } from '@/config/site';

export const metadata = {
  title: 'Features - ' + SITE_CONFIG.name,
  description: 'Discover all the amazing features of Nothing Discord music bot',
};

export default function FeaturesPage() {
  return (
    <>
      <section className="section gradient-bg container-main">
        <SectionHeader
          title="Packed with Features"
          subtitle="Everything you need for the ultimate music experience on Discord"
        />
      </section>

      <section className="section container-main">
        <FeatureGrid />
      </section>

      {/* Advanced Features */}
      <section className="section section-alt container-main">
        <SectionHeader
          badge="⚡ Advanced Features"
          title="Go Even Further"
          subtitle="Additional powerful capabilities to customize your music experience"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: '🎨 Customization',
              description: 'Customize bot prefix, language, notification style, and more to match your server preferences.',
            },
            {
              title: '🔐 Permission Management',
              description: 'Fine-grained control over who can use specific commands with Discord role integration.',
            },
            {
              title: '📊 Statistics & Analytics',
              description: 'Track your music listening stats, most played songs, and server usage metrics.',
            },
            {
              title: '🔗 Integration Support',
              description: 'Seamlessly integrate with other Discord bots and services for extended functionality.',
            },
            {
              title: '🌍 Multi-Language',
              description: 'Support for 20+ languages to serve your global server community.',
            },
            {
              title: '⚙️ Auto-Reconnect',
              description: 'Automatic reconnection and queue resume if the bot disconnects unexpectedly.',
            },
          ].map((feature, idx) => (
            <div key={idx} className="card">
              <h3 className="mb-3">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section container-main text-center">
        <h2 className="mb-6">Get Started Today</h2>
        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
          Experience all these features by adding Nothing to your Discord server now.
        </p>
        <Button href={SITE_CONFIG.bot.inviteUrl} variant="primary" size="lg">
          🚀 Add to Discord
        </Button>
      </section>
    </>
  );
}
