import SectionHeader from '@/components/SectionHeader';
import Button from '@/components/Button';
import { SITE_CONFIG } from '@/config/site';

export const metadata = {
  title: 'About - ' + SITE_CONFIG.name,
  description: 'About Nothing Discord music bot - Our mission and story',
};

export default function AboutPage() {
  return (
    <>
      <section className="section gradient-bg container-main">
        <SectionHeader title="About Nothing" subtitle="Our mission to enhance Discord music experience" />
      </section>

      <section className="section container-main max-w-4xl mx-auto">
        {/* Mission */}
        <div className="card mb-8">
          <h2 className="mb-4">Our Mission</h2>
          <p className="text-slate-400 leading-relaxed">
            Nothing was created with a simple mission: to provide Discord communities with the most intuitive,
            powerful, and reliable music bot available. We believe that music is essential to community building, and
            every Discord server deserves access to world-class music features without complexity or limitations.
          </p>
        </div>

        {/* Story */}
        <div className="card mb-8">
          <h2 className="mb-4">Our Story</h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            Nothing was born from frustration. Our founder, a Discord server administrator, struggled to find a music
            bot that was both powerful and easy to use. Existing solutions were either overly complicated or lacked
            essential features. So in 2023, we decided to build something better.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Today, Nothing serves over 1 million users across 50,000+ Discord servers, processing millions of songs
            per day. We've stayed true to our original vision: creating a bot that just works, with intuitive commands
            and rock-solid reliability.
          </p>
        </div>

        {/* Values */}
        <div className="mb-8">
          <h2 className="mb-6">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: '🎯 Simplicity',
                description:
                  'We believe great software should be simple. Nothing is designed to be intuitive and easy to use.',
              },
              {
                title: '🤝 Community',
                description:
                  'Our users drive our development. We listen to feedback and continuously improve based on community needs.',
              },
              {
                title: '⚡ Reliability',
                description: 'We maintain 99.9% uptime and constantly work to ensure Nothing is always there for you.',
              },
            ].map((value, idx) => (
              <div key={idx} className="card">
                <h3 className="mb-3">{value.title}</h3>
                <p className="text-slate-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="card mb-8">
          <h2 className="mb-6">Our Team</h2>
          <p className="text-slate-400 mb-6">
            Nothing is built by a passionate team of developers, designers, and music enthusiasts who believe in the
            power of great software. We're based around the world and connected by our shared mission.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: 'Developer & Founder', title: 'Full Stack Developer' },
              { name: 'Community Manager', title: 'Community & Support' },
              { name: 'Infrastructure', title: 'DevOps & Reliability' },
              { name: 'Music Engineer', title: 'Audio & Streaming' },
            ].map((member, idx) => (
              <div key={idx} className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                <p className="font-bold text-purple-400">{member.name}</p>
                <p className="text-sm text-slate-400">{member.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* By the Numbers */}
        <div className="mb-8">
          <h2 className="mb-6">By The Numbers</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { label: 'Active Users', value: '1M+' },
              { label: 'Discord Servers', value: '50K+' },
              { label: 'Songs Played Daily', value: '10M+' },
              { label: 'Uptime SLA', value: '99.9%' },
            ].map((stat, idx) => (
              <div key={idx} className="card text-center">
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="card mb-8">
          <h2 className="mb-4">Technology</h2>
          <p className="text-slate-400 mb-4">Nothing is built on modern, scalable technology:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Discord.js for bot framework',
              'Node.js for backend',
              'PostgreSQL for data storage',
              'Redis for caching',
              'Docker for containerization',
              'Kubernetes for orchestration',
              'Next.js for web interface',
              'React for UI components',
            ].map((tech, idx) => (
              <div key={idx} className="flex items-center gap-2 text-slate-400">
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="card bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-600/50 text-center">
          <h2 className="mb-4">Join Our Community</h2>
          <p className="text-slate-400 mb-6">
            Be part of something special. Join thousands of successful Discord communities powered by Nothing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={SITE_CONFIG.bot.inviteUrl} target="_blank" variant="primary" size="lg">
              🚀 Add to Discord
            </Button>
            <Button href={SITE_CONFIG.links.discord} target="_blank" variant="outline" size="lg">
              💬 Join Community
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
