import HeroSection from '@/components/HeroSection';
import FeatureGrid from '@/components/FeatureGrid';
import SectionHeader from '@/components/SectionHeader';
import { SITE_CONFIG } from '@/config/site';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="section container-main">
        <SectionHeader
          badge="🎯 Key Features"
          title="Everything You Need"
          subtitle="Nothing bot packs powerful features to enhance your Discord server's music experience"
        />
        <FeatureGrid />
      </section>

      {/* CTA Section */}
      <section className="section section-alt">
        <div className="container-main">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-6">Ready to Transform Your Server?</h2>
            <p className="text-lg text-slate-300 mb-8">
              Join thousands of Discord servers already using Nothing for their music needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={SITE_CONFIG.bot.inviteUrl} target="_blank" className="btn btn-primary text-lg px-8 py-4">
                Add Nothing Now
              </Link>
              <Link href="/commands" className="btn btn-outline text-lg px-8 py-4">
                View Commands
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="section container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Commands', value: '50+' },
            { label: 'Platforms', value: '10+' },
            { label: 'Languages', value: '20+' },
            { label: 'Uptime SLA', value: '99.9%' },
          ].map((stat, idx) => (
            <div key={idx} className="card text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <p className="text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}