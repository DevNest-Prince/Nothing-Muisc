import Link from 'next/link';
import { SITE_CONFIG } from '@/config/site';

export default function HeroSection() {
  return (
    <section className="section gradient-bg relative overflow-hidden">
      {/* Decorative orbs removed for cleaner neutral look */}

      <div className="container-main relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          {/* Badge */}
          <div className="mb-6 inline-flex">
            <span className="badge badge-primary"> Next-Gen Music Bot</span>
          </div>

          {/* Main Headline */}
          <h1 className="mb-6">
            <span className="gradient-text">Experience Music</span> Like Never Before
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-zinc-300 mb-8">
            {SITE_CONFIG.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href={SITE_CONFIG.bot.inviteUrl} target="_blank" className="btn btn-primary text-lg px-8 py-4">
               Add to Discord
            </Link>
            <Link href="/features" className="btn btn-outline text-lg px-8 py-4">
              Learn More
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 pt-12 border-t border-zinc-700/80">
            <div>
              <div className="text-2xl md:text-3xl font-bold gradient-text">50K+</div>
              <p className="text-zinc-400 text-sm md:text-base">Servers</p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold gradient-text">5M+</div>
              <p className="text-zinc-400 text-sm md:text-base">Users</p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold gradient-text">99.9%</div>
              <p className="text-zinc-400 text-sm md:text-base">Uptime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

